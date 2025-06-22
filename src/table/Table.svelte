<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	bind:this={element}
	class={[
		'table',
		className,
		{
			selectable,
			round
		}
	]}
	onclick={_onclick}
	onfocuscapture={_onfocus}
	onkeydown={_onkeydown}
	ondblclick={_ondblclick}>

	<table>{@render children?.()}</table>
</div>

<script lang="ts">
import './Table.css';
import type { ClassValue } from 'svelte/elements';
import { onDestroy, onMount, type Snippet } from 'svelte';


interface Props {
	class?: ClassValue;
	selectable?: boolean;
	round?: boolean;
	scrollContainer?: string | HTMLElement;
	scrollCorrectionOffset?: number | string;
	element?: HTMLElement;
	rowSelector?: string;
	data?: Record<string, any>;
	onselect?: (e: { selectedItem: Element }) => void;
	onclick?: (e: { event: Event, selectedItem: Element }) => void;
	ondblclick?: (e: { event: Event, selectedItem: Element }) => void;
	onkeydown?: (e: { event: KeyboardEvent, key: string, selectedItem: Element }) => void;
	children?: Snippet;
}


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
	children
}: Props = $props();

let selectedIdx = -1;
let headerHeight = 0;
let clickTimer;
let previousKey;



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


function selectPrev (skipEvent = false) {
	const rows = getSelectableItems();
	if (selectedIdx <= 0) return;
	selectedIdx -= 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	if (!skipEvent) onselect({ selectedItem: rowEl });
}


function selectNext (skipEvent = false) {
	const rows = getSelectableItems();
	if (selectedIdx >= rows.length - 1) return;
	selectedIdx += 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();
	if (!skipEvent) onselect({ selectedItem: rowEl });
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

	if (!skipEvent) onselect({ selectedItem: rowEl });
}


function selectFocusedRow (rowEl) {
	if (!rowEl) return;
	const rows = getSelectableItems();
	selectedIdx = rows.findIndex(item => item === rowEl);
	selectClicked(true);
}


function _onfocus (e) {
	if (!selectable) return;
	if (!element.contains(e.target)) return;
	if (!e || !e.target || shouldSkipNav(e)) return;
	if (e.target === document) return;
	if (!e.target.matches(rowSelector)) return;

	const rowEl = e.target.closest(rowSelector);
	if (rowEl) {
		selectFocusedRow(rowEl);
		onclick({ event: e, selectedItem: rowEl });
	}
}


function _onclick (e) {
	if (!element.contains(e.target)) return;
	if (shouldSkipNav(e)) return;

	// debounce, so to not duplicate events when dblclicking
	if (clickTimer) clearTimeout(clickTimer);
	const rowEl = e.target.closest(rowSelector);
	e.selectedItem = rowEl;
	clickTimer = setTimeout(() => onselect(e), 300);

	if (rowEl) {
		selectFocusedRow(rowEl);
		onclick({ event: e, selectedItem: rowEl });
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
		ondblclick({ event: e, selectedItem });
	});
}


function _onkeydown (e) {
	if (!selectable) return;
	if (!element.contains(e.target)) return;
	if (shouldSkipNav(e)) return;

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
		const rows = getSelectableItems();
		selectedIdx = rows && rows.length - 2;
		selectNext();
	}
	previousKey = e.key;
	const selectedItem = getSelectableItems()[selectedIdx];
	onkeydown({ event: e, key: e.key, selectedItem });
}


function shouldSkipNav (e) {
	if (!e || !e.target || e.target === document) return false;
	const skipEventFor = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'];
	if (skipEventFor.includes(e.target.tagName)) return true;
	if (e.target.closest('.dialog,.drawer')) return true;
	return false;
}
</script>
