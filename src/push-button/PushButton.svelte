{#if children}
	<Button
		class="push-button {className}"
		aria-pressed={pressed}
		bind:element
		{onkeydown}
		{onmousedown}
		{...rest}>
			{@render children?.()}
	</Button>
{:else}
	<Button
		class="push-button {className}"
		aria-pressed={pressed}
		bind:element
		{onkeydown}
		{onmousedown}
		{...rest}/>
{/if}

<script lang="ts">
import type { Snippet } from 'svelte';
import './PushButton.css';
import { Button } from '../button';

interface Props {
	class?: string;
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
