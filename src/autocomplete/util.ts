type Item = {
	id?: string,
	name: string,
	group?: string,
};

type Group = {
	[key: string]: { name?: string; items: Item[]; }
};

export function groupData (items: Item[]) {
	const nogroup: Item[] = [];
	const _groups: Group = {};
	items.forEach(item => {
		if (!item.group) return nogroup.push(item);
		_groups[item.group] = _groups[item.group] || { name: item.group, items: [] };
		_groups[item.group].items.push(item);
	});
	const groups = Object.values(_groups).filter(g => !!g.items.length);
	if (nogroup.length) groups.unshift({ items: nogroup });
	return groups;
}


export function highlight (listEl: HTMLElement) {
	requestAnimationFrame(() => {
		const selectedEl = listEl.querySelector('.selected') as HTMLElement;
		if (!selectedEl) return;

		// going up
		let top = selectedEl.offsetTop;
		if (listEl.scrollTop > top) listEl.scrollTo({ top });

		// going down
		else {
			top = selectedEl.offsetTop + selectedEl.offsetHeight - listEl.offsetHeight;
			if (listEl.scrollTop < top) listEl.scrollTo({ top });
		}
	});
}


// quick and instant recalc to minimise visual flyover of the dropdown across the screen
export function quickPositionRecalc (listEl, inputEl) {
	const inputBox = inputEl.getBoundingClientRect();
	listEl.style.top = (inputBox.top + inputBox.height + 3) + 'px';
	listEl.style.left = inputBox.left + 'px';
}


export function recalculateListPosition (listEl: HTMLElement, inputEl: HTMLElement, elevated: boolean) {
	if (elevated) quickPositionRecalc(listEl, inputEl);
	requestAnimationFrame(() => {
		if (!listEl || !listEl.style) return;
		const inputBox = inputEl.getBoundingClientRect();
		if (elevated) {
			listEl.style.top = (inputBox.top + inputBox.height + 3) + 'px';
			listEl.style.left = inputBox.left + 'px';
		}
		else {
			listEl.style.top = (inputBox.height + 3) + 'px';
		}
		listEl.style.minWidth = inputBox.width + 'px';
		listEl.style.height = 'auto';
		const listBox = listEl.getBoundingClientRect();
		const listT = listBox.top;
		const listH = listBox.height;
		const winH = window.innerHeight;
		let maxH = 0;
		if (listT + listH + 10 > winH) {
			maxH = Math.max(winH - listT - 10, 100);
			listEl.style.height = maxH + 'px';
		}
		if (listT + maxH + 10 > winH) {
			listEl.style.height = listBox.height + 'px';
			if (elevated) listEl.style.top = (inputBox.top - listBox.height - 3) + 'px';
			else listEl.style.top = (-listBox.height - 3) + 'px';
		}
	});
}


export function deepCopy (o: object) {
	return structuredClone(o);
}


export function fuzzy (hay = '', s = '') {
	if (s.length === 0) return true;
	if (hay.length === 0) return false;
	if (s.length > hay.length) return false;
	if (s === hay) return true;
	hay = hay.toLowerCase();
	let n = -1;
	for (const l of s) if (!~(n = hay.indexOf(l, n + 1))) return false;
	return true;
}


export function emphasize (str: string, q: string) {
	if (!q) return str;
	let idx = 0;
	const low = str.toLowerCase();

	// string includes the whole query block
	if (low.includes(q)) return str.replace(new RegExp(`(${q})`, 'ig'), '<b>$1</b>');

	// string includes the scattered query
	const stra = str.split('');
	q = q.toLowerCase();
	for (const l of q) {
		idx = low.indexOf(l, idx);
		const letter = stra[idx];
		if (letter) {
			stra.splice(idx, 1, `<b>${letter}</b>`);
			idx += 1;
		}
	}
	return stra.join('');
}
