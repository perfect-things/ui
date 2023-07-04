import { vi } from 'vitest';
import { MessageBox, MessageType, showMessage } from '../src/message-box';
import { render, fireEvent } from '@testing-library/svelte';
import { waitForTimeout } from './helpers/utils';


test('MessageBox', async () => {
	const { container } = render(MessageBox);

	// first message box
	showMessage('test');
	await waitForTimeout();
	let msg = container.querySelector('.message');
	expect(msg).toHaveTextContent('test');

	let box = container.querySelector('.message-box');
	expect(box).toHaveClass('message-info');
	expect(box).toHaveClass('opened');


	let btn = container.querySelector('.message-box .dialog-footer button');
	await fireEvent.click(btn);
	await waitForTimeout();
	expect(box).not.toHaveClass('opened');


	// second message box
	showMessage('test2', MessageType.WARNING, 'Warning');
	await waitForTimeout();
	msg = container.querySelector('.message');
	expect(msg).toHaveTextContent('test2');

	let title = container.querySelector('.message-box .dialog-header');
	expect(title).toHaveTextContent('Warning');

	box = container.querySelector('.message-box');
	expect(box).toHaveClass('message-warning');
	expect(box).toHaveClass('opened');

	btn = container.querySelector('.message-box .dialog-footer button');
	await fireEvent.click(btn);
	await waitForTimeout();
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
	await waitForTimeout();
	msg = container.querySelector('.message');
	expect(msg).toHaveTextContent(cfg.message);

	title = container.querySelector('.message-box .dialog-header');
	expect(title).toHaveTextContent(cfg.title);

	box = container.querySelector('.message-box');
	expect(box).toHaveClass('message-error');
	expect(box).toHaveClass('opened');

	const btns = container.querySelectorAll('.message-box .dialog-footer button');
	expect(btns).toHaveLength(cfg.buttons.length);
	expect(btns[0]).toHaveClass('danger');

	await fireEvent.click(btns[0]);
	await waitForTimeout();
	expect(box).not.toHaveClass('opened');
	expect(cb).toHaveBeenCalledWith(cfg.buttons[0].value);
});
