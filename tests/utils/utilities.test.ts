import { describe, expect, it, test } from 'vitest';

import * as utils from '../../src/utils';
import '../helpers/utils';



test('utils - matchMedia', () => {
	expect(utils.UI.ANIMATION_SPEED).toStrictEqual(0);
});



test('utils - fuzzy', () => {
	expect(utils.fuzzy()).toBe(true);
	expect(utils.fuzzy('')).toBe(true);
	expect(utils.fuzzy('', '')).toBe(true);
	expect(utils.fuzzy('a', '')).toBe(true);
	expect(utils.fuzzy('', 'a')).toBe(false);
	expect(utils.fuzzy('a', 'ab')).toBe(false);
	expect(utils.fuzzy('ab', 'ab')).toBe(true);

	expect(utils.fuzzy('abc', 'ab')).toBe(true);
	expect(utils.fuzzy('abc', 'bc')).toBe(true);
	expect(utils.fuzzy('abc', 'AB')).toBe(true);
	expect(utils.fuzzy('ABC', 'ac')).toBe(true);
	expect(utils.fuzzy('ABC', 'ad')).toBe(false);
});


test('utils - guid', () => {
	const id = utils.guid();
	expect(id).toBeTruthy();
	expect(id.length).toBe(36);
});



describe('isColorDark', () => {
	it('returns true for dark colors', () => {
		expect(utils.isColorDark('#333333')).toBe(true);
		expect(utils.isColorDark('#000000')).toBe(true);
	});

	it('returns false for light colors', () => {
		expect(utils.isColorDark('#ffffff')).toBe(false);
		expect(utils.isColorDark('#cccccc')).toBe(false);
	});

	it('handles shorthand hex colors', () => {
		expect(utils.isColorDark('#333')).toBe(true);
		expect(utils.isColorDark('#fff')).toBe(false);
	});

	it('handles invalid hex colors', () => {
		expect(utils.isColorDark('not a hex color')).toBe(false);
		expect(utils.isColorDark('#12345')).toBe(false);
		expect(utils.isColorDark('#gggggg')).toBe(false);
	});
});
