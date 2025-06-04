import { render, fireEvent } from '@testing-library/svelte';
import { vi } from 'vitest';
import { InputNumber } from '../../src/input';
import { default as userEvent } from '@testing-library/user-event';
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

/*
test('InputNumber renders with correct props', async () => {
	Object.defineProperty(Element.prototype, 'animate', { value: () => ({ cancel: vi.fn(), }) });

	const { container, component, getByTitle } = render(InputNumber, props);
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
*/

test('InputNumber handles basic numeric input correctly', async () => {
	const { container } = render(InputNumber, props);
	const input = container.querySelector('input');

	await userEvent.clear(input);
	await userEvent.type(input, '123456');
	await userEvent.keyboard('[Tab]');
	expect(input).toHaveValue('123456');

	await userEvent.clear(input);
	await userEvent.type(input, '12.3456');
	await userEvent.keyboard('[Tab]');
	expect(input).toHaveValue('12.3456');

	await userEvent.clear(input);
	await userEvent.type(input, '.0.0');
	await userEvent.keyboard('[Tab]');
	expect(input).toHaveValue('.00');

	await userEvent.clear(input);
	await userEvent.type(input, 'abc');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('');

	await userEvent.clear(input);
	await userEvent.type(input, '1.0000a');
	await userEvent.keyboard('[Tab]');
	expect(input).toHaveValue('1.0000');

	await userEvent.clear(input);
	await userEvent.type(input, '1e');
	await userEvent.keyboard('[Tab]');
	expect(input).toHaveValue('1');
});


test('InputNumber dispatches change events correctly', async () => {
	const { container, component } = render(InputNumber, props);
	const mock = vi.fn();
	component.$on('change', mock);

	const input = container.querySelector('input');

	await userEvent.clear(input);
	await userEvent.type(input, '42');
	await userEvent.keyboard('[Tab]');

	expect(mock).toHaveBeenCalled();
	expect(mock.mock.calls[0][0].detail.value).toBe('42');
});


test('InputNumber handles negative numbers correctly', async () => {
	const { container } = render(InputNumber, props);
	const input = container.querySelector('input');

	await userEvent.clear(input);
	await userEvent.type(input, '-123.45');
	await userEvent.keyboard('[Tab]');
	expect(input).toHaveValue('-123.45');

	await userEvent.clear(input);
	await userEvent.type(input, '123-45');
	await userEvent.keyboard('[Tab]');
	expect(input).toHaveValue('12345');

	await userEvent.clear(input);
	await userEvent.type(input, '--123');
	await userEvent.keyboard('[Tab]');
	expect(input).toHaveValue('-123');
});


test('InputNumber handles custom decimal separator', async () => {
	const { container, component } = render(InputNumber, {
		...props,
		separator: ','
	});

	const input = container.querySelector('input');

	await component.$set({ value: '123,45' });
	await waitForTimeout();

	expect(input).toHaveValue('123,45');

	await userEvent.clear(input);
	await userEvent.type(input, '123.45');
	await userEvent.keyboard('[Tab]');
	await waitForTimeout();
	expect(input).toHaveValue('12345');
});


test('InputNumber enforces key restrictions properly', async () => {
	const { container, component } = render(InputNumber, props);
	const input = container.querySelector('input');
	const mockKeyDown = vi.fn();
	component.$on('keydown', mockKeyDown);

	const allowedKeyEvents = [
		{ key: '1', code: 'Digit1' },
		{ key: '.', code: 'Period' },
		{ key: '-', code: 'Minus' },
		{ key: 'ArrowLeft', code: 'ArrowLeft' },
		{ key: 'Backspace', code: 'Backspace' },
	];

	for (const keyEvent of allowedKeyEvents) {
		await fireEvent.keyDown(input, keyEvent);
	}

	expect(mockKeyDown).toHaveBeenCalledTimes(5);

	mockKeyDown.mockClear();

	const disallowedKeyEvents = [
		{ key: 'a', code: 'KeyA' },
		{ key: '#', code: 'Digit3', shiftKey: true },
		{ key: 'e', code: 'KeyE' }
	];

	for (const keyEvent of disallowedKeyEvents) {
		await fireEvent.keyDown(input, keyEvent);
	}

	expect(mockKeyDown).not.toHaveBeenCalled();
});


test('InputNumber handles special key combinations', async () => {
	const { container, component } = render(InputNumber, props);
	const input = container.querySelector('input');
	const mockKeyDown = vi.fn();
	component.$on('keydown', mockKeyDown);

	const specialKeyEvents = [
		{ key: 'c', code: 'KeyC', metaKey: true }, // Cmd+C
		{ key: 'v', code: 'KeyV', metaKey: true }, // Cmd+V
		{ key: 'x', code: 'KeyX', metaKey: true }, // Cmd+X
	];

	for (const keyEvent of specialKeyEvents) {
		await fireEvent.keyDown(input, keyEvent);
	}

	expect(mockKeyDown).toHaveBeenCalledTimes(3);
});


test('InputNumber handles disabled state correctly', async () => {
	const { container } = render(InputNumber, {
		...props,
		disabled: true
	});

	const input = container.querySelector('input');

	expect(input).toBeDisabled();

	await userEvent.type(input, '123');
	expect(input).toHaveValue('');
});


test('InputNumber with labelOnTheLeft has correct layout', async () => {
	const { container } = render(InputNumber, {
		...props,
		labelOnTheLeft: true
	});

	const inputContainer = container.querySelector('.input');
	expect(inputContainer).toHaveClass('label-on-the-left');

	const { container: container2 } = render(InputNumber, {
		...props,
		labelOnTheLeft: 'true'
	});

	const inputContainer2 = container2.querySelector('.input');
	expect(inputContainer2).toHaveClass('label-on-the-left');
});


test('InputNumber value can be programmatically changed', async () => {
	const { container, component } = render(InputNumber, props);
	const input = container.querySelector('input');

	expect(input).toHaveValue('');

	await component.$set({ value: '42.5' });
	await waitForTimeout();
	expect(input).toHaveValue('42.5');

	await component.$set({ value: '-10' });
	await waitForTimeout();
	expect(input).toHaveValue('-10');
});


test('InputNumber handles paste and drop events', async () => {
	const { container, component } = render(InputNumber, props);
	const mock = vi.fn();
	component.$on('change', mock);
	const input = container.querySelector('input');

	await fireEvent.paste(input, {
		clipboardData: {
			getData: () => '123.45'
		}
	});

	await fireEvent.drop(input, {
		dataTransfer: {
			getData: () => '123.45'
		}
	});

	await waitForTimeout();
	expect(mock).toHaveBeenCalled();
});


test('InputNumber exposes element and inputElement references', async () => {
	const { component } = render(InputNumber, props);

	expect(component.element).toBeDefined();
	expect(component.inputElement).toBeDefined();

	expect(component.element.classList.contains('input')).toBe(true);
	expect(component.element.classList.contains('input-number')).toBe(true);
	expect(component.inputElement.tagName.toLowerCase()).toBe('input');
});


test('InputNumber without id generates a unique id', async () => {
	const { container: container1 } = render(InputNumber, {
		name: 'testName',
		title: 'Title'
	});

	const input1 = container1.querySelector('input');
	expect(input1.id).toBe('testName');

	const { container: container2 } = render(InputNumber, {
		title: 'Title'
	});

	const input2 = container2.querySelector('input');
	expect(input2.id).toBeTruthy();
	expect(input2.id.length).toBeGreaterThan(0);
	expect(input2.id).not.toBe(input1.id);
});
