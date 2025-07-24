<tfoot>
	<tr>
		{#if multiselect}
			<td></td>
		{/if}
		{#each $columns as column (column.field)}
			<td class="td-{getType(column)}">
				{@html renderer(column)}
			</td>
		{/each}
	</tr>
</tfoot>

<script lang="ts">
import type { DataStoreType } from '../types';


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
	return typeof $Data?.[0]?.[column.field];
}

function renderer (column) {
	if (column.total && column.renderer) {
		const sum = sumColumn(column);
		return column.renderer(sum);
	}
	return '';
}
</script>
