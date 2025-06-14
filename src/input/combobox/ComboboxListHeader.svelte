
{#if name}
	<div class="combobox-list-header">{name}</div>
{/if}


<script>
/**
 * @typedef {Object} Props
 * @property {string} [name]
 */

/** @type {Props} */
const { name = '' } = $props();

</script>
