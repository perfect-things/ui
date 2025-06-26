import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import * as utils from '../../src/input/combobox/utils';
import { offsetHeight, offsetTop } from '../helpers/utils';

const arr = [
	{ id: 1, name: 'Alpha', group: 'Group 1' },
	{ id: 2, name: 'Beta', group: 'Group 1' },
	{ id: 3, name: 'Gamma', group: 'Group 2' },
	{ id: 4, name: 'Delta', group: 'Group 2' },
	{ id: 5, name: 'Epsilon' },
	{ id: 6, name: 'Zeta' }
];
const groupedData = [
	{ items: [
		{ id: 5, name: 'Epsilon', idx: 0 },
		{ id: 6, name: 'Zeta', idx: 1 }
	] },
	{ name: 'Group 1', items: [
		{ id: 1, name: 'Alpha', group: 'Group 1', idx: 2 },
		{ id: 2, name: 'Beta', group: 'Group 1', idx: 3 }
	] },
	{ name: 'Group 2', items: [
		{ id: 3, name: 'Gamma', group: 'Group 2', idx: 4 },
		{ id: 4, name: 'Delta', group: 'Group 2', idx: 5 }
	] }
];


let raf;

test('Combobox-utils', () => {
	expect(utils).toBeDefined();
});

beforeEach(() => {
	// @ts-ignore
	raf = vi.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
});

afterEach(() => {
	raf.mockRestore();
});


test('Combobox-utils - groupData', () => {
	const arr2 = utils.groupData(arr);
	expect(arr2).toEqual(groupedData);
});


test('Combobox-utils - scrollToSelectedItem', () => {
	// make a list wrapper
	const listEl = document.createElement('div');
	offsetHeight(listEl, 100);
	// @ts-ignore
	listEl.scrollTo = ({ top }) => listEl.scrollTop = top;
	document.body.appendChild(listEl);

	// make 11 list items
	for (let i = 0; i <= 10; i++) {
		const el = document.createElement('div');
		offsetTop(el, i * 50);
		offsetHeight(el, 50);
		listEl.appendChild(el);
	}

	// select 1st item
	let selectedEl = listEl.children[0];
	utils.scrollToSelectedItem(listEl);	// just tests the lack of the selected item

	// scroll to the end
	listEl.scrollTop = 500;
	selectedEl.classList.add('selected');

	utils.scrollToSelectedItem(listEl);
	expect(listEl.scrollTop).toBe(-3);

	selectedEl.classList.remove('selected');

	// select last item
	selectedEl = listEl.children[listEl.children.length - 1];
	selectedEl.classList.add('selected');

	utils.scrollToSelectedItem(listEl);
	expect(listEl.scrollTop).toBe(456);
});


test('Combobox-utils - emphasize', () => {
	expect(utils.emphasize('abc')).toBe('abc');
	expect(utils.emphasize('abc', 'ab')).toBe('<b>ab</b>c');
	expect(utils.emphasize('abc', 'bc')).toBe('a<b>bc</b>');
	expect(utils.emphasize('abc', 'AB')).toBe('<b>a</b><b>b</b>c');
	expect(utils.emphasize('ABC', 'ac')).toBe('<b>A</b>B<b>C</b>');
	expect(utils.emphasize('ABC', 'ad')).toBe('<b>A</b>BC');
});




test('Combobox-utils - findValueInSource', () => {
	const items = [
		{ id: 1, name: 'Item 1' },
		{ id: 2, name: 'Item 2' },
		{ id: 3, name: 'Item 3' },
	];
	const names = items.map(i => i.name);

	// primitives
	expect(utils.findValueInSource(null, items)).toBe(null);
	expect(utils.findValueInSource(undefined, items)).toBe(undefined);
	expect(utils.findValueInSource('', items)).toBe('');

	// strings
	expect(utils.findValueInSource(names[0], names)).toEqual(names[0]);
	expect(utils.findValueInSource(names[1], names)).toEqual(names[1]);

	// objects
	expect(utils.findValueInSource(items[0].id, items)).toEqual(items[0]);
	expect(utils.findValueInSource(items[1], items)).toEqual(items[1]);

	// multiselect strings
	expect(utils.findValueInSource(names[0], names)).toEqual(names[0]);
	expect(utils.findValueInSource(names[2], names)).toEqual(names[2]);
	expect(utils.findValueInSource([names[1], names[2]], names)).toEqual([names[1], names[2]]);

	// multiselect objects
	expect(utils.findValueInSource([items[0].id, items[1].id], items)).toEqual([items[0], items[1]]);
	expect(utils.findValueInSource([items[0], items[1]], items)).toEqual([items[0], items[1]]);
});



describe('utils - getInputValue', () => {
	test('should return the name property if it exists and multiselect is false', () => {
		expect(utils.getInputValue({ name: 'test' }, false)).toBe('test');
	});

	test('should return the value itself if it is not an object and multiselect is false', () => {
		expect(utils.getInputValue('test', false)).toBe('test');
	});

	test('should return an empty string if the value is undefined or null and multiselect is false', () => {
		expect(utils.getInputValue(undefined, false)).toBe('');
		expect(utils.getInputValue(null, false)).toBe('');
	});

	test('should return a comma-separated string of names if the value is an array and multiselect is true', () => {
		expect(utils.getInputValue([{ name: 'test1' }, { name: 'test2' }], true)).toBe('test1, test2');
	});

	test('should return a comma-separated string of values if the value is an array of non-objects and multiselect is true', () => {
		expect(utils.getInputValue(['test1', 'test2'], true)).toBe('test1, test2');
	});

	test('should return the name property if the value is a single object and multiselect is true', () => {
		expect(utils.getInputValue({ name: 'test' }, true)).toBe('test');
	});

	test('should return the value itself if it is a single non-object value and multiselect is true', () => {
		expect(utils.getInputValue('test', true)).toBe('test');
	});
});


describe('utils - hasValueChanged', () => {
	test('should return false if both values are the same and multiselect is false', () => {
		expect(utils.hasValueChanged('a', 'a', false)).toBe(false);
	});

	test('should return true if values are different and multiselect is false', () => {
		expect(utils.hasValueChanged('a', 'b', false)).toBe(true);
	});

	test('should return false if both values are the same arrays and multiselect is true', () => {
		expect(utils.hasValueChanged(['a', 'b'], ['a', 'b'], true)).toBe(false);
	});

	test('should return true if arrays have different lengths and multiselect is true', () => {
		expect(utils.hasValueChanged(['a', 'b'], ['a', 'b', 'c'], true)).toBe(true);
	});

	test('should return true if arrays have the same length but different elements and multiselect is true', () => {
		expect(utils.hasValueChanged(['a', 'b'], ['a', 'c'], true)).toBe(true);
	});

	test('should return false if both values are the same non-array values and multiselect is true', () => {
		expect(utils.hasValueChanged('a', 'a', true)).toBe(false);
	});

	test('should return true if values are different non-array values and multiselect is true', () => {
		expect(utils.hasValueChanged('a', 'b', true)).toBe(true);
	});

	test('should return false if one value is not an array and the other is, and multiselect is true', () => {
		expect(utils.hasValueChanged('a', ['a'], true)).toBe(false);
	});
});
