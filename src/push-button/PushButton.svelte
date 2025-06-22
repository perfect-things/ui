{#if children}
	<Button
		aria-pressed={pressed}
		bind:element
		{onkeydown}
		{onmousedown}
		{...rest}
		class={['push-button', className]}>
			{@render children?.()}
	</Button>
{:else}
	<Button
		aria-pressed={pressed}
		bind:element
		{onkeydown}
		{onmousedown}
		{...rest}
		class={['push-button', className]} />
{/if}

<script lang="ts">
import type { Snippet } from 'svelte';
import type { ClassValue } from 'svelte/elements';
import './PushButton.css';
import { Button } from '../button';

interface Props {
	class?: ClassValue;
	pressed?: boolean;
	element?: HTMLButtonElement;
	onchange?: (e: { pressed: boolean }) => void;
	children?: Snippet;
	[key: string]: any;
}

let {
	class: className = '',
	pressed = $bindable(false),
	element = $bindable(undefined),
	onchange = () => {},
	children,
	...rest
}: Props = $props();



function onkeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') {
		e.preventDefault();
		pressed = !pressed;
		onchange({ ...e, pressed });
	}
}

function onmousedown (e) {
	pressed = !pressed;
	onchange({ ...e, pressed });
}
</script>
