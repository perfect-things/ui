import type { InputProps } from '../../src/input/types';
import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';
import { InputText } from '../../src/input';
import { expect, test, vi } from 'vitest';


const defaultProps = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
	error: 'error',
	info: '',
	label: 'Component1',
};



test('InputText renders with correct props', async () => {
	const props = $state({ ...defaultProps, onchange: vi.fn() });
	const component = mount(InputText, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');
	expect(cmp).toHaveAttribute('title', props.title);

	const input = cmp.querySelector('input');
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveAttribute('placeholder', props.placeholder);
	expect(input).toHaveAttribute('aria-required');

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

	const lbl = cmp.querySelector('label');
	expect(lbl).toBeInTheDocument();
	expect(lbl).toHaveAttribute('for', props.id);
	expect(lbl).toHaveTextContent(props.label);

	await unmount(component);
});


test('InputText handles input events', async () => {
	const user = userEvent.setup();
	const props = $state({ value: '', onchange: vi.fn(), oninput: vi.fn() });
	const component = mount(InputText, { target: document.body, props });

	const input = document.body.querySelector('input');

	await user.clear(input);
	await user.type(input, 'test input');
	expect(props.oninput).toHaveBeenCalled();
	expect(input.value).toBe('test input');

	await user.click(document.body);
	expect(props.onchange).toHaveBeenCalled();

	await unmount(component);
});


test('InputText handles disabled state', async () => {
	const props = $state({ disabled: true });
	const component = mount(InputText, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input).toBeDisabled();

	const inputInner = document.body.querySelector('.input-inner');
	expect(inputInner).toHaveClass('disabled');

	await unmount(component);
});


test('InputText binds value correctly', async () => {
	const user = userEvent.setup();
	const props = $state({ value: 'initial value' });
	const component = mount(InputText, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input.value).toBe('initial value');

	props.value = 'updated value';
	flushSync();
	expect(input.value).toBe('updated value');

	await user.clear(input);
	await user.type(input, 'input value');
	expect(input.value).toBe('input value');

	await unmount(component);
});


test('InputText with error shows correct validation styling', async () => {
	const errorMessage = 'This field has an error';
	const props = $state({ error: errorMessage });
	const component = mount(InputText, { target: document.body, props });

	const inputContainer = document.body.querySelector('.input');
	expect(inputContainer).toHaveClass('has-error');

	const errorElement = document.body.querySelector('.info-bar-error');
	expect(errorElement).toBeInTheDocument();
	expect(errorElement.textContent.trim()).toBe(errorMessage);

	const input = document.body.querySelector('input');
	expect(input).toHaveAttribute('aria-invalid', 'true');
	expect(input).toHaveAttribute('aria-errormessage');

	await unmount(component);
});


test('InputText with labelOnTheLeft has correct class', () => {
	const props1 = $state({ labelOnTheLeft: true });
	const component1 = mount(InputText, { target: document.body, props: props1 });

	const inputContainer = document.body.querySelector('.input');
	expect(inputContainer).toHaveClass('label-on-the-left');

	unmount(component1);

	const props2 = $state({ labelOnTheLeft: true }); // Changed from 'true' to true
	const component2 = mount(InputText, { target: document.body, props: props2 });
	const inputContainer2 = document.body.querySelector('.input');
	expect(inputContainer2).toHaveClass('label-on-the-left');

	unmount(component2);
});


test('InputText without id generates a unique id', () => {
	const props1 = $state({ name: 'testName' });
	const component1 = mount(InputText, { target: document.body, props: props1 });

	const input1 = document.body.querySelector('input');
	expect(input1.id).toBeDefined();

	unmount(component1);

	const props2 = $state({});
	const component2 = mount(InputText, { target: document.body, props: props2 });

	const input2 = document.body.querySelector('input');
	expect(input2.id).toBeTruthy();
	expect(input2.id.length).toBeGreaterThan(0);

	unmount(component2);
});


test('InputText exposes element and inputElement references', async () => {
	const props = $state({});
	const component = mount(InputText, { target: document.body, props });

	const element = document.body.querySelector('.input');
	expect(element.classList.contains('input')).toBe(true);
	expect(element.classList.contains('input-text')).toBe(true);

	const inputElement = document.body.querySelector('input');
	expect(inputElement.tagName.toLowerCase()).toBe('input');

	await unmount(component);
});


test('InputText with custom attributes passes them through to input element', async () => {
	const props: InputProps = $state({
		class: 'test-class',
		autocomplete: 'name',
		maxlength: 100,
		minlength: 3,
		pattern: '[A-Za-z]+',
		tabindex: 2,
		'data-testid': 'custom-input',
	});

	const component = mount(InputText, { target: document.body, props });
	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toHaveAttribute('data-testid', 'custom-input');

	const input = document.body.querySelector('input');
	expect(input).toHaveAttribute('autocomplete', 'name');
	expect(input).toHaveAttribute('maxlength', '100');
	expect(input).toHaveAttribute('minlength', '3');
	expect(input).toHaveAttribute('pattern', '[A-Za-z]+');
	expect(input).toHaveAttribute('tabindex', '2');

	await unmount(component);
});


test('InputText handles focus and blur events', async () => {
	const user = userEvent.setup();
	const props = $state({ class: 'test-input-1', onfocus: vi.fn(), onblur: vi.fn() });
	const component = mount(InputText, { target: document.body, props });

	const input = document.body.querySelector('.test-input-1 input');

	await user.click(input);
	expect(props.onfocus).toHaveBeenCalled();

	await user.click(document.body);
	expect(props.onblur).toHaveBeenCalled();

	await unmount(component);
});


test('InputText initializes with correct default value', () => {
	const props1 = $state({});
	const component1 = mount(InputText, { target: document.body, props: props1 });
	const input1 = document.body.querySelector('input');
	expect(input1.value).toBe('');

	unmount(component1);

	const props2 = $state({ value: 'test value' });
	const component2 = mount(InputText, { target: document.body, props: props2 });
	const input2 = document.body.querySelector('input');
	expect(input2.value).toBe('test value');

	unmount(component2);
});


test('InputText supports keyboard events', async () => {
	const user = userEvent.setup();
	const props = $state({ onkeydown: vi.fn() });
	const component = mount(InputText, { target: document.body, props });

	const input = document.body.querySelector('input');

	await user.click(input);
	await user.keyboard('A');


	expect(props.onkeydown).toHaveBeenCalled();

	await unmount(component);
});
