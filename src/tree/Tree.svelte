<ul
	class="tree {className}"
	role="tree"
	aria-label={title}
	{title}
	bind:this={element}
	tabindex="0"
	onfocus={selectFirst}
	onclick={selectClicked}
	onkeydown={_onkeydown}>

	{#each items as item (item)}
		<TreeNode {item} />
	{/each}
</ul>

<script lang="ts">
import './Tree.css';
import TreeNode from './TreeNode.svelte';


interface Props {
	class?: string;
	items?: Array<any>;
	title?: string;
	element?: HTMLElement;
	onselect?: (event: { selectedItem: Element, item: any }) => void;
	onkeydown?: (event: { event: KeyboardEvent, selectedItem: Element, item: any }) => void;
}

let {
	class: className = '',
	items = [],
	title = undefined,
	element = $bindable(),
	onselect = () => {},
	onkeydown = () => {},
}: Props = $props();


let selectedItem;


function getVisibleNodes () {
	return Array.from(element.querySelectorAll('.tree .tree-node'));
}


function unselectAll () {
	element.querySelectorAll('.tree .selected').forEach(_el => _el.classList.remove('selected'));
}


function _select (node) {
	if (!node || selectedItem === node) return;
	unselectAll();
	selectedItem = node;
	selectedItem.classList.add('selected');
	if (selectedItem.scrollIntoView) {
		selectedItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
	}
	const item = tryToGetSelectedItem();
	onselect({ selectedItem, item });
}


function selectClicked (e) {
	_select(e.target.closest('.tree-node'));
}


function selectFirst () {
	_select(getVisibleNodes()[0]);
}

function selectFirstChild () {
	const children = selectedItem.nextElementSibling;
	if (!children) return;
	const firstChild = children.querySelector('.tree-node');
	if (firstChild) _select(firstChild);
}


function selectPrev () {
	const nodes = getVisibleNodes();
	const idx = nodes.indexOf(selectedItem);
	if (idx > 0) _select(nodes[idx - 1]);
}


function selectNext () {
	const nodes = getVisibleNodes();
	const idx = nodes.indexOf(selectedItem);
	if (idx < nodes.length - 1) _select(nodes[idx + 1]);
}


function selectParent () {
	const level = +selectedItem.dataset.level;
	if (level === 0) return selectFirst();
	_select(selectedItem.parentElement.parentElement.previousElementSibling);
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


function _onkeydown (e) {
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
	onkeydown({ event: e, selectedItem, item });
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
