<thead>
	<tr>
		{#if multiselect}
			<th class="column-check" tabindex={0} {onclick} {onkeydown}>
				<Checkbox indeterminate={$indeterminate} checked={$checked} tabindex={-1}/>
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
import type { DataStoreType } from '../types';
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


function onclick () {
	Data.toggleSelectAll(!$checked && !$indeterminate);
}

function onkeydown (e: KeyboardEvent) {
	if (e.key === 'Enter' || e.key === ' ') {
		onclick();
		e.preventDefault();
	}
}
</script>
