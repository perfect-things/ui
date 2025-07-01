import { writable, get } from 'svelte/store';
import { isset } from '../utils';
import type { DataStoreType, DataItem } from './types';



/**
 * DataStore
 * @description Store for all grid data
 */
export function DataStore (): DataStoreType {
	const _this = writable<DataItem[]>([]);
	const { subscribe, set } = _this;

	const columns = writable([]);
	const allSelected = writable(false);
	const someSelected = writable(false);
	const sortField = writable('');
	const sortOrder = writable('ASC');

	let lastSelectedItemId = null;


	function getById (id) {
		return get(_this).find(i => i.id === id);
	}

	function toggleSelection (item, event , forceState = undefined) {
		if (event.shiftKey && lastSelectedItemId) return selectRange(event);

		const $Data = get(_this);
		const _item = getById(item.id);
		if (!isset(forceState)) _item.selected = !_item.selected;
		else _item.selected = forceState;

		if (_item.selected) lastSelectedItemId = _item.id;

		set($Data);
		updateSelectedCounters();
	}

	function toggleSelectAll (forceState = undefined) {
		let isAll = get(allSelected);

		if (typeof forceState === 'boolean') isAll = forceState;
		else isAll = get(someSelected) ? false : !isAll;

		allSelected.set(isAll);
		someSelected.set(false);

		const $Data = get(_this);
		$Data.forEach(_item => _item.selected = isAll);
		set($Data);
	}

	function selectRange (event) {
		const rowEl = event.target.closest('.item');
		const gridEl = rowEl.closest('.grid');
		const lastSelectedRowEl = gridEl.querySelector(`.item[data-id="${lastSelectedItemId}"]`);
		if (!rowEl || !lastSelectedRowEl) return;

		const $Data = get(_this);
		const rows = gridEl.querySelectorAll('.item');
		// find rows between last selected and current
		const rowsToSelect = [rowEl, lastSelectedRowEl];
		let start = false;
		for (let i = 0; i < rows.length; i++) {
			if (rows[i] === rowEl || rows[i] === lastSelectedRowEl) {
				if (start) break;
				start = true;
			}
			if (start) rowsToSelect.push(rows[i]);
		}
		rowsToSelect.forEach(id => {
			getById(+id.dataset.id).selected = true;
		});

		set($Data);
		updateSelectedCounters();
	}

	function updateSelectedCounters () {
		const $Data = get(_this);
		const countSelected = $Data.filter(t => t.selected).length;
		const isAll = $Data.length === countSelected;
		allSelected.set(isAll);
		someSelected.set(countSelected > 0 && !isAll);
	}

	sortField.subscribe(field => {
		if (field) set(sortData(get(_this), field, get(sortOrder)));
	});
	sortOrder.subscribe(order => {
		if (order) set(sortData(get(_this), get(sortField), order));
	});


	return {
		subscribe,
		set,
		get: () => get(_this),

		columns,
		allSelected,
		someSelected,
		sortField,
		sortOrder,

		toggleSelection,
		toggleSelectAll,
		reset: () => set([])
	};
}



function sortData (items, field, order) {
	if (!items || !items.length) return [];
	if (field === '') return items.sort(numberSort('id', order));

	if (typeof items[0][field] === 'number') {
		return items.sort(numberSort(field, order));
	}

	return items.sort(stringSort(field, order));
}


function numberSort (field, order = 'ASC') {
	if (order === 'ASC') return (a, b) => Math.abs(a[field]) - Math.abs(b[field]);
	return (a, b) => Math.abs(b[field]) - Math.abs(a[field]);
}


function stringSort (field, order = 'ASC') {
	if (order === 'ASC') return (a, b) => ('' + a[field]).localeCompare('' + b[field]);
	return (a, b) => ('' + b[field]).localeCompare('' + a[field]);
}
