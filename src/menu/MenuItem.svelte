<button
	role="menuitem"
	class="menu-item {className}"
	class:disabled
	class:success
	class:warning
	class:danger
	{...$$restProps}
	on:mousedown|preventDefault
	on:click|capture="{onclick}"
	bind:this="{element}">

	<span class="menu-item-content">
		{#if icon}<Icon name="{icon}" />{/if}
		<span class="menu-item-text"><slot /></span>
	</span>
	<span class="menu-item-shortcut">{replaceKeySymbols(shortcut)}</span>
</button>

<script>
import { createEventDispatcher, getContext } from 'svelte';
import { Icon } from '../icon';
import { blink, replaceKeySymbols } from '../utils';

export let shortcut = '';
export let icon = undefined;
let className = '';
export { className as class };
export let success = false;
export let warning = false;
export let danger = false;
export let disabled = false;

export let element = undefined;



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
