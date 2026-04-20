<!--
@component ## SkeletonGrid

A grid layout for skeleton components.
Size is the minimum width of each column (default: 150px).
The grid will automatically fit as many columns as possible based on the specified size.

@example
```svelte
<SkeletonGrid size={150} class="custom-class"/>
```
-->

<div class={['skeleton-grid', className]}
	style="grid-template-columns: repeat(auto-fill, minmax({minw}, 1fr));">
	{@render children?.()}
</div>

<script lang="ts">
import type { SkeletonGridProps } from '../types';
import './layouts.css';

const {
	class: className = '',
	children = undefined,
	size = 150,
}: SkeletonGridProps = $props();

const minw = $derived(typeof size === 'number' ? `${size}px` : size);
</script>
