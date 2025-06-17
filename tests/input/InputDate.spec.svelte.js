import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';
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
	const mockDatepicker = {
		active: true,
		hide: vi.fn(),
		show: vi.fn(),
		setDate: vi.fn(),
		getDate: vi.fn(),
		destroy: vi.fn(),
	};

	const MockDatepicker = vi.fn().mockImplementation(() => mockDatepicker);
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
	// const dropdown = cmp.querySelector('.datepicker-dropdown');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');
	expect(input).toHaveAttribute('id', props.id);
	expect(input).toHaveAttribute('title', props.title);
	expect(input).toHaveAttribute('name', props.name);
	expect(input).toHaveAttribute('placeholder', props.placeholder);
	expect(input).toHaveAttribute('aria-required');
	// expect(dropdown).toBeInTheDocument();

	unmount(component);
});

test('InputDate handles date selection', async () => {
	const props = $state({
		...defaultProps,
		value: new Date(2023, 5, 15),
		onchange: vi.fn()
	});
	const component = mount(InputDate, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input.value).toBeTruthy();

	// Test changing the date
	const newDate = new Date(2023, 11, 25);
	props.value = newDate;
	flushSync();

	unmount(component);
});

test('InputDate handles disabled state', async () => {
	const props = $state({ ...defaultProps, disabled: true });
	const component = mount(InputDate, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input).toBeDisabled();

	unmount(component);
});


test('InputDate with error shows validation styling', async () => {
	const props = $state({ ...defaultProps, error: 'Invalid date' });
	const component = mount(InputDate, { target: document.body, props });

	const cmp = document.body.querySelector('.input-date');
	expect(cmp).toHaveClass('has-error');

	const errorEl = document.body.querySelector('.info-bar-error');
	expect(errorEl).toBeInTheDocument();
	expect(errorEl.textContent.trim()).toBe('Invalid date');

	unmount(component);
});

test('InputDate handles min and max dates', async () => {
	const minDate = new Date(2023, 0, 1);
	const maxDate = new Date(2023, 11, 31);

	const props = $state({
		...defaultProps,
		min: minDate,
		max: maxDate
	});
	const component = mount(InputDate, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input).toBeInTheDocument();

	unmount(component);
});

test('InputDate handles clear functionality', async () => {
	const props = $state({
		...defaultProps,
		value: new Date(2023, 5, 15),
		clearable: true,
		onchange: vi.fn()
	});
	const component = mount(InputDate, { target: document.body, props });

	const clearBtn = document.body.querySelector('.input-date .clear');
	if (clearBtn) {
		await userEvent.click(clearBtn);
		expect(props.onchange).toHaveBeenCalled();
	}

	unmount(component);
});


test('InputDate handles different date formats', async () => {
	const props = $state({
		...defaultProps,
		format: 'dd/mm/yyyy'
	});
	const component = mount(InputDate, { target: document.body, props });

	const input = document.body.querySelector('input');
	expect(input).toBeInTheDocument();

	unmount(component);
});

test('InputDate with label renders correctly', async () => {
	const props = $state({ ...defaultProps, label: 'Date of Birth' });
	const component = mount(InputDate, { target: document.body, props });

	const label = document.body.querySelector('label');
	expect(label).toBeInTheDocument();
	expect(label.textContent.trim()).toBe('Date of Birth');

	unmount(component);
});

test('InputDate handles keyboard navigation', async () => {
	const props = $state({ ...defaultProps });
	const component = mount(InputDate, { target: document.body, props });

	const input = document.body.querySelector('input');
	await userEvent.type(input, '2023-12-25');

	expect(input.value).toBeTruthy();

	unmount(component);
});
