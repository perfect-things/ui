import { vi } from 'vitest';
import { NotificationCenter, showNotification, hideNotification } from '../src/notification-center';
import { fireEvent, render } from '@testing-library/svelte';
import { waitForTimeout } from './helpers/utils';


test('NotificationCenter', async () => {
	const { container } = render(NotificationCenter);
	const mock = vi.fn();
	const toastSelector = '.notification-center .notification';

	const cmp = container.querySelector('.notification-center');
	expect(cmp).toBeInTheDocument();

	const bellBtn = container.querySelector('.notification-center-button');
	expect(bellBtn).toBeInTheDocument();
	expect(bellBtn).not.toHaveClass('has-notifications');


	showNotification('Info', 'info', 500);
	await waitForTimeout();
	let toast = container.querySelector(toastSelector);
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('notification-info');
	expect(toast).toHaveTextContent('Info');
	expect(bellBtn).toHaveClass('has-notifications');

	await waitForTimeout(1000);
	toast = container.querySelector(toastSelector);
	expect(toast).not.toBeInTheDocument();
	expect(bellBtn).toHaveClass('has-archived-notifications');


	let tstId = showNotification('Warning', 'warning', 5000);
	await waitForTimeout();
	toast = container.querySelector(toastSelector);
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('notification-warning');
	expect(toast).toHaveTextContent('Warning');

	hideNotification(tstId);
	await waitForTimeout(600);
	expect(toast).not.toBeInTheDocument();


	tstId = showNotification('Error', 'error', 10000, 'Undo', mock);
	await waitForTimeout();
	toast = container.querySelector(toastSelector);
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('notification-error');
	expect(toast).toHaveTextContent('Error');


	const btn = container.querySelector(toastSelector + ' button');
	fireEvent.click(btn);
	expect(mock).toHaveBeenCalledWith(tstId);

	hideNotification(tstId);
	await waitForTimeout(600);
	expect(toast).not.toBeInTheDocument();

}, 5000);
