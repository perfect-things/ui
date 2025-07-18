<th
	title={column.label}
	class="th-sortable th-{type}"
	tabindex="0"
	onkeydown={e => e.key === 'Enter' && sort()}
	onclick={sort}>
		<div class="cell-aligner">
			<span>{column.label || column.field}</span>
			{#if column.field === $sortField}
				<Icon name={sortIcon}/>
			{/if}
		</div>
</th>

<script lang="ts">
import type { DataStoreType } from '../types';
import { Icon } from '../../icon';

interface Props {
	column?: {
		field: string;
		label?: string;
	};
	Data?: DataStoreType;
}

const {
	column = { field: '' },
	Data
}: Props = $props();


const sortField = $derived(Data.sortField);
const sortOrder = $derived(Data.sortOrder);
const sortIcon = $derived($sortOrder === 'ASC' ? 'arrowNarrowDown' : 'arrowNarrowUp');
const type = $derived(typeof $Data[0][column.field]);	// used to e.g. align numbers to the right


function sort () {
	if ($sortField === column.field) {
		$sortOrder = $sortOrder === 'ASC' ? 'DESC' : 'ASC';
	}
	else {
		$sortField = column.field;
		$sortOrder = 'ASC';
	}
}

</script>
