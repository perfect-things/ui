<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<ul
	class="tree"
	tabindex="0"
	bind:this="{el}"
	on:focus="{selectFirst}"
	on:click="{selectClicked}"
	on:keydown="{onkeydown}">

	{#each items as item}
		<TreeNode {item} />
	{/each}
</ul>

<script lang="ts">
import { createEventDispatcher } from 'svelte';
import TreeNode from './TreeNode.svelte';

export let items = [];

const dispatch = createEventDispatcher();
let el;
let selectedItem;


function getVisibleNodes (): string {
	return Array.from(el.querySelectorAll('.tree .tree-node'));
}


function unselectAll () {
	el.querySelectorAll('.tree .selected').forEach(_el => _el.classList.remove('selected'));
}


function select (node) {
	if (!node || selectedItem === node) return;
	unselectAll();
	selectedItem = node;
	selectedItem.classList.add('selected');
	selectedItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
	const item = tryToGetSelectedItem();
	dispatch('select', { selectedItem, item });
}


function selectClicked (e) {
	select(e.target.closest('.tree-node'));
}


function selectFirst () {
	select(getVisibleNodes()[0]);
}


function selectLast () {
	if (!selectedItem) select(getVisibleNodes().pop());
	else select(selectedItem.closest('ul').querySelector('li:last-child .tree-node'));
}


function selectPrev () {
	const nodes = getVisibleNodes();
	const idx = nodes.indexOf(selectedItem);
	if (idx > 0) select(nodes[idx - 1]);
}


function selectNext () {
	const nodes = getVisibleNodes();
	const idx = nodes.indexOf(selectedItem);
	if (idx < nodes.length - 1) select(nodes[idx + 1]);
}


function selectParent () {
	const level = +selectedItem.dataset.level;
	if (level === 0) return selectFirst();
	select(selectedItem.parentElement.parentElement.previousElementSibling);
}


function goLeft () {
	const isFolder = selectedItem.dataset.type === 'folder';
	if (isFolder) {
		const isExpanded = selectedItem.dataset.expanded === 'true';
		if (isExpanded) selectedItem.click();
		else selectParent();
	}
	else selectParent();
}


function goRight () {
	const isFolder = selectedItem.dataset.type === 'folder';
	if (isFolder) selectedItem.click();
	else selectLast();
}


function onkeydown (e) {
	const keyMap = {
		ArrowUp: selectPrev,
		ArrowDown: selectNext,
		ArrowLeft: goLeft,
		ArrowRight: goRight,
	};
	if (typeof keyMap[e.key] === 'function') {
		e.preventDefault();
		keyMap[e.key](e);
	}
	const item = tryToGetSelectedItem();
	dispatch('keydown', { event: e, selectedItem, item });
}


function tryToGetSelectedItem () {
	const id = selectedItem.dataset.id;
	if (id) return findItem(id);
}


function findItem (id, nodes) {
	if (!nodes) nodes = items;
	for (let found, node, i = 0; node = nodes[i]; i++) {
		if (node.id === id) return node;
		if (node.items) found = findItem(id, node.items);
		if (found) return found;
	}
}

</script>
