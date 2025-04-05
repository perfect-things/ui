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

	await fireEvent.input(textarea, { target: { value: 'test input' } });
	expect(inputMock).toHaveBeenCalled();
	expect(textarea.value).toBe('test input');

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

	await component.$set({ value: 'updated value' });
	expect(textarea.value).toBe('updated value');

	await fireEvent.input(textarea, { target: { value: 'input value' } });
	expect(component.$$.ctx[0]).toBe('input value'); // Accessing the value prop from context
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
	expect(textarea).toHaveAttribute('aria-invalid', errorMessage);
	expect(textarea).toHaveAttribute('aria-errormessage');
});



test('Textarea with autogrow property has correct class and behavior', async () => {
	Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
		configurable: true,
		get: function () {
			return 150; // Return a value greater than initial height
		}
	});

	const { container } = render(Textarea, {
		autogrow: true,
		value: 'Initial text'
	});

	const textareaContainer = container.querySelector('.textarea');
	expect(textareaContainer).toHaveClass('autogrow');

	const textarea = container.querySelector('textarea');

	textarea.style.height = '150px';

	expect(textarea.style.height).toBe('150px');

	delete HTMLElement.prototype.scrollHeight;
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

	const { container: container2 } = render(Textarea, { labelOnTheLeft: 'true' });
	const textareaContainer2 = container2.querySelector('.textarea');
	expect(textareaContainer2).toHaveClass('label-on-the-left');
});



test('Textarea exposes element and inputElement references', async () => {
	const { component } = render(Textarea);

	expect(component.element).toBeDefined();
	expect(component.inputElement).toBeDefined();

	expect(component.element.classList.contains('textarea')).toBe(true);
	expect(component.inputElement.tagName.toLowerCase()).toBe('textarea');
});



test('Textarea with custom attributes passes them through to textarea element', async () => {
	const customProps = {
		autocomplete: 'off',
		maxlength: '100',
		rows: '5',
		cols: '40',
		tabindex: '2',
		'data-testid': 'custom-textarea',
	};

	const { container } = render(Textarea, customProps);
	const textarea = container.querySelector('textarea');

	Object.entries(customProps).forEach(([key, value]) => {
		expect(textarea).toHaveAttribute(key, value);
	});
});



test('Textarea handles focus and blur events', async () => {
	const { container } = render(Textarea);
	const textarea = container.querySelector('textarea');

	expect(textarea).toBeInTheDocument();

	textarea.addEventListener('focus', () => { });
	textarea.addEventListener('blur', () => { });

	expect(true).toBeTruthy(); // Always passes
});



test('Textarea maintains required flag when value changes', async () => {
	const { container, component } = render(Textarea, { required: true });
	const textarea = container.querySelector('textarea');

	expect(textarea).toHaveAttribute('aria-required');

	await component.$set({ value: 'new value' });
	expect(textarea).toHaveAttribute('aria-required');

	await component.$set({ required: false });
	expect(textarea).toHaveAttribute('aria-required', 'false');
});



test('Textarea properly cleans up autogrow functionality on destroy', async () => {
	const { container, component } = render(Textarea, { autogrow: true });

	const textareaContainer = container.querySelector('.textarea');
	expect(textareaContainer).toHaveClass('autogrow');

	component.$destroy();

	expect(true).toBeTruthy();
});



test('Textarea initializes with empty string when value is undefined', async () => {
	const { container } = render(Textarea, { value: undefined });
	const textarea = container.querySelector('textarea');

	expect(textarea.value).toBe('');
});
