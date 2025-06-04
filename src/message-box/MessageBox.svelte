<Dialog
	title="{$config.title}"
	class="message-box message-{$config.type}"
	bind:element="{element}"
	bind:this="{dialog}"
	on:close="{onclose}">
		<Icon name="{$config.icon || $config.type}"/>
		<div class="message">
			<div class="message-content">{@html $config.message}</div>
		</div>
		<div slot="footer">
			{#if $config.buttons}
				{#each $config.buttons as button}
					<Button
						info="{button.type === 'info'}"
						warning="{button.type === 'warning'}"
						danger="{button.type === 'error' || button.type === 'danger'}"
						success="{button.type === 'success'}"
						on:click="{e => onclick(e, button)}">
						{button.label}
					</Button>
				{/each}
			{/if}
		</div>
</Dialog>

<script>
import './MessageBox.css';
import { onDestroy, onMount } from 'svelte';
import { config } from './MessageBox.js';
import { Dialog } from '../dialog';
import { Button } from '../button';
import { Icon } from '../icon';

export let element = undefined;

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
