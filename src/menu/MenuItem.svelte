<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<li class="menu-item {className}" class:disabled="{props.disabled}" role="menuitem">
	<button
		class="menu-button"
		class:success
		class:warning
		class:danger
		{...props}
		on:mousedown|preventDefault
		on:click|capture="{onclick}">

		<span class="menu-item-content">
			{#if icon}
				<Icon name="{icon}" />
			{/if}
			<slot />
		</span>
		<span class="menu-item-shortcut">{replaceKeySymbols(shortcut)}</span>
	</button>
</li>

<script>
import { createEventDispatcher } from 'svelte';
import { Icon } from '../icon';
import { pluck, blink } from '../utils';

export let shortcut = '';
export let icon = undefined;
let className = '';
export { className as class };
export let success = false;
export let warning = false;
export let danger = false;


$:props = pluck($$props, ['id', 'title', 'disabled']);

const dispatch = createEventDispatcher();


function replaceKeySymbols (txt) {
	return ('' + txt)
		.trim()
		.toUpperCase()
		.replace(/\+/g, '')
		.replace(/CMD/g, '⌘')
		.replace(/ALT|OPTION/g, '⌥')
		.replace(/SHIFT/g, '⇧')
		.replace(/CONTROL|CTRL/g, '⌃')
		.replace(/DELETE|DEL|BACKSPACE/g, '⌫')
		.replace(/ENTER|RETURN/g, '↩')
		.replace(/ESCAPE|ESC/g, '⎋');
}


function onclick (e) {
	const btn = e.target.closest('.menu-button');
	btn.focus();
	blink(btn, 200).then(() => {
		const res = dispatch('click', e, { cancelable: true });
		if (res === false) {
			e.stopPropagation();
			e.preventDefault();
		}
	});
}

</script>
