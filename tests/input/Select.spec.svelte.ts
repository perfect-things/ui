import { beforeEach, expect, test, vi } from 'vitest';
import { flushSync, mount, unmount } from 'svelte';
import { Select } from '../../src/input/select';
import { fireEvent } from '@testing-library/svelte';


const data = [
	{ id: 1, name: 'Alpha', group: 'Group 1' },
	{ id: 2, name: 'Beta', group: 'Group 1' },
	{ id: 3, name: 'Gamma', group: 'Group 2' },
	{ id: 4, name: 'Delta', group: 'Group 2' },
];

const ungroupedData = [
	{ id: 1, name: 'Alpha' },
	{ id: 2, name: 'Beta' },
	{ id: 3, name: 'Gamma' },
	{ id: 4, name: 'Delta' },
];

const stringData = ['Alpha', 'Beta', 'Gamma', 'Delta'];

const value = data[1];
const defaultProps = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
	label: 'Component1',
	error: 'error',
	info: '',
	items: data,
	value
};


beforeEach(() => {
	document.body.innerHTML = '';
});


test('Select renders with correct props', async () => {
	const props = $state({ ...defaultProps, onchange: vi.fn() });
	const component = mount(Select, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();

	const select = document.body.querySelector(`[title="${props.title}"]`);
	expect(select).toBeInTheDocument();

	expect(select).toHaveAttribute('id', 'Component1');
	expect(select).toHaveAttribute('title', 'Component1');
	expect(select).toHaveAttribute('name', 'Component1');
	expect(select).toHaveAttribute('aria-required');

	await fireEvent.click(select);
	await fireEvent.focus(select);

	const opts = select.querySelectorAll('option');
	expect(opts.length).toBe(data.length + 1); // +1 for placeholder
	expect(opts[1]).toBeInTheDocument();
	expect(opts[1]).toHaveAttribute('value', '1');

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
	expect(err).not.toBeInTheDocument();

	props.info = 'info';
	flushSync();
	let info = cmp.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	props.info = '';
	flushSync();
	info = cmp.querySelector('.info-bar-info');
	expect(info).not.toBeInTheDocument();

	await unmount(component);
});


test('Select handles grouped items correctly', async () => {
	const props = $state({
		items: data,
		value: data[0]
	});
	const component = mount(Select, { target: document.body, props });

	const select = document.body.querySelector('select');
	const optgroups = select.querySelectorAll('optgroup');

	expect(optgroups.length).toBe(2);
	expect(optgroups[0]).toHaveAttribute('label', 'Group 1');
	expect(optgroups[1]).toHaveAttribute('label', 'Group 2');

	await unmount(component);
});


test('Select handles ungrouped items correctly', async () => {
	const props = $state({
		items: ungroupedData,
		value: ungroupedData[0]
	});
	const component = mount(Select, { target: document.body, props });

	const select = document.body.querySelector('select');
	const optgroups = select.querySelectorAll('optgroup');
	const options = select.querySelectorAll('option');

	expect(optgroups.length).toBe(0);
	expect(options.length).toBe(ungroupedData.length);

	await unmount(component);
});


test('Select handles string items correctly', async () => {
	const props = $state({
		items: stringData,
		value: stringData[0]
	});
	const component = mount(Select, { target: document.body, props });

	const options = document.body.querySelectorAll('select option');
	expect(options.length).toBe(stringData.length);
	expect(options[0]).toHaveTextContent(stringData[0]);
	expect(options[0]).toHaveAttribute('value', stringData[0]);

	await unmount(component);
});


test('Select shows placeholder when provided', async () => {
	const placeholderText = 'Choose an option';
	const props = $state({
		items: data,
		placeholder: placeholderText
	});
	const component = mount(Select, { target: document.body, props });

	const select = document.body.querySelector('select');
	const firstOption = select.querySelector('option');

	expect(firstOption).toHaveTextContent(placeholderText);
	expect(firstOption).toHaveAttribute('value', '');

	await unmount(component);
});


test('Select handles disabled state', async () => {
	const props = $state({
		items: data,
		disabled: true
	});
	const component = mount(Select, { target: document.body, props });

	const select = document.body.querySelector('select');
	expect(select).toBeDisabled();

	await unmount(component);
});


test('Select with labelOnTheLeft has correct class', () => {
	const props1 = $state({
		items: data,
		labelOnTheLeft: true
	});
	const component1 = mount(Select, { target: document.body, props: props1 });
	const selectContainer = document.body.querySelector('.input');
	expect(selectContainer).toHaveClass('label-on-the-left');
	unmount(component1);

	const props2 = $state({
		items: data,
		labelOnTheLeft: true // Changed from 'true' to true for type compatibility
	});
	const component2 = mount(Select, { target: document.body, props: props2 });
	const selectContainer2 = document.body.querySelector('.input');
	expect(selectContainer2).toHaveClass('label-on-the-left');
	unmount(component2);
});


test('Select without id generates a unique id', () => {
	const props1 = $state({
		items: data,
		id: 'testName',
		name: 'testName',
	});
	const component1 = mount(Select, { target: document.body, props: props1 });

	const select1 = document.body.querySelector('select');
	expect(select1.id).toBe('testName');

	unmount(component1);

	const props2 = $state({ items: data });
	const component2 = mount(Select, { target: document.body, props: props2 });

	const select2 = document.body.querySelector('select');
	expect(select2.id).toBeTruthy();
	expect(select2.id.length).toBeGreaterThan(0);

	unmount(component2);
});


test('Select exposes element and inputElement references', async () => {
	const props = $state({ items: data });
	const component = mount(Select, { target: document.body, props });
	const element = document.body.querySelector('.input');
	expect(element.classList.contains('input')).toBe(true);
	expect(element.classList.contains('select')).toBe(true);

	const inputElement = document.body.querySelector('select');
	expect(inputElement.tagName.toLowerCase()).toBe('select');

	await unmount(component);
});


test('Select with error shows correct validation styling', async () => {
	const errorMessage = 'This field has an error';
	const props = $state({
		items: data,
		error: errorMessage
	});
	const component = mount(Select, { target: document.body, props });

	const selectContainer = document.body.querySelector('.select');
	expect(selectContainer).toHaveClass('has-error');

	const errorElement = document.body.querySelector('.info-bar-error');
	expect(errorElement).toBeInTheDocument();
	expect(errorElement.textContent.trim()).toBe(errorMessage);

	const select = document.body.querySelector('select');
	expect(select).toHaveAttribute('aria-invalid', 'true');
	expect(select).toHaveAttribute('aria-errormessage');

	await unmount(component);
});
