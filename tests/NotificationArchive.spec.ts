import { expect, test, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { mount, unmount, flushSync } from 'svelte';
import { NotificationArchive } from '../src/notification-center/NotificationArchive/index';
import { ArchivedNotifications } from '../src/notification-center/store';

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
	const props = { show: true };
	const component = mount(NotificationArchive, { target: document.body, props });

	const archive = document.body.querySelector('.notification-archive');
	expect(archive).toBeInTheDocument();

	const noNotificationsText = document.body.querySelector('[data-testid="no-notifications"]')
		|| [...document.body.querySelectorAll('*')].find(el => el.textContent?.includes('No recent notifications'));
	expect(noNotificationsText).toBeInTheDocument();

	const closeBtn = [...document.body.querySelectorAll('*')].find(el => el.textContent?.includes('×'));
	expect(closeBtn).toBeInTheDocument();

	unmount(component);
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
	flushSync();

	const props = { show: true, expanded: true };
	const component = await mount(NotificationArchive, { target: document.body, props });

	expect(document.body.textContent).toMatch(/Recent notifications \(2\)/);
	expect(document.body.textContent).toContain('Test notification 1');
	expect(document.body.textContent).toContain('Test notification 2');
	expect(document.body.textContent).toContain('Clear all');

	unmount(component);
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

	const props = { show: true, expanded: false };
	const component = await mount(NotificationArchive, { target: document.body, props });

	expect(document.body.textContent).toMatch(/Recent notifications \(1\)/);
	expect(document.body.textContent).not.toContain('Test notification 1');

	const toggleBtn = document.querySelector('.notification-archive header h2 button');
	expect(toggleBtn).toBeInTheDocument();
	expect(toggleBtn).toHaveTextContent('Recent notifications (1)');

	await userEvent.click(toggleBtn);
	expect(document.body.textContent).toContain('Test notification 1');

	unmount(component);
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

	const props = { show: true, expanded: true };
	const component = await mount(NotificationArchive, { target: document.body, props });
	expect(document.body.textContent).toContain('Test notification 1');
	expect(document.body.textContent).toContain('Test notification 2');

	const clearBtn = document.body.querySelector('.btn-clear');

	await userEvent.click(clearBtn);
	expect(document.body.textContent).toContain('No recent notifications');
	expect(document.body.textContent).not.toContain('Test notification 1');
	expect(document.body.textContent).not.toContain('Test notification 2');

	unmount(component);
});


test('NotificationArchive close button hides archive', async () => {
	const props = { show: true };
	const component = mount(NotificationArchive, { target: document.body, props });

	const closeBtn = document.querySelector('.btn-close');
	await userEvent.click(closeBtn);
	expect(document.body.textContent).not.toContain('Recent notifications');

	unmount(component);
});


test('NotificationArchive individual notification removal', async () => {
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

	const props = { show: true, expanded: true };
	const component = await mount(NotificationArchive, { target: document.body, props });

	expect(document.body.textContent).toContain('Test notification 1');
	expect(document.body.textContent).toContain('Test notification 2');

	removeFromArchive('notif1');
	flushSync();

	let storeContents = {};
	const unsubscribe = ArchivedNotifications.subscribe(value => {
		storeContents = value;
	});

	expect(storeContents?.notif1).toBeUndefined();
	expect(storeContents?.notif2).toBeDefined();

	unsubscribe();
	unmount(component);
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

	const props = { show: true, expanded: true };
	const component = await mount(NotificationArchive, { target: document.body, props });

	expect(document.body.textContent).toContain('Test notification 1');

	const toast = document.querySelector('.notification-archive .notification');
	await userEvent.click(toast);
	await userEvent.keyboard('{Escape}');

	expect(document.body.textContent).not.toContain('Test notification 1');

	unmount(component);
});
