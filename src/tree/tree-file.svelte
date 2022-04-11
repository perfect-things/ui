<div class="tree-file">
	{#each indents as indent}
		<div class="tree-indent"></div>
	{/each}
	<div class="tree-icon tree-file-icon"></div>
	<div class="tree-label">{item.name}</div>
</div>

<script>
export let item = {};
export let level = 0;
$:indents = new Array(level - 1).fill(0);
</script>
