import { fireEvent, render } from '@testing-library/svelte';
import { expect, test, vi } from 'vitest';
import { NotificationCenter, showNotification, hideNotification } from '../src/notification-center';
import { waitForTimeout } from './helpers/utils';


test('NotificationCenter', async () => {
	Object.defineProperty(Element.prototype, 'animate', { value: () => ({ cancel: vi.fn(), }) });
	Object.defineProperty(Element.prototype, 'getAnimations', { value: () => ([]) });

	const { baseElement } = render(NotificationCenter);
	const mock = vi.fn();
	const toastSelector = '.notification-center .notification';

	const cmp = baseElement.querySelector('.notification-center');
	expect(cmp).toBeInTheDocument();

	const bellBtn = baseElement.querySelector('.notification-center-button');
	expect(bellBtn).toBeInTheDocument();
	expect(bellBtn).not.toHaveClass('has-notifications');


	showNotification('Info', 'info', 500);
	await waitForTimeout();
	let toast = baseElement.querySelector(toastSelector);
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('notification-info');
	expect(toast).toHaveTextContent('Info');
	expect(bellBtn).toHaveClass('has-notifications');

	await waitForTimeout(1000);
	toast = baseElement.querySelector(toastSelector);
	// expect(toast).not.toBeInTheDocument();
	expect(bellBtn).toHaveClass('has-archived-notifications');


	let tstId = showNotification('Warning', 'warning', 5000);
	await waitForTimeout();
	toast = baseElement.querySelector(toastSelector);
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('notification-warning');
	expect(toast).toHaveTextContent('Warning');

	hideNotification(tstId);
	// await waitForTimeout(600);
	// expect(toast).not.toBeInTheDocument();


	tstId = showNotification('Error', 'error', 10000, 'Undo', mock);
	await waitForTimeout();
	toast = baseElement.querySelector(toastSelector);
	expect(toast).toBeInTheDocument();
	expect(toast).toHaveClass('notification-error');
	expect(toast).toHaveTextContent('Error');


	const btn = baseElement.querySelector(toastSelector + ' button');
	fireEvent.click(btn);
	expect(mock).toHaveBeenCalledWith(tstId);

	hideNotification(tstId);
	// await waitForTimeout(600);
	// expect(toast).not.toBeInTheDocument();

}, 5000);
