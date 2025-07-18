<li bind:this={element}>
	<div
		class={['tree-node', { expanded, selected }]}
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

		<!-- eslint-disable-next-line svelte/require-each-key -->
		{#each indents as indent}
			<div class="tree-indent indent-{indent}"></div>
		{/each}
		<div class="tree-icon tree-{nodeType}-icon"></div>
		<div class="tree-label">{item.id} {item.name}</div>
	</div>

	{#if item.items && expanded}
		<ul>
			{#each item.items as subitem (subitem.id)}
				<TreeNode level={level + 1} item={subitem} />
			{/each}
		</ul>
	{/if}
</li>



<script lang="ts">
import type { TreeNodeProps } from './types';
import TreeNode from './TreeNode.svelte';

let {
	item = {},
	level = 0,
	expanded = $bindable(false),
	element = $bindable(undefined),
}: TreeNodeProps = $props();

const nodeType = $derived(item.items ? 'folder' : 'file');
const indents = $derived(new Array(level).fill(0));
let selected = $derived(item.selected || false);

function toggle () {
	expanded = !expanded;
}


function onkeydown (e: KeyboardEvent) {
	e.stopPropagation();
	selected = true;
	if (e.key === 'ArrowRight') expanded = true;
	else if (e.key === 'ArrowLeft') expanded = false;
}
</script>
