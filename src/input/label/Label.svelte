{#if label}
	<label class={['label', className, { disabled }]} bind:this={element} for={_for}>
		{label}
	</label>
{/if}

<script lang="ts">
import './Label.css';
import type { LabelProps } from './types';


let {
	class: className = '',
	for: _for = '',
	label = '',
	disabled = false,
	element = $bindable(undefined)
}: LabelProps = $props();


</script>
