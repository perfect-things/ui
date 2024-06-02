<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<tbody
	data-id="{id}"
	class="item item-{id}"
	tabindex="0"
	class:row-selected="{item.selected}"
>
	<tr>
		{#if multiselect}
			<td class="column-check">
				<Checkbox bind:checked="{item.selected}" tabindex="-1"/>
			</td>
		{/if}
		{#each $columns as column}
			<td class="td-{getType(column)}">
				{@html cellRenderer(column, item)}
			</td>
		{/each}
	</tr>
</tbody>

<script>
import { Checkbox } from '../../input';
export let item = {};
export let multiselect = false;
export let Data = [];

$:columns = Data.columns;
$:id = item.id || item.field;

function getType (column) {
	return typeof $Data[0][column.field];
}


function cellRenderer (column, _item) {
	if (column.renderer) return column.renderer(_item);
	return item[column.field] || '';
}


</script>
