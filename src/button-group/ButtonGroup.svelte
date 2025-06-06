<div class="button-group {className}" class:round bind:this={element}>
	<div class="button-group-scroller">
		<div class="button-group-inner" role="group">
			{@render children?.()}
		</div>
	</div>
</div>

<script>
import './ButtonGroup.css';

/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {any} [round] - round button
 * @property {any} [element]
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let {
	class: className = '',
	round = undefined,
	element = $bindable(undefined),
	children
} = $props();
</script>
