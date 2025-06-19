<thead>
	<tr>
		{#if multiselect}
			<th class="column-check" onclick={toggleSelectAll}>
				<Checkbox indeterminate={$indeterminate} checked={$checked}/>
			</th>
		{/if}
		{#if $columns}
			{#each $columns as column (column.field)}
				<HeadTh {column} {Data} />
			{/each}
		{/if}
	</tr>
</thead>

<script lang="ts">
import type { DataStoreType } from '../DataStore';
import { Checkbox } from '../../input';
import HeadTh from './GridHeadTh.svelte';

interface Props {
	multiselect?: boolean;
	Data?: DataStoreType
}

const {
	multiselect = false,
	Data
}: Props = $props();


const columns = $derived(Data.columns);
const checked = $derived(Data.allSelected);
const indeterminate = $derived(Data.someSelected);


function toggleSelectAll () {
	Data.toggleSelectAll(!$checked && !$indeterminate);
}
</script>
