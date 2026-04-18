{#each $Data as item (item.id || item.field)}
	<GridRow {item} {multiselect} {Data}/>
{/each}

<script lang="ts">
import type { GridPartProps } from '../types';
import GridRow from './GridRow.svelte';


const {
	multiselect = false,
	Data
}: GridPartProps = $props();

</script>
