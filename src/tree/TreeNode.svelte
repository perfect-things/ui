<li bind:this="{element}">
	<div
		class="tree-node"
		role="{item.items ? 'group' : 'treeitem'}"
		aria-selected="false"
		aria-label="{item.name}"
		aria-expanded="{item.items ? expanded : undefined}"
		class:expanded
		data-type="{nodeType}"
		data-level="{level}"
		data-expanded="{item.items ? expanded : undefined}"
		data-id="{item.id || undefined}"
		on:click={item.items ? toggle : undefined}
		on:key="{onkey}">

		{#each indents as indent}
			<div class="tree-indent indent-{indent}"></div>
		{/each}
		<div class="tree-icon tree-{nodeType}-icon"></div>
		<div class="tree-label">{item.name}</div>
	</div>

	{#if item.items && expanded}
		<ul>
			{#each item.items as subitem}
				<svelte:self level="{level + 1}" item="{subitem}" />
			{/each}
		</ul>
	{/if}
</li>



<script>
export let item = {};
export let level = 0;
export let expanded = false;
export let element = undefined;

$:nodeType = item.items ? 'folder' : 'file';
$:indents = new Array(level).fill(0);


function toggle () {
	expanded = !expanded;
}


function onkey (e) {
	const key = e && e.detail && e.detail.key;
	if (key === 'right') expanded = true;
	else if (key === 'left') expanded = false;
}
</script>
