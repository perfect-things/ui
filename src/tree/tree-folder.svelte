<div class="tree-folder" class:expanded on:click={toggle}>
	{#each indents as indent}
		<div class="tree-indent"></div>
	{/each}
	<div class="tree-icon tree-folder-icon"></div>
	<div class="tree-label">{item.name}</div>
</div>

{#if expanded}
	<ul>
		{#each item.items as subitem}
			<TreeRow level="{level}" item="{subitem}" />
		{/each}
	</ul>
{/if}



<script>
import TreeRow from './tree-row';

export let expanded = false;
export let item = {};
export let level = 0;
$:indents = new Array(level - 1).fill(0);

function toggle () {
	expanded = !expanded;
}

</script>
