{#if label}
	<label
		class={['label', className, { disabled }]}
		bind:this={element}
		for={_for}>
			{label}
	</label>
{/if}

<script lang="ts">
import type { ClassValue } from 'svelte/elements';
import './Label.css';


interface Props {
	class?: ClassValue;
	for?: string;
	label?: string;
	disabled?: boolean;
	element?: HTMLElement;
}

let {
	class: className = '',
	for: _for = '',
	label = '',
	disabled = false,
	element = $bindable(undefined)
}: Props = $props();


</script>
