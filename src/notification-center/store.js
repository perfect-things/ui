import { writable, get } from 'svelte/store';
import { pluck, uuid } from '../utils';

export const Notifications = writable({});
export const ArchivedNotifications = writable({});
export const Progress = writable({});
export const timers = {};



export function createTimer (notification, targetEl) {
	if (!notification.showProgress) return;

	// don't restart the timer if notification is focused
	if (targetEl && targetEl === document.activeElement) return;

	const id = notification.id;
	let progress = getProgress(id);
	timers[id] = setInterval(() => {
		progress += 1;
		setProgress(id, progress);
		if (progress >= 110) {
			clearInterval(timers[id]);
			hideNotification(id);
		}
	}, notification.timeout / 100);
}


function setProgress (id, val) {
	Progress.update(list => {
		list[id] = val;
		return list;
	});
}

function getProgress (id) {
	const progress = get(Progress) || {};
	return progress[id] || 0;
}


export function clearTimer (notification) {
	clearInterval(timers[notification.id]);
}


export function showNotification (msg, type = 'info', timeout = 5000, btn, cb = () => {}) {
	const id = uuid();
	const showProgress = (typeof timeout === 'number');
	const timestamp = new Date().getTime();
	Notifications.update(list => {
		list[id] = { type, msg, id, timeout, cb, showProgress, btn, timestamp };
		return list;
	});
	return id;
}


export function hideNotification (id) {
	Notifications.update(list => {
		addToArchive(list[id]);
		delete list[id];
		return list;
	});
}


function addToArchive (notification) {
	if (!notification) return;
	notification = pluck(notification, ['type', 'msg', 'id', 'timestamp']);
	ArchivedNotifications.update(list => {
		list[notification.id] = notification;
		return list;
	});
}


export function removeFromArchive (id) {
	ArchivedNotifications.update(list => {
		delete list[id];
		return list;
	});
}
