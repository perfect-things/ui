<div
	class={cls}
	bind:this={element}
	onclick={_onclick}
	onfocuscapture={_onfocus}
	onkeydown={_onkeydown}
	ondblclick={_ondblclick}
	{...restProps}>

	<table>{@render children?.()}</table>
</div>

<script lang="ts">
import './Table.css';
import type { TableProps } from './types';
import { onDestroy, onMount } from 'svelte';



let {
	class: className = '',
	selectable = true,
	round = false,
	scrollContainer = undefined,
	scrollCorrectionOffset = 0,
	element = $bindable(undefined),
	rowSelector = 'tbody tr',
	data = {},
	onselect = () => {},
	onclick = () => {},
	ondblclick = () => {},
	onkeydown = () => {},
	children,
	...restProps
}: TableProps = $props();

let selectedIdx = -1;
let headerHeight = 0;
let clickTimer;
let previousKey;


const cls = $derived([
	'table',
	className,
	{ selectable, round }
]);



onMount(() => {
	Object.assign(element.dataset, data);
	if (selectable) {
		makeRowsSelectable();
		requestAnimationFrame(() => {
			const head = element && element.querySelector('thead');
			if (head) headerHeight = head.offsetHeight;
		});
	}
});


onDestroy(() => {
	if (selectable) makeRowsNotSelectable();
});


/**
 * Finds all selectable rows.
 * Only for marking them as selectable, do we need to use the current table.
 * For finding next/prev rows, we need to use all tables.
 * @param getFromAllTables
 */
function getSelectableItems (getFromAllTables = true): Element[] {
	const rootEl = getFromAllTables ? element.parentNode : element;
	const rows = rootEl.querySelectorAll(`.table ${rowSelector}`);
	if (rows && rows.length) return Array.from(rows);
	return [];
}


function makeRowsSelectable () {
	getSelectableItems(false).forEach(item => item.setAttribute('tabindex', '0'));
}


function makeRowsNotSelectable () {
	getSelectableItems(false).forEach(item => item.removeAttribute('tabindex'));
}


function selectPrev (e, skipEvent = false) {
	const rows = getSelectableItems();
	if (selectedIdx <= 0) return;
	selectedIdx -= 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	if (!skipEvent) onselect(e, { selectedItem: rowEl });
}


function selectNext (e, skipEvent = false) {
	const rows = getSelectableItems();
	if (selectedIdx >= rows.length - 1) return;
	selectedIdx += 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	if (!skipEvent) onselect(e, { selectedItem: rowEl });
}


function getScrollContainer () {
	let scrlCont;
	if (scrollContainer) {
		if (typeof scrollContainer === 'string') scrlCont = element.closest(scrollContainer);
		else scrlCont = scrollContainer;
	}
	return scrlCont || element;
}


function selectClicked (e, skipEvent = false) {
	const rows = getSelectableItems();
	const rowEl = rows[selectedIdx];
	if (!rowEl) return;
	if (rowEl != document.activeElement) rowEl.focus();

	const scrlCont = getScrollContainer();
	if (!scrlCont || !scrlCont.scrollTo) return;

	const topMargin = (scrlCont === element ? 0 : element.offsetTop);

	let top = rowEl.offsetTop - headerHeight + topMargin + parseFloat(String(scrollCorrectionOffset));
	if (scrlCont.scrollTop > top) scrlCont.scrollTo({ top: Math.round(top) });

	else {
		const paddingBottom = 4;
		top = rowEl.offsetTop + rowEl.offsetHeight - scrlCont.offsetHeight +
			headerHeight + topMargin + parseFloat(String(scrollCorrectionOffset)) + paddingBottom;
		if (scrlCont.scrollTop < top) scrlCont.scrollTo({ top: Math.round(top) });
	}

	if (!skipEvent) onselect(e, { selectedItem: rowEl });
}


function selectFocusedRow (e: Event, rowEl: HTMLElement) {
	if (!rowEl) return;
	const rows = getSelectableItems();
	selectedIdx = rows.findIndex(item => item === rowEl);
	selectClicked(e, true);
}


function _onfocus (e) {
	if (!selectable) return;
	if (!element.contains(e.target)) return;
	if (!e || !e.target || shouldSkipNav(e)) return;
	if (e.target === document) return;
	if (!e.target.matches(rowSelector)) return;

	const selectedItem = e.target.closest(rowSelector);
	if (selectedItem) {
		selectFocusedRow(e, selectedItem);
		onclick(e, { selectedItem });
	}
}


function _onclick (e) {
	if (!element.contains(e.target)) return;
	if (shouldSkipNav(e)) return;

	// debounce, so to not duplicate events when dblclicking
	if (clickTimer) clearTimeout(clickTimer);
	const selectedItem = e.target.closest(rowSelector);
	clickTimer = setTimeout(() => onselect(e, { selectedItem }), 300);

	if (selectedItem) {
		selectFocusedRow(e, selectedItem);
		onclick(e, { selectedItem });
	}
}


function _ondblclick (e) {
	if (!selectable) return;
	if (!element.contains(e.target)) return;
	if (shouldSkipNav(e)) return;

	if (clickTimer) clearTimeout(clickTimer);
	onclick(e);
	requestAnimationFrame(() => {
		const selectedItem = getSelectableItems()[selectedIdx];
		ondblclick(e, { selectedItem });
	});
}


function _onkeydown (e) {
	if (!selectable) return;
	if (!element.contains(e.target)) return;
	if (shouldSkipNav(e)) return;

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
		const rows = getSelectableItems();
		selectedIdx = rows && rows.length - 2;
		selectNext(e);
	}
	previousKey = e.key;
	const selectedItem = getSelectableItems()[selectedIdx];
	onkeydown(e, { selectedItem });
}


function shouldSkipNav (e) {
	if (!e || !e.target || e.target === document) return false;
	const skipEventFor = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'];
	if (skipEventFor.includes(e.target.tagName)) return true;
	if (e.target.closest('.dialog,.drawer')) return true;
	return false;
}
</script>
