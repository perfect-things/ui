<input
	type="text"
	role="combobox"
	aria-autocomplete="list"
	aria-controls="combobox-list-{guid}"
	aria-expanded="{expanded}"
	aria-required="{required}"
	autocomplete="off"
	bind:value="{value}"

	{id}
	{disabled}
	{placeholder}

	bind:this="{element}"
	on:input="{onEvent}"
	on:focus="{onEvent}"
	on:mousedown="{onEvent}"
	on:click="{onEvent}"
	on:blur="{onEvent}"
	on:keydown|capture="{onEvent}">



<script>
import { createEventDispatcher } from 'svelte';

export let required = false;
export let disabled = false;
export let value = null;
export let expanded = false;
export let placeholder = '';
export let element = undefined;
export let guid = undefined;
export let id = guid ? 'combobox-input-' + guid : undefined;

const dispatch = createEventDispatcher();

function onEvent (event) {
	const type = event.type;
	dispatch('event', { type, value, event });
}

</script>
