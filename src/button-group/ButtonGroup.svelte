<div
	bind:this={element}
	class={[
		'button-group',
		className,
		round && 'round',
	]}>
	<div class="button-group-scroller">
		<div class="button-group-inner" role="group">
			{@render children?.()}
		</div>
	</div>
</div>

<script lang="ts">
import type { ClassValue } from 'svelte/elements';
import type { Snippet } from 'svelte';
import './ButtonGroup.css';

interface Props {
	class?: ClassValue;
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
