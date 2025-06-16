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


<script lang="ts">
import { Icon } from '../icon';
import './Button.css';
import './Button-normal.css';
import './Button-outline.css';
import './Button-text.css';
import './Button-link.css';


interface ButtonProps {
	class?: string;
	info?: boolean;
	success?: boolean;
	warning?: boolean;
	danger?: boolean;
	error?: boolean;
	submit?: boolean;
	outline?: boolean;
	link?: boolean;
	text?: boolean;
	icon?: any;
	round?: any;
	element?: HTMLButtonElement;
	children?: any;
	[key: string]: any;
}

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
}: ButtonProps = $props();

let touching: boolean = $state(false);
</script>
