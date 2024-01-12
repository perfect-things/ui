import jest from 'jest-mock';

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
	{ items: [{ id: 5, name: 'Epsilon' }, { id: 6, name: 'Zeta' }] },
	{ name: 'Group 1', items: [{ id: 1, name: 'Alpha', group: 'Group 1' }, { id: 2, name: 'Beta', group: 'Group 1' }] },
	{ name: 'Group 2', items: [{ id: 3, name: 'Gamma', group: 'Group 2' }, { id: 4, name: 'Delta', group: 'Group 2' }] }
];



beforeEach(() => {
	jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
});

afterEach(() => {
	window.requestAnimationFrame.mockRestore();
});


test('Combobox-utils - groupData', () => {
	const arr2 = utils.groupData(arr);
	expect(arr2).toEqual(groupedData);
});


test('Combobox-utils - highlight', () => {
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
