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
			<td class="cell-align-{column.align || 'left'}">
				{#if column.snippet}
					{@render column.snippet(item)}
				{:else if column.renderer}
					{@html cellRenderer(column, item)}
				{:else}
					{@html item[column.field] || ''}
				{/if}
			</td>
		{/each}
	</tr>
</tbody>

<script lang="ts">
import type { GridPartProps, GridDataItem } from '../types';
import { Checkbox } from '../../input';

interface Props extends GridPartProps {
	item?: GridDataItem;
}

let {
	item = $bindable({} as GridDataItem),
	multiselect = false,
	Data
}: Props = $props();

const columns = $derived(Data.columns);
const id = $derived(item.id || item.field);
const idSlug = $derived(slugify(id));
let pressing = $state(false);


function slugify (str) {
	return String(str).toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function cellRenderer (column, _item) {
	if (column.renderer) return column.renderer(_item);
	return item[column.field] || '';
}


</script>
