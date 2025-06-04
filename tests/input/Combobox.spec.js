import { render, fireEvent } from '@testing-library/svelte';
import { vi } from 'vitest';
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


test('Combobox', async () => {
	Object.defineProperty(Element.prototype, 'animate', { value: () => ({ cancel: vi.fn(), }) });

	const { baseElement, component, getByTitle, getByText } = render(Combobox, props);
	const mock = vi.fn();
	component.$on('change', mock);

	const combobox = baseElement.querySelector('.combobox');
	expect(combobox).toBeInTheDocument();
	expect(combobox).toHaveClass('test-class');

	const cmp = baseElement.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();

	// verify props
	const input = getByTitle('Component1');
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('title', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('placeholder', 'Component1');
	expect(input).toHaveAttribute('aria-required');

	// open list
	await fireEvent.mouseDown(input);
	await waitForTimeout();

	// verify list
	const comboboxList = baseElement.querySelector('.combobox-list');
	expect(comboboxList).toBeInTheDocument();
	expect(comboboxList).not.toHaveClass('hidden');
	expect(combobox).toHaveClass('open');

	const itemToClick = items[2].name;
	const item = getByText(itemToClick);
	expect(item).toBeInTheDocument();

	// click on list item
	await fireEvent.mouseUp(item);
	await waitForTimeout();

	// verify that the item was selected
	expect(comboboxList).not.toBeInTheDocument();
	expect(combobox).not.toHaveClass('open');
	expect(input.value).toBe(itemToClick);
	expect(mock).toHaveBeenCalled();

	const lbl = cmp.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);

	let err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	await component.$set({ error: '' });
	await waitForTimeout();
	err = cmp.querySelector('.info-bar-error');
	// expect(err).not.toBeInTheDocument();

	await component.$set({ info: 'info' });
	let info = cmp.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	await component.$set({ info: '' });
	await waitForTimeout();
	info = cmp.querySelector('.info-bar-info');
	expect(info).not.toBeInTheDocument();
});
