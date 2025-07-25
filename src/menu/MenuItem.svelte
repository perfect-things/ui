<!-- @component MenuItem component. -->

<button
	role="menuitem"
	class={cls}
	{...restProps}
	onmousedown={_onmousedown}
	onclickcapture={_onclick}
	bind:this={element}>

	<span class="menu-item-content">
		{#if icon}<Icon name={icon} />{/if}
		<span class="menu-item-text">{@render children?.()}</span>
	</span>
	<span class="menu-item-shortcut">{replaceKeySymbols(shortcut)}</span>
</button>

<script lang="ts">
import type { MenuItemProps } from './types';
import { getContext } from 'svelte';
import { Icon } from '../icon';
import { blink, replaceKeySymbols } from '../utils';


let {
	shortcut = '',
	icon = undefined,
	class: className = '',
	success = false,
	warning = false,
	danger = false,
	disabled = false,
	element = $bindable(undefined),
	children,
	onclick = () => {},
	onmousedown = () => {},
	...restProps
}: MenuItemProps = $props();



const { targetEl } = getContext<{ targetEl: () => HTMLElement }>('MenuContext');

const cls = $derived([
	'menu-item',
	className,
	{
		success,
		warning,
		danger,
		disabled,
	}
]);


function _onclick (e) {
	const btn = e.target.closest('.menu-item');
	if (btn) btn.focus();
	blink(btn, 200).then(() => {
		const res = onclick(e, { target: targetEl(), button: btn });
		if (res === false) {
			e.stopPropagation();
			e.preventDefault();
		}
	});
}


function _onmousedown (e) {
	e.preventDefault();
	onmousedown(e);
}
</script>
