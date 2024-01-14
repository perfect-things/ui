import { render, fireEvent } from '@testing-library/svelte';
import jest from 'jest-mock';
import { Combobox } from '../../src/input/combobox';
import { waitForTimeout } from '../helpers/utils';


const items = [
	{ id: 1, name: 'Alpha', group: 'Group 1' },
	{ id: 2, name: 'Beta', group: 'Group 1' },
	{ id: 3, name: 'Gamma', group: 'Group 2' },
	{ id: 4, name: 'Delta', group: 'Group 2' },
];
const value = items[1];
const props = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
	label: 'Component1',
	error: 'error',
	items,
	value
};


describe('Combobox single-select interactions', () => {
	let container, component, getByTitle, combobox, cmp, input, mock;

	beforeEach(() => {
		({ container, component, getByTitle } = render(Combobox, props));

		mock = jest.fn();
		component.$on('change', mock);
		combobox = container.querySelector('.combobox');
		cmp = container.querySelector('.test-class');
		input = getByTitle('Component1');
	});


	test('open list', async () => {
		expect(combobox).toBeInTheDocument();
		expect(cmp).toBeInTheDocument();
		expect(input).toBeInTheDocument();

		// open list
		await fireEvent.mouseDown(input);
		await waitForTimeout();
		const comboboxList = container.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		const comboboxListItems = comboboxList.querySelectorAll('.combobox-list-item');
		expect(comboboxListItems.length).toBe(items.length);
	});


	test('filter list and select', async () => {
		const itemToSelect = items[2].name;
		const firstLetters = itemToSelect.slice(0, 3);

		await fireEvent.input(input, { target: { value: firstLetters } });
		await waitForTimeout();

		const comboboxListItems = container.querySelectorAll('.combobox-list-item');
		expect(comboboxListItems.length).toBe(1);

		const comboboxList = container.querySelector('.combobox-list');
		await fireEvent.keyDown(input, { key: 'Enter' });
		await waitForTimeout();
		expect(comboboxList).not.toBeInTheDocument();
		expect(input.value).toBe(itemToSelect);
		expect(mock).toHaveBeenCalled();
	});


	test('reopen list with ArrowDown', async () => {
		expect(combobox).toBeInTheDocument();
		expect(cmp).toBeInTheDocument();
		expect(input).toBeInTheDocument();

		await fireEvent.keyDown(input, { key: 'ArrowDown' });
		await waitForTimeout();
		const comboboxList = container.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		await fireEvent.keyDown(input, { key: 'Escape' });
		await waitForTimeout();
		expect(comboboxList).not.toBeInTheDocument();
	});


	test('reopen list with ArrowUp', async () => {
		await fireEvent.keyDown(input, { key: 'ArrowUp' });
		await waitForTimeout();
		// list is destroyed when closed, so need to recapture it
		const comboboxList = container.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		await fireEvent.keyDown(input, { key: 'Escape' });
		await waitForTimeout();
		expect(comboboxList).not.toBeInTheDocument();
	});


	test('reopen list with a letter', async () => {
		const itemToSelect = items[2].name;
		const firstLetter = itemToSelect[0];
		await fireEvent.input(input, { target: { value: firstLetter } });
		await waitForTimeout();
		// list is destroyed when closed, so need to recapture it
		const comboboxList = container.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		// select first value on the filtered list
		await fireEvent.keyDown(input, { key: 'Enter' });
		await waitForTimeout();
		expect(comboboxList).not.toBeInTheDocument();
		expect(input.value).toBe(itemToSelect);
		expect(mock).toHaveBeenCalled();
	});

});
