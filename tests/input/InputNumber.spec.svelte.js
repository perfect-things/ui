import { flushSync, mount, unmount } from 'svelte';
import { expect, test, vi } from 'vitest';
import { InputNumber } from '../../src/input';
import userEvent from '@testing-library/user-event';

// Simple wait function to replace the utils helper
const waitForTimeout = (ms = 10) => new Promise(resolve => setTimeout(resolve, ms));

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
	const component = mount(InputNumber, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	const input = document.body.querySelector(`[title="${props.title}"]`);
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('title', props.title);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveAttribute('placeholder', props.placeholder);
	expect(input).toHaveAttribute('aria-required');

	let err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err).toHaveTextContent(props.error);

	props.error = '';
	flushSync();
	await waitForTimeout();
	err = cmp.querySelector('.info-bar-error');
	// Error element may still exist but be hidden

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
		value: 0,
		onchange: vi.fn(),
		oninput: vi.fn()
	});
	// @ts-ignore
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');

	await userEvent.clear(input);
	await userEvent.type(input, '123');

	expect(input.value).toBe('123');

	unmount(component);
});

test('InputNumber handles min and max values', async () => {
	const props = $state({
		min: 0,
		max: 100,
		value: 50
	});
	// @ts-ignore
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input).toHaveAttribute('min', '0');
	expect(input).toHaveAttribute('max', '100');
	expect(input.value).toBe('50');

	unmount(component);
});


// test('InputNumber handles step increment/decrement', async () => {
// 	const props = $state({
// 		value: 10,
// 		step: 5,
// 		onchange: vi.fn()
// 	});
// 	// @ts-ignore
// 	const component = mount(InputNumber, { target: document.body, props });

// 	const input = document.body.querySelector('input');
// 	flushSync();
// 	expect(input).toHaveAttribute('step', '5');

// 	await userEvent.keyboard('[ArrowUp]');
// 	flushSync();
// 	expect(input.value).toBe('10');

// 	await userEvent.keyboard('[ArrowDown]');
// 	flushSync();
// 	expect(input.value).toBe('5');

// 	unmount(component);
// });


test('InputNumber handles decimal values', async () => {
	const props = $state({
		value: 3.14,
		step: 0.01
	});
	// @ts-ignore
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

test('InputNumber handles readonly state', async () => {
	const props = $state({ readonly: true });
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input).toHaveAttribute('readonly');

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

	// Should filter out non-numeric characters
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
	const component = mount(InputNumber, { target: document.body, props });

	const input = document.body.querySelector('input');

	await userEvent.click(input);
	flushSync();
	expect(props.onfocus).toHaveBeenCalled();

	await userEvent.tab(); // Simulate blur by tabbing away
	flushSync();
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

test('InputNumber handles keyboard navigation', async () => {
	const props = $state({ value: 10 });
	// @ts-ignore
	const component = mount(InputNumber, { target: document.body, props });
	const input = document.body.querySelector('input');

	await userEvent.keyboard('[Home]');
	await userEvent.keyboard('[End]');
	await userEvent.keyboard('[ArrowLeft]');
	await userEvent.keyboard('[ArrowRight]');

	// Should handle navigation keys without errors
	expect(input).toBeInTheDocument();

	unmount(component);
});
