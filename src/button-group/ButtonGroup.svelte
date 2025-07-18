<div
	bind:this={element}
	class={['button-group', className, { round }]}
	{...restProps}>

	<div class="button-group-scroller">
		<div class="button-group-inner" role="group">
			{@render children?.()}
		</div>
	</div>
</div>

<script lang="ts">
import type { ButtonGroupProps } from './types';
import './ButtonGroup.css';


let {
	class: className = '',
	round = undefined,
	element = $bindable(undefined),
	children,
	...restProps
}: ButtonGroupProps = $props();


</script>
