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
		{#each $Columns as column}
			<td>
				{item[column.field] || ''}
			</td>
		{/each}
	</tr>
</tbody>

<script>
import { Checkbox } from '../../input';
export let item = {};
export let multiselect = false;
export let Columns = [];

$:id = item.id || item.field;


</script>
