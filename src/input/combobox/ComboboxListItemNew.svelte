<!-- svelte-ignore a11y_interactive_supports_focus -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
{#if show}
	<div class="combobox-list-header">Create new item</div>
	<div
		role="option"
		class="combobox-list-item"
		class:selected={selected}
		aria-selected={selected}
		onclick={onclick}>
			{name}
	</div>
{/if}

<script>

/**
 * @typedef {Object} Props
 * @property {boolean} [selected]
 * @property {boolean} [show]
 * @property {string} [name]
 * @property {Function} [onclick]
 */

/** @type {Props} */
const {
	selected = false,
	show = false,
	name = '',
	onclick = () => {}
} = $props();


</script>
