import userEvent from '@testing-library/user-event';
import { mount, unmount } from 'svelte';
import { beforeEach, expect, test, vi } from 'vitest';

import { InputDate } from '../../src/input/input-date';

const defaultProps = {
	title: 'Component1',
	id: 'Component1',
	name: 'Component1',
	placeholder: 'Component1',
	required: true,
	class: 'test-class',
	showOnFocus: true,
	useNativeOnMobile: false // Explicitly disable native mode for testing
};

vi.mock('vanillajs-datepicker', () => {
	const MockDatepicker = vi.fn().mockImplementation(function () {
		this.active = true;
		this.hide = vi.fn();
		this.show = vi.fn();
		this.setDate = vi.fn();
		this.getDate = vi.fn();
		this.destroy = vi.fn();
	});
	// @ts-ignore
	MockDatepicker.parseDate = vi.fn().mockImplementation(() => new Date(2020, 0, 1));
	// @ts-ignore
	MockDatepicker.formatDate = vi.fn().mockImplementation(() => '2020-01-01');

	return {
		Datepicker: MockDatepicker
	};
});


beforeEach(() => {
	document.body.innerHTML = '';
});



test('InputDate renders with correct basic props', async () => {
	const props = $state({ ...defaultProps, onchange: vi.fn() });
	const component = mount(InputDate, { target: document.body, props });

	const cmp = document.body.querySelector('.test-class');
	const input = cmp.querySelector('input');
	const dropdown = cmp.querySelector('.datepicker-dropdown');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');
	expect(cmp).toHaveAttribute('title', props.title);
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveAttribute('placeholder', props.placeholder);
	expect(input).toHaveAttribute('aria-required');
	expect(dropdown).not.toBeInTheDocument();

	// const btn = cmp.querySelector('.input-date-button');
	// await userEvent.click(btn);
	// expect(dropdown).toBeInTheDocument();

	await unmount(component);
});


test('InputDate handles disabled state', async () => {
	const props = $state({ ...defaultProps, disabled: true });
	const component = mount(InputDate, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input).toBeDisabled();

	await unmount(component);
});


test('InputDate handles date selection', async () => {
	const props = $state({ ...defaultProps, value: '2023-05-15', onchange: vi.fn() });
	const component = mount(InputDate, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input.value).toBeTruthy();

	// Test changing the date
	const newDate = '2023-05-25';
	// props.value = newDate;
	await userEvent.click(input);
	await userEvent.clear(input);
	await userEvent.type(input, newDate);
	await userEvent.keyboard('{Tab}');
	expect(input.value).toBe(newDate);

	await unmount(component);
});



test('InputDate with error shows validation styling', async () => {
	const props = $state({ ...defaultProps, error: 'Invalid date' });
	const component = mount(InputDate, { target: document.body, props });

	const cmp = document.body.querySelector('.input-date');
	expect(cmp).toHaveClass('has-error');

	const errorEl = document.body.querySelector('.info-bar-error');
	expect(errorEl).toBeInTheDocument();
	expect(errorEl.textContent.trim()).toBe('Invalid date');

	await unmount(component);
});


// test('InputDate handles min and max dates', async () => {
// 	const minDate = new Date(2023, 0, 1);
// 	const maxDate = new Date(2023, 11, 31);

// 	const props = $state({ ...defaultProps, min: minDate, max: maxDate });
// 	const component = mount(InputDate, { target: document.body, props });

// 	const input = document.body.querySelector('input');
// 	expect(input).toBeInTheDocument();

// 	await unmount(component);
// });


test('InputDate handles different date formats', async () => {
	const props = $state({ ...defaultProps, format: 'dd/mm/yyyy', value: '25/12/2023' });
	const component = mount(InputDate, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input).toBeInTheDocument();
	expect(input.value).toBe('25/12/2023');

	await unmount(component);
});


test('InputDate with label renders correctly', async () => {
	const props = $state({ ...defaultProps, label: 'Date of Birth' });
	const component = mount(InputDate, { target: document.body, props });

	const label = document.body.querySelector('label');
	expect(label).toBeInTheDocument();
	expect(label.textContent.trim()).toBe('Date of Birth');

	await unmount(component);
});


test('InputDate handles keyboard navigation', async () => {
	const props = $state({ ...defaultProps });
	const component = mount(InputDate, { target: document.body, props });

	const input = document.body.querySelector('input');
	await userEvent.type(input, '2023-12-25');
	await userEvent.keyboard('{Tab}');
	expect(input.value).toBe('2023-12-25');

	await unmount(component);
});
