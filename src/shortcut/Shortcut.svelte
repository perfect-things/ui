<!--
@component ## Shortcut

A shortcut component that displays keyboard shortcuts for actions.

@example
```svelte
<Shortcut keys="ctrl c"/>
<Shortcut keys="cmd+shift+enter"/>

```
@see {@link https://ui.perfectthings.dev/#Shortcut Shortcut Docs} for more info.
-->

{#if keys}
	<kbd class="shortcut">
		{#each _keys as key (key)}
			<kbd>{key}</kbd>
		{/each}
	</kbd>
{/if}

<script lang="ts">
import './Shortcut.css';
import type { ShortcutProps } from './types';



const { keys = '' }: ShortcutProps = $props();

const _keys = $derived(extractKeys(keys));

function extractKeys (keyString: string): string[] {
	if (!keyString) return [];
	// normalize separators
	keyString = keyString.replace(/\+/g, ' ').replace(/\s+/g, ' ');
	return replaceKeySymbols(keyString).split(' ');
}


function replaceKeySymbols (txt: string | undefined): string {
	return ('' + txt)
		.trim()
		.toUpperCase()
		.replace(/\+/g, '')
		.replace(/CMD|COMMAND/g, '⌘')
		.replace(/ALT|OPTION/g, '⌥')
		.replace(/SHIFT/g, '⇧')
		.replace(/CONTROL|CTRL/g, '⌃')
		.replace(/DELETE|DEL|BACKSPACE/g, '⌫')
		.replace(/ENTER|RETURN/g, '⏎')
		.replace(/ESCAPE|ESC/g, '⎋');
}


</script>
