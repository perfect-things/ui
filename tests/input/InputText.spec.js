import { render, fireEvent } from '@testing-library/svelte';
import { vi } from 'vitest';

import { InputText } from '../../src/input';
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



test('InputText renders with correct props', async () => {
	Object.defineProperty(Element.prototype, 'animate', { value: () => ({ cancel: vi.fn(), }) });

	const { container, component, getByTitle } = render(InputText, props);
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


test('InputText handles input events', async () => {
	const { container, component } = render(InputText, { value: '' });
	const changeMock = vi.fn();
	const inputMock = vi.fn();
	component.$on('change', changeMock);
	component.$on('input', inputMock);

	const input = container.querySelector('input');

	await fireEvent.input(input, { target: { value: 'test input' } });
	expect(inputMock).toHaveBeenCalled();
	expect(input.value).toBe('test input');

	await fireEvent.change(input, { target: { value: 'test change' } });
	expect(changeMock).toHaveBeenCalled();
	expect(input.value).toBe('test change');
});


test('InputText handles disabled state', async () => {
	const { container } = render(InputText, { disabled: true });

	const input = container.querySelector('input');
	expect(input).toBeDisabled();

	const inputInner = container.querySelector('.input-inner');
	expect(inputInner).toHaveClass('disabled');
});


test('InputText binds value correctly', async () => {
	const { container, component } = render(InputText, { value: 'initial value' });

	const input = container.querySelector('input');
	expect(input.value).toBe('initial value');

	await component.$set({ value: 'updated value' });
	expect(input.value).toBe('updated value');

	await fireEvent.input(input, { target: { value: 'input value' } });
	expect(input.value).toBe('input value');
});


test('InputText with error shows correct validation styling', async () => {
	const errorMessage = 'This field has an error';
	const { container } = render(InputText, { error: errorMessage });

	const inputContainer = container.querySelector('.input');
	expect(inputContainer).toHaveClass('has-error');

	const errorElement = container.querySelector('.info-bar-error');
	expect(errorElement).toBeInTheDocument();
	expect(errorElement.textContent.trim()).toBe(errorMessage);

	const input = container.querySelector('input');
	expect(input).toHaveAttribute('aria-invalid', errorMessage);
	expect(input).toHaveAttribute('aria-errormessage');
});


test('InputText with labelOnTheLeft has correct class', async () => {
	const { container } = render(InputText, { labelOnTheLeft: true });

	const inputContainer = container.querySelector('.input');
	expect(inputContainer).toHaveClass('label-on-the-left');

	const { container: container2 } = render(InputText, { labelOnTheLeft: 'true' });
	const inputContainer2 = container2.querySelector('.input');
	expect(inputContainer2).toHaveClass('label-on-the-left');
});


test('InputText without id generates a unique id', async () => {
	const { container: container1 } = render(InputText, {
		name: 'testName'
	});

	const input1 = container1.querySelector('input');
	expect(input1.id).toBeDefined();

	const { container: container2 } = render(InputText);

	const input2 = container2.querySelector('input');
	expect(input2.id).toBeTruthy();
	expect(input2.id.length).toBeGreaterThan(0);
});


test('InputText exposes element and inputElement references', async () => {
	const { component } = render(InputText);

	expect(component.element).toBeDefined();
	expect(component.inputElement).toBeDefined();

	expect(component.element.classList.contains('input')).toBe(true);
	expect(component.element.classList.contains('input-text')).toBe(true);
	expect(component.inputElement.tagName.toLowerCase()).toBe('input');
});


test('InputText with custom attributes passes them through to input element', async () => {
	const customProps = {
		autocomplete: 'name',
		maxlength: '100',
		minlength: '3',
		pattern: '[A-Za-z]+',
		tabindex: '2',
		'data-testid': 'custom-input',
	};

	const { container } = render(InputText, customProps);
	const input = container.querySelector('input');

	Object.entries(customProps).forEach(([key, value]) => {
		expect(input).toHaveAttribute(key, value);
	});
});


test('InputText handles focus and blur events', async () => {
	const { container, component } = render(InputText);
	const focusMock = vi.fn();
	const blurMock = vi.fn();
	component.$on('focus', focusMock);
	component.$on('blur', blurMock);

	const input = container.querySelector('input');

	await fireEvent.focus(input);
	expect(focusMock).toHaveBeenCalled();

	await fireEvent.blur(input);
	expect(blurMock).toHaveBeenCalled();
});


test('InputText initializes with correct default value', async () => {
	const { container: container1 } = render(InputText);
	const input1 = container1.querySelector('input');
	expect(input1.value).toBe('');

	const { container: container2 } = render(InputText, { value: 'test value' });
	const input2 = container2.querySelector('input');
	expect(input2.value).toBe('test value');
});


test('InputText supports keyboard events', async () => {
	const { container, component } = render(InputText);
	const keydownMock = vi.fn();
	component.$on('keydown', keydownMock);

	const input = container.querySelector('input');

	await fireEvent.keyDown(input, { key: 'A', code: 'KeyA' });
	expect(keydownMock).toHaveBeenCalled();
});
