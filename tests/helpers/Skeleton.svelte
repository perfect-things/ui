<script lang="ts">
import {
	SkeletonHStack,
	SkeletonVStack,
	SkeletonGrid,
	SkeletonRect,
} from '../../src/skeleton';

interface Props {
	layout: 'hstack' | 'vstack' | 'grid';
	class?: string;
	size?: number | string;
}

const { layout, class: className, size }: Props = $props();
</script>

{#if layout === 'hstack'}
	<SkeletonHStack class={className}>
		<SkeletonRect class="child a" width={10} height={10} />
		<SkeletonRect class="child b" width={10} height={10} />
	</SkeletonHStack>
{:else if layout === 'vstack'}
	<SkeletonVStack class={className}>
		<SkeletonRect class="child a" width={10} height={10} />
		<SkeletonRect class="child b" width={10} height={10} />
	</SkeletonVStack>
{:else}
	<SkeletonGrid class={className} {size}>
		<SkeletonRect class="child a" width={10} height={10} />
		<SkeletonRect class="child b" width={10} height={10} />
		<SkeletonRect class="child c" width={10} height={10} />
	</SkeletonGrid>
{/if}
