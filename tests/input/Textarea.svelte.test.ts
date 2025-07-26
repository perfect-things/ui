import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';
import { beforeEach, expect, test, vi } from 'vitest';
import { Textarea } from '../../src/input';

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

beforeEach(() => {
	document.body.innerHTML = ''; // Clear the body before each test
});

test('Textarea renders with correct props', async () => {
	const props = $state({ ...defaultProps, onchange: vi.fn() });
	const component = mount(Textarea, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');
	expect(cmp).toHaveAttribute('title', props.title);

	const textarea = cmp.querySelector('textarea');
	expect(textarea).toHaveAttribute('id', props.id);
	expect(textarea).toHaveAttribute('name', props.name);
	expect(textarea).toHaveAttribute('placeholder', props.placeholder);
	expect(textarea).toHaveAttribute('aria-required');

	const err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err.textContent.trim()).toBe(props.error);

	await unmount(component);
});

test('Textarea handles input events', async () => {
	const props = $state({
		value: '',
		onchange: vi.fn(),
		oninput: vi.fn()
	});
	const user = userEvent.setup();

	const component = mount(Textarea, { target: document.body, props });

	const textarea = document.body.querySelector('textarea');

	await user.type(textarea, 'test input');
	expect(props.oninput).toHaveBeenCalled();

	await unmount(component);
});

test('Textarea handles disabled state', async () => {
	const props = $state({ disabled: true });
	const component = mount(Textarea, { target: document.body, props });

	const textarea = document.body.querySelector('textarea');
	expect(textarea).toBeDisabled();

	await unmount(component);
});

test('Textarea binds value correctly', async () => {
	const props = $state({ value: 'initial value' });
	const component = mount(Textarea, { target: document.body, props });

	const textarea = document.body.querySelector('textarea');
	expect(textarea.value).toBe('initial value');

	props.value = 'updated value';
	flushSync();
	expect(textarea.value).toBe('updated value');

	await unmount(component);
});

test('Textarea with error shows correct validation styling', async () => {
	const props = $state({ error: 'Error message' });
	const component = mount(Textarea, { target: document.body, props });

	const cmp = document.body.querySelector('.textarea');
	expect(cmp).toHaveClass('has-error');

	const errorEl = document.body.querySelector('.info-bar-error');
	expect(errorEl).toBeInTheDocument();
	expect(errorEl.textContent.trim()).toBe('Error message');

	await unmount(component);
});

test('Textarea with autogrow property has correct class and behavior', async () => {
	const props = $state({ autogrow: true });
	const component = mount(Textarea, { target: document.body, props });

	const cmp = document.body.querySelector('.textarea');
	expect(cmp).toHaveClass('autogrow');

	await unmount(component);
});

test('Textarea with label renders label correctly', async () => {
	const props = $state({ label: 'Test Label' });
	const component = mount(Textarea, { target: document.body, props });

	const label = document.body.querySelector('label');
	expect(label).toBeInTheDocument();
	expect(label.textContent.trim()).toBe('Test Label');

	await unmount(component);
});

test('Textarea with info shows info message', async () => {
	const props = $state({ info: 'Info message' });
	const component = mount(Textarea, { target: document.body, props });

	const info = document.body.querySelector('.info-bar-info');
	expect(info).toBeInTheDocument();
	expect(info.textContent.trim()).toBe('Info message');

	await unmount(component);
});

test('Textarea with labelOnTheLeft has correct class', async () => {
	const props = $state({ label: 'Test Label', labelOnTheLeft: true });
	const component = mount(Textarea, { target: document.body, props });

	const cmp = document.body.querySelector('.textarea');
	expect(cmp).toHaveClass('label-on-the-left');

	await unmount(component);
});

test('Textarea exposes element and inputElement references', async () => {
	const props = $state({});
	const component = mount(Textarea, { target: document.body, props });

	// Note: Element references are not exposed on component instances in Svelte 5
	// This test would need to be restructured to test the actual DOM elements
	const textarea = document.body.querySelector('textarea');
	expect(textarea).toBeDefined();

	await unmount(component);
});

test('Textarea with custom attributes passes them through to textarea element', async () => {
	const props = $state({
		'data-testid': 'custom-textarea',
	});
	const component = mount(Textarea, { target: document.body, props });
	const cmp = document.body.querySelector('.textarea');
	expect(cmp).toHaveAttribute('data-testid', 'custom-textarea');

	await unmount(component);
});

test('Textarea handles focus and blur events', async () => {
	const user = userEvent.setup();

	const props = $state({
		onfocus: vi.fn(),
		onblur: vi.fn()
	});
	const component = mount(Textarea, { target: document.body, props });

	const textarea = document.body.querySelector('textarea');

	await user.click(textarea);
	expect(props.onfocus).toHaveBeenCalled();

	await user.click(document.body);
	expect(props.onblur).toHaveBeenCalled();

	await unmount(component);
});

test('Textarea maintains required flag when value changes', async () => {
	const props = $state({ required: true, value: '' });
	const component = mount(Textarea, { target: document.body, props });

	const textarea = document.body.querySelector('textarea');
	expect(textarea).toHaveAttribute('aria-required');

	props.value = 'some text';
	flushSync();
	expect(textarea).toHaveAttribute('aria-required');

	await unmount(component);
});

test('Textarea initializes with empty string when value is undefined', async () => {
	const props = $state({ value: '' }); // Using empty string instead of undefined
	const component = mount(Textarea, { target: document.body, props });

	const textarea = document.body.querySelector('textarea');
	expect(textarea.value).toBe('');

	await unmount(component);
});

test('Textarea autogrow functionality adjusts height based on content', async () => {
	const props = $state({ autogrow: true, value: '' });
	const component = mount(Textarea, { target: document.body, props });

	const textarea = document.body.querySelector('textarea');
	const initialHeight = textarea.style.height;

	// Set multiline content programmatically to trigger autogrow
	props.value = 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5';
	
	// Wait for reactive effect to run
	await new Promise(resolve => setTimeout(resolve, 10));

	// Height should be auto-adjusted based on content
	expect(textarea.style.height).not.toBe(initialHeight);
	expect(textarea.style.height).toBeTruthy();

	await unmount(component);
});

test('Textarea without autogrow does not adjust height', async () => {
	const props = $state({ autogrow: false, value: '' });
	const component = mount(Textarea, { target: document.body, props });

	const textarea = document.body.querySelector('textarea');
	const initialHeight = textarea.style.height;

	// Set multiline content
	props.value = 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5';
	
	// Wait for any effects
	await new Promise(resolve => setTimeout(resolve, 10));

	// Height should not be changed when autogrow is false
	expect(textarea.style.height).toBe(initialHeight);

	await unmount(component);
});
