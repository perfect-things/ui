<div
	class="button-group {className}"
	class:round
	bind:this={element}>

	<div class="button-group-scroller">
		<div class="button-group-inner" role="group">
			{@render children?.()}
		</div>
	</div>
</div>

<script lang="ts">
import type { Snippet } from 'svelte';
import './ButtonGroup.css';

interface Props {
	class?: string;
	round?: boolean;
	element?: HTMLDivElement;
	children?: Snippet;
}

let {
	class: className = '',
	round = undefined,
	element = $bindable(undefined),
	children
}: Props = $props();
</script>
