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

<script lang="ts">
import type { DataStoreType } from '../DataStore';


interface Props {
	multiselect?: boolean;
	Data?: DataStoreType
}

const {
	multiselect = false,
	Data
}: Props = $props();

const columns = $derived(Data.columns);


function sumColumn (column) {
	return $Data.reduce((acc, row) => acc + +row[column.field], 0);
}


function getType (column) {
	return typeof $Data[0][column.field];
}

</script>
