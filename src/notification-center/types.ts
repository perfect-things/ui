import type { ClassValue } from 'svelte/elements';


export interface NotificationCenterProps {
	class?: ClassValue;
	round?: boolean;
	outline?: boolean;
	hideButton?: boolean;
}


export type NotificationCallback = (id: string) => void;

export const NotificationType = {
	INFO: 'info',
	SUCCESS: 'success',
	WARNING: 'warning',
	ERROR: 'error',
	LOADING: 'loading'
};


//  id, type, msg, timeout, cb, showProgress, btn, timestamp
export interface Notification {
	id: string;
	type: keyof typeof NotificationType;
	role?: 'status' | 'alert';
	msg: string;
	timeout: number;
	showProgress: boolean;
	btn?: string;
	cb: NotificationCallback;
	timestamp: number;
}
