<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<tbody
data-id={id}
class={['item', `item-${idSlug}`, { 'row-selected': item.selected }]}
tabindex="0">
<tr>
	{#if multiselect}
		<td class={['column-check', { pressing }]}
			onmousedown={() => pressing = true}
			onmouseup={() => pressing = false}
			onmouseleave={() => pressing = false}>
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
const idSlug = $derived(slugify(id));
let pressing = $state(false);
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


function slugify (str) {
	return String(str).toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function getType (column) {
	return typeof $Data[0][column.field];
}


function cellRenderer (column, _item) {
	if (column.renderer) return column.renderer(_item);
	return item[column.field] || '';
}


</script>
