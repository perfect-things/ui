import { render, fireEvent } from '@testing-library/svelte';
import jest from 'jest-mock';
import { Textarea } from '../../src/input';


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


test('Textarea renders with correct props', async () => {
	const { container, component, getByTitle } = render(Textarea, props);
	const mock = jest.fn();
	component.$on('change', mock);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	// verify props
	const textarea = getByTitle(props.title);
	expect(textarea).toHaveAttribute('id', props.id);
	expect(textarea).toHaveAttribute('title', props.title);
	expect(textarea).toHaveAttribute('name', props.name);
	expect(textarea).toHaveAttribute('placeholder', props.placeholder);
	expect(textarea).toHaveAttribute('aria-required');

	const err = cmp.querySelector('.info-bar-error');
	expect(err).toBeInTheDocument();
	expect(err.textContent.trim()).toBe(props.error);
});

test('Textarea handles input events', async () => {
	const { container, component } = render(Textarea, { value: '' });
	const changeMock = jest.fn();
	const inputMock = jest.fn();
	component.$on('change', changeMock);
	component.$on('input', inputMock);

	const textarea = container.querySelector('textarea');

	// Test input event
	await fireEvent.input(textarea, { target: { value: 'test input' } });
	expect(inputMock).toHaveBeenCalled();
	expect(textarea.value).toBe('test input');

	// Test change event
	await fireEvent.change(textarea, { target: { value: 'test change' } });
	expect(changeMock).toHaveBeenCalled();
	expect(textarea.value).toBe('test change');
});

test('Textarea handles disabled state', async () => {
	const { container } = render(Textarea, { disabled: true });

	const textarea = container.querySelector('textarea');
	expect(textarea).toBeDisabled();

	const innerContainer = container.querySelector('.textarea-inner');

	expect(innerContainer).toHaveClass('disabled');
});

test('Textarea binds value correctly', async () => {
	const { container, component } = render(Textarea, { value: 'initial value' });

	const textarea = container.querySelector('textarea');
	expect(textarea.value).toBe('initial value');

	// Update component value
	await component.$set({ value: 'updated value' });
	expect(textarea.value).toBe('updated value');
});

test('Textarea with error shows correct validation styling', async () => {
	const errorMessage = 'This field has an error';
	const { container } = render(Textarea, { error: errorMessage });

	const textareaContainer = container.querySelector('.textarea');
	expect(textareaContainer).toHaveClass('has-error');

	const errorElement = container.querySelector('.info-bar-error');
	expect(errorElement).toBeInTheDocument();
	expect(errorElement.textContent.trim()).toBe(errorMessage);

	const textarea = container.querySelector('textarea');
	// Check that aria-invalid is set (the value matches the error message in this implementation)
	expect(textarea).toHaveAttribute('aria-invalid', errorMessage);
	expect(textarea).toHaveAttribute('aria-errormessage');
});

test('Textarea with autogrow property has correct class', async () => {
	const { container } = render(Textarea, { autogrow: true });

	const textareaContainer = container.querySelector('.textarea');
	expect(textareaContainer).toHaveClass('autogrow');
});

test('Textarea with label renders label correctly', async () => {
	const { container } = render(Textarea, { label: 'Test Label' });

	const label = container.querySelector('label');
	expect(label).toBeInTheDocument();
	expect(label.textContent).toBe('Test Label');
});

test('Textarea with info shows info message', async () => {
	const { container } = render(Textarea, { info: 'This is some helpful information' });

	const infoElement = container.querySelector('.info-bar-info');
	expect(infoElement).toBeInTheDocument();
	expect(infoElement.textContent.trim()).toBe('This is some helpful information');
});

test('Textarea with labelOnTheLeft has correct class', async () => {
	const { container } = render(Textarea, { labelOnTheLeft: true });

	const textareaContainer = container.querySelector('.textarea');
	expect(textareaContainer).toHaveClass('label-on-the-left');
});

test('Textarea exposes element and inputElement references', async () => {
	const { component } = render(Textarea);

	// Check if component has element and inputElement props
	expect(component.element).toBeDefined();
	expect(component.inputElement).toBeDefined();

	// Verify they reference the correct DOM elements
	expect(component.element.classList.contains('textarea')).toBe(true);
	expect(component.inputElement.tagName.toLowerCase()).toBe('textarea');
});
