<!--
@component ## SkeletonHStack

A horizontal stack layout for skeleton components.

@example
```svelte
<SkeletonHStack class="custom-class"/>
```
-->

<div class={['skeleton-hstack', className]}>
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
