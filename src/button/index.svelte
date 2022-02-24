<button {disabled} {title}
	type="{submit ? 'submit' : 'button'}"
	class="button {cssClass}"

	class:button-normal="{!link && !text && !outline}"
	class:button-outline="{outline}"
	class:button-link="{link}"
	class:button-text="{text}"

	class:button-has-text="{$$slots.default}"
	class:round
	class:success
	class:warning
	class:danger
	on:click="{e => dispatch('click', e)}"
	>
	{#if icon}<Icon name="{icon}"/>{/if}
	<slot></slot>
</button>
<script>
	//class:button-icon="{icon && !$$slots.default}"
import { createEventDispatcher } from 'svelte';
import Icon from '../icon';
export let disabled = false;
export let success = false;
export let warning = false;
export let danger = false;
export let submit = false;

export let outline = false;		// button without background, but with border
export let link = false;		// looks like a link, get's colored underline on hover
export let text = false;		// looks like normal text, but like a button on hover
export let icon = undefined;	// name of the icon
export let round = undefined;	// round button

export let title = undefined;
export let cssClass = '';

const dispatch = createEventDispatcher();
</script>
