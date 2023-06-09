{#if $$slots.default}
	<Button
		class="push-button {className}"
		aria-pressed="{pressed}"
		{...props}
		{outline}
		{info}
		{success}
		{warning}
		{danger}
		{round}
		{icon}
		bind:this="{_this}"
		on:mousedown="{onMouseDown}">
			<slot></slot>
	</Button>
{:else}
	<Button
		class="push-button {className}"
		aria-pressed="{pressed}"
		{...props}
		{outline}
		{info}
		{success}
		{warning}
		{danger}
		{round}
		{icon}
		bind:this="{_this}"
		on:mousedown="{onMouseDown}"/>
{/if}
<script>
import { createEventDispatcher } from 'svelte';
import { Button } from '../button';
import { pluck } from '../utils';

export let _this = undefined;
export let pressed = false;

export let info = false;
export let success = false;
export let warning = false;
export let danger = false;
export let outline = false;		// button without background, but with border

export let icon = undefined;	// name of the icon
export let round = undefined;	// round button

let className = '';
export { className as class };

$:props = pluck($$props, ['id', 'title', 'disabled']);


const dispatch = createEventDispatcher();

function onMouseDown (e) {
	pressed = !pressed;
	dispatch('change', { ...e, pressed });
}
</script>
