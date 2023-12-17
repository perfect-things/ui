<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
	type="{submit ? 'submit' : 'button'}"
	bind:this="{element}"

	class="button {className}"
	class:button-normal="{!link && !text && !outline}"
	class:button-outline="{outline}"
	class:button-link="{link}"
	class:button-text="{text}"
	class:button-has-text="{$$slots.default}"
	class:round
	class:info
	class:success
	class:warning
	class:danger
	class:error
	class:touching
	{...$$restProps}

	on:focus
	on:keydown
	on:mousedown
	on:mouseup
	on:mouseover
	on:mouseout
	on:mousemove
	on:touchstart="{() => touching = true}"
	on:touchend="{() => touching = false}"
	on:click>

	{#if icon}<Icon name="{icon}"/>{/if}
	<slot></slot>
</button>
<script>
import { Icon } from '../icon';

export let element = undefined;

export let info = false;
export let success = false;
export let warning = false;
export let danger = false;
export let error = false;
export let submit = false;

export let outline = false;		// button without background, but with border
export let link = false;		// looks like a link, get's colored underline on hover
export let text = false;		// looks like normal text, but like a button on hover
export let icon = undefined;	// name of the icon
export let round = undefined;	// round button

let className = '';
export { className as class };

let touching = false;

</script>
