{#if children}
	<Button
		class={['push-button', className]}
		aria-pressed={pressed}
		bind:element
		{onkeydown}
		{onmousedown}
		{...restProps}>
			{@render children?.()}
	</Button>
{:else}
	<Button
		class={['push-button', className]}
		aria-pressed={pressed}
		bind:element
		{onkeydown}
		{onmousedown}
		{...restProps} />
{/if}

<script lang="ts">
import type { PushButtonProps } from './types';
import './PushButton.css';
import { Button } from '../button';


let {
	class: className = '',
	pressed = $bindable(false),
	element = $bindable(undefined),
	onchange = () => {},
	children,
	...restProps
}: PushButtonProps = $props();



function onkeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') {
		e.preventDefault();
		pressed = !pressed;
		onchange(e, pressed);
	}
}

function onmousedown (e) {
	pressed = !pressed;
	onchange(e, pressed);
}
</script>
