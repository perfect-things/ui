<!--
@component ## Icon

A component for rendering SVG icons by name.
- Renders icons from a predefined icon set
- Supports custom icons via the addIcon function

@example
```svelte
<Icon name="alert"/>
<Icon name="check"/>
<Icon name="customIcon"/>
```
@see {@link https://ui.perfectthings.dev/#Icon Icon Docs} for more info.
-->

{#if name}{@html svg}{/if}
<script lang="ts">
import type { IconProps } from './types';
import { getIcon } from './icons';

const { name = '' }: IconProps = $props();

const svg = $derived(getIcon(name));
</script>
