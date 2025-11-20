import type { RoleType } from '../types';

export type MessageType = 'info' | 'warning' | 'error' | 'success';

export type MessageBox = {
	message?: string;
	title?: string;
	type?: MessageType;
	buttons?: Array<{ label: string; value: string; type?: RoleType }>;
	result?: string;
	target?: HTMLElement;
	icon?: string;
	cb?: (value: string) => void;
};
