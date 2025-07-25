<!--
@component ## Grid

An advanced data grid component built on top of table functionality (alpha version).
- Enhanced table with column definitions and data binding
- Supports multi-select with checkbox column
- Keyboard navigation and row selection
- Configurable columns with custom rendering
- Sticky headers and scroll container support

@example
```svelte
<Grid
  title="User Data"
  columns={[
    { field: 'name', title: 'Name' },
    { field: 'email', title: 'Email' },
    { field: 'age', title: 'Age', type: 'number' }
  ]}
  data={userData}
  multiselect
  round
  onselect={handleSelection}
/>
```
@see {@link https://ui.perfectthings.dev/#Grid Grid Docs} for more info.
-->

<div
	bind:this={element}
	class={cls}
	onclick={_onclick}
	onfocuscapture={_onfocus}
	onkeydown={_onkeydown}
	ondblclick={_ondblclick}
	{...restProps}>

	{#if title}
		<h1 class="grid-title">{title}</h1>
	{/if}
	<table>
		<GridHead {multiselect} {Data} />
		<GridBody {multiselect} {Data}/>
		<GridFoot {multiselect} {Data}/>
	</table>
</div>

<script lang="ts">
import './Grid.css';
import type { GridProps } from './types';
import { onMount } from 'svelte';
import { shouldSkipNav, getSelectableItems, getScrollContainer, getHeaderHeight } from './utils.js';
import { DataStore } from './DataStore.js';
import { GridHead, GridFoot, GridBody } from './parts';


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
	...restProps
}: GridProps = $props();


const cls = $derived([
	'table',
	'grid',
	'grid-sortable',
	className,
	{
		round,
		interactive,
	}
]);

const Data = DataStore();

let headerHeight = 0;
const rowSelector = 'tbody';
let selectedIdx = -1;
let clickTimer;
let previousKey;



onMount(() => {
	if (interactive) {
		requestAnimationFrame(() => headerHeight = getHeaderHeight(element));
	}
});


$effect.pre(() => {
	if (data) Data.set(data);
	if (columns) Data.columns.set(columns);
});


function selectPrev (e?: MouseEvent | KeyboardEvent) {
	const rows = getSelectableItems(element);
	if (selectedIdx <= 0) return;
	selectedIdx -= 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	onselect(e, { selectedItem: rowEl });
}


function selectNext (e?: MouseEvent | KeyboardEvent) {
	const rows = getSelectableItems(element);
	if (selectedIdx >= rows.length - 1) return;
	selectedIdx += 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	onselect(e, { selectedItem: rowEl });
}



function selectRow (e, rowEl) {
	if (!rowEl) return;

	if (rowEl !== document.activeElement) rowEl.focus();

	const oldIdx = selectedIdx;
	const rows = getSelectableItems(element);
	selectedIdx = rows.findIndex(item => item === rowEl);

	if (oldIdx !== selectedIdx) onselect(e, { selectedItem: rowEl });


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
	if (notRowFocus || !interactive) return;

	const rowEl = e.target.closest(rowSelector);
	if (rowEl) {
		selectRow(e, rowEl);
		onfocus(e, { selectedItem: rowEl });
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
	clickTimer = setTimeout(() => onclick(e, { selectedItem: rowEl }), dblClickDelay);
}


function _ondblclick (e) {
	if (!interactive) return;
	if (shouldSkipNav(e, element)) return;

	if (clickTimer) clearTimeout(clickTimer);

	const rowEl = e.target.closest(rowSelector);
	if (!rowEl) return;
	const item = { id: +rowEl.dataset.id };
	Data.toggleSelection(item, e, false);

	requestAnimationFrame(() => {
		const selectedItem = getSelectableItems(element)[selectedIdx];
		ondblclick(e, { selectedItem });
	});
}


function _onkeydown (e) {
	if (!interactive) return;
	if (shouldSkipNav(e, element)) return;

	if (e.key === 'ArrowUp' || e.key === 'k') {
		e.preventDefault();
		selectPrev(e);
	}
	if (e.key === 'ArrowDown' || e.key === 'j') {
		e.preventDefault();
		selectNext(e);
	}
	if (e.key === 'ArrowLeft' || (e.key === 'g' && previousKey === 'g')) {
		e.preventDefault();
		selectedIdx = -1;
		selectNext(e);
	}
	if (e.key === 'ArrowRight' || e.key === 'G') {
		e.preventDefault();
		const rows = getSelectableItems(element);
		selectedIdx = rows && rows.length - 2;
		selectNext(e);
	}

	const rowEl = e && e.target && e.target.closest(rowSelector);
	if (rowEl && e.key === ' ') {
		e.preventDefault();
		Data.toggleSelection({ id: +rowEl.dataset.id }, e);
	}

	else if (e.metaKey || e.ctrlKey) {
		if (e.key === 'a') {
			e.preventDefault();
			Data.toggleSelectAll(true);
		}
		else if (e.key === '0') Data.toggleSelectAll(false);
	}

	previousKey = e.key;
	const selectedItem = getSelectableItems(element)[selectedIdx];
	onkeydown(e, { selectedItem });
}


</script>
