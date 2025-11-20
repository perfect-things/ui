import type { MessageBox, MessageType } from './types';
import { writable } from 'svelte/store';


export const config = writable<MessageBox>({});


type CB = (res: string) => void;

export function showMessage (message, type: MessageType = 'info', title = '', btnLabel = 'OK', cb: CB = () => { }) {
	if (typeof message === 'object') return config.set(message);

	const buttons = [{ label: btnLabel, value: btnLabel, type }];
	return config.set({ message, title, cb, type, buttons });
}


export function hideMessage () {
	config.set({});
}
