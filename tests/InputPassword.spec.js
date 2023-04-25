import { fireEvent, render } from '@testing-library/svelte';
import { InputPassword } from '../src/input-password';
import userEvent from '@testing-library/user-event';
import zxcvbn from 'zxcvbn';


const props = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
};


test('InputMath', async () => {
	window.zxcvbn = zxcvbn;

	const { container, component, getByTitle } = render(InputPassword, props);
	const mock = jest.fn();
	component.$on('change', mock);

	const inputMath = container.querySelector('.test-class');
	expect(inputMath).toBeInTheDocument();
	expect(inputMath).toHaveClass('test-class');

	// verify props
	const input = getByTitle('Component1');
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('title', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('placeholder', 'Component1');
	expect(input).toHaveAttribute('required');


	// test poor password
	let res = 'Very Poor';
	await userEvent.clear(input);
	await userEvent.type(input, '123456');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('123456');

	let hintEl = container.querySelector('.password-strength');
	expect(hintEl).not.toBeInTheDocument();

	await component.$set({ strength: true });

	hintEl = container.querySelector('.password-strength');
	expect(hintEl).toHaveAttribute('title', res);
	expect(hintEl).toBeInTheDocument();

	let strengthInfoText = container.querySelector('.password-strength-info h2');
	expect(strengthInfoText).toHaveTextContent(res);

	// test excellent password
	res = 'Excellent';
	await userEvent.clear(input);
	await userEvent.type(input, 'I\'m a great password!');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('I\'m a great password!');

	strengthInfoText = container.querySelector('.password-strength-info h2');
	expect(strengthInfoText).toHaveTextContent(res);

	// test "show password" button
	expect(input.type).toBe('password');
	const showPasswordBtn = container.querySelector('.input-password-button');
	await fireEvent.click(showPasswordBtn);
	expect(input.type).toBe('text');
});
