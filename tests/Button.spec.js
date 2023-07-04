import { vi } from 'vitest';
import { Button } from '../src/button';
import { render, fireEvent } from '@testing-library/svelte';
import SlotTest from './helpers/Button.svelte';


test('Button', async () => {
	const props = {
		id: 'Button1',
		title: 'Button1',
		class: 'test-class',
	};
	const { getByTitle, component } = render(Button, props);
	const mock = vi.fn();
	component.$on('click', mock);

	const btn = getByTitle('Button1');
	expect(btn).toBeInTheDocument();
	expect(btn).toHaveAttribute('id', 'Button1');
	expect(btn).toHaveAttribute('title', 'Button1');
	expect(btn).toHaveClass('test-class');

	await fireEvent.click(btn);
	expect(mock).toHaveBeenCalled();


	await component.$set({ success: true });
	expect(btn).toHaveClass('success');
	await component.$set({ success: false });

	await component.$set({ danger: true });
	expect(btn).toHaveClass('danger');
	await component.$set({ danger: false });

	await component.$set({ warning: true });
	expect(btn).toHaveClass('warning');
	await component.$set({ warning: false });

	await component.$set({ round: true });
	expect(btn).toHaveClass('round');
	await component.$set({ round: false });

	await component.$set({ outline: true });
	expect(btn).toHaveClass('button-outline');
	await component.$set({ outline: false });

	await component.$set({ text: true });
	expect(btn).toHaveClass('button-text');
	await component.$set({ text: false });

	await component.$set({ link: true });
	expect(btn).toHaveClass('button-link');
	await component.$set({ link: false });

	expect(btn).not.toHaveAttribute('type', 'submit');
	await component.$set({ submit: true });
	expect(btn).toHaveAttribute('type', 'submit');
	await component.$set({ submit: false });
	expect(btn).toHaveAttribute('type', 'button');

	await component.$set({ icon: 'alert' });
	expect(btn.querySelector('svg')).toBeInTheDocument();
	await component.$set({ link: false });
});


test('Button - slot test', async () => {
	const text = 'Test Data';
	const { getByText } = render(SlotTest, {
		props: { Component: Button, text }
	});
	expect(getByText(text)).toBeInTheDocument();
});
