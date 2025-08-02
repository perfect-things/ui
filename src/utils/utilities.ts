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
