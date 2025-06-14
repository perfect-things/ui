<button
	role="menuitem"
	class="menu-item {className}"
	class:disabled
	class:success
	class:warning
	class:danger
	{...rest}
	onmousedown={_onmousedown}
	onclickcapture={_onclick}
	bind:this={element}>

	<span class="menu-item-content">
		{#if icon}<Icon name={icon} />{/if}
		<span class="menu-item-text">{@render children?.()}</span>
	</span>
	<span class="menu-item-shortcut">{replaceKeySymbols(shortcut)}</span>
</button>

<script>
import { getContext } from 'svelte';
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
 * @property {(e: MouseEvent) => any} [onclick]
 * @property {(e: MouseEvent) => any} [onmousedown]
 * * @typedef {Props & { [key: string]: any }} PropsWithRest
 *
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
	onclick = () => {},
	onmousedown = () => {},
	...rest
} = $props();



const { targetEl } = getContext('MenuContext');


function _onclick (e) {
	const btn = e.target.closest('.menu-item');
	if (btn) btn.focus();
	blink(btn, 200).then(() => {
		// modify the event so that:
		// target is the button that opens the menu
		// button is the menuItem <button> that was clicked
		// cancellable is true so that the menu can remain open if event is prevented
		Object.defineProperties(e, {
			target: { value: targetEl(), writable: false, enumerable: true, configurable: true },
			button: { value: btn, writable: false, enumerable: true, configurable: true },
			cancellable: { value: true, writable: false, enumerable: true, configurable: true }
		});
		const res = onclick(e);
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
