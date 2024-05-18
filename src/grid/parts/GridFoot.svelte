<tfoot>
	<tr>
		{#if multiselect}
			<td></td>
		{/if}
		{#each $Columns as column}
			<td class="td-{getType(column)}">{column.total ? sumColumn(column) : ''}</td>
		{/each}
	</tr>
</tfoot>

<script>
export let multiselect = false;
export let Data = [];
export let Columns = [];


function sumColumn (column) {
	return $Data.reduce((acc, row) => acc + +row[column.field], 0);
}


function getType (column) {
	return typeof $Data[0][column.field];
}

</script>
