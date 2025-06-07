import { fireEvent } from '@testing-library/svelte';
import { flushSync, mount, unmount } from 'svelte';
import { expect, test, vi } from 'vitest';
import { Combobox } from '../../src/input/combobox';


const items = [
	{ id: 1, name: 'Alpha', group: 'Group 1' },
	{ id: 2, name: 'Beta', group: 'Group 1' },
	{ id: 3, name: 'Gamma', group: 'Group 2' },
	{ id: 4, name: 'Delta', group: 'Group 2' },
];
const value = items[1];


test('Combobox', async () => {
	const props = $state({
		id: 'Component1',
		name: 'Component1',
		title: 'Component1',
		placeholder: 'Component1',
		class: 'test-class',
		required: true,
		label: 'Component1',
		error: 'error',
		info: '',
		items,
		value,
		onchange: vi.fn(),
	});

	const component = mount(Combobox, { target: document.body, props });

	const combobox = document.body.querySelector('.combobox');
	expect(combobox).toBeInTheDocument();
	expect(combobox).toHaveClass('test-class');

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();

	// verify props
	const input = document.body.querySelector(`[title="${props.title}"]`);
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('title', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('placeholder', 'Component1');
	expect(input).toHaveAttribute('aria-required');

	// open list
	await fireEvent.mouseDown(input);
	flushSync();

	// verify list
	const comboboxList = document.body.querySelector('.combobox-list');
	expect(comboboxList).toBeInTheDocument();
	expect(comboboxList).not.toHaveClass('hidden');
	expect(combobox).toHaveClass('open');

	const itemToClick = items[2].name;
	const item = Array.from(document.body.querySelectorAll('*')).find(el => el.textContent === itemToClick);
	expect(item).toBeInTheDocument();

	// click on list item
	await fireEvent.mouseUp(item);
	flushSync();

	// verify that the item was selected
	const comboboxListAfterClick = document.body.querySelector('.combobox-list');
	expect(comboboxListAfterClick).not.toBeInTheDocument();
	expect(combobox).not.toHaveClass('open');
	// @ts-ignore
	expect(input.value).toBe(itemToClick);
	// expect(props.onchange).toHaveBeenCalled();

	const lbl = cmp.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);

	let err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	props.error = '';
	flushSync();
	err = cmp.querySelector('.info-bar-error');
	// expect(err).not.toBeInTheDocument();

	props.info = 'info';
	flushSync();
	let info = cmp.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	props.info = '';
	flushSync();
	info = cmp.querySelector('.info-bar-info');
	expect(info).not.toBeInTheDocument();

	unmount(component);
});
