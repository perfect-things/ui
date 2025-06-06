import { render, fireEvent } from '@testing-library/svelte';
import { expect, test, vi } from 'vitest';
import { default as userEvent } from '@testing-library/user-event';
import { InputSearch } from '../../src/input';
import { waitForTimeout } from '../helpers/utils';


const props = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
	error: 'error',
	label: 'Component1',
};



test('InputSearch renders with correct props', async () => {
	Object.defineProperty(Element.prototype, 'animate', { value: () => ({ cancel: vi.fn(), }) });

	const { container, component, getByTitle } = render(InputSearch, props);
	const mock = vi.fn();
	component.$on('change', mock);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	const input = getByTitle(props.title);
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('title', props.title);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveAttribute('placeholder', props.placeholder);
	expect(input).toHaveAttribute('aria-required');

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

	const lbl = cmp.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);
});


test('InputSearch has the search icon', async () => {
	const { container } = render(InputSearch, props);

	const searchIcon = container.querySelector('.icon');
	expect(searchIcon).toBeInTheDocument();
});


test('InputSearch clear button clears the value', async () => {
	const { container, component } = render(InputSearch, props);
	const input = container.querySelector('input');
	const mockChange = vi.fn();
	component.$on('change', mockChange);

	await component.$set({ value: 'test search' });
	await waitForTimeout();
	expect(input).toHaveValue('test search');

	const cmp = container.querySelector('.input');
	expect(cmp).toHaveClass('has-value');

	const clearButton = container.querySelector('.input-search-button');
	expect(clearButton).toHaveClass('visible');

	await fireEvent.click(clearButton);
	await waitForTimeout();

	expect(input).toHaveValue('');

	expect(cmp).not.toHaveClass('has-value');

	expect(clearButton).not.toHaveClass('visible');
});


test('InputSearch handles Escape key to clear value', async () => {
	const { container, component } = render(InputSearch, props);
	const input = container.querySelector('input');

	await component.$set({ value: 'test search' });
	await waitForTimeout();
	expect(input).toHaveValue('test search');

	await fireEvent.keyDown(input, { key: 'Escape' });
	await waitForTimeout();

	expect(input).toHaveValue('');
});


test('InputSearch handles value binding', async () => {
	const { container, component } = render(InputSearch, props);
	const input = container.querySelector('input');

	expect(input).toHaveValue('');

	await component.$set({ value: 'search term' });
	await waitForTimeout();
	expect(input).toHaveValue('search term');

	await userEvent.clear(input);
	await userEvent.type(input, 'new search');
	expect(input).toHaveValue('new search');
});


test('InputSearch handles disabled state correctly', async () => {
	const { container } = render(InputSearch, {
		...props,
		disabled: true
	});

	const input = container.querySelector('input');
	const inputInner = container.querySelector('.input-inner');

	expect(input).toBeDisabled();
	expect(inputInner).toHaveClass('disabled');

	await userEvent.type(input, 'test');

	expect(input).toHaveValue('');

	const clearButton = container.querySelector('.input-search-button');
	expect(clearButton).not.toHaveClass('visible');
});


test('InputSearch with labelOnTheLeft has correct layout', async () => {
	const { container } = render(InputSearch, {
		...props,
		labelOnTheLeft: true
	});

	const inputContainer = container.querySelector('.input');
	expect(inputContainer).toHaveClass('label-on-the-left');

	const { container: container2 } = render(InputSearch, {
		...props,
		labelOnTheLeft: 'true'
	});

	const inputContainer2 = container2.querySelector('.input');
	expect(inputContainer2).toHaveClass('label-on-the-left');
});


test('InputSearch exposes element and inputElement references', async () => {
	const { component } = render(InputSearch, props);

	expect(component.element).toBeDefined();
	expect(component.inputElement).toBeDefined();

	expect(component.element.classList.contains('input')).toBe(true);
	expect(component.element.classList.contains('input-search')).toBe(true);
	expect(component.inputElement.tagName.toLowerCase()).toBe('input');
	expect(component.inputElement.type).toBe('search');
});


test('InputSearch without id generates a unique id', async () => {
	const { container: container1 } = render(InputSearch, {
		id: 'testId',
		title: 'Title'
	});

	const input1 = container1.querySelector('input');
	expect(input1.id).toBe('testId');

	const { container: container2 } = render(InputSearch, {
		title: 'Title'
	});

	const input2 = container2.querySelector('input');
	expect(input2.id).toBeTruthy();
	expect(input2.id.length).toBeGreaterThan(0);
	expect(input2.id).not.toBe(input1.id);
});


test('InputSearch with error shows correct validation styling', async () => {
	const errorMessage = 'Invalid search term';
	const { container } = render(InputSearch, {
		...props,
		error: errorMessage
	});

	const searchContainer = container.querySelector('.input');
	expect(searchContainer).toHaveClass('has-error');

	const errorElement = container.querySelector('.info-bar-error');
	expect(errorElement).toBeInTheDocument();
	expect(errorElement.textContent.trim()).toBe(errorMessage);

	const input = container.querySelector('input');
	expect(input).toHaveAttribute('aria-invalid', errorMessage);
	expect(input).toHaveAttribute('aria-errormessage');
});
