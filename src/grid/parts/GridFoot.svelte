<tfoot>
	<tr>
		{#if multiselect}
			<td></td>
		{/if}
		{#each $columns as column (column.field)}
			<td class="td-{getType(column)}">{column.total ? sumColumn(column) : ''}</td>
		{/each}
	</tr>
</tfoot>

<script>

/**
 * @typedef {Object} Props
 * @property {boolean} [multiselect]
 * @property {any} [Data]
 */

/** @type {Props} */
const { multiselect = false, Data = [] } = $props();

const columns = $derived(Data.columns);

function sumColumn (column) {
	return $Data.reduce((acc, row) => acc + +row[column.field], 0);
}


function getType (column) {
	return typeof $Data[0][column.field];
}

</script>
