import { expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';
import { PushButton } from '../src/push-button';


test('PushButton', async () => {
	const mock = vi.fn();
	const props = $state({
		id: 'Button1',
		title: 'Button1',
		class: 'test-class',
		onchange: mock,
		success: undefined,
		danger: undefined,
		warning: undefined,
		round: undefined,
		icon: undefined,
		link: undefined
	});

	const component = mount(PushButton, {
		target: document.body,
		// @ts-ignore
		props
	});

	const btn = document.body.querySelector('#Button1');
	expect(btn).toBeInTheDocument();
	expect(btn).toHaveAttribute('id', 'Button1');
	expect(btn).toHaveAttribute('title', 'Button1');
	expect(btn).toHaveClass('test-class');

	await userEvent.click(btn);
	expect(mock).toHaveBeenCalled();

	props.success = true;
	flushSync();
	expect(btn).toHaveClass('success');
	props.success = false;
	flushSync();

	props.danger = true;
	flushSync();
	expect(btn).toHaveClass('danger');
	props.danger = false;
	flushSync();

	props.warning = true;
	flushSync();
	expect(btn).toHaveClass('warning');
	props.warning = false;
	flushSync();

	props.round = true;
	flushSync();
	expect(btn).toHaveClass('round');
	props.round = false;
	flushSync();

	props.icon = 'alert';
	flushSync();
	expect(btn.querySelector('svg')).toBeInTheDocument();
	props.link = false;
	flushSync();

	unmount(component);
});
