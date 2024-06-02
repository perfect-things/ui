{#each $Data as item}
	<GridRow {item} {multiselect} {Data}/>
{/each}

<script>
import GridRow from './GridRow.svelte';

export let multiselect = false;
export let Data = [];

</script>
