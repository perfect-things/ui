import userEvent from '@testing-library/user-event';
import { expect, test, vi, describe, beforeEach, afterEach } from 'vitest';
import { flushSync, mount, unmount } from 'svelte';
import { NotificationCenter, showNotification, hideNotification, clearTimer, createTimer } from '../src/notification-center';


vi.mock('svelte/transition', () => {
	return { fly: vi.fn(), };
});


describe('NotificationCenter', () => {
	const toastSelector = '.notification-center .notification';
	let component;

	beforeEach(() => {
		vi.useFakeTimers();
		component = mount(NotificationCenter, { target: document.body });
	});

	afterEach(async () => {
		vi.useRealTimers();
		await unmount(component);
		document.body.innerHTML = '';
	});


	test('NotificationCenter - basics', () => {
		const cmp = document.body.querySelector('.notification-center');
		expect(cmp).toBeInTheDocument();

		showNotification('Info', 'info', 200);
		flushSync();
		let toast = document.body.querySelector(toastSelector);
		expect(toast).toBeInTheDocument();
		expect(toast).toHaveClass('notification-info');
		expect(toast).toHaveTextContent('Info');

		vi.advanceTimersByTime(500);
		flushSync();
		toast = document.body.querySelector(toastSelector);
		expect(toast).not.toBeInTheDocument();

		const tstId = showNotification('Warning', 'warning', null);
		flushSync();
		toast = document.body.querySelector(toastSelector);
		expect(toast).toBeInTheDocument();
		expect(toast).toHaveClass('notification-warning');
		expect(toast).toHaveTextContent('Warning');

		hideNotification(tstId);
	});


	test('NotificationCenter - progress and undo', () => {
		const tstId = showNotification('Info', 'info', 1000);
		flushSync();
		const toast = document.body.querySelector(toastSelector);
		expect(toast).toBeInTheDocument();
		expect(toast).toHaveClass('notification-info');
		expect(toast).toHaveTextContent('Info');
		clearTimer({ id: tstId });
		vi.advanceTimersByTime(2000);
		expect(toast).toBeInTheDocument();

		createTimer({ id: tstId, showProgress: true, timeout: 1000 }, document.activeElement);
		flushSync();
		vi.advanceTimersByTime(2000);
		expect(toast).toBeInTheDocument();

		createTimer({ id: tstId, showProgress: true, timeout: 1000 });
		flushSync();
		vi.advanceTimersByTime(2000);
		flushSync();
		expect(toast).not.toBeInTheDocument();
	});


	test('NotificationCenter - undo action', async () => {
		const user = userEvent.setup({
			delay: null,
			advanceTimers: vi.advanceTimersByTime
		});

		const mock = vi.fn();
		const tstId = showNotification('Error', 'error', 10000, 'Undo', mock);
		flushSync();
		const toast = document.body.querySelector(toastSelector);
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
	});
});
