<div class="table-wrapper {cssClass}"
	class:selectable
	bind:this="{node}"
	on:click="{onClick}"
	on:dblclick="{onDblClick}">

	<table class="table"><slot /></table>
</div>

<script>
import { onDestroy, onMount, createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let cssClass = '';
export let node = undefined;
export let selectable = true;
// useful for when row-groups are needed.
// then tbody.row-selector can be set to allow highlighting whole groups
export let rowSelector = 'tbody tr';
let selectedIdx = -1;
let headerHeight = 0;
let clickTimer;


onMount(() => {
	if (selectable) {
		document.addEventListener('keydown', onKeyDown);
		makeRowsSelectable();
		measureHeader();
	}
});

onDestroy(() => {
	if (selectable) {
		document.removeEventListener('keydown', onKeyDown);
		makeRowsNotSelectable();
	}
});

function getSelectableItems () {
	const rows = node.querySelectorAll(rowSelector);
	if (rows && rows.length) return Array.from(rows);
	return [];
}

function makeRowsSelectable () {
	getSelectableItems().forEach(item => item.setAttribute('tabindex', 0));
}

function makeRowsNotSelectable () {
	getSelectableItems().forEach(item => item.removeAttribute('tabindex'));
}

function selectPrev (skipEvent = false) {
	const rows = getSelectableItems();
	if (selectedIdx <= 0) return;
	selectedIdx -= 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();

	const top = rowEl.offsetTop;
	if (node.scrollTop > top) node.scrollTo({ top, behavior: 'smooth' });
	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}

function selectNext (skipEvent = false) {
	const rows = getSelectableItems();
	if (selectedIdx >= rows.length - 1) return;
	selectedIdx += 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();

	const top = rowEl.offsetTop + rowEl.offsetHeight - node.offsetHeight + headerHeight - 10;
	if (node.scrollTop < top) node.scrollTo({ top, behavior: 'smooth' });

	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}


function measureHeader () {
	requestAnimationFrame(() => {
		headerHeight = node.querySelector('thead').getBoundingClientRect().top;
	});
}

function onClick (e) {
	if (clickTimer) clearTimeout(clickTimer);
	clickTimer = setTimeout(() => _onClick(e), 200);
}

function _onClick (e) {
	const row = e.target.closest(rowSelector);
	if (!row) return;
	const rows = getSelectableItems();
	const idx = rows.findIndex(item => item == row);
	if (idx < rows.length) {
		selectedIdx = idx - 1;
		selectNext(true);
	}
	else if (idx >= 0) {
		selectedIdx = idx + 1;
		selectPrev(true);
	}
	const rowEl = getSelectableItems()[selectedIdx];
	dispatch('select', { selectedItem: rowEl });
}

function onDblClick (e) {
	if (clickTimer) clearTimeout(clickTimer);
	_onClick(e);
	requestAnimationFrame(() => {
		const selectedItem = getSelectableItems()[selectedIdx];
		dispatch('dblclick', { selectedItem });
	});
}


function onKeyDown (e) {
	if (e.key === 'ArrowUp' || e.key === 'k') {
		e.preventDefault();
		selectPrev();
	}
	if (e.key === 'ArrowDown' || e.key === 'j') {
		e.preventDefault();
		selectNext();
	}
	const selectedItem = getSelectableItems()[selectedIdx];
	dispatch('key', { event: e, selectedItem });
}

</script>
