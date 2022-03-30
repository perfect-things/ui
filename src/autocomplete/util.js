export function groupData (items) {
	let nogroup = [];
	const _groups = {};
	items.forEach(item => {
		if (!item.group) return nogroup.push(item);
		_groups[item.group] = _groups[item.group] || { name: item.group, items: [] };
		_groups[item.group].items.push(item);
	});
	const groups = Object.values(_groups).filter(g => !!g.items.length);
	if (nogroup.length) groups.unshift({ items: nogroup });
	return groups;
}

export function highlight (listEl) {
	requestAnimationFrame(() => {
		const selectedEl = listEl.querySelector('.selected');
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

export function recalculateListPosition (listEl, inputEl, elevated) {
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
		listEl.style.width = inputBox.width + 'px';
		listEl.style.height = 'auto';
		const listBox = listEl.getBoundingClientRect();
		const listT = listBox.top;
		const listH = listBox.height;
		const winH = window.innerHeight;
		if (listT + listH + 10 > winH) {
			const maxH = Math.max(winH - listT - 10, 100);
			listEl.style.height = maxH + 'px';
		}
	});
}



// Handles arrays, objects, null, strings, numbers, (no Date)
export function deepCopy (o) {
	if (typeof o !== 'object'||o === null) return o;
	let newO, i;
	// handle case: array
	if (o instanceof Array) {
		let l = o.length;
		newO = [];
		for (i = 0; i < l; i++) newO[i] = deepCopy(o[i]);
		return newO;
	}
	// handle case: object
	newO = {};
	// eslint-disable-next-line no-prototype-builtins
	for (i in o) if (o.hasOwnProperty(i)) newO[i] = deepCopy(o[i]);
	return newO;
}


export function fuzzy (hay = '', s = '') {
	hay = hay.toLowerCase();
	s = s.toLowerCase();
	let n = -1;
	for (let l of s) if (!~(n = hay.indexOf(l, n + 1))) return false;
	return true;
}


export function emphasize (str, q) {
	if (!q) return str;
	str = '' + str;
	let idx = 0;
	let low = str.toLowerCase();

	// string includes the whole query block
	if (low.includes(q)) return str.replace(new RegExp(`(${q})`, 'ig'), '<b>$1</b>');

	// string includes the scattered query
	let stra = str.split('');
	q = q.toLowerCase();
	for (let l of q) {
		idx = low.indexOf(l, idx);
		let letter = stra[idx];
		if (letter) {
			stra.splice(idx, 1, `<b>${letter}</b>`);
			idx += 1;
		}
	}
	return stra.join('');
}
