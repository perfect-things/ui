{#each $Data as item (item.id || item.field)}
	<GridRow {item} {multiselect} {Data}/>
{/each}

<script>
import GridRow from './GridRow.svelte';

/**
 * @typedef {Object} Props
 * @property {boolean} [multiselect]
 * @property {any} [Data]
 */

/** @type {Props} */
const { multiselect = false, Data = [] } = $props();

</script>
