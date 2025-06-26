import type { MessageBox } from './types';
import { writable } from 'svelte/store';


export const config = writable<MessageBox>({});

export const MessageType = {
	INFO: 'info',
	WARNING: 'warning',
	ERROR: 'error',
	DANGER: 'error',
	SUCCESS: 'success',
};


export function showMessage (message, type = '', title = '', btnLabel = 'OK', cb = () => {}) {
	if (typeof message === 'object') return config.set(message);

	const buttons = [{ label: btnLabel, value: btnLabel, type }];
	return config.set({ message, title, cb, type, buttons });
}


export function hideMessage () {
	config.set({});
}
