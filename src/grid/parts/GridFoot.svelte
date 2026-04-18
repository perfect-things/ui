<tfoot>
	<tr>
		{#if multiselect}
			<td></td>
		{/if}
		{#each $columns as column (column.field)}
			<td class="cell-align-{column.align || 'left'}">
				{@html renderer(column)}
			</td>
		{/each}
	</tr>
</tfoot>

<script lang="ts">
import type { GridPartProps } from '../types';

const {
	multiselect = false,
	Data
}: GridPartProps = $props();

const columns = $derived(Data.columns);


function sumColumn (column) {
	return $Data.reduce((acc, row) => acc + +row[column.field], 0);
}

function renderer (column) {
	if (column.total && column.renderer) {
		const sum = sumColumn(column);
		return column.renderer({ [column.field]: sum });
	}
	return '';
}
</script>
