<div class="button-toggle {cssClass}" {disabled} class:round>
	{#each items as item}
		{#if item.name}
			<Button
				{disabled}
				icon="{item.icon}"
				cssClass="{value === item.value ? 'selected' : ''}"
				on:keydown="{e => onKeyDown(e, item)}"
				on:mousedown="{e => onMouseDown(e, item)}">
					{item.name}
			</Button>
		{:else}
			<Button
				{disabled}
				icon="{item.icon}"
				cssClass="{value === item.value ? 'selected' : ''}"
				on:keydown="{e => onKeyDown(e, item)}"
				on:mousedown="{e => onMouseDown(e, item)}" />
		{/if}
	{/each}
</div>

<script>
import { createEventDispatcher } from 'svelte';
import Button from '../button';

export let disabled = false;
export let round = undefined;	// round button
export let cssClass = '';
export let icons = '';
export let buttons = '';
export let value = '';

const dispatch = createEventDispatcher();

$:buttonArray = buttons.split(',').filter(i => !!i);
$:iconArray = icons.split(',').filter(i => !!i);
$:items = new Array(buttonArray.length || iconArray.length)
	.fill({})
	.map((_, i) => ({
		name: buttonArray[i],
		icon: iconArray[i],
		value: buttonArray[i] || iconArray[i],
	}));

function onKeyDown (e, button) {
	if (e && e.detail) e = e.detail;
	if (value !== button && (e.key === ' ' || e.key === 'Enter')) value = button;
	dispatch('keydown', e);
}

function onMouseDown (e, button) {
	value = button.value;
	dispatch('click', e);
}
</script>
