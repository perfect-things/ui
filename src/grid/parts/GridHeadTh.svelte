<th
	title={column.label}
	class="th-sortable cell-align-{column.align || 'left'}"
	style:width={column.width ? column.width + 'px' : null}
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
import type { GridPartProps, GridColumn } from '../types';
import { Icon, ICON } from '../../icon';

interface Props extends GridPartProps {
	column?: GridColumn;
}


const {
	column = { field: '' },
	Data
}: Props = $props();


const sortField = $derived(Data.sortField);
const sortOrder = $derived(Data.sortOrder);
const sortIcon = $derived($sortOrder === 'ASC' ? ICON.ARROWDOWN : ICON.ARROWUP);


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
