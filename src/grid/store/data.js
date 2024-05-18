import { writable, get } from 'svelte/store';


export function DataStore () {
	const _this = writable([]);
	const { subscribe, set } = _this;

	const allSelected = writable(false);
	const someSelected = writable(false);
	const sortField = writable('');
	const sortOrder = writable('ASC');


	function toggleSelection (item, /* e */) {
		let count = 0;
		const unselectOthers = false;
		const $Data = get(this);
		$Data.forEach(_item => {
			if (item.id === _item.id) {
				_item.selected = !_item.selected;
			}
			else if (unselectOthers) _item.selected = false;
			if (_item.selected) count += 1;
		});
		allSelected.set($Data.length === count);
		someSelected.set(count > 0 && !get(allSelected));
		set($Data);
		// onSelectionChange();
	}

	function toggleSelectAll (forceState = null) {
		if (typeof forceState === 'boolean') allSelected.set(forceState);
		else {
			if (get(someSelected)) allSelected.set(false);
			else allSelected.set(!get(allSelected));
		}
		someSelected.set(false);
		const selected = get(allSelected);
		const $Data = get(this);
		$Data.forEach(_item => _item.selected = selected);
		set($Data);
		// onSelectionChange();
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
		get: () => _this,
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



export function numberSort (field, order = 'ASC') {
	if (order === 'ASC') return (a, b) => Math.abs(a[field]) - Math.abs(b[field]);
	return (a, b) => Math.abs(b[field]) - Math.abs(a[field]);
}


export function stringSort (field, order = 'ASC') {
	if (order === 'ASC') return (a, b) => ('' + a[field]).localeCompare('' + b[field]);
	return (a, b) => ('' + b[field]).localeCompare('' + a[field]);
}
