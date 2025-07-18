<li role="separator" class="menu-item menu-separator" bind:this={element}></li>

<script lang="ts">
import type { MenuItemProps } from './types';

let {
	element = $bindable(undefined)
}: MenuItemProps = $props();
</script>
