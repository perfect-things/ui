import { NotificationType, type NotificationCallback } from './types';

import { writable, get } from 'svelte/store';
import { guid } from '../utils';
import { fly as _fly } from 'svelte/transition';
export { flip } from 'svelte/animate';

export const Notifications = writable({});
export const Progress = writable({});
export const timers = {};


export const fly = (node, params) => _fly(node, { x: 500, opacity: 1, ...params });
// export const slideUp = (node, params) => _fly(node, { y: -50, ...params });
// export const slideDown = (node, params) => _fly(node, { y: 50, ...params });


export function showNotification (msg, type = 'info', timeout = 5000, btn = undefined, cb: NotificationCallback = () => {}) {
	const id = guid();
	const showProgress = (typeof timeout === 'number');
	const timestamp = new Date().getTime();
	const role = type === NotificationType.INFO ? 'status' : 'alert';
	const notification = { id, type, role, msg, timeout, cb, showProgress, btn, timestamp };
	Notifications.update(list => {
		list[id] = notification;
		return list;
	});
	createTimer(notification);
	return id;
}


export function hideNotification (id): Promise<void> {
	clearInterval(timers[id]);
	return new Promise(resolve => {
		Notifications.update(list => {
			delete list[id];
			return list;
		});
		requestAnimationFrame(() => resolve());
	});
}



export function createTimer (notification, targetEl?) {
	if (!notification.showProgress) return;

	// don't restart the timer if notification is focused
	if (targetEl && targetEl === document.activeElement) return;

	const id = notification.id;
	let progress = getProgress(id);
	timers[id] = setInterval(() => {
		progress += 1;
		setProgress(id, progress);
		applyProgress(id, progress);
		if (progress >= 110) {
			hideNotification(id);
		}
	}, Math.round(notification.timeout / 100));
}



export function clearTimer (notification) {
	clearInterval(timers[notification.id]);
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


/**
 * This updates the css of the progressbar.
 * If this is done using svelte's props & store, the flip animation will be jagged (as the notification is re-rendered).
 */
function applyProgress (id, progress) {
	const el = document?.querySelector(`[data-id="${id}"] .notification-progress`);
	if (el) el.style.width = `${progress}%`;
}
