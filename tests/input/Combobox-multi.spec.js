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
	multiselect: true,
	items,
	value
};


describe('Combobox multi-select interactions', () => {
	let baseElement, component, getByTitle, combobox, cmp, input, mock;

	beforeEach(() => {
		({ baseElement, component, getByTitle } = render(Combobox, props));

		mock = jest.fn();
		component.$on('change', mock);
		combobox = baseElement.querySelector('.combobox');
		cmp = baseElement.querySelector('.test-class');
		input = getByTitle('Component1');
	});


	test('open list', async () => {
		expect(combobox).toBeInTheDocument();
		expect(combobox).toHaveClass('multiselect');

		expect(cmp).toBeInTheDocument();
		expect(input).toBeInTheDocument();

		// open list
		await fireEvent.mouseDown(input);
		await waitForTimeout();
		const comboboxList = baseElement.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();
		expect(comboboxList).toHaveClass('multiselect');

		const comboboxListItems = comboboxList.querySelectorAll('.combobox-list-item');
		expect(comboboxListItems.length).toBe(items.length);

		const comboboxListItemCheckbox = comboboxList.querySelectorAll('.combobox-list-item svg');
		expect(comboboxListItemCheckbox.length).toBe(items.length);
	});


	test('filter list and select', async () => {
		const itemToSelect = items[2].name;
		const firstLetters = itemToSelect.slice(0, 3);

		await fireEvent.input(input, { target: { value: firstLetters } });
		await waitForTimeout();

		const comboboxListItems = baseElement.querySelectorAll('.combobox-list-item');
		expect(comboboxListItems.length).toBe(1);

		const comboboxList = baseElement.querySelector('.combobox-list');
		await fireEvent.keyDown(input, { key: ' ' });
		await fireEvent.keyDown(input, { key: 'Enter' });
		await waitForTimeout();
		expect(comboboxList).not.toBeInTheDocument();

		const expectedValue = [value.name, itemToSelect].join(', ');
		expect(input.value).toBe(expectedValue);
		expect(mock).toHaveBeenCalled();
	});


	test('reopen list with ArrowDown and click', async () => {
		await fireEvent.keyDown(input, { key: 'ArrowDown' });
		await waitForTimeout();

		const comboboxList = baseElement.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		const item = baseElement.querySelectorAll('.combobox-list-item')[2];
		expect(item).toBeInTheDocument();
		expect(item).not.toHaveClass('checked');

		// click on list item to check it
		await fireEvent.mouseUp(item);
		await waitForTimeout();
		expect(comboboxList).toBeInTheDocument();
		expect(item).toHaveClass('checked');

		// close list
		await fireEvent.keyDown(input, { key: 'Escape' });
		await waitForTimeout();
		expect(comboboxList).not.toBeInTheDocument();
	});


	test('reopen list with ArrowUp', async () => {
		await fireEvent.keyDown(input, { key: 'ArrowUp' });
		await waitForTimeout();
		// list is destroyed when closed, so need to recapture it
		const comboboxList = baseElement.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		await fireEvent.keyDown(input, { key: 'Escape' });
		await waitForTimeout();
		expect(comboboxList).not.toBeInTheDocument();
	});


	test('reopen list with Enter', async () => {
		await fireEvent.keyDown(input, { key: 'Enter' });
		await waitForTimeout();
		// list is destroyed when closed, so need to recapture it
		const comboboxList = baseElement.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		await fireEvent.keyDown(input, { key: 'Escape' });
		await waitForTimeout();
		expect(comboboxList).not.toBeInTheDocument();
	});


	test('reopen list with a letter and select', async () => {
		const itemToSelect = items[2].name;
		const firstLetter = itemToSelect[0];
		await fireEvent.input(input, { target: { value: firstLetter } });
		await waitForTimeout();
		// list is destroyed when closed, so need to recapture it
		const comboboxList = baseElement.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		// select first value on the filtered list
		await fireEvent.keyDown(input, { key: ' ' });
		await fireEvent.keyDown(input, { key: 'Enter' });
		await waitForTimeout();
		expect(comboboxList).not.toBeInTheDocument();
		const expectedValue = [value.name, itemToSelect].join(', ');
		expect(input.value).toBe(expectedValue);
		expect(mock).toHaveBeenCalled();
	});

});
