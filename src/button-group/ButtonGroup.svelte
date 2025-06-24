<div
	{id}
	bind:this={element}
	class={cls}
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
	id = undefined,
	class: className = '',
	round = undefined,
	element = $bindable(undefined),
	children,
	...restProps
}: ButtonGroupProps = $props();


const cls = $derived(['button-group', className, { round }]);

</script>
