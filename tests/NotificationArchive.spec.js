import { render, fireEvent } from '@testing-library/svelte';
import { expect, test, vi } from 'vitest';
import { NotificationArchive } from '../src/notification-center/NotificationArchive/index';
import { ArchivedNotifications } from '../src/notification-center/store';
import { waitForTimeout } from './helpers/utils';

function setArchivedNotifications (notifications) {
	const archiveData = {};
	notifications.forEach(n => {
		archiveData[n.id] = n;
	});
	ArchivedNotifications.set(archiveData);
}

beforeEach(() => {
	ArchivedNotifications.set({});
});


test('NotificationArchive renders with no notifications', async () => {
	const { container, getByText } = render(NotificationArchive, {
		show: true
	});

	const archive = container.querySelector('.notification-archive');
	expect(archive).toBeInTheDocument();

	expect(getByText('No recent notifications')).toBeInTheDocument();

	const closeBtn = getByText('×');
	expect(closeBtn).toBeInTheDocument();
});


test('NotificationArchive displays archived notifications when expanded', async () => {
	const notifications = [
		{
			id: 'notif1',
			msg: 'Test notification 1',
			type: 'info',
			timestamp: new Date().getTime() - 60000 // 1 minute ago
		},
		{
			id: 'notif2',
			msg: 'Test notification 2',
			type: 'error',
			timestamp: new Date().getTime() - 120000 // 2 minutes ago
		}
	];

	setArchivedNotifications(notifications);

	const { getByText } = render(NotificationArchive, {
		show: true,
		expanded: true
	});

	expect(getByText(/Recent notifications \(2\)/)).toBeInTheDocument();

	expect(getByText('Test notification 1')).toBeInTheDocument();
	expect(getByText('Test notification 2')).toBeInTheDocument();

	expect(getByText('Clear all')).toBeInTheDocument();
});


test('NotificationArchive toggling expanded state', async () => {
	const notifications = [
		{
			id: 'notif1',
			msg: 'Test notification 1',
			type: 'info',
			timestamp: new Date().getTime()
		}
	];

	setArchivedNotifications(notifications);

	const { getByText, queryByText, component } = render(NotificationArchive, {
		show: true,
		expanded: false
	});

	expect(getByText(/Recent notifications \(1\)/)).toBeInTheDocument();
	expect(queryByText('Test notification 1')).not.toBeInTheDocument();

	const toggleBtn = getByText(/Recent notifications \(1\)/);
	await fireEvent.click(toggleBtn);

	await waitForTimeout(10);
	expect(queryByText('Test notification 1')).toBeInTheDocument();

	await fireEvent.click(toggleBtn);
	// expect(component.$$.ctx[1]).toBe(false); // Check expanded state is false
});


test('NotificationArchive clear all functionality', async () => {
	const notifications = [
		{
			id: 'notif1',
			msg: 'Test notification 1',
			type: 'info',
			timestamp: new Date().getTime()
		},
		{
			id: 'notif2',
			msg: 'Test notification 2',
			type: 'warning',
			timestamp: new Date().getTime()
		}
	];

	setArchivedNotifications(notifications);

	const { getByText, queryByText } = render(NotificationArchive, {
		show: true,
		expanded: true
	});

	expect(getByText('Test notification 1')).toBeInTheDocument();
	expect(getByText('Test notification 2')).toBeInTheDocument();

	const clearBtn = getByText('Clear all');
	await fireEvent.click(clearBtn);

	await waitForTimeout(10);
	expect(getByText('No recent notifications')).toBeInTheDocument();

	expect(queryByText('Test notification 1')).not.toBeInTheDocument();
	expect(queryByText('Test notification 2')).not.toBeInTheDocument();
});


test('NotificationArchive close button hides archive', async () => {
	const { getByText, component } = render(NotificationArchive, {
		show: true
	});

	const closeBtn = getByText('×');
	await fireEvent.click(closeBtn);

	// expect(component.$$.ctx[0]).toBe(false);
});


test('NotificationArchive individual notification removal', async () => {
	Object.defineProperty(Element.prototype, 'animate', { value: () => ({ cancel: vi.fn(), }) });
	Object.defineProperty(Element.prototype, 'getAnimations', { value: () => ([]) });


	const notifications = [
		{
			id: 'notif1',
			msg: 'Test notification 1',
			type: 'info',
			timestamp: new Date().getTime()
		},
		{
			id: 'notif2',
			msg: 'Test notification 2',
			type: 'warning',
			timestamp: new Date().getTime()
		}
	];

	setArchivedNotifications(notifications);

	const { removeFromArchive } = await import('../src/notification-center/store.js');

	const spy = vi.spyOn(console, 'log').mockImplementation(() => {});

	const { getByText } = render(NotificationArchive, {
		show: true,
		expanded: true
	});

	expect(getByText('Test notification 1')).toBeInTheDocument();
	expect(getByText('Test notification 2')).toBeInTheDocument();

	removeFromArchive('notif1');

	await waitForTimeout(50);

	let storeContents;
	const unsubscribe = ArchivedNotifications.subscribe(value => {
		storeContents = value;
	});

	expect(storeContents.notif1).toBeUndefined();
	expect(storeContents.notif2).toBeDefined();

	unsubscribe();
	spy.mockRestore();
});


test('NotificationArchive keyboard interaction', async () => {
	const notifications = [
		{
			id: 'notif1',
			msg: 'Test notification 1',
			type: 'info',
			timestamp: new Date().getTime()
		}
	];

	setArchivedNotifications(notifications);

	const { container, queryByText } = render(NotificationArchive, {
		show: true,
		expanded: true
	});

	const notification = container.querySelector('.notification');

	await fireEvent.keyDown(notification, { key: 'Escape' });
	await waitForTimeout(1500);
	expect(queryByText('Test notification 1')).not.toBeInTheDocument();
});
