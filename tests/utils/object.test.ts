import { expect, test } from 'vitest';

import * as utils from '../../src/utils';
import '../helpers/utils';




test('utils - empty', () => {
	expect(utils.empty()).toBe(true);
	expect(utils.empty('')).toBe(true);
	expect(utils.empty([])).toBe(true);
	expect(utils.empty({})).toBe(true);
	expect(utils.empty(null)).toBe(true);
	expect(utils.empty(undefined)).toBe(true);
	expect(utils.empty(0)).toBe(false);
	expect(utils.empty('a')).toBe(false);
	expect(utils.empty([1])).toBe(false);
	expect(utils.empty({ a: 1 })).toBe(false);
});


test('utils - isset', () => {
	expect(utils.isset()).toBe(false);
	expect(utils.isset('')).toBe(true);
	expect(utils.isset([])).toBe(true);
	expect(utils.isset({})).toBe(true);
	expect(utils.isset(null)).toBe(false);
	expect(utils.isset(undefined)).toBe(false);
	expect(utils.isset(0)).toBe(true);
	expect(utils.isset('a')).toBe(true);
	expect(utils.isset([1])).toBe(true);
	expect(utils.isset({ a: 1 })).toBe(true);
});



test('utils - pluckOne', () => {
	const obj = { a: 1, b: 2, c: 3, d: 4 };
	const objRes = { a: 1, c: 3 };
	const plucked = utils.pluck(obj, ['a', 'c']);
	expect(plucked).toEqual(objRes);

	const pluckedSimple = utils.pluck(obj, 'a');
	expect(pluckedSimple).toEqual(objRes.a);

	const pluckedEmpty = utils.pluck();
	expect(pluckedEmpty).toEqual({});
});
