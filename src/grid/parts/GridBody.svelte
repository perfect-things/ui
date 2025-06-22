{#each $Data as item (item.id || item.field)}
	<GridRow {item} {multiselect} {Data}/>
{/each}

<script lang="ts">
import type { DataStoreType } from '../DataStore';
import GridRow from './GridRow.svelte';

interface Props {
	multiselect?: boolean;
	Data?: DataStoreType;
}

const {
	multiselect = false,
	Data
}: Props = $props();

</script>
