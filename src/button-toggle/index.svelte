<div class="button-toggle {cssClass}" {disabled} class:round bind:this="{el}">
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
let el;

function onMouseDown (e, button) {
	value = button.value;
	dispatch('click', e);
	dispatch('change', value);
}

function onKeyDown (e, button) {
	if (e && e.detail) e = e.detail;
	if (value !== button && (e.key === ' ' || e.key === 'Enter')) value = button.value;
	else if (e.key === 'ArrowRight') focusNext(e.target);
	else if (e.key === 'ArrowLeft') focusPrev(e.target);
	dispatch('keydown', e);
}


function focusPrev (btn) {
	const buttons = Array.from(el.querySelectorAll('button'));
	const idx = buttons.indexOf(btn);
	if (idx <= 0) return;
	buttons[idx - 1].focus();
}

function focusNext (btn) {
	const buttons = Array.from(el.querySelectorAll('button'));
	const idx = buttons.indexOf(btn);
	if (idx >= buttons.length - 1) return;
	buttons[idx + 1].focus();
}

</script>
