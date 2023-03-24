<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<li class="menu-item" role="menuitem">
	<button class="menu-button" on:mousedown|preventDefault on:click|capture="{onclick}">
		<span class="menu-item-content"><slot /></span>
		<span class="menu-item-shortcut">{replaceKeySymbols(shortcut)}</span>
	</button>
</li>

<script>
import { createEventDispatcher } from 'svelte';
import { blink } from '../utils.js';

export let shortcut = '';

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
