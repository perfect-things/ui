<div
	class="table {className}"
	class:round
	class:selectable="{_selectable}"
	bind:this="{_this}"
	on:click="{onClick}"
	on:focus|capture="{onFocus}"
	on:keydown="{onKeyDown}"
	on:dblclick="{onDblClick}">

	<table><slot /></table>
</div>

<script>
import { onDestroy, onMount, createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let _this = undefined;
export let selectable = true;
export let round = false;
export let scrollContainer = undefined;
export let scrollCorrectionOffset = 0;

let className = '';
export { className as class };

// useful for when row-groups are needed.
// then tbody.row-selector can be set to allow highlighting whole groups
export let rowSelector = 'tbody tr';
export let data = {};

let selectedIdx = -1;
let headerHeight = 0;
let clickTimer;
let previousKey;

$:_selectable = (selectable === true || selectable === 'true');


onMount(() => {
	Object.assign(_this.dataset, data);
	if (_selectable) {
		makeRowsSelectable();
		requestAnimationFrame(() => {
			const head = _this && _this.querySelector('thead');
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
	const rootEl = getFromAllTables ? _this.parentNode : _this;
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
		if (typeof scrollContainer === 'string') scrlCont = _this.closest(scrollContainer);
		else scrlCont = scrollContainer;
	}
	return scrlCont || _this;
}


function selectClicked (skipEvent = false) {
	const rows = getSelectableItems();
	const rowEl = rows[selectedIdx];
	if (!rowEl) return;
	if (rowEl != document.activeElement) rowEl.focus();

	const scrlCont = getScrollContainer();
	if (!scrlCont || !scrlCont.scrollTo) return;

	const topMargin = (scrlCont === _this ? 0 : _this.offsetTop);

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
	if (!_this.contains(e.target)) return;
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
	if (!_this.contains(e.target)) return;
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
	if (!_this.contains(e.target)) return;
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
	if (!_this.contains(e.target)) return;
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
