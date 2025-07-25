<!--
@component ## InputError

A component for displaying error messages.

@example
```svelte
<InputError id="username-error" msg={usernameError} />
<InputError msg={validationError} animOffset={24} animOpacity />
```
@see {@link https://ui.perfectthings.dev/#InputError Input Error Docs} for more info.
-->

{#if msg}
	<div class="error-wrap" bind:this={element} transition:slideError|local>
		<Error {id} {msg} />
	</div>
{/if}


<script lang="ts">
import './InputError.css';
import type { InputErrorProps } from './types';
import { UI } from '../../utils';
import Error from '../../info-bar/Error.svelte';



let {
	id = undefined,
	msg = '',
	element = $bindable(undefined),
	animOffset = 0,
	animOpacity = false
}: InputErrorProps = $props();


const _animOffset = $derived(parseInt(String(animOffset), 10) || 0);
const _hasOffset = $derived(_animOffset > 0);
const _animOpacity = $derived(animOpacity || _hasOffset);


function slideError (node) {
	const o = node.getBoundingClientRect().height;
	return {
		duration: UI.ANIMATION_SPEED,
		css: (t) => {
			return `height: ${t * o}px;` +
				(_animOpacity ? `opacity: ${t};` : '') +
				(_hasOffset ? `margin-bottom: ${t * _animOffset - _animOffset}px;` : '');
		},
	};
}


</script>
