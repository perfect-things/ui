import { writable, derived, get } from 'svelte/store';
import { deepCopy, fuzzy } from '../../utils';
import { emphasize } from './utils';

export const Filter = writable('');
export const OriginalItems = writable([]);


function ComboStore () {
	const { subscribe, set } = writable([]);

	function init (items) {
		OriginalItems.set(items);
		set(standardiseItems(items));
	}


	function toggle (item) {
		const items = get(this);
		const id = item.id || item.name;
		const index = items.findIndex(i => (i.id || item.name) === id);
		items[index].checked = !items[index].checked;
		set(items);
	}


	return {
		init,
		set,
		toggle,
		subscribe,
		reset: () => set([])
	};
}
export const Items = ComboStore();


export const CheckedItems = derived([Items, OriginalItems], ([items, originalItems]) => {
	if (!items) return [];
	const checked = items.filter(item => item.checked).map(item => item.id || item.name);
	console.log({ checked });
	return originalItems.filter(item => checked.includes(item.id || item.name || item));
});


export const FilteredItems = derived([Items, Filter], ([items, filter]) => {
	if (!items) return [];

	const q = filter.toLowerCase().trim();
	if (!q) return items;

	return items
		.filter(item => fuzzy(item.name, q))
		.map(item => {
			item.highlightedName = emphasize(item.name, q);
			item.score = 1;
			if (item.name.toLowerCase().includes(q)) item.score = 2;
			if (item.name.includes(q)) item.score = 3;
			if (item.name.toLowerCase() === q) item.score = 4;
			if (item.name === q) item.score = 5;
			return item;
		})
		.sort((a, b) => b.score - a.score);
});



function standardiseItems (items) {
	if (!items || !items.length) return [];
	items = deepCopy(items);
	if (typeof items[0] === 'string') {
		items = items.map(item => ({ id: item, name: item }));
	}
	return items;
}
