<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="table grid grid-sortable {className}"
	class:round
	class:interactive={_interactive}
	bind:this={element}
	onclick={_onclick}
	onfocuscapture={_onfocus}
	onkeydown={_onkeydown}
	ondblclick={_ondblclick}>
	{#if title}
		<h1 class="grid-title">{title}</h1>
	{/if}
	<table>
		<GridHead {multiselect} {Data} />
		<GridBody {multiselect} {Data}/>
		<GridFoot {multiselect} {Data}/>
	</table>
</div>

<script>
import './Grid.css';
import { onMount } from 'svelte';
import { shouldSkipNav, getSelectableItems, getScrollContainer, getHeaderHeight } from './utils.js';
import { DataStore } from './DataStore.js';
import { GridHead, GridFoot, GridBody } from './parts';

/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {string} [title]
 * @property {boolean|string} [interactive=true]
 * @property {boolean} [round=false]
 * @property {string|HTMLElement} [scrollContainer=undefined]
 * @property {string} [scrollCorrectionOffset='0']
 * @property {Array} [columns=[]]
 * @property {Array} [data=[]]
 * @property {boolean} [multiselect=false]
 * @property {number} [dblClickDelay=500]
 * @property {HTMLElement} [element=undefined]
 * @property {function} [onselect]
 * @property {function} [onfocus]
 * @property {function} [onclick]
 * @property {function} [ondblclick]
 * @property {function} [onkeydown]
 */

/** @type {Props} */
let {
	class: className = '',
	title = '',
	interactive = true,
	round = false,
	scrollContainer = undefined,
	scrollCorrectionOffset = '0',
	columns = [],
	data = [],
	multiselect = false,
	dblClickDelay = 500,
	element = undefined,
	onselect = () => {},
	onfocus = () => {},
	onclick = () => {},
	ondblclick = () => {},
	onkeydown = () => {},
} = $props();




let headerHeight = 0;
const rowSelector = 'tbody';

const Data = DataStore();

let selectedIdx = -1;
let clickTimer;
let previousKey;

const _interactive = $derived(interactive === true || interactive === 'true');


onMount(() => {
	if (_interactive) {
		requestAnimationFrame(() => headerHeight = getHeaderHeight(element));
	}
});


$effect.pre(() => {
	if (data) Data.set(data);
	if (columns) Data.columns.set(columns);
});


function selectPrev () {
	const rows = getSelectableItems(element);
	if (selectedIdx <= 0) return;
	selectedIdx -= 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	onselect({ selectedItem: rowEl });
}


function selectNext () {
	const rows = getSelectableItems(element);
	if (selectedIdx >= rows.length - 1) return;
	selectedIdx += 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	onselect({ selectedItem: rowEl });
}



function selectRow (e, rowEl) {
	if (!rowEl) return;

	if (rowEl !== document.activeElement) rowEl.focus();

	const oldIdx = selectedIdx;
	const rows = getSelectableItems(element);
	selectedIdx = rows.findIndex(item => item === rowEl);

	if (oldIdx !== selectedIdx) onselect({ event: e, selectedItem: rowEl });


	const scrollEl = getScrollContainer(element, scrollContainer);
	if (!scrollEl) return;

	const topMargin = (scrollEl === element ? 0 : element.offsetTop);
	const scrollCorrection = parseFloat(scrollCorrectionOffset);
	const paddingTop = 10;
	const paddingBottom = 2;
	let top = rowEl.offsetTop + topMargin + scrollCorrection + paddingTop;

	if (scrollEl.scrollTop > top) scrollEl.scrollTo({ top: Math.round(top) });
	else {
		top = rowEl.offsetTop + rowEl.offsetHeight - scrollEl.offsetHeight +
			headerHeight + topMargin + scrollCorrection + paddingBottom;
		if (scrollEl.scrollTop < top) scrollEl.scrollTo({ top: Math.round(top) });
	}
}


function _onfocus (e) {
	if (shouldSkipNav(e, element)) return;
	const notRowFocus = !e.target.matches(rowSelector);
	if (notRowFocus || !_interactive) return;

	const rowEl = e.target.closest(rowSelector);
	if (rowEl) {
		selectRow(e, rowEl);
		onfocus({ event: e, selectedItem: rowEl });
	}
}


function _onclick (e) {
	if (shouldSkipNav(e, element)) return;

	const rowEl = e.target.closest(rowSelector);
	if (!rowEl) return;

	if (e.target.closest('.column-check')) {
		const item = { id: +rowEl.dataset.id };
		Data.toggleSelection(item, e);
	}

	selectRow(e, rowEl);

	// debounce, so to not duplicate events when dbl-clicking
	if (clickTimer) clearTimeout(clickTimer);
	clickTimer = setTimeout(() => onclick({ event: e, selectedItem: rowEl }), dblClickDelay);
}


function _ondblclick (e) {
	if (!_interactive) return;
	if (shouldSkipNav(e, element)) return;

	if (clickTimer) clearTimeout(clickTimer);

	const rowEl = e.target.closest(rowSelector);
	if (!rowEl) return;
	const item = { id: +rowEl.dataset.id };
	Data.toggleSelection(item, e, false);

	requestAnimationFrame(() => {
		const selectedItem = getSelectableItems(element)[selectedIdx];
		ondblclick({ event: e, selectedItem });
	});
}


function _onkeydown (e) {
	if (!_interactive) return;
	if (shouldSkipNav(e, element)) return;

	if (e.key === 'ArrowUp' || e.key === 'k') {
		e.preventDefault();
		selectPrev();
	}
	if (e.key === 'ArrowDown' || e.key === 'j') {
		e.preventDefault();
		selectNext();
	}
	if (e.key === 'ArrowLeft' || (e.key === 'g' && previousKey === 'g')) {
		e.preventDefault();
		selectedIdx = -1;
		selectNext();
	}
	if (e.key === 'ArrowRight' || e.key === 'G') {
		e.preventDefault();
		const rows = getSelectableItems(element);
		selectedIdx = rows && rows.length - 2;
		selectNext();
	}

	const rowEl = e && e.target && e.target.closest(rowSelector);
	if (rowEl && e.key === ' ') {
		e.preventDefault();
		Data.toggleSelection({ id: +rowEl.dataset.id }, e);
	}

	else if (e.metaKey) {
		if (e.key === 'a') {
			e.preventDefault();
			Data.toggleSelectAll(true);
		}
		else if (e.key === '0') Data.toggleSelectAll(false);
	}

	previousKey = e.key;
	const selectedItem = getSelectableItems(element)[selectedIdx];
	onkeydown({ event: e, key: e.key, selectedItem });
}


</script>
