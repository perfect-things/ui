import { flushSync, mount, unmount } from 'svelte';
import { expect, test, vi } from 'vitest';
import { InputNumber } from '../../src/input';
import userEvent from '@testing-library/user-event';


const defaultProps = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
	error: 'error',
	label: 'Component1',
};


test('InputNumber renders with correct props', async () => {
	const props = $state({ ...defaultProps, onchange: vi.fn() });
	const component = await mount(InputNumber, { target: document.body, props });

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

	// @ts-ignore
	props.info = 'info';
	flushSync();
	const info = cmp.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info).toHaveTextContent('info');

	unmount(component);
});


test('InputNumber handles numeric input', async () => {
	const props = $state({
		value: '0',
		onchange: vi.fn(),
		onkeydown: vi.fn()
	});
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');

	await userEvent.clear(input);
	await userEvent.type(input, '123');

	expect(input.value).toBe('123');

	unmount(component);
});


test('InputNumber handles min and max values', async () => {
	const props = $state({
		min: '0',
		max: '100',
		value: '50'
	});
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input).toHaveAttribute('min', '0');
	expect(input).toHaveAttribute('max', '100');
	expect(input.value).toBe('50');

	unmount(component);
});


test('InputNumber handles decimal values', async () => {
	const props = $state({
		value: '3.14',
		step: '0.01'
	});
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input.value).toBe('3.14');
	expect(input).toHaveAttribute('step', '0.01');

	unmount(component);
});


test('InputNumber handles disabled state', async () => {
	const props = $state({ disabled: true });
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input).toBeDisabled();

	unmount(component);
});


test('InputNumber validates numeric input', async () => {
	const props = $state({
		value: null,
		oninput: vi.fn()
	});
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');

	// Try to input non-numeric characters
	await userEvent.type(input, 'abc');
	expect(input.value).not.toBe('abc');

	unmount(component);
});


test('InputNumber handles value binding', async () => {
	const props = $state({ value: 42 });
	// @ts-ignore
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input.value).toBe('42');

	props.value = 84;
	flushSync();
	expect(input.value).toBe('84');

	unmount(component);
});


test('InputNumber handles negative values', async () => {
	const props = $state({
		value: -50,
		min: -100
	});
	// @ts-ignore
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input.value).toBe('-50');
	expect(input).toHaveAttribute('min', '-100');

	unmount(component);
});


test('InputNumber handles focus and blur events', async () => {
	const props = $state({
		onfocus: vi.fn(),
		onblur: vi.fn()
	});
	// @ts-ignore
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');

	await userEvent.click(input);
	expect(props.onfocus).toHaveBeenCalled();

	await userEvent.tab(); // Simulate blur by tabbing away
	expect(props.onblur).toHaveBeenCalled();

	unmount(component);
});


test('InputNumber with error shows validation styling', async () => {
	const props = $state({ error: 'Invalid number' });
	const component = mount(InputNumber, { target: document.body, props });

	const cmp = document.body.querySelector('.input-number');
	expect(cmp).toHaveClass('has-error');

	const errorEl = document.body.querySelector('.info-bar-error');
	expect(errorEl).toBeInTheDocument();
	expect(errorEl.textContent.trim()).toBe('Invalid number');

	unmount(component);
});
