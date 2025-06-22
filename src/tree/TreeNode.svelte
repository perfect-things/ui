<li bind:this={element}>
	<div
		class={[
			'tree-node',
			{ expanded }
		]}
		role={item.items ? 'group' : 'treeitem'}
		aria-selected="false"
		aria-label={item.name}
		aria-expanded={item.items ? expanded : undefined}
		data-type={nodeType}
		data-level={level}
		data-expanded={item.items ? expanded : undefined}
		data-id={item.id || undefined}
		onclick={item.items ? toggle : undefined}
		{onkeydown}>

		{#each indents as indent (indent)}
			<div class="tree-indent indent-{indent}"></div>
		{/each}
		<div class="tree-icon tree-{nodeType}-icon"></div>
		<div class="tree-label">{item.name}</div>
	</div>

	{#if item.items && expanded}
		<ul>
			{#each item.items as subitem (subitem.id || subitem.name)}
				<TreeNode level={level + 1} item={subitem} />
			{/each}
		</ul>
	{/if}
</li>



<script lang="ts">
import TreeNode from './TreeNode.svelte';

interface Props {
	item?: any;
	level?: number;
	expanded?: boolean;
	element?: HTMLElement;
}

let {
	item = {},
	level = 0,
	expanded = $bindable(false),
	element = $bindable(undefined),
}: Props = $props();

const nodeType = $derived(item.items ? 'folder' : 'file');
const indents = $derived(new Array(level).fill(0));


function toggle () {
	expanded = !expanded;
}


function onkeydown (e) {
	const key = e && e.detail && e.detail.key;
	if (key === 'right') expanded = true;
	else if (key === 'left') expanded = false;
}
</script>
