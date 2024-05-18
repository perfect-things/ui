<th
	title="{column.label}"
	class="th-sortable th-{type}"
	class:sortasc
	class:sortdesc
	tabindex="0"
	on:keydown="{e => e.key === 'Enter' && sort()}"
	on:click="{sort}">
		<div class="cell-aligner">
			<span>{column.label || column.field}</span>
			{#if sortasc}<Icon name="arrowNarrowDown"/>
			{:else if sortdesc}<Icon name="arrowNarrowUp"/>
			{/if}
		</div>
</th>

<script>
import { Icon } from '../../icon';
export let column = {};
export let Data = [];

let sortasc = false;
let sortdesc = false;

$:sortField = Data.sortField;
$:sortOrder = Data.sortOrder;

$:isDateField = column.field.includes('date');
$:isASC = $sortOrder === 'ASC';
$:type = typeof $Data[0][column.field];

$: {
	sortasc = false;
	sortdesc = false;
	if ($sortField === column.field) {
		if (isDateField) {
			if (isASC) sortdesc = true;
			else sortasc = true;
		}
		else {
			if (isASC) sortasc = true;
			else sortdesc = true;
		}
	}
}


function sort () {
	if ($sortField === column.field) {
		$sortOrder = isASC ? 'DESC' : 'ASC';
	}
	else {
		$sortField = column.field;
		$sortOrder = isDateField ? 'DESC' : 'ASC';
	}
}


</script>
