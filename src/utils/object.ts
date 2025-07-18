
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
 * Get a value from an object for a given path
 * @param  {object} obj - The object to search
 * @param {string} path - e.g. child[4]['some name'][2].property
 * @param {any} defaultValue - The default value to return if the path does not exist
 * @returns {*}
 */
export function getValueAtPath (obj: any, path: string, defaultValue: any = null): any {
	try {
		return path
			.replace(/^\./, '')                           // strip a leading dot
			.replace(/\[['"]?([\w\s]+)['"]?]/ig, '.$1')   // convert indexes to properties
			.split('.')
			.reduce((acc, key) => acc && acc[key], obj) || defaultValue;
	}
	catch {
		return defaultValue;
	}
}



/**
 * Sets a value at a specified path in an object.
 * @param {object} obj - The object to modify
 * @param {string} path - The path to the property, e.g. child[4]['some name'][2].property
 * @param {any} value - The value to set at the specified path
 * @returns {boolean}
 */
export function setValueAtPath (obj: any, path: string, value: any): boolean {
	const keys = path
		.replace(/^\./, '')
		.replace(/\[['"]?([\w\s]+)['"]?]/ig, '.$1')
		.split('.');
	const lastKey = keys.pop();
	const lastObj = keys.reduce((acc, key) => {
		if (typeof acc[key] === 'object') return acc[key];
		return acc[key] = {};
	}, obj);
	if (!lastObj) return false;

	lastObj[lastKey] = value;
	return true; // Add this line
}



/**
 * Checks if a value is empty.
 * Returns true for null, undefined, empty string, empty array, or empty object.
 * @param {any} v - The value to check
 * @returns {boolean} True if the value is empty, false otherwise
 * @example
 * empty(null) // true
 * empty('') // true
 * empty([]) // true
 * empty({}) // true
 * empty('hello') // false
 */
export function empty (v?: any): boolean {
	if (v === null || typeof v === 'undefined') return true;
	if (v === '') return true;
	if (Array.isArray(v) && v.length === 0) return true;
	return (typeof v === 'object' && Object.keys(v).length === 0);
}



/**
 * Checks if a value is set (not undefined and not null).
 * @param {any} v - The value to check
 * @returns {boolean} True if the value is set, false if undefined or null
 * @example
 * isset('hello') // true
 * isset(0) // true
 * isset(false) // true
 * isset(null) // false
 * isset(undefined) // false
 */
export function isset (v?: any): boolean {
	return typeof v !== 'undefined' && v !== null;
}



/**
 * Extracts a single property from an object if it exists.
 * @private
 * @param {object} obj - The source object
 * @param {string} key - The property key to extract
 * @returns {any} The value of the property if it exists, undefined otherwise
 */
function pluckOne (obj: any, key: string): any {
	if (key in obj) return obj[key];
}



/**
 * Extracts multiple properties from an object into a new object.
 * @private
 * @param {object} obj - The source object
 * @param {string[]} keys - Array of property keys to extract
 * @returns {object} A new object containing only the specified properties
 */
function pluckMany (obj: any, keys: string[]): any {
	const newObj = {};
	keys.forEach(key => {
		if (key in obj) newObj[key] = obj[key];
	});
	return newObj;
}



/**
 * Extracts one or more properties from an object.
 * If keys is a string, returns the value of that property.
 * If keys is an array, returns a new object with only those properties.
 * @param {object} obj - The source object
 * @param {string|string[]} keys - The property key(s) to extract
 * @returns {any|object} The extracted value(s) or an empty object if obj is falsy
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * pluck(obj, 'a') // 1
 * pluck(obj, ['a', 'c']) // { a: 1, c: 3 }
 */
export function pluck (obj?: any, keys?: string | string[]): any {
	if (!obj) return {};
	if (!Array.isArray(keys)) return pluckOne(obj, keys);
	return pluckMany(obj, keys);
}
