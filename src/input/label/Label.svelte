{#if label}
	<label
		class="label {className}"
		class:disabled
		bind:this={element}
		for={_for}>{label}</label>
{/if}

<script lang="ts">
import './Label.css';


interface Props {
	class?: string;
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
