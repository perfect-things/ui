<div class="table-wrapper {cssClass}"
	class:selectable
	bind:this="{_this}"
	on:click="{onClick}"
	on:dblclick="{onDblClick}">

	<table class="table"><slot /></table>
</div>

<script>
import { onDestroy, onMount, createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let cssClass = '';
export let _this = undefined;
export let selectable = true;
export let scrollCorrectionOffset = 0;
// useful for when row-groups are needed.
// then tbody.row-selector can be set to allow highlighting whole groups
export let rowSelector = 'tbody tr';
let selectedIdx = -1;
let headerHeight = 0;
let clickTimer;
let previousKey;


onMount(() => {
	if (selectable) {
		document.addEventListener('keydown', onKeyDown);
		makeRowsSelectable();
		requestAnimationFrame(() => {
			const head = _this && _this.querySelector('thead');
			if (head) headerHeight = head.offsetHeight;
		});
	}
});

onDestroy(() => {
	if (selectable) {
		document.removeEventListener('keydown', onKeyDown);
		makeRowsNotSelectable();
	}
});

function getSelectableItems () {
	const rows = _this.querySelectorAll(rowSelector);
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
	if (_this.scrollTop > top) _this.scrollTo({ top, behavior: 'smooth' });
	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}

function selectNext (skipEvent = false) {
	const rows = getSelectableItems();
	if (selectedIdx >= rows.length - 1) return;
	selectedIdx += 1;
	const rowEl = rows[selectedIdx];
	rowEl.focus();

	const top = rowEl.offsetTop + rowEl.offsetHeight - _this.offsetHeight + headerHeight	+ parseFloat(scrollCorrectionOffset);
	if (_this.scrollTop < top) _this.scrollTo({ top, behavior: 'smooth' });

	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}

function selectClicked (skipEvent = false) {
	const rows = getSelectableItems();
	const rowEl = rows[selectedIdx];
	if (!rowEl) return;
	rowEl.focus();

	let top = rowEl.offsetTop - headerHeight + parseFloat(scrollCorrectionOffset);
	if (_this.scrollTop > top) _this.scrollTo({ top, behavior: 'smooth' });
	else {
		top = rowEl.offsetTop + rowEl.offsetHeight - _this.offsetHeight + headerHeight + parseFloat(scrollCorrectionOffset);
		if (_this.scrollTop < top) _this.scrollTo({ top, behavior: 'smooth' });
	}

	if (!skipEvent) dispatch('select', { selectedItem: rowEl });
}


function onClick (e) {
	if (shouldSkipNav(e)) return;

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
	if (shouldSkipNav(e)) return;

	if (clickTimer) clearTimeout(clickTimer);
	onClick(e);
	requestAnimationFrame(() => {
		const selectedItem = getSelectableItems()[selectedIdx];
		dispatch('dblclick', { event: e, selectedItem });
	});
}


function onKeyDown (e) {
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
	const skipEventFor = ['INPUT', 'TEXTAREA', 'SELECT'];
	if (skipEventFor.includes(e.target.tagName)) return true;
	if (e.target.closest('.dialog,.drawer')) return true;
	return false;
}
</script>
