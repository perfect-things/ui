import { writable, get } from 'svelte/store';
import type { GridData, GridDataItem } from './types';
import { sortData } from './utils';



/**
 * DataStore
 * @description Store for all grid data
 */
export function DataStore (): GridData {
	const _this = writable<GridDataItem[]>([]);
	const { subscribe, set, update } = _this;

	const columns = writable([]);
	const allSelected = writable(false);
	const someSelected = writable(false);
	const sortField = writable('');
	const sortOrder = writable('ASC');

	let lastSelectedItemId = null;

	function _set (data) {
		set(sortData(data, get(sortField), get(sortOrder)));
	}

	function getById (id) {
		return get(_this).find(i => i.id == id);
	}

	function toggleSelection (item, event , forceState = undefined) {
		if (event.shiftKey && lastSelectedItemId) return selectRange(event);

		const $Data = get(_this);
		const _item = getById(item.id);
		if (typeof forceState === 'boolean') _item.selected = forceState;
		else _item.selected = !_item.selected;

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
			getById(id.dataset.id).selected = true;
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
		set: _set,
		update,
		get: () => get(_this),
		getById,

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
