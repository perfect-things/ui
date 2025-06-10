{#if children}
	<Button
		class="push-button {className}"
		aria-pressed={pressed}
		{...rest}
		bind:element={element}
		onkeydown={_onkeydown}
		onmousedown={_onmousedown}>
			{@render children?.()}
	</Button>
{:else}
	<Button
		class="push-button {className}"
		aria-pressed={pressed}
		{...rest}
		bind:element={element}
		onkeydown={_onkeydown}
		onmousedown={_onmousedown}/>
{/if}

<script>
import './PushButton.css';
import { Button } from '../button';


/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {boolean} [pressed]
 * @property {any} [element]
 * @property {function} [onchange] - function to call when button is pressed
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props & { [key: string]: any }} */
let {
	class: className = '',
	pressed = $bindable(false),
	element = $bindable(undefined),
	onchange = () => {},
	children,
	...rest
} = $props();



function _onkeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') {
		e.preventDefault();
		pressed = !pressed;
		onchange({ ...e, pressed });
	}
}

function _onmousedown (e) {
	pressed = !pressed;
	onchange({ ...e, pressed });
}
</script>
