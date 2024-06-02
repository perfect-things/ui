<th
	title="{column.label}"
	class="th-sortable th-{type}"
	tabindex="0"
	on:keydown="{e => e.key === 'Enter' && sort()}"
	on:click="{sort}">
		<div class="cell-aligner">
			<span>{column.label || column.field}</span>
			{#if column.field === $sortField}
				<Icon name="{sortIcon}"/>
			{/if}
		</div>
</th>

<script>
import { Icon } from '../../icon';
export let column = {};
export let Data = [];


$:sortField = Data.sortField;
$:sortOrder = Data.sortOrder;
$:sortIcon = $sortOrder === 'ASC' ? 'arrowNarrowDown' : 'arrowNarrowUp';

$:type = typeof $Data[0][column.field];	// used to e.g. align numbers to the right


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
