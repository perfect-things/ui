<Dialog
	title="{$config.title}"
	class="message-box message-{$config.type}"
	bind:this="{dialog}"
	on:close="{onclose}">
		<Icon name="{$config.type}"/>
		<div class="message">{$config.message}</div>
		<div slot="footer">
			{#if $config.buttons}
				{#each $config.buttons as button}
					<button class="button button-normal button-has-text {button.type || ''}"
						on:click="{e => onclick(e, button)}">{button.label}</button>
				{/each}
			{/if}
		</div>
</Dialog>

<script>
import { onMount } from 'svelte';
import { config } from './MessageBox.js';
import { Dialog } from '../dialog';
import { Icon } from '../icon';

let dialog;

onMount(() => {
	config.subscribe(cfg => {
		if (!dialog) return;
		if (cfg && cfg.message) dialog.open();
		else dialog.close();
	});
});


function onclick (e, button) {
	e.preventDefault();
	$config.result = button.value;
	dialog.close();
}


function onclose () {
	$config.cb($config.result);
}


</script>
