<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<tbody
	data-id={id}
	class="item item-{id}"
	tabindex="0"
	class:row-selected={item.selected}
>
	<tr>
		{#if multiselect}
			<td class="column-check">
				<Checkbox checked={item.selected} tabindex={-1}/>
			</td>
		{/if}
		{#each $columns as column (column.field)}
			<td class="td-{getType(column)}">
				{@html cellRenderer(column, item)}
			</td>
		{/each}
	</tr>
</tbody>

<script lang="ts">
import { onMount, onDestroy } from 'svelte';
import type { DataStoreType } from '../types';
import { Checkbox } from '../../input';

interface Props {
	item?: any;
	multiselect?: boolean;
	Data?: DataStoreType;
}

let {
	item = $bindable({}),
	multiselect = false,
	Data
}: Props = $props();

const columns = $derived(Data.columns);
const id = $derived(item.id || item.field);
let sub;

onMount(() => {
	sub = Data.subscribe((data) => {
		if (data && data.length > 0) {
			item = data.find(i => i.id === id) || {};
		}
	});
});

onDestroy(() => {
	sub();
});


function getType (column) {
	return typeof $Data[0][column.field];
}


function cellRenderer (column, _item) {
	if (column.renderer) return column.renderer(_item);
	return item[column.field] || '';
}


</script>
