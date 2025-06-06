<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="table {className}"
	class:round
	class:selectable={_selectable}
	bind:this={element}
	onclick={onClick}
	onfocuscapture={onFocus}
	onkeydown={onKeyDown}
	ondblclick={onDblClick}>

	<table>{@render children?.()}</table>
</div>

<script>
import './Table.css';
import { onDestroy, onMount, createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();





// useful for when row-groups are needed.

	/**
	 * @typedef {Object} Props
	 * @property {string} [class]
	 * @property {boolean} [selectable]
	 * @property {boolean} [round]
	 * @property {any} [scrollContainer]
	 * @property {number} [scrollCorrectionOffset]
	 * @property {any} [element]
	 * @property {string} [rowSelector] - then tbody.row-selector can be set to allow highlighting whole groups
	 * @property {any} [data]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let {
		class: className = '',
		selectable = true,
		round = false,
		scrollContainer = undefined,
		scrollCorrectionOffset = 0,
		element = $bindable(undefined),
		rowSelector = 'tbody tr',
		data = {},
		children
	} = $props();

let selectedIdx = -1;
let headerHeight = 0;
let clickTimer;
let previousKey;

const _selectable = ($derived(selectable === true || selectable === 'true'));


onMount(() => {
	Object.assign(element.dataset, data);
	if (_selectable) {
		makeRowsSelectable();
		requestAnimationFrame(() => {
			const head = element && element.querySelector('thead');
			if (head) headerHeight = head.offsetHeight;
		});
	}
});


onDestroy(() => {
	if (_selectable) makeRowsNotSelectable();
});


/**
 * Finds all selectable rows.
 * Only for marking them as selectable, do we need to use the current table.
 * For finding next/prev rows, we need to use all tables.
 * @param getFromAllTables
 */
function getSelectableItems (getFromAllTables = true) {
	const rootEl = getFromAllTables ? element.parentNode : element;
	const rows = rootEl.querySelectorAll(`.table ${rowSelector}`);
	if (rows && rows.length) return Array.from(rows);
	return [];
}


function makeRowsSelectable () {
	getSelectableItems(false).forEach(item => item.setAttribute('tabindex', 0));
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
	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}


function selectNext (skipEvent = false) {
	const rows = getSelectableItems();
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
	const rows = getSelectableItems();
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
	const rows = getSelectableItems();
	selectedIdx = rows.findIndex(item => item === rowEl);
	selectClicked(true);
}


function onFocus (e) {
	if (!_selectable) return;
	if (!element.contains(e.target)) return;
	if (!e || !e.target || shouldSkipNav(e)) return;
	if (e.target === document) return;
	if (!e.target.matches(rowSelector)) return;

	const rowEl = e.target.closest(rowSelector);
	if (rowEl) {
		selectFocusedRow(rowEl);
		dispatch('click', { event: e, selectedItem: rowEl });
	}
}


function onClick (e) {
	if (!element.contains(e.target)) return;
	if (shouldSkipNav(e)) return;

	// debounce, so to not duplicate events when dblclicking
	if (clickTimer) clearTimeout(clickTimer);
	clickTimer = setTimeout(() => dispatch('select', { event: e, selectedItem: rowEl }), 300);

	const rowEl = e.target.closest(rowSelector);
	if (rowEl) {
		selectFocusedRow(rowEl);
		dispatch('click', { event: e, selectedItem: rowEl });
	}
}


function onDblClick (e) {
	if (!_selectable) return;
	if (!element.contains(e.target)) return;
	if (shouldSkipNav(e)) return;

	if (clickTimer) clearTimeout(clickTimer);
	onClick(e);
	requestAnimationFrame(() => {
		const selectedItem = getSelectableItems()[selectedIdx];
		dispatch('dblclick', { event: e, selectedItem });
	});
}


function onKeyDown (e) {
	if (!_selectable) return;
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
	dispatch('keydown', { event: e, key: e.key, selectedItem });
}


function shouldSkipNav (e) {
	if (!e || !e.target || e.target === document) return false;
	const skipEventFor = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'];
	if (skipEventFor.includes(e.target.tagName)) return true;
	if (e.target.closest('.dialog,.drawer')) return true;
	return false;
}
</script>
