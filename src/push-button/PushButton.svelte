{#if $$slots.default}
	<Button
		class="push-button {className}"
		aria-pressed="{pressed}"
		{outline}
		{info}
		{success}
		{warning}
		{danger}
		{round}
		{icon}
		{...$$restProps}
		bind:element="{element}"
		on:keydown="{onKeydown}"
		on:mousedown="{onMouseDown}">
			<slot></slot>
	</Button>
{:else}
	<Button
		class="push-button {className}"
		aria-pressed="{pressed}"
		{outline}
		{info}
		{success}
		{warning}
		{danger}
		{round}
		{icon}
		{...$$restProps}
		bind:element="{element}"
		on:keydown="{onKeydown}"
		on:mousedown="{onMouseDown}"/>
{/if}
<script>
import { createEventDispatcher } from 'svelte';
import { Button } from '../button';

let className = '';
export { className as class };

export let pressed = false;

export let info = false;
export let success = false;
export let warning = false;
export let danger = false;
export let outline = false;		// button without background, but with border

export let icon = undefined;	// name of the icon
export let round = undefined;	// round button

export let element = undefined;



const dispatch = createEventDispatcher();

function onKeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') {
		e.preventDefault();
		pressed = !pressed;
		dispatch('change', { ...e, pressed });
	}
}

function onMouseDown (e) {
	pressed = !pressed;
	dispatch('change', { ...e, pressed });
}
</script>
