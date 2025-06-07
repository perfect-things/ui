import { expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { flushSync, mount, unmount } from 'svelte';

import { MessageBox, MessageType, showMessage } from '../src/message-box';


test('MessageBox', async () => {
	const component = mount(MessageBox, { target: document.body });
	showMessage('test');
	flushSync();
	let msg = document.body.querySelector('.message');
	expect(msg).toHaveTextContent('test');

	let box = document.body.querySelector('.message-box');
	// expect(box).toHaveClass('opened');

	let btn = document.body.querySelector('.message-box .dialog-footer button');
	await userEvent.click(btn);
	flushSync();
	expect(box).not.toHaveClass('opened');

	// second message box
	showMessage('test2', MessageType.WARNING, 'Warning');
	flushSync();
	msg = document.body.querySelector('.message');
	expect(msg).toHaveTextContent('test2');

	let title = document.body.querySelector('.message-box .dialog-header');
	expect(title).toHaveTextContent('Warning');

	box = document.body.querySelector('.message-box');
	expect(box).toHaveClass('message-warning');
	// expect(box).toHaveClass('opened');

	btn = document.body.querySelector('.message-box .dialog-footer button');
	await userEvent.click(btn);
	flushSync();
	expect(box).not.toHaveClass('opened');

	// third message box - complex
	const cb = vi.fn();
	const cfg = {
		message: 'Are you sure you want to delete this thing?',
		type: MessageType.DANGER,
		title: 'Confirm',
		buttons: [
			{ label: 'Yes', value: 'yes', type: 'danger' },
			{ label: 'No' }
		],
		icon: 'help',
		cb
	};
	showMessage(cfg);
	flushSync();
	msg = document.body.querySelector('.message');
	expect(msg).toHaveTextContent(cfg.message);

	title = document.body.querySelector('.message-box .dialog-header');
	expect(title).toHaveTextContent(cfg.title);

	box = document.body.querySelector('.message-box');
	expect(box).toHaveClass('message-error');
	// expect(box).toHaveClass('opened');

	const btns = document.body.querySelectorAll('.message-box .dialog-footer button');
	expect(btns).toHaveLength(cfg.buttons.length);
	expect(btns[0]).toHaveClass('danger');

	await userEvent.click(btns[0]);
	flushSync();
	expect(box).not.toHaveClass('opened');
	// expect(cb).toHaveBeenCalledWith(cfg.buttons[0].value);

	unmount(component);
});
