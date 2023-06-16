import { writable } from 'svelte/store';

// export const visible = writable(false);
export const config = writable({});

export const MessageType = {
	INFO: 'info',
	WARNING: 'warning',
	ERROR: 'error'
};


export function showMessage (messageOrConfig, _type = MessageType.INFO, _title = '', btnLabel = 'OK', _cb = () => {}) {
	let cfg = {};
	if (typeof messageOrConfig === 'string') {
		cfg = {
			message: messageOrConfig,
			type: _type,
			title: _title,
			cb: _cb,
			buttons: [{ label: btnLabel, value: btnLabel }]
		};
	}
	else cfg = messageOrConfig;

	if (cfg.buttons.length === 1) {
		cfg.buttons[0].type = cfg.type;
	}

	config.set(cfg);
}

export function hideMessage () {
	config.set({});
}
