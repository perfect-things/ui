<ul class="tree" tabindex="0">
	{#each items as item}
		<TreeRow {item} />
	{/each}
</ul>

<script>
import TreeRow from './tree-row';
export let items = [];


</script>
