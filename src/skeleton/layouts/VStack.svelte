<!--
@component ## SkeletonVStack

A vertical stack layout for skeleton components.

@example
```svelte
<SkeletonVStack class="custom-class"/>
```
-->

<div class={['skeleton-vstack', className]}>
	{@render children?.()}
</div>

<script lang="ts">
import type { SkeletonContainer } from '../types';
import './layouts.css';

const {
	class: className = '',
	children = undefined,
}: SkeletonContainer = $props();

</script>
