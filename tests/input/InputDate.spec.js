import { render, fireEvent } from '@testing-library/svelte';
import { default as userEvent } from '@testing-library/user-event';
import jest from 'jest-mock';

import { InputDate } from '../../src/input/input-date';
import { waitForTimeout } from '../helpers/utils';

// Generic props used in multiple tests
const props = {
	title: 'Component1',
	id: 'Component1',
	name: 'Component1',
	placeholder: 'Component1',
	required: true,
	class: 'test-class',
	showOnFocus: true,
	useNativeOnMobile: false // Explicitly disable native mode for testing
};

test('InputDate renders with correct basic props', async () => {
	const { container, component } = render(InputDate, props);
	const mock = jest.fn();
	component.$on('change', mock);

	const cmp = container.querySelector('.test-class');
	const input = cmp.querySelector('input');
	const dropdown = cmp.querySelector('.datepicker-dropdown');

	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	expect(input).toBeInTheDocument();
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('placeholder', 'Component1');
	expect(input).toHaveAttribute('aria-required');

	expect(dropdown).toBeInTheDocument();
	expect(dropdown).not.toHaveClass('active');

	await fireEvent.focus(input);
	await waitForTimeout();
	expect(dropdown).toHaveClass('active');

	await userEvent.clear(input);
	await userEvent.type(input, '2020-01-01');
	await userEvent.keyboard('[Enter]');

	expect(mock).toHaveBeenCalled();
	expect(dropdown).not.toHaveClass('active');
});


test('InputDate shows error state correctly', async () => {
	const errorMessage = 'Please enter a valid date';
	const { container } = render(InputDate, {
		...props,
		error: errorMessage
	});

	const cmp = container.querySelector('.test-class');
	expect(cmp).toHaveClass('has-error');

	const input = cmp.querySelector('input');
	expect(input).toHaveAttribute('aria-invalid', errorMessage);

	const errorDisplay = cmp.querySelector('.info-bar-error');
	expect(errorDisplay).toBeInTheDocument();
	expect(errorDisplay.textContent.trim()).toBe(errorMessage);
});


test('InputDate handles info message display', async () => {
	const infoMessage = 'Enter date in YYYY-MM-DD format';
	const { container, component } = render(InputDate, {
		...props,
		info: infoMessage
	});

	const infoDisplay = container.querySelector('.info-bar-info');
	expect(infoDisplay).toBeInTheDocument();
	expect(infoDisplay.textContent.trim()).toBe(infoMessage);

	await component.$set({ info: '' });
	await waitForTimeout();

	const updatedInfoDisplay = container.querySelector('.info-bar-info');
	expect(updatedInfoDisplay).not.toBeInTheDocument();
});


test('InputDate handles disabled state', async () => {
	const { container } = render(InputDate, {
		...props,
		disabled: true
	});

	const cmp = container.querySelector('.test-class');
	const input = cmp.querySelector('input');
	const inputInner = cmp.querySelector('.input-inner');

	expect(input).toBeDisabled();
	expect(inputInner).toHaveClass('disabled');

	await fireEvent.focus(input);
	await waitForTimeout();

	const dropdown = container.querySelector('.datepicker-dropdown.active');
	expect(dropdown).not.toBeInTheDocument();
});


test('InputDate with labelOnTheLeft has correct layout', async () => {
	const { container } = render(InputDate, {
		...props,
		labelOnTheLeft: true
	});

	const cmp = container.querySelector('.test-class');
	expect(cmp).toHaveClass('label-on-the-left');
});


test('InputDate exposes element and inputElement references', async () => {
	const { component } = render(InputDate, props);

	expect(component.element).toBeDefined();
	expect(component.inputElement).toBeDefined();

	expect(component.element.classList.contains('input-date')).toBe(true);
	expect(component.inputElement.tagName.toLowerCase()).toBe('input');
});


test('InputDate calendar icon toggles the picker', async () => {
	const { container } = render(InputDate, props);

	const calendarButton = container.querySelector('.input-date-button');
	expect(calendarButton).toBeInTheDocument();

	const initialDropdown = container.querySelector('.datepicker-dropdown.active');
	expect(initialDropdown).not.toBeInTheDocument();

	await fireEvent.mouseDown(calendarButton);
	await fireEvent.click(calendarButton);
	await waitForTimeout();

	const openDropdown = container.querySelector('.datepicker-dropdown.active');
	expect(openDropdown).toBeInTheDocument();

	await fireEvent.mouseDown(calendarButton);
	await fireEvent.click(calendarButton);
	await waitForTimeout();

	const closedDropdown = container.querySelector('.datepicker-dropdown.active');
	expect(closedDropdown).not.toBeInTheDocument();
});


test('InputDate closes on Escape key press', async () => {
	const { container } = render(InputDate, props);
	const input = container.querySelector('input');

	await fireEvent.focus(input);
	await waitForTimeout();

	const openDropdown = container.querySelector('.datepicker-dropdown.active');
	expect(openDropdown).toBeInTheDocument();

	await fireEvent.keyDown(input, { key: 'Escape' });
	await waitForTimeout();

	const closedDropdown = container.querySelector('.datepicker-dropdown.active');
	expect(closedDropdown).not.toBeInTheDocument();
});


test('InputDate handles different date formats', async () => {
	const { container, component } = render(InputDate, {
		...props,
		format: 'dd/mm/yyyy'
	});

	const input = container.querySelector('input');

	await component.$set({ placeholder: 'dd/mm/yyyy' });
	await waitForTimeout();
	expect(input).toHaveAttribute('placeholder', 'dd/mm/yyyy');

	await userEvent.type(input, '15/03/2023');
	await userEvent.keyboard('[Enter]');
	await waitForTimeout();

	expect(input).toHaveValue('15/03/2023');
});


test('InputDate with custom ID generation', async () => {
	const { container: container1 } = render(InputDate, {
		name: 'dateField',
		title: 'Date Field',
		useNativeOnMobile: false
	});

	const input1 = container1.querySelector('input');
	expect(input1.id).toBe('dateField');

	const { container: container2 } = render(InputDate, {
		title: 'Date Field',
		useNativeOnMobile: false
	});

	const input2 = container2.querySelector('input');
	expect(input2.id).toBeTruthy();
	expect(input2.id.length).toBeGreaterThan(0);
	expect(input2.id).not.toBe(input1.id);
});


test('InputDate handles blur event', async () => {
	const { container, component } = render(InputDate, props);
	const mock = jest.fn();
	component.$on('change', mock);

	const input = container.querySelector('input');

	await fireEvent.focus(input);
	await waitForTimeout();

	const openDropdown = container.querySelector('.datepicker-dropdown.active');
	expect(openDropdown).toBeInTheDocument();

	await fireEvent.blur(input);
	await waitForTimeout();

	const closedDropdown = container.querySelector('.datepicker-dropdown.active');
	expect(closedDropdown).not.toBeInTheDocument();
});
