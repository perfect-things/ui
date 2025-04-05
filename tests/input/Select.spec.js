import { render, fireEvent } from '@testing-library/svelte';
import { Select } from '../../src/input/select';
import { waitForTimeout } from '../helpers/utils';

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
const props = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
	label: 'Component1',
	error: 'error',
	items: data,
	value
};


test('Select renders with correct props', async () => {
	const { container, component, getByTitle } = render(Select, props);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();

	const select = getByTitle('Component1');
	expect(select).toBeInTheDocument();

	expect(select).toHaveAttribute('id', 'Component1');
	expect(select).toHaveAttribute('title', 'Component1');
	expect(select).toHaveAttribute('name', 'Component1');
	expect(select).toHaveAttribute('aria-required');

	await fireEvent.click(select);
	await fireEvent.focus(select);
	await waitForTimeout();

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

	await component.$set({ error: '' });
	await waitForTimeout();
	err = cmp.querySelector('.info-bar-error');
	expect(err).not.toBeInTheDocument();

	await component.$set({ info: 'info' });
	let info = cmp.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	await component.$set({ info: '' });
	await waitForTimeout();
	info = cmp.querySelector('.info-bar-info');
	expect(info).not.toBeInTheDocument();
});


test('Select handles grouped items correctly', async () => {
	const { container } = render(Select, {
		items: data,
		value: data[0]
	});

	const select = container.querySelector('select');
	const optgroups = select.querySelectorAll('optgroup');

	expect(optgroups.length).toBe(2);

	expect(optgroups[0]).toHaveAttribute('label', 'Group 1');

	expect(optgroups[1]).toHaveAttribute('label', 'Group 2');

	const group1Options = optgroups[0].querySelectorAll('option');
	expect(group1Options.length).toBe(2);
	expect(group1Options[0].textContent).toBe('Alpha');
	expect(group1Options[1].textContent).toBe('Beta');

	const group2Options = optgroups[1].querySelectorAll('option');
	expect(group2Options.length).toBe(2);
	expect(group2Options[0].textContent).toBe('Gamma');
	expect(group2Options[1].textContent).toBe('Delta');
});


test('Select handles ungrouped items correctly', async () => {
	const { container } = render(Select, {
		items: ungroupedData,
		value: ungroupedData[0]
	});

	const select = container.querySelector('select');

	const optgroups = select.querySelectorAll('optgroup');
	expect(optgroups.length).toBe(0);

	const options = select.querySelectorAll('option');
	expect(options.length).toBe(4);

	expect(options[0].value).toBe('1');
	expect(options[0].textContent).toBe('Alpha');
	expect(options[1].value).toBe('2');
	expect(options[1].textContent).toBe('Beta');
});


test('Select works with string array data', async () => {
	const { container } = render(Select, {
		items: stringData,
		value: stringData[0]
	});

	const select = container.querySelector('select');
	const options = select.querySelectorAll('option');

	expect(options.length).toBe(4);

	expect(options[0].value).toBe('Alpha');
	expect(options[0].textContent).toBe('Alpha');
	expect(options[1].value).toBe('Beta');
	expect(options[1].textContent).toBe('Beta');
});


test('Select with placeholder shows placeholder option', async () => {
	const placeholderText = 'Select an option...';
	const { container } = render(Select, {
		items: ungroupedData,
		placeholder: placeholderText
	});

	const select = container.querySelector('select');
	const options = select.querySelectorAll('option');

	expect(options.length).toBe(5);

	expect(options[0].value).toBe('');
	expect(options[0].textContent).toBe(placeholderText);
});


test('Select handles disabled state', async () => {
	const { container } = render(Select, {
		items: data,
		disabled: true
	});

	const select = container.querySelector('select');
	expect(select).toBeDisabled();

	const inputInner = container.querySelector('.input-inner');
	expect(inputInner).toHaveClass('disabled');
});


test('Select handles value changes', async () => {
	const { container } = render(Select, {
		items: ungroupedData
	});

	const select = container.querySelector('select');

	await fireEvent.change(select, { target: { value: '2' } });
	await waitForTimeout();

	const selectedOption = Array.from(select.options).find(option => option.selected);
	expect(selectedOption?.textContent).toBe('Beta');
});


test('Select with labelOnTheLeft has correct class', async () => {
	const { container } = render(Select, {
		items: data,
		labelOnTheLeft: true
	});

	const selectContainer = container.querySelector('.input');
	expect(selectContainer).toHaveClass('label-on-the-left');

	const { container: container2 } = render(Select, {
		items: data,
		labelOnTheLeft: 'true'
	});

	const selectContainer2 = container2.querySelector('.input');
	expect(selectContainer2).toHaveClass('label-on-the-left');
});


test('Select without id generates a unique id', async () => {
	const { container: container1 } = render(Select, {
		items: data,
		name: 'testName'
	});

	const select1 = container1.querySelector('select');
	expect(select1.id).toBe('testName');

	const { container: container2 } = render(Select, {
		items: data
	});

	const select2 = container2.querySelector('select');
	expect(select2.id).toBeTruthy();
	expect(select2.id.length).toBeGreaterThan(0);
});


test('Select exposes element and inputElement references', async () => {
	const { component } = render(Select, {
		items: data
	});

	expect(component.element).toBeDefined();
	expect(component.inputElement).toBeDefined();

	expect(component.element.classList.contains('input')).toBe(true);
	expect(component.element.classList.contains('select')).toBe(true);
	expect(component.inputElement.tagName.toLowerCase()).toBe('select');
});


test('Select with error shows correct validation styling', async () => {
	const errorMessage = 'This field has an error';
	const { container } = render(Select, {
		items: data,
		error: errorMessage
	});

	const selectContainer = container.querySelector('.input');
	expect(selectContainer).toHaveClass('has-error');

	const errorElement = container.querySelector('.info-bar-error');
	expect(errorElement).toBeInTheDocument();
	expect(errorElement.textContent.trim()).toBe(errorMessage);

	const select = container.querySelector('select');
	expect(select).toHaveAttribute('aria-invalid', errorMessage);
	expect(select).toHaveAttribute('aria-errormessage');
});
