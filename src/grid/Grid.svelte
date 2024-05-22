<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="table grid grid-sortable {className}"
	class:round
	class:interactive="{_interactive}"
	bind:this="{element}"
	on:click="{onClick}"
	on:focus|capture="{onFocus}"
	on:keydown="{onKeyDown}"
	on:dblclick="{onDblClick}">
	{#if title}
		<h1 class="grid-title">{title}</h1>
	{/if}
	<table>
		<GridHead {multiselect} {Data} {Columns} />
		<GridBody {multiselect} {Data} {Columns}/>
		<GridFoot {multiselect} {Data} {Columns}/>
	</table>
</div>

<script>
import { createEventDispatcher, beforeUpdate } from 'svelte';
import { shouldSkipNav, getSelectableItems } from './utils.js';
import { DataStore, ColumnsStore } from './store';
import { GridHead, GridFoot, GridBody } from './parts';


let className = '';
export { className as class };
export let title = '';
export let interactive = true;
export let round = false;
export let scrollContainer = undefined;
export let scrollCorrectionOffset = 0;
export let columns = [];
export let data = [];
export let multiselect = false;

export let element = undefined;

const dispatch = createEventDispatcher();
const headerHeight = 0;
const rowSelector = 'tbody';

const Data = DataStore();
const Columns = ColumnsStore();

let selectedIdx = -1;
let clickTimer;
let previousKey;

$:_interactive = (interactive === true || interactive === 'true');


beforeUpdate(() => {
	if (data) Data.set(data);
	if (columns) Columns.set(columns);
});






function selectPrev (skipEvent = false) {
	const rows = getSelectableItems(element);
	if (selectedIdx <= 0) return;
	selectedIdx -= 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}


function selectNext (skipEvent = false) {
	const rows = getSelectableItems(element);
	if (selectedIdx >= rows.length - 1) return;
	selectedIdx += 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}


function getScrollContainer () {
	let scrlCont;
	if (scrollContainer) {
		if (typeof scrollContainer === 'string') scrlCont = element.closest(scrollContainer);
		else scrlCont = scrollContainer;
	}
	return scrlCont || element;
}


function selectClicked (skipEvent = false) {
	const rows = getSelectableItems(element);
	const rowEl = rows[selectedIdx];
	if (!rowEl) return;
	if (rowEl != document.activeElement) rowEl.focus();

	const scrlCont = getScrollContainer();
	if (!scrlCont || !scrlCont.scrollTo) return;

	const topMargin = (scrlCont === element ? 0 : element.offsetTop);

	let top = rowEl.offsetTop - headerHeight + topMargin + parseFloat(scrollCorrectionOffset);
	if (scrlCont.scrollTop > top) scrlCont.scrollTo({ top: Math.round(top) });

	else {
		const paddingBottom = 4;
		top = rowEl.offsetTop + rowEl.offsetHeight - scrlCont.offsetHeight +
			headerHeight + topMargin + parseFloat(scrollCorrectionOffset) + paddingBottom;
		if (scrlCont.scrollTop < top) scrlCont.scrollTo({ top: Math.round(top) });
	}

	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}


function selectFocusedRow (rowEl) {
	if (!rowEl) return;
	const rows = getSelectableItems(element);
	selectedIdx = rows.findIndex(item => item === rowEl);
	selectClicked(true);
}


function onFocus (e) {
	if (shouldSkipNav(e, element)) return;
	const notRowFocus = !e.target.matches(rowSelector);
	if (notRowFocus || !_interactive) return;

	const rowEl = e.target.closest(rowSelector);
	if (rowEl) {
		selectFocusedRow(rowEl);
		dispatch('click', { event: e, selectedItem: rowEl });
	}
}


function onClick (e) {
	if (shouldSkipNav(e, element)) return;

	const rowEl = e.target.closest(rowSelector);
	if (!rowEl) return;

	// debounce, so to not duplicate events when dbl-clicking
	if (clickTimer) clearTimeout(clickTimer);
	clickTimer = setTimeout(() => dispatch('select', { event: e, selectedItem: rowEl }), 300);


	if (e.target.closest('.column-check')) {
		const item = { id: +rowEl.dataset.id };
		Data.toggleSelection(item, e);
	}

	selectFocusedRow(rowEl);
	dispatch('click', { event: e, selectedItem: rowEl });
}


function onDblClick (e) {
	if (!_interactive) return;
	if (shouldSkipNav(e, element)) return;

	if (clickTimer) clearTimeout(clickTimer);
	// onClick(e);
	const rowEl = e.target.closest(rowSelector);
	if (!rowEl) return;
	const item = { id: +rowEl.dataset.id };
	Data.toggleSelection(item, e.detail.event, false);

	requestAnimationFrame(() => {
		const selectedItem = getSelectableItems(element)[selectedIdx];
		dispatch('dblclick', { event: e, selectedItem });
	});
}


function onKeyDown (e) {
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
	if (e.target.closest && e.target.closest('.menu,.dialog,.drawer,.popover')) return;

	const rowEl = e && e.target;
	if (rowEl) {
		const item = { id: +rowEl.dataset.id };
		if (e.key === ' ' && item) {
			if (['BUTTON', 'A'].includes(e.target.tagName)) return;
			e.preventDefault();
			return Data.toggleSelection(item, e);
		}
	}

	if (e.metaKey && e.key === 'a') {
		e.preventDefault();
		return Data.toggleSelectAll(true);
	}
	if (e.metaKey && e.key === '0') return Data.toggleSelectAll(false);

	previousKey = e.key;
	const selectedItem = getSelectableItems(element)[selectedIdx];
	dispatch('keydown', { event: e, key: e.key, selectedItem });
}


</script>
