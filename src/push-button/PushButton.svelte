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
	onkeydown={_onkeydown}
	onmousedown={_onmousedown}>
		{@render children?.()}
</Button>

<script>
import './PushButton.css';
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
 * @property {function} [onchange] - function to call when button is pressed
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
