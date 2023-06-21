<Dialog
	title="{$config.title}"
	class="message-box message-{$config.type}"
	bind:this="{dialog}"
	on:close="{onclose}">
		<Icon name="{$config.icon || $config.type}"/>
		<div class="message">{@html $config.message}</div>
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
import { onDestroy, onMount } from 'svelte';
import { config } from './MessageBox.js';
import { Dialog } from '../dialog';
import { Icon } from '../icon';

let dialog, sub;

onMount(() => {
	sub = config.subscribe(cfg => {
		if (!dialog) return;
		if (cfg && cfg.message) dialog.open();
		else dialog.close();
	});
});

onDestroy(() => {
	sub();
	config.set({});
});


function onclick (e, button) {
	e.preventDefault();
	$config.result = button.value || button.label;
	dialog.close();
}


function onclose () {
	if (typeof $config.cb === 'function') $config.cb($config.result);
	const target = $config.target || document.body;
	requestAnimationFrame(() => target.focus());
}


</script>
