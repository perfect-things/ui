<!--
@component ## MessageBox

A global message display component.
- Supports different message types (info, warning, error, success)

@example
```svelte
<MessageBox />
<script>
	import { MessageBox, showMessage } from '@perfectthings/ui';
	showMessage('Some info with the OK button');
</script>
```
@see {@link https://ui.perfectthings.dev/#MessageBox MessageBox Docs} for more info.
-->

<Dialog
	title={$config.title}
	class={['message-box', $config.type && ('message-' + $config.type)]}
	bind:element
	bind:this={dialog}
	{onclose}>
		<Icon name={$config.icon || $config.type}/>
		<div class="message">
			<div class="message-content">{@html $config.message}</div>
		</div>
		{#snippet footer()}
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
	{/snippet}
</Dialog>

<script lang="ts">
import './MessageBox.css';
import type { DialogInstanceProps } from '../dialog/types';
import { onDestroy, onMount } from 'svelte';
import { config, hideMessage } from './MessageBox';
import { Dialog } from '../dialog';
import { Button } from '../button';
import { Icon } from '../icon';

let { element = $bindable(undefined) } = $props();

let dialog: DialogInstanceProps = $state();
let sub;


onMount(() => {
	sub = config.subscribe(cfg => {
		if (!dialog) return;
		if (cfg && cfg.message) dialog.open();
		else dialog.close();
	});
});

onDestroy(() => {
	sub();
	hideMessage();
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
