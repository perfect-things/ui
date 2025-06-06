{#if children}
	<Button
		class="push-button {className}"
		aria-pressed={pressed}
		{outline}
		{info}
		{success}
		{warning}
		{danger}
		{round}
		{icon}
		{...rest}
		bind:element={element}
		on:keydown={onKeydown}
		on:mousedown={onMouseDown}>
			{@render children?.()}
	</Button>
{:else}
	<Button
		class="push-button {className}"
		aria-pressed={pressed}
		{outline}
		{info}
		{success}
		{warning}
		{danger}
		{round}
		{icon}
		{...rest}
		bind:element={element}
		on:keydown={onKeydown}
		on:mousedown={onMouseDown}/>
{/if}
<script>
import './PushButton.css';
import { createEventDispatcher } from 'svelte';
import { Button } from '../button';






	/**
	 * @typedef {Object} Props
	 * @property {string} [class]
	 * @property {boolean} [pressed]
	 * @property {boolean} [info]
	 * @property {boolean} [success]
	 * @property {boolean} [warning]
	 * @property {boolean} [danger]
	 * @property {boolean} [outline] - button without background, but with border
	 * @property {any} [icon] - name of the icon
	 * @property {any} [round] - round button
	 * @property {any} [element]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props & { [key: string]: any }} */
	let {
		class: className = '',
		pressed = $bindable(false),
		info = false,
		success = false,
		warning = false,
		danger = false,
		outline = false,
		icon = undefined,
		round = undefined,
		element = $bindable(undefined),
		children,
		...rest
	} = $props();



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
