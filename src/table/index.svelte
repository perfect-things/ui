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
export let scrollCorrectionOffset = 0;
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
		requestAnimationFrame(() => headerHeight = node.querySelector('thead').offsetHeight);
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

	const top = rowEl.offsetTop - headerHeight + parseFloat(scrollCorrectionOffset);
	if (node.scrollTop > top) node.scrollTo({ top, behavior: 'smooth' });
	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}

function selectNext (skipEvent = false) {
	const rows = getSelectableItems();
	if (selectedIdx >= rows.length - 1) return;
	selectedIdx += 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();

	const top = rowEl.offsetTop + rowEl.offsetHeight - node.offsetHeight + headerHeight	+ parseFloat(scrollCorrectionOffset);
	if (node.scrollTop < top) node.scrollTo({ top, behavior: 'smooth' });

	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}

function selectClicked (skipEvent = false) {
	const rows = getSelectableItems();
	const rowEl = rows[selectedIdx];
	if (!rowEl) return;
	rowEl.focus();

	let top = rowEl.offsetTop - headerHeight + parseFloat(scrollCorrectionOffset);
	if (node.scrollTop > top) node.scrollTo({ top, behavior: 'smooth' });
	else {
		top = rowEl.offsetTop + rowEl.offsetHeight - node.offsetHeight + headerHeight + parseFloat(scrollCorrectionOffset);
		if (node.scrollTop < top) node.scrollTo({ top, behavior: 'smooth' });
	}

	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}


function onClick (e) {
	const skipEventFor = ['INPUT', 'TEXTAREA', 'SELECT'];
	if (skipEventFor.includes(e.target.tagName)) return;

	// debounce, so to not duplicate events when dblclicking
	if (clickTimer) clearTimeout(clickTimer);
	clickTimer = setTimeout(() => dispatch('select', { event: e, selectedItem: rowEl }), 300);

	const rowEl = e.target.closest(rowSelector);
	if (!rowEl) return;
	const rows = getSelectableItems();
	selectedIdx = rows.findIndex(item => item == rowEl);
	selectClicked(true);
	dispatch('click', { event: e, selectedItem: rowEl });
}

function onDblClick (e) {
	const skipEventFor = ['INPUT', 'TEXTAREA', 'SELECT'];
	if (skipEventFor.includes(e.target.tagName)) return;

	if (clickTimer) clearTimeout(clickTimer);
	onClick(e);
	requestAnimationFrame(() => {
		const selectedItem = getSelectableItems()[selectedIdx];
		dispatch('dblclick', { selectedItem });
	});
}


function onKeyDown (e) {
	const skipEventFor = ['INPUT', 'TEXTAREA', 'SELECT'];
	if (skipEventFor.includes(e.target.tagName)) return;

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
