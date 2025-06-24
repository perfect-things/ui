<ul
	{title}
	role="tree"
	tabindex="0"
	class={['tree', className]}
	aria-label={title}
	onfocus={selectFirst}
	onclick={selectClicked}
	onkeydown={_onkeydown}
	bind:this={element}
	{...restProps}>

	{#each items as item (item.id)}
		<TreeNode {item} />
	{/each}
</ul>

<script lang="ts">
import './Tree.css';
import type { TreeProps } from './types';
import TreeNode from './TreeNode.svelte';


let {
	class: className = '',
	items = [],
	title = undefined,
	element = $bindable(),
	onselect = () => {},
	onkeydown = () => {},
	...restProps
}: TreeProps = $props();


let selectedItem = $state(undefined);


function getVisibleNodes () {
	return Array.from(element.querySelectorAll('.tree .tree-node'));
}


function unselectAll () {
	element.querySelectorAll('.tree .selected').forEach(_el => _el.classList.remove('selected'));
}


function _select (e: Event, node) {
	if (!node || selectedItem === node) return;
	unselectAll();
	selectedItem = node;
	selectedItem.classList.add('selected');
	if (selectedItem.scrollIntoView) {
		selectedItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
	}
	const item = tryToGetSelectedItem();
	onselect(e, { selectedItem, item });
}


function selectClicked (e) {
	_select(e, e.target.closest('.tree-node'));
}


function selectFirst (e: Event) {
	_select(e, getVisibleNodes()[0]);
}

function selectFirstChild (e: Event) {
	const children = selectedItem.nextElementSibling;
	if (!children) return;
	const firstChild = children.querySelector('.tree-node');
	if (firstChild) _select(e, firstChild);
}


function selectPrev (e: Event) {
	const nodes = getVisibleNodes();
	const idx = nodes.indexOf(selectedItem);
	if (idx > 0) _select(e, nodes[idx - 1]);
}


function selectNext (e: Event) {
	const nodes = getVisibleNodes();
	const idx = nodes.indexOf(selectedItem);
	if (idx < nodes.length - 1) _select(e, nodes[idx + 1]);
}


function selectParent (e: Event) {
	const level = +selectedItem.dataset.level;
	if (level === 0) return selectFirst(e);
	const node = selectedItem?.parentElement?.parentElement?.previousElementSibling;
	_select(e, node);
}


function sendKeyToNode (e: KeyboardEvent) {
	const event = new KeyboardEvent('keydown', {
		key: e.key,
		code: e.code,
		bubbles: true,
	});
	selectedItem.dispatchEvent(event);
}

function goLeft (e: KeyboardEvent) {
	const isFolder = selectedItem.dataset.type === 'folder';
	if (isFolder) {
		const isExpanded = selectedItem.dataset.expanded === 'true';
		if (isExpanded) sendKeyToNode(e);
		else selectParent(e);
	}
	else selectParent(e);
}


function goRight (e: KeyboardEvent) {
	const { type, expanded } = selectedItem.dataset;
	if (type === 'folder') {
		if (expanded !== 'true') sendKeyToNode(e);
		else selectFirstChild(e);
	}
}

function toggle () {
	const isFolder = selectedItem.dataset.type === 'folder';
	if (isFolder) selectedItem.click();
}


function _onkeydown (e: KeyboardEvent) {
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
	onkeydown(e, { selectedItem, item });
}


function tryToGetSelectedItem () {
	const id = selectedItem.dataset.id;
	if (id) return findItem(id);
}


function findItem (id, nodes = items) {
	for (let found, node, i = 0; node = nodes[i]; i++) {
		// eqeq must stay here, because id can be a number
		if (node.id == id) return node;
		if (node.items) found = findItem(id, node.items);
		if (found) return found;
	}
}

</script>
