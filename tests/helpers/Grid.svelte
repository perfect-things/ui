{#snippet nameSnippet(item)}
	<span class="snippet-cell" data-testid="snippet-cell">{item.name} [snippet]</span>
{/snippet}

<Grid {columns} {data}/>

<script lang="ts">
import type { GridColumn, GridDataItem } from '../../src/grid';
import { Grid } from '../../src/grid';

type Scenario =
	| 'legacy-string'
	| 'snippet-only'
	| 'both'
	| 'neither';

interface Props {
	scenario: Scenario;
	data: GridDataItem[];
}

const { scenario, data }: Props = $props();

const stringRenderer = (item: GridDataItem) => `<em class="string-cell">${item.name}</em>`;


const columns: GridColumn[] = $derived.by(() => {
	switch (scenario) {
		case 'legacy-string':
			return [{ field: 'name', label: 'Name', renderer: stringRenderer }];
		case 'snippet-only':
			return [{ field: 'name', label: 'Name', snippet: nameSnippet }];
		case 'both':
			return [{ field: 'name', label: 'Name', renderer: stringRenderer, snippet: nameSnippet }];
		case 'neither':
			return [{ field: 'name', label: 'Name' }];
	}
});
</script>
