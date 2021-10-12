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
