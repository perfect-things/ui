import { writable } from 'svelte/store';


type MessageBoxConfig = {
	message?: string;
	title?: string;
	type?: string;
	buttons?: Array<{ label: string; value: string; type?: string }>;
	result?: string;
	target?: HTMLElement;
	icon?: string;
	cb?: (value: string) => void;
};

export const config = writable<MessageBoxConfig>({});

export const MessageType = {
	INFO: 'info',
	WARNING: 'warning',
	ERROR: 'error',
	DANGER: 'error',
	SUCCESS: 'success',
};


export function showMessage (message, type = '', title = '', btnLabel = 'OK', cb) {
	if (typeof message === 'object') return config.set(message);

	const buttons = [{ label: btnLabel, value: btnLabel, type }];
	return config.set({ message, title, cb, type, buttons });
}


export function hideMessage () {
	config.set({});
}
