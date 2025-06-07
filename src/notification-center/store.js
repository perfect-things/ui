import { writable, get } from 'svelte/store';
import { ANIMATION_SPEED, pluck, guid } from '../utils';
import { fly as _fly, crossfade } from 'svelte/transition';
import { flip as _flip } from 'svelte/animate';

export const Notifications = writable({});
export const ArchivedNotifications = writable({});
export const Progress = writable({});
export const timers = {};
const duration = get(ANIMATION_SPEED);



export const fly = (node, params) => _fly(node, { duration, x: 500, opacity: 1, ...params });
export const slideUp = (node, params) => _fly(node, { duration, y: -50, ...params });
export const slideDown = (node, params) => _fly(node, { duration, y: 50, ...params });

export const flip = (node, animations, params) => _flip(node, animations, { duration, ...params });

export const [send, receive] = crossfade({
	duration: d => d,
	// @ts-ignore
	fallback (node, params) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;
		return {
			duration: params.duration || duration,
			css: t => `transform: ${transform} scale(${t}); opacity: ${t}`
		};
	}
});



export function createTimer (notification, targetEl) {
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
			clearInterval(timers[id]);
			hideNotification(id);
		}
	}, Math.round(notification.timeout / 100));
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
	// @ts-ignore
	if (el) el.style.width = `${progress}%`;
}


export function clearTimer (notification) {
	clearInterval(timers[notification.id]);
}


export function showNotification (msg, type = 'info', timeout = 5000, btn, cb = () => {}) {
	const id = guid();
	const showProgress = (typeof timeout === 'number');
	const timestamp = new Date().getTime();
	Notifications.update(list => {
		list[id] = { type, msg, id, timeout, cb, showProgress, btn, timestamp };
		return list;
	});
	return id;
}


export function hideNotification (id) {
	return new Promise(resolve => {
		Notifications.update(list => {
			addToArchive(list[id]);
			delete list[id];
			return list;
		});
		requestAnimationFrame(resolve);
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
	return new Promise(resolve => {
		ArchivedNotifications.update(list => {
			delete list[id];
			return list;
		});
		requestAnimationFrame(resolve);
	});
}
