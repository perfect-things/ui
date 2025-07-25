<!--
@component ## ButtonGroup

A container component that groups multiple buttons together with consistent styling.
- Supports horizontal scrolling for long button lists

@example
```svelte
<ButtonGroup>
  <Button>First</Button>
  <Button disabled>Disabled</Button>
  <Button>Third</Button>
</ButtonGroup>

<ButtonGroup round>
  <Button info>Info</Button>
  <Button success>Success</Button>
  <Button warning>Warning</Button>
</ButtonGroup>
```
@see {@link https://ui.perfectthings.dev/#ButtonGroup Button Group Docs} for more info.
-->

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
