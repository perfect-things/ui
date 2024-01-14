import { alignItem } from '../../utils';

export function groupData (items) {
	const nogroup = [];
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


export function scrollToSelectedItem (listEl) {
	if (!listEl) return;
	requestAnimationFrame(() => {
		const selectedEl = listEl.querySelector('.selected');
		if (!selectedEl || !listEl.scrollTo) return;

		// going up
		const paddingTop = 3;
		let top = selectedEl.offsetTop - paddingTop;
		if (listEl.scrollTop > top) listEl.scrollTo({ top });

		// going down
		else {
			const paddingBottom = 6;
			top = selectedEl.offsetTop + selectedEl.offsetHeight - listEl.offsetHeight + paddingBottom;
			if (listEl.scrollTop < top) listEl.scrollTo({ top });
		}
	});
}


export function emphasize (str, q) {
	if (!q) return str;
	str = '' + str;
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



function findSourceItem (v, items) {
	v = v.id || v.name || v;
	const idx = items.findIndex(i => (i.id || i.name || i) === v);
	return items[idx];
}


export function findValueInSource (val, items) {
	if (!val) return val;
	if (!Array.isArray(val)) return findSourceItem(val, items);
	return val.map(v => findSourceItem(v, items));
}


export function getInputValue (_val, isMultiselect = false) {
	if (!isMultiselect) return _val?.name || _val || '';
	if (!Array.isArray(_val)) _val = [_val];
	return _val.map(i => i.name || i).join(', ');
}


export function alignDropdown (listElement, inputElement, e) {
	requestAnimationFrame(() => {
		alignItem({
			element: listElement,
			target: inputElement,
			setMinWidthToTarget: true,
			offsetH: -1
		});
		if (e && e.type === 'focus') inputElement.select();
	});
}


function hasSingleValueChanged (oldV, newV) {
	return (oldV?.id || oldV?.name || oldV) !== (newV?.id || newV?.name || newV);
}


export function hasValueChanged (oldV, newV, multiselect = false) {
	if (!multiselect) return hasSingleValueChanged(oldV, newV);

	if (!Array.isArray(oldV)) oldV = [oldV];
	if (!Array.isArray(newV)) newV = [newV];
	if (oldV.length !== newV.length) return true;
	for (let i = 0; i < newV.length; i++) {
		if (hasSingleValueChanged(oldV[i], newV[i])) return true;
	}
	return false;
}
