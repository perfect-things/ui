<!--
@component ## MenuSeparator

 A component that renders a menu separator.
 It can be used to visually separate menu items.

 @example
```svelte
<Menu>
    <MenuItem>Settings</MenuItem>
    <MenuSeparator />
    <MenuItem>Logout</MenuItem>
</Menu>
```
 @see {@link https://ui.perfectthings.dev/#Menu Menu Docs} for more info.
-->

<li role="separator" class="menu-item menu-separator" bind:this={element}></li>

<script lang="ts">
import type { MenuItemProps } from './types';

let {
	element = $bindable(undefined)
}: MenuItemProps = $props();
</script>
