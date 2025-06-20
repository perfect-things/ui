<Dialog
	title={$config.title}
	class="message-box message-{$config.type}"
	bind:element={element}
	bind:this={dialog}
	{onclose}>
		<Icon name={$config.icon || $config.type}/>
		<div class="message">
			<div class="message-content">{@html $config.message}</div>
		</div>
		{#snippet footer()}
		<div >
				{#if $config.buttons}
					{#each $config.buttons as button (button.value || button.label)}
						<Button
							info={button.type === 'info'}
							warning={button.type === 'warning'}
							danger={button.type === 'error' || button.type === 'danger'}
							success={button.type === 'success'}
							onclick={e => onclick(e, button)}>
							{button.label}
						</Button>
					{/each}
				{/if}
			</div>
	{/snippet}
</Dialog>

<script lang="ts">
import './MessageBox.css';
import { onDestroy, onMount } from 'svelte';
import { config } from './MessageBox.js';
import { Dialog } from '../dialog';
import { Button } from '../button';
import { Icon } from '../icon';

let { element = $bindable(undefined) } = $props();

type Props = {
	open: (openedBy?: HTMLElement) => Promise<void>;
	close: () => Promise<void>
};

let dialog: Props = $state(), sub;

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
