<tfoot>
	<tr>
		{#if multiselect}
			<td></td>
		{/if}
		{#each $columns as column}
			<td class="td-{getType(column)}">{column.total ? sumColumn(column) : ''}</td>
		{/each}
	</tr>
</tfoot>

<script>
export let multiselect = false;
export let Data = [];

$:columns = Data.columns;

function sumColumn (column) {
	return $Data.reduce((acc, row) => acc + +row[column.field], 0);
}


function getType (column) {
	return typeof $Data[0][column.field];
}

</script>
