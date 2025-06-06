{#if label}
	<label
		class="label {className}"
		class:disabled
		bind:this={element}
		for={_for}>{label}</label>
{/if}

<script>
import './Label.css';




	/**
	 * @typedef {Object} Props
	 * @property {string} [class]
	 * @property {string} [for]
	 * @property {string} [label]
	 * @property {boolean} [disabled]
	 * @property {any} [element]
	 */

	/** @type {Props} */
	let {
		class: className = '',
		for: _for = '',
		label = '',
		disabled = false,
		element = $bindable(undefined)
	} = $props();


</script>
