import type { ClassValue } from 'svelte/elements';
import type { RoleType } from '../types';


export type NotificationCallback = (id: string) => void;

export type NotificationType = RoleType | 'loading';

export interface NotificationCenterProps {
	class?: ClassValue;
	round?: boolean;
	outline?: boolean;
	hideButton?: boolean;
}



//  id, type, msg, timeout, cb, showProgress, btn, timestamp
export interface Notification {
	id: string;
	type: NotificationType;
	role?: 'status' | 'alert';
	msg: string;
	timeout: number;
	showProgress: boolean;
	btn?: string;
	cb: NotificationCallback;
	timestamp: number;
}
