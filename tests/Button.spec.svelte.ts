import { expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { flushSync, mount, unmount } from 'svelte';
import { Button } from '../src/button';
import SlotTest from './helpers/Button.svelte';

test('Button', async () => {
	const mock = vi.fn();
	const props = $state({
		id: 'Button1',
		title: 'Button1',
		class: 'test-class',
		onclick: mock,

		children: undefined,
		success: undefined,
		danger: undefined,
		warning: undefined,
		round: undefined,
		outline: undefined,
		text: undefined,
		link: undefined,
		submit: undefined,
		icon: undefined
	});
	const user = userEvent.setup();

	const component = mount(Button, { target: document.body, props });

	const btn = document.body.querySelector('#Button1');

	expect(btn).toBeInTheDocument();
	expect(btn).toHaveAttribute('id', 'Button1');
	expect(btn).toHaveAttribute('title', 'Button1');
	expect(btn).toHaveClass('test-class');

	await user.click(btn);
	expect(mock).toHaveBeenCalled();

	let types = ['success', 'danger', 'warning', 'info', 'round'];
	for (const type of types) {
		props[type] = true;
		flushSync();
		expect(btn).toHaveClass(type);
		props[type] = undefined;
	}

	types = ['outline', 'text', 'link'];
	for (const type of types) {
		props[type] = true;
		flushSync();
		expect(btn).toHaveClass(`button-${type}`);
		props[type] = undefined;
	}

	unmount(component);
});



test('Button - slot test', async () => {
	const text = 'Test Data';
	const component = mount(SlotTest, {
		target: document.body,
		props: { Component: Button, text }
	});
	expect(document.body.querySelector('button')).toBeInTheDocument();

	unmount(component);
});
