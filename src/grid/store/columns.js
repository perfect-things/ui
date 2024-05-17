import { writable, get } from 'svelte/store';


export function ColumnsStore () {
	const { subscribe, set } = writable([]);

	return {
		subscribe,
		set,
		get () {
			return get(this);
		},
		reset: () => set([])
	};
}

