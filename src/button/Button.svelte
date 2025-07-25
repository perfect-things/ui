<button
	{type}
	bind:this={element}
	class={cls}
	ontouchstart={() => touching = true}
	ontouchend={() => touching = false}
	{...restProps}>
		<Icon name={icon}/>
		{@render children?.()}
</button>


<script lang="ts">
/**
 * Button component for Svelte
*/
import type { ButtonProps } from './types';
import { Icon } from '../icon';
import './Button.css';
import './Button-normal.css';
import './Button-outline.css';
import './Button-text.css';
import './Button-link.css';


let {
	class: className = '',

	info = false,
	success = false,
	warning = false,
	danger = false,
	submit = false,

	outline = false,
	link = false,
	text = false,
	round = undefined,

	icon = undefined,
	element = $bindable(undefined),
	children,
	...restProps
}: ButtonProps = $props();

let touching: boolean = $state(false);
const type = $derived(submit ? 'submit' : 'button');

const cls = $derived([
	'button',
	className,
	{
		'button-normal': !link && !text && !outline,
		'button-outline': outline,
		'button-link': link,
		'button-text': text,
		'button-has-text': children,
		round,
		info,
		success,
		warning,
		danger,
		touching,
	}
]);



</script>
