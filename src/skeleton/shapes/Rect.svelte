<!--
@component ## SkeletonRect

Rectangular skeleton placeholder.
Perfect for blocks, buttons, or any rectangular element.

@example
```svelte
<SkeletonRect width={200} height={20} />
```
-->

<div class={cls} style:width={w} style:height={h}>{@render children?.()}</div>

<script lang="ts">
import type { SkeletonRectProps } from '../types';
import './shapes.css';


const {
	class: className = '',
	width = undefined,
	height = undefined,
	children = undefined,
}: SkeletonRectProps = $props();

const w = $derived(typeof width === 'number' ? `${width}px` : width);
const h = $derived(typeof height === 'number' ? `${height}px` : height);
const cls = $derived(['skeleton-shape', 'skeleton-rect', className]);
</script>
