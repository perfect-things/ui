<Dialog
	title="{config.title}"
	class="message-box message-{config.type}"
	bind:this="{dialog}"
	on:close="{onclose}">
		<Icon name="{config.type}"/>
		<div class="message">{config.message}</div>
		<div slot="footer">
			{#each config.buttons as button}
				<button class="button button-normal button-has-text round {button.type || ''}"
					on:click="{e => onclick(e, button)}">{button.label}</button>
			{/each}
		</div>
</Dialog>
<svelte:options accessors={true}/>

<script>
import { Dialog } from '../dialog';
import { Icon } from '../icon';

let dialog;
let config = {
	message: '',
	type: '',
	title: '',
	buttons: [],
	cb: () => {}
};

export const Type = {
	INFO: 'info',
	WARNING: 'warning',
	ERROR: 'error'
};



export function show (messageOrConfig, _type = Type.INFO, _title = '', btnLabel = 'OK', _cb = () => {}) {
	if (typeof messageOrConfig === 'string') {
		config = {
			message: messageOrConfig,
			type: _type,
			title: _title,
			cb: _cb,
			buttons: [{ label: btnLabel, value: btnLabel }]
		};
	}
	else config = messageOrConfig;
	if (config.buttons.length === 1) {
		config.buttons[0].type = config.type;
	}
	dialog.open();
}



function onclick (e, button) {
	e.preventDefault();
	config.res = button.value;
	dialog.close();
}

function onclose () {
	config.cb(config.res);
}


</script>
