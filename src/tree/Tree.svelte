<ul
	class="tree {className}"
	role="tree"
	aria-label="{title}"
	{title}
	tabindex="0"
	bind:this="{element}"
	on:focus="{selectFirst}"
	on:click="{selectClicked}"
	on:keydown="{onkeydown}">

	{#each items as item}
		<TreeNode {item} />
	{/each}
</ul>

<script>
import './Tree.css';
import { createEventDispatcher } from 'svelte';
import TreeNode from './TreeNode.svelte';


let className = '';
export { className as class };
export let items = [];
export let title = undefined;
export let element;


const dispatch = createEventDispatcher();
let selectedItem;


function getVisibleNodes () {
	return Array.from(element.querySelectorAll('.tree .tree-node'));
}


function unselectAll () {
	element.querySelectorAll('.tree .selected').forEach(_el => _el.classList.remove('selected'));
}


function select (node) {
	if (!node || selectedItem === node) return;
	unselectAll();
	selectedItem = node;
	selectedItem.classList.add('selected');
	if (selectedItem.scrollIntoView) {
		selectedItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
	}
	const item = tryToGetSelectedItem();
	dispatch('select', { selectedItem, item });
}


function selectClicked (e) {
	select(e.target.closest('.tree-node'));
}


function selectFirst () {
	select(getVisibleNodes()[0]);
}

function selectFirstChild () {
	const children = selectedItem.nextElementSibling;
	if (!children) return;
	const firstChild = children.querySelector('.tree-node');
	if (firstChild) select(firstChild);
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


function sendKeyToNode (key) {
	const event = new CustomEvent('key', { detail: { key } });
	selectedItem.dispatchEvent(event);
}

function goLeft () {
	const isFolder = selectedItem.dataset.type === 'folder';
	if (isFolder) {
		const isExpanded = selectedItem.dataset.expanded === 'true';
		if (isExpanded) sendKeyToNode('left');
		else selectParent();
	}
	else selectParent();
}


function goRight () {
	const isFolder = selectedItem.dataset.type === 'folder';
	if (isFolder) {
		const isExpanded = selectedItem.dataset.expanded === 'true';
		if (isExpanded) selectFirstChild();
		else sendKeyToNode('right');
	}
}

function toggle () {
	const isFolder = selectedItem.dataset.type === 'folder';
	if (isFolder) selectedItem.click();
}


function onkeydown (e) {
	const keyMap = {
		ArrowUp: selectPrev,
		ArrowDown: selectNext,
		ArrowLeft: goLeft,
		ArrowRight: goRight,
		Enter: toggle,
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
		// eqeq must stay here, because id can be a number
		if (node.id == id) return node;
		if (node.items) found = findItem(id, node.items);
		if (found) return found;
	}
}

</script>
