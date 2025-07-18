import { expect, test, vi } from 'vitest';
import { flushSync, mount, unmount } from 'svelte';
import { NotificationCenter, showNotification, hideNotification } from '../src/notification-center';
import userEvent from '@testing-library/user-event';


test('NotificationCenter', async () => {
	vi.useFakeTimers();
	vi.mock('svelte/transition', () => {
		return {
			fly: vi.fn(),
			crossfade: vi.fn().mockReturnValue([])
		};
	});
	const user = userEvent.setup({
		delay: null,
		advanceTimers: vi.advanceTimersByTime
	});

	const component = mount(NotificationCenter, { target: document.body });
	const toastSelector = '.notification-center .notification';


	const cmp = document.body.querySelector('.notification-center');
	expect(cmp).toBeInTheDocument();

	const bellBtn = document.body.querySelector('.notification-center-button');
	expect(bellBtn).toBeInTheDocument();
	expect(bellBtn).not.toHaveClass('has-notifications');

	showNotification('Info', 'info', 200);
	flushSync();
	let toast = document.body.querySelector(toastSelector);
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('notification-info');
	expect(toast).toHaveTextContent('Info');
	expect(bellBtn).toHaveClass('has-notifications');

	vi.advanceTimersByTime(500);
	flushSync();
	toast = document.body.querySelector(toastSelector);
	expect(toast).not.toBeInTheDocument();
	expect(bellBtn).toHaveClass('has-archived-notifications');

	let tstId = showNotification('Warning', 'warning', 5000);
	flushSync();
	toast = document.body.querySelector(toastSelector);
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('notification-warning');
	expect(toast).toHaveTextContent('Warning');

	hideNotification(tstId);
	vi.advanceTimersByTime(6000);

	const mock = vi.fn();
	tstId = showNotification('Error', 'error', 10000, 'Undo', mock);
	flushSync();
	toast = document.body.querySelector(toastSelector);
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('notification-error');
	expect(toast).toHaveTextContent('Error');

	const btn = document.body.querySelector(toastSelector + ' button');
	expect(btn).toBeInTheDocument();
	await user.click(btn);
	expect(mock).toHaveBeenCalledWith(tstId);

	hideNotification(tstId);
	vi.advanceTimersByTime(20000);
	flushSync();
	expect(toast).not.toBeInTheDocument();

	await unmount(component);
});
