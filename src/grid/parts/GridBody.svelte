{#each $Data as item}
	<GridRow {item} {multiselect} {Columns}/>
{/each}

<script>
import GridRow from './GridRow.svelte';

export let multiselect = false;
export let Data = [];
export let Columns = [];

</script>
