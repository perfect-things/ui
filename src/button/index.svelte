<button class="{cls} {cssClass}"
	class:button-outline="{outline}"
	class:button-link="{link}"
	class:button-text="{text}"
	class:button-icon="{icon}"
	class:success
	class:warning
	class:danger
	class:primary
	{disabled}
	{title}
	type="{submit ? 'submit' : 'button'}"
	on:click="{e => dispatch('click', e)}"
	>
	{#if icon}<Icon name="{icon}"/>{/if}
	<slot></slot>
</button>

<script>
import './button.css';
import './button-link.css';
import './button-outline.css';
import './button-icon.css';
import './button-icon-text.css';
import { createEventDispatcher } from 'svelte';
import Icon from '../icon';
export let disabled = false;
export let success = false;
export let warning = false;
export let danger = false;
export let primary = false;
export let submit = false;

export let outline = false;		// button without background, but with border
export let link = false;		// looks like a link, get's colored underline on hover
export let text = false;		// looks like normal text, but like a button on hover
export let icon = undefined;	// name of the icon

export let title = undefined;
export let cssClass = '';

$:cls = (!link && !outline && !text && !icon) ? 'button' : '';

const dispatch = createEventDispatcher();
</script>
