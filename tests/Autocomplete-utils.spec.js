import { vi } from 'vitest';

import * as utils from '../src/autocomplete/utils';
import { offsetHeight, offsetTop } from './helpers/utils';

const arr = [
	{ id: 1, name: 'Alpha', group: 'Group 1' },
	{ id: 2, name: 'Beta', group: 'Group 1' },
	{ id: 3, name: 'Gamma', group: 'Group 2' },
	{ id: 4, name: 'Delta', group: 'Group 2' },
	{ id: 5, name: 'Epsilon' },
	{ id: 6, name: 'Zeta' }
];
const groupedData = [
	{ items: [{ id: 5, name: 'Epsilon' }, { id: 6, name: 'Zeta' }] },
	{ name: 'Group 1', items: [{ id: 1, name: 'Alpha', group: 'Group 1' }, { id: 2, name: 'Beta', group: 'Group 1' }] },
	{ name: 'Group 2', items: [{ id: 3, name: 'Gamma', group: 'Group 2' }, { id: 4, name: 'Delta', group: 'Group 2' }] }
];



beforeEach(() => {
	vi.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
});

afterEach(() => {
	vi.restoreAllMocks();
});


test('Autocomplete-utils - groupData', () => {
	const arr2 = utils.groupData(arr);
	expect(arr2).toEqual(groupedData);
});


test('Autocomplete-utils - highlight', () => {
	// make a list wrapper
	const listEl = document.createElement('div');
	offsetHeight(listEl, 100);
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
	utils.highlight(listEl);	// just tests the lack of the selected item

	// scroll to the end
	listEl.scrollTop = 500;
	selectedEl.classList.add('selected');

	utils.highlight(listEl);
	expect(listEl.scrollTop).toBe(-3);

	selectedEl.classList.remove('selected');

	// select last item
	selectedEl = listEl.children[listEl.children.length - 1];
	selectedEl.classList.add('selected');

	utils.highlight(listEl);
	expect(listEl.scrollTop).toBe(456);
});


test('Autocomplete-utils - quickPositionRecalc', () => {
	const listEl = { style: { top: '0px', left: '0px' } };
	const inputEl = {
		getBoundingClientRect: () => ({ top: 100, left: 100, height: 50, width: 50 })
	};

	utils.quickPositionRecalc(listEl, inputEl);
	expect(listEl.style.top).toBe('153px');
	expect(listEl.style.left).toBe('100px');
});


test('Autocomplete-utils - recalculateListPosition', () => {
	const inputEl = {
		getBoundingClientRect: () => ({ top: 700, left: 100, height: 30, width: 50 })
	};
	utils.recalculateListPosition(null, inputEl);
	const listEl = {
		getBoundingClientRect: () => ({ top: 730, left: 100, height: 100, width: 50 }),
		style: { top: '0px', left: '0px' }
	};

	utils.recalculateListPosition(listEl, inputEl);
	expect(listEl.style.top).toBe('-103px');
	expect(listEl.style.left).toBe('0px');
	expect(listEl.style.height).toBe('100px');

	utils.recalculateListPosition(listEl, inputEl, true);
	expect(listEl.style.top).toBe('597px');
	expect(listEl.style.left).toBe('100px');
	expect(listEl.style.height).toBe('100px');
});


test('Autocomplete-utils - deepCopy', () => {
	const obj = { a: 1, b: { c: 2 } };
	const obj2 = utils.deepCopy(obj);
	expect(obj2).toEqual(obj);
	expect(obj2).not.toBe(obj);
	expect(obj2.b).not.toBe(obj.b);
});


test('Autocomplete-utils - fuzzy', () => {
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


test('Autocomplete-utils - emphasize', () => {
	expect(utils.emphasize('abc')).toBe('abc');
	expect(utils.emphasize('abc', 'ab')).toBe('<b>ab</b>c');
	expect(utils.emphasize('abc', 'bc')).toBe('a<b>bc</b>');
	expect(utils.emphasize('abc', 'AB')).toBe('<b>a</b><b>b</b>c');
	expect(utils.emphasize('ABC', 'ac')).toBe('<b>A</b>B<b>C</b>');
	expect(utils.emphasize('ABC', 'ad')).toBe('<b>A</b>BC');
});
