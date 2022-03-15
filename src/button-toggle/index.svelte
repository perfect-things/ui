<div class="button-toggle {cssClass}" {disabled} class:round>
	<input type="hidden" {id} {name} {disabled} value="{value}"/>

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
export let items = '';
export let id = '';
export let name = '';
export let value = '';

const dispatch = createEventDispatcher();

function onKeyDown (e, button) {
	if (e && e.detail) e = e.detail;
	if (value !== button && (e.key === ' ' || e.key === 'Enter')) value = button.value;
	dispatch('keydown', e);
}

function onMouseDown (e, button) {
	value = button.value;
	dispatch('click', e);
}
</script>
