import { flushSync, mount, unmount } from 'svelte';
import { expect, test, vi, describe } from 'vitest';
import userEvent from '@testing-library/user-event';

import { InputPassword } from '../../src/input';


describe('InputPassword', () => {

	test('InputPassword - base props', async () => {
		const props = $state({
			id: 'Component1',
			name: 'Component1',
			title: 'Component1',
			placeholder: 'Component1',
			class: 'test-class',
			required: true,
			label: 'Component1',
			error: 'error',
			strength: false,
			info: '',
			onchange: vi.fn(),
		});

		const component = mount(InputPassword, { target: document.body, props });

		const cmp = document.body.querySelector('.test-class');
		expect(cmp).toBeInTheDocument();
		expect(cmp).toHaveClass('test-class');
		expect(cmp).toHaveAttribute('title', props.title);

		// verify props
		const input = cmp.querySelector('input');
		expect(input).toHaveAttribute('id', props.id);
		expect(input).toHaveAttribute('name', props.name);
		expect(input).toHaveAttribute('placeholder', props.placeholder);
		expect(input).toHaveAttribute('aria-required');

		const lbl = cmp.querySelector('label');
		expect(lbl).toBeInTheDocument();
		expect(lbl).toHaveAttribute('for', props.id);
		expect(lbl).toHaveTextContent(props.label);

		let err = cmp.querySelector('.info-bar-error');
		expect(err).toBeInTheDocument();
		expect(err).toHaveTextContent(props.error);

		props.error = '';
		flushSync();
		err = cmp.querySelector('.info-bar-error');
		expect(err).not.toBeInTheDocument();

		props.info = 'info';
		flushSync();
		let info = cmp.querySelector('.info-bar-info');
		expect(info).toBeInTheDocument();
		expect(info).toHaveTextContent('info');

		props.info = '';
		flushSync();
		info = cmp.querySelector('.info-bar-info');
		expect(info).not.toBeInTheDocument();

		// test "show password" button
		expect(input.type).toBe('password');
		const showPasswordBtn = document.body.querySelector('.input-password-button');
		await userEvent.click(showPasswordBtn);
		expect(input.type).toBe('text');

		const hintEl = document.body.querySelector('.password-strength');
		expect(hintEl).not.toBeInTheDocument();

		await unmount(component);
	});





	test('InputPassword - password strength', async () => {
		const props = $state({
			id: 'Component1',
			name: 'Component1',
			title: 'Component1',
			placeholder: 'Component1',
			class: 'test-class',
			required: true,
			label: 'Component1',
			error: 'error',
			strength: true,
			info: '',
			onchange: vi.fn(),
		});

		// simple mock for testing
		window.zxcvbn = function (pass: string) {
			const text = pass.length > 10 ? 'Excellent' : 'Very Poor';
			const score = pass.length > 10 ? 4 : 0;
			return {
				score,
				feedback: {
					suggestions: [text],
					warning: text,
				}
			};
		};


		const component = mount(InputPassword, { target: document.body, props });

		const cmp = document.body.querySelector('.test-class');
		const input = cmp.querySelector('input');

		expect(cmp).toBeInTheDocument();
		expect(input).toBeInTheDocument();

		// test poor password
		let res = 'Very Poor';
		await userEvent.clear(input);
		await userEvent.type(input, '123456');
		await userEvent.keyboard('[Enter]');
		expect(input).toHaveValue('123456');

		const hintEl = document.body.querySelector('.password-strength');
		expect(hintEl).toBeInTheDocument();
		expect(hintEl).toHaveAttribute('title', res);

		let strengthInfoText = document.body.querySelector('.password-strength-info h2');
		expect(strengthInfoText).toHaveTextContent(res);


		// test excellent password
		res = 'Excellent';
		const pass = 'I\'m a great password! €4142';
		await userEvent.clear(input);
		await userEvent.type(input, pass);
		await userEvent.keyboard('[Enter]');
		expect(input).toHaveValue(pass);

		strengthInfoText = document.body.querySelector('.password-strength-info h2');
		expect(strengthInfoText).toHaveTextContent(res);

		await unmount(component);
	});

});
