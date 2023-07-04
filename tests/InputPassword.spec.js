import { vi } from 'vitest';
import { fireEvent, render } from '@testing-library/svelte';
import { InputPassword } from '../src/input';
import userEvent from '@testing-library/user-event';
import { waitForTimeout } from './helpers/utils';
import zxcvbn from 'zxcvbn';


const props = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
	label: 'Component1',
	error: 'error',
};


test('InputPassword', async () => {
	window.zxcvbn = zxcvbn;

	const { container, component, getByTitle } = render(InputPassword, props);
	const mock = vi.fn();
	component.$on('change', mock);

	const cmp = container.querySelector('.test-class');
	expect(cmp).toBeInTheDocument();
	expect(cmp).toHaveClass('test-class');

	// verify props
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
	expect(err).not.toBeInTheDocument();

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
