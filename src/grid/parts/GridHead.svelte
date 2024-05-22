<thead>
	<tr>
		{#if multiselect}
			<th class="column-check" on:click="{toggleSelectAll}">
				<Checkbox indeterminate="{$indeterminate}" checked="{$checked}"/>
			</th>
		{/if}
		{#if $columns}
			{#each $columns as column}
				<HeadTH {column} {Data} />
			{/each}
		{/if}
	</tr>
</thead>

<script>
import { Checkbox } from '../../input';
import HeadTH from './GridHeadTH.svelte';

export let multiselect = false;
export let Data = [];

$:columns = Data.columns;
$:checked = Data.allSelected;
$:indeterminate = Data.someSelected;


function toggleSelectAll () {
	Data.toggleSelectAll(!$checked && !$indeterminate);
}
</script>
