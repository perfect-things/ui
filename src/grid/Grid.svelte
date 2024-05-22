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
		<GridHead {multiselect} {Data} />
		<GridBody {multiselect} {Data}/>
		<GridFoot {multiselect} {Data}/>
	</table>
</div>

<script>
import { onMount, createEventDispatcher, beforeUpdate } from 'svelte';
import { shouldSkipNav, getSelectableItems, getScrollContainer, getHeaderHeight } from './utils.js';
import { DataStore } from './DataStore.js';
import { GridHead, GridFoot, GridBody } from './parts';


let className = '';
export { className as class };
export let title = '';
export let interactive = true;
export let round = false;
export let scrollContainer = undefined;
export let scrollCorrectionOffset = '0';
export let columns = [];
export let data = [];
export let multiselect = false;

export let element = undefined;

const dispatch = createEventDispatcher();
let headerHeight = 0;
const rowSelector = 'tbody';

const Data = DataStore();

let selectedIdx = -1;
let clickTimer;
let previousKey;

$:_interactive = (interactive === true || interactive === 'true');


onMount(() => {
	Object.assign(element.dataset, data);
	if (_interactive) requestAnimationFrame(() => headerHeight = getHeaderHeight(element));
});


beforeUpdate(() => {
	if (data) Data.set(data);
	if (columns) Data.columns.set(columns);
});


function selectPrev () {
	const rows = getSelectableItems(element);
	if (selectedIdx <= 0) return;
	selectedIdx -= 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	dispatch('select', { selectedItem: rowEl });
}


function selectNext () {
	const rows = getSelectableItems(element);
	if (selectedIdx >= rows.length - 1) return;
	selectedIdx += 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	dispatch('select', { selectedItem: rowEl });
}



function selectRow (rowEl) {
	if (!rowEl) return;
	if (rowEl !== document.activeElement) rowEl.focus();

	const rows = getSelectableItems(element);
	selectedIdx = rows.findIndex(item => item === rowEl);

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


function onFocus (e) {
	if (shouldSkipNav(e, element)) return;
	const notRowFocus = !e.target.matches(rowSelector);
	if (notRowFocus || !_interactive) return;

	const rowEl = e.target.closest(rowSelector);
	if (rowEl) {
		selectRow(rowEl);
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

	selectRow(rowEl);
	dispatch('click', { event: e, selectedItem: rowEl });
}


function onDblClick (e) {
	if (!_interactive) return;
	if (shouldSkipNav(e, element)) return;

	if (clickTimer) clearTimeout(clickTimer);

	const rowEl = e.target.closest(rowSelector);
	if (!rowEl) return;
	const item = { id: +rowEl.dataset.id };
	Data.toggleSelection(item, e, false);

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
	dispatch('keydown', { event: e, key: e.key, selectedItem });
}


</script>
