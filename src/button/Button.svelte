<button
	type={submit ? 'submit' : 'button'}
	bind:this={element}
	class={{
		button: true,
		[className]: className,
		'button-normal': !link && !text && !outline,
		'button-outline': outline,
		'button-link': link,
		'button-text': text,
		'button-has-text': children,
		round: round,
		info: info,
		success: success,
		warning: warning,
		danger: danger,
		error: error,
		touching: touching
	}}
	{...rest}
	ontouchstart={() => touching = true}
	ontouchend={() => touching = false}>
		{#if icon}<Icon name={icon}/>{/if}
		{@render children?.()}
	</button>
<script>
import { Icon } from '../icon';
import './Button.css';
import './Button-normal.css';
import './Button-outline.css';
import './Button-text.css';
import './Button-link.css';


/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {boolean} [info]
 * @property {boolean} [success]
 * @property {boolean} [warning]
 * @property {boolean} [danger]
 * @property {boolean} [error]
 * @property {boolean} [submit]
 * @property {boolean} [outline] - button without background, but with border
 * @property {boolean} [link] - looks like a link, gets colored underline on hover
 * @property {boolean} [text] - looks like normal text, but like a button on hover
 * @property {any} [icon] - name of the icon
 * @property {any} [round] - round button
 * @property {any} [element]
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props & { [key: string]: any }} */
let {
	class: className = '',
	info = false,
	success = false,
	warning = false,
	danger = false,
	error = false,
	submit = false,
	outline = false,
	link = false,
	text = false,
	icon = undefined,
	round = undefined,
	element = $bindable(undefined),
	children,
	...rest
} = $props();


let touching = $state(false);

</script>
