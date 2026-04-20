<!--
@component ## SkeletonCircle

A single circular skeleton.
Perfect for avatar placeholders.

@example
```svelte
<SkeletonCircle size={80}/>
```
-->
<div class={cls} style:width style:height></div>

<script lang="ts">
import type { SkeletonCircleProps } from '../types';
import './shapes.css';

const {
	class: className = '',
	size = 60
}: SkeletonCircleProps = $props();

const width = $derived(typeof size === 'number' ? `${size}px` : size);
const height = $derived(typeof size === 'number' ? `${size}px` : size);
const cls = $derived(['skeleton-shape', 'skeleton-circle', className]);
</script>
