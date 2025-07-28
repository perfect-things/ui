/**
 * Creates a deep copy of an object, handling various JavaScript types including
 * arrays, dates, regular expressions, maps, sets, and nested objects.
 * @param {any} o - The object to copy
 * @returns {any} A deep copy of the input object
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const copy = deepCopy(original);
 * copy.b.c = 3; // original.b.c remains 2
 */
export function deepCopy (o: any): any {
	if (!o || typeof o !== 'object') return o;
	if (Array.isArray(o)) {
		const newO = [];
		for (let i = 0; i < o.length; i += 1) {
			const val = !o[i] || typeof o[i] !== 'object' ? o[i] : deepCopy(o[i]);
			newO[i] = val === undefined ? null : val;
		}
		return newO;
	}
	if (o instanceof Date) return new Date(o);
	if (o instanceof RegExp) return new RegExp(o);
	if (o instanceof Map) return new Map([...o]);
	if (o instanceof Set) return new Set([...o]);

	const newO = {};
	for (const i of Object.keys(o)) {
		const val = !o[i] || typeof o[i] !== 'object' ? o[i] : deepCopy(o[i]);
		if (val === undefined) continue;
		newO[i] = val;
	}
	return newO;
}


/**
 * Debounce a function to ensure it is not called more than once every `timeout` milliseconds.
 * @param func - The function to debounce.
 * @param timeout - The time in milliseconds to wait before calling the function again. Default is 300ms.
 * @returns {function} - A debounced version of the input function `func`.
 */
export function debounce (func, timeout = 300) {
	let timer;
	return function (...args) { // Use regular function instead of arrow function
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => func.apply(this, args), timeout);
	};
}

/**
 * Throttle a function to ensure it is not called more than once every `delay` milliseconds.
 * @param fn - The function to throttle.
 * @param delay - The minimum time in milliseconds that must pass before `fn` can be called again. Default is 300ms.
 * @returns {function} - A throttled version of the input function `fn`.
 */
export function throttle (fn, delay = 300) {
	let lastCalled = 0;
	return (...args) => {
		const now = new Date().getTime();
		if (now - lastCalled < delay) return;
		lastCalled = now;
		return fn(...args);
	};
}

/**
 * Fuzzy search for a string within another string.
 * @param hay - The string to search within. (haystack)
 * @param s - The string to search for within `hay`.
 * @returns {boolean} - Returns true if `s` can be found in `hay` in order, false otherwise.
 */
export function fuzzy (hay = '', s = ''): boolean {
	if (s.length === 0) return true;
	if (hay.length === 0) return false;
	if (s.length > hay.length) return false;
	hay = hay.toLowerCase();
	s = s.toLowerCase();
	if (s === hay) return true;
	let n = -1;
	for (const l of s) if (!~(n = hay.indexOf(l, n + 1))) return false;
	return true;
}

/**
 * Generates a random UUID (Universally Unique Identifier).
 * @returns {string} - A random UUID in the format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.
 */
export function guid (): string {
	if (window.crypto?.randomUUID) return window.crypto.randomUUID();
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

/**
 * Rounds a number to a specified precision and returns it as a string.
 * @param val - The number to round.
 * @param precision - The number of decimal places to round to (default is 2).
 * @returns {string} - The rounded number as a string, formatted to the specified precision.
 */
export function roundAmount (val: number, precision = 2): string {
	const multiplier = Math.pow(10, precision);
	return (Math.round(val * multiplier) / multiplier).toFixed(precision);
}

/**
 *  Checks if a given color in hexadecimal format is dark.
 * @param hex - The color in hexadecimal format (e.g., '#000000' or '000000').
 * @returns {boolean} - Returns true if the color is dark, false otherwise.
 */
export function isColorDark (hex: string): boolean {
	hex = (hex[0] === '#') ? hex.slice(1) : hex;
	if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	if (hex.length !== 6) return false;

	const r = parseInt(hex.substring(0, 2), 16); // red
	const g = parseInt(hex.substring(2, 4), 16); // green
	const b = parseInt(hex.substring(4, 6), 16); // blue
	if (isNaN(r) || isNaN(g) || isNaN(b)) return false;

	const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
	return isNaN(brightness) ? false : brightness < 140;
}
