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

<script>
import { Checkbox } from '../../input';
import HeadTh from './GridHeadTh.svelte';

/**
 * @typedef {Object} Props
 * @property {boolean} [multiselect]
 * @property {any} [Data]
 */

/** @type {Props} */
const { multiselect = false, Data = [] } = $props();

const columns = $derived(Data.columns);
const checked = $derived(Data.allSelected);
const indeterminate = $derived(Data.someSelected);


function toggleSelectAll () {
	Data.toggleSelectAll(!$checked && !$indeterminate);
}
</script>
