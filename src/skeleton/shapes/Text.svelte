<!--
@component ## SkeletonText

Stacked text-line skeleton placeholder.
- `size` controls the number of lines.
- Line widths vary with a deterministic pattern so successive lines look like real prose.

@example
```svelte
<SkeletonText size={5}/>
```
-->

<SkeletonVStack class="skeleton-text {className}">
	{#each Array(size) as _, i (i)}
		<SkeletonRect class="skeleton-line"></SkeletonRect>
	{/each}
</SkeletonVStack>

<script lang="ts">
import type { SkeletonTextProps } from '../types';
import './shapes.css';

import { SkeletonVStack } from '../layouts';
import SkeletonRect from './Rect.svelte';

const {
	class: className = '',
	size = 3
}: SkeletonTextProps = $props();

</script>
