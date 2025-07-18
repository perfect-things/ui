import { expect, describe, it } from 'vitest';

import '../helpers/utils';
import * as utils from '../../src/utils';



describe('utils - deepCopy', () => {
	it('should return a deep copy of an array', () => {
		const arr = [1, 2, { a: 3 }];
		const copy = utils.deepCopy(arr);
		expect(copy).toEqual(arr);
		expect(copy).not.toBe(arr);
		expect(copy[2]).not.toBe(arr[2]);
	});

	it('should return a deep copy of an object', () => {
		const obj = { a: 1, b: { c: 2 } };
		const copy = utils.deepCopy(obj);
		expect(copy).toEqual(obj);
		expect(copy).not.toBe(obj);
		expect(copy.b).not.toBe(obj.b);
	});

	it('should return a new instance of a Date object', () => {
		const date = new Date();
		const copy = utils.deepCopy(date);
		expect(copy).toEqual(date);
		expect(copy).not.toBe(date);
	});

	it('should return a new instance of a RegExp object', () => {
		const regex = /test/gi;
		const copy = utils.deepCopy(regex);
		expect(copy).toEqual(regex);
		expect(copy).not.toBe(regex);
	});

	it('should return a new instance of a Map object', () => {
		const map = new Map();
		map.set('key', 'value');
		const copy = utils.deepCopy(map);
		expect(copy).toEqual(map);
		expect(copy).not.toBe(map);
	});

	it('should return a new instance of a Set object', () => {
		const set = new Set([1, 2, 3]);
		const copy = utils.deepCopy(set);
		expect(copy).toEqual(set);
		expect(copy).not.toBe(set);
	});

	it('should return the same value for primitive values', () => {
		expect(utils.deepCopy(null)).toBe(null);
		expect(utils.deepCopy(undefined)).toBe(undefined);
		expect(utils.deepCopy(10)).toBe(10);
		expect(utils.deepCopy('test')).toBe('test');
	});
});
