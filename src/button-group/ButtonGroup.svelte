<div class="button-group {className}" class:round bind:this={element}>
	<div class="button-group-scroller">
		<div class="button-group-inner" role="group">
			{@render children?.()}
		</div>
	</div>
</div>

<script lang="ts">
import './ButtonGroup.css';

interface ButtonGroupProps {
	class?: string;
	round?: any;
	element?: HTMLDivElement;
	children?: any;
}

let {
	class: className = '',
	round = undefined,
	element = $bindable(undefined),
	children
}: ButtonGroupProps = $props();
</script>
