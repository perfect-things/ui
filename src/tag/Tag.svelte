<div
	role="button"
	bind:this={element}
	tabindex={inert ? undefined : 0}
	{inert}
	class={[
		'ui-tag',
		className,
		color,
		{
			round,
			disabled,
			clickable,
			dark: color && isColorDark(color),
			light: color && !isColorDark(color)
		}
	]}
	style="{color ? `background-color: ${color};` : ''}"
	onkeydown={_onkeydown}
	onclick={_onclick}>
	{#if icon}
		<Icon name={icon}/>
	{/if}
	<div class="ui-tag-label">{@render children?.()}</div>
</div>

<script lang="ts">
import './Tag.css';
import type { ClassValue } from 'svelte/elements';
import type { Snippet } from 'svelte';
import { Icon } from '../icon';
import { isColorDark } from '../utils';


interface Props {
	class?: ClassValue;
	round?: boolean;
	icon?: string;
	color?: 'info' | 'warning' | 'danger' | 'success' | string;
	element?: HTMLElement;
	disabled?: boolean;
	clickable?: boolean;
	onclick?: (event: { target: HTMLElement, originalEvent: Event }) => void;
	children?: Snippet;
}

let {
	class: className = '',
	round = false,
	icon = undefined,
	color = undefined,
	element = $bindable(undefined),
	disabled = false,
	clickable = false,
	onclick = () => {},
	children
}: Props = $props();

const inert = $derived(disabled || !clickable);

function _onclick (e) {
	onclick({ target: element, originalEvent: e });
}

function _onkeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') _onclick(e);
}
</script>
