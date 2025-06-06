<button
	role="menuitem"
	class="menu-item {className}"
	class:disabled
	class:success
	class:warning
	class:danger
	{...rest}
	onmousedown={preventDefault(bubble('mousedown'))}
	onclickcapture={onclick}
	bind:this={element}>

	<span class="menu-item-content">
		{#if icon}<Icon name={icon} />{/if}
		<span class="menu-item-text">{@render children?.()}</span>
	</span>
	<span class="menu-item-shortcut">{replaceKeySymbols(shortcut)}</span>
</button>

<script>
	import { createBubbler, preventDefault } from 'svelte/legacy';

	const bubble = createBubbler();
import { createEventDispatcher, getContext } from 'svelte';
import { Icon } from '../icon';
import { blink, replaceKeySymbols } from '../utils';



	/**
	 * @typedef {Object} Props
	 * @property {string} [shortcut]
	 * @property {any} [icon]
	 * @property {string} [class]
	 * @property {boolean} [success]
	 * @property {boolean} [warning]
	 * @property {boolean} [danger]
	 * @property {boolean} [disabled]
	 * @property {any} [element]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props & { [key: string]: any }} */
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
		...rest
	} = $props();



const dispatch = createEventDispatcher();
const { targetEl } = getContext('MenuContext');


function onclick (e) {
	const btn = e.target.closest('.menu-item');
	if (btn) btn.focus();
	blink(btn, 200).then(() => {
		const target = targetEl();
		const res = dispatch('click', { event: e, target, button: btn }, { cancelable: true });
		if (res === false) {
			e.stopPropagation();
			e.preventDefault();
		}
	});
}

</script>
