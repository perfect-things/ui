<button
	type={submit ? 'submit' : 'button'}
	bind:this={element}
	{title}
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


<script lang="ts">
import { type Snippet } from 'svelte';
import { Icon } from '../icon';
import './Button.css';
import './Button-normal.css';
import './Button-outline.css';
import './Button-text.css';
import './Button-link.css';


interface ButtonProps {
	class?: string;
	title?: string;

	// button types
	info?: boolean;
	success?: boolean;
	warning?: boolean;
	danger?: boolean;
	error?: boolean;		// Indicates that button type = error
	submit?: boolean;

	// button styles
	outline?: boolean;
	link?: boolean;
	text?: boolean;
	round?: boolean;

	icon?: string;
	element?: HTMLButtonElement;
	children?: Snippet;
	[key: string]: any;
}

let {
	class: className = '',
	title = undefined,
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
}: ButtonProps = $props();

let touching: boolean = $state(false);
</script>
