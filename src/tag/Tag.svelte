<div
	class="ui-tag {className} {colorClass}"
	class:round
	class:dark={color && isColorDark(color)}
	class:light={color && !isColorDark(color)}
	class:disabled
	class:clickable
	style="{color ? `background-color: ${color};` : ''}"
	role="button"
	tabindex={disabled || !clickable ? undefined : 0}
	inert={disabled || !clickable}
	bind:this={element}
	onkeydown={_onkeydown}
	onclick={_onclick}>
	{#if icon}
		<Icon name={icon}/>
	{/if}
	<div class="ui-tag-label">{@render children?.()}</div>
</div>

<script lang="ts">
import type { Snippet } from 'svelte';
import './Tag.css';
import { Icon } from '../icon';
import { isColorDark } from '../utils';


interface Props {
	class?: string;
	round?: boolean;
	icon?: string;
	color?: string;
	element?: HTMLElement;
	disabled?: boolean;
	clickable?: boolean;
	onclick?: (event: { target: any, originalEvent: Event }) => void;
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


const colorClass = $derived(['info', 'warning', 'danger', 'success'].includes(color) ? color : '');

function _onclick (e) {
	onclick({ target: element, originalEvent: e });
}

function _onkeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') _onclick(e);
}
</script>
