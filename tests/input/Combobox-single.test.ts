import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { mount, unmount } from 'svelte';
import { Combobox } from '../../src/input/combobox';


const items = [
	{ id: 1, name: 'Alpha', group: 'Group 1' },
	{ id: 2, name: 'Beta', group: 'Group 1' },
	{ id: 3, name: 'Gamma', group: 'Group 2' },
	{ id: 4, name: 'Delta', group: 'Group 2' },
];
const value = items[1];
const onchange = vi.fn();

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
	value,
	onchange,
};


describe('Combobox single-select interactions', () => {
	let component, cmp, input;
	const user = userEvent.setup();

	async function typeValue (str = '') {
		await user.click(input);

		await user.clear(input);
		input.value = str;
		input.dispatchEvent(new Event('input', { bubbles: true }));
	}


	beforeEach(() => {
		component = mount(Combobox, { target: document.body, props });
		cmp = document.body.querySelector('.combobox');
		input = document.body.querySelector('.combobox input');
	});

	afterEach(async () => {
		await unmount(component);
	});


	test('renders component', () => {
		expect(cmp).toBeInTheDocument();
		expect(cmp).toHaveClass('combobox');
		expect(cmp).toHaveClass('test-class');
		expect(cmp).toHaveAttribute('title', props.title);

		expect(input).toBeInTheDocument();
		expect(input).toHaveValue(value.name);
		expect(input).toHaveAttribute('id', props.id);
		expect(input).toHaveAttribute('name', props.name);
		expect(input).toHaveAttribute('role', 'combobox');
		expect(input).toHaveAttribute('autocomplete', 'off');
		expect(input).toHaveAttribute('placeholder', props.placeholder);
		expect(input).toHaveAttribute('aria-required');
		expect(input).toHaveAttribute('aria-invalid', 'true');
		expect(input).toHaveAttribute('aria-errormessage');
		expect(input).toHaveAttribute('aria-autocomplete', 'list');
		expect(input).toHaveAttribute('aria-controls');
		expect(input).toHaveAttribute('aria-expanded', 'false');
		expect(input).toHaveAttribute('aria-autocomplete', 'list');
	});


	test('open list', async () => {
		await user.click(input);

		const comboboxList = document.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		const comboboxListItems = comboboxList.querySelectorAll('.combobox-list-item');
		expect(comboboxListItems.length).toBe(items.length);
	});


	test('filter list and select', async () => {
		const itemToSelect = items[2].name;
		const firstLetters = itemToSelect.slice(0, 3);

		await typeValue(firstLetters);

		const comboboxListItems = document.querySelectorAll('.combobox-list-item');
		expect(comboboxListItems.length).toBe(1);

		const comboboxList = document.querySelector('.combobox-list');
		await user.keyboard('{Enter}');
		expect(comboboxList).not.toBeInTheDocument();
		expect(input.value).toBe(itemToSelect);
		expect(onchange).toHaveBeenCalled();
	});


	test('reopen list with ArrowDown', async () => {
		await user.click(input);

		await user.keyboard('{ArrowDown}');

		const comboboxList = document.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		await user.keyboard('{Escape}');
		expect(comboboxList).not.toBeInTheDocument();
	});


	test('reopen list with ArrowUp', async () => {
		await user.click(input);
		await user.keyboard('{ArrowUp}');

		// list is destroyed when closed, so need to recapture it
		const comboboxList = document.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		await user.keyboard('{Escape}');
		expect(comboboxList).not.toBeInTheDocument();
	});


	test('reopen list with a letter', async () => {
		const itemToSelect = items[2].name;
		const firstLetter = itemToSelect[0];

		await typeValue(firstLetter);

		// list is destroyed when closed, so need to recapture it
		const comboboxList = document.querySelector('.combobox-list');
		expect(comboboxList).toBeInTheDocument();

		// select first value on the filtered list
		await user.keyboard('{Enter}');

		expect(comboboxList).not.toBeInTheDocument();
		expect(input.value).toBe(itemToSelect);
		expect(onchange).toHaveBeenCalled();
	});

});
