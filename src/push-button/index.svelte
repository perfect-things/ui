{#if $$slots.default}
	<Button cssClass="push-button {pressed ? 'pressed' : ''} {cssClass}"
		{disabled} {title} {success} {warning} {danger} {round} {icon}
		bind:this="{_this}" on:mousedown="{onMouseDown}">
			<slot></slot>
	</Button>
{:else}
	<Button cssClass="push-button {pressed ? 'pressed' : ''} {cssClass}"
		{disabled} {title} {success} {warning} {danger} {round} {icon}
		bind:this="{_this}" on:mousedown="{onMouseDown}"/>
{/if}
<script>
import { createEventDispatcher } from 'svelte';
import Button from '../button';

export let _this = undefined;
export let pressed = false;

export let disabled = false;
export let success = false;
export let warning = false;
export let danger = false;

export let icon = undefined;	// name of the icon
export let round = undefined;	// round button

export let title = undefined;
export let cssClass = '';

const dispatch = createEventDispatcher();

function onMouseDown (e) {
	pressed = !pressed;
	dispatch('click', e);
}
</script>
