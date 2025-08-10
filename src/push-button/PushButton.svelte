<!--
@component ## PushButton

A toggle button component that maintains a pressed/unpressed state.
- Built on top of the Button component with toggle functionality

@example
```svelte
<PushButton bind:pressed={isToggled} icon="star">
  {isToggled ? 'Liked' : 'Like'}
</PushButton>
```
@see {@link https://ui.perfectthings.dev/#PushButton Push Button Docs} for more info.
-->

{#if children}
	<Button
		class={['push-button', className, { touching }]}
		aria-pressed={pressed}
		bind:element
		{onkeydown}
		{onmousedown}
		{ontouchstart}
		{ontouchend}
		{...restProps}>
			{@render children?.()}
	</Button>
{:else}
	<Button
		class={['push-button', className, { touching }]}
		aria-pressed={pressed}
		bind:element
		{onkeydown}
		{onmousedown}
		{ontouchstart}
		{ontouchend}
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


let touching = $state(false);

function onkeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') {
		e.preventDefault();
		pressed = !pressed;
		onchange(e, { pressed });
	}
}

function onmousedown (e) {
	pressed = !pressed;
	onchange(e, { pressed });
}

function ontouchstart (e) {
	touching = true;
	e.preventDefault();
	pressed = !pressed;
	onchange(e, { pressed });
}

function ontouchend (e) {
	touching = false;
	e.preventDefault();
}
</script>
