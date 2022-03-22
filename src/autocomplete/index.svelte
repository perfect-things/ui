<div class="autocomplete" bind:this="{el}">
	<Icon name="dots"/>
	<input type="text" class="autocomplete-input" autocomplete="off"
		{id}
		{name}
		{title}
		{placeholder}
		{required}
		{disabled}
		value="{value && value.name || ''}"
		bind:this="{inputEl}"
		on:input="{oninput}"
		on:focus="{open}"
		on:change="{selectItem}"
		on:keydown|capture="{onkeydown}"
		on:keypress="{onkeypress}">

	<div class="autocomplete-list {opened ? '' : 'hidden'}"
		on:mouseenter|capture="{() => mouseOverList = true}"
		on:mouseleave|capture="{() => mouseOverList = false}"
		bind:this="{listEl}">
		{#if filteredData.length}
			{#each groupedData as group}
				{#if group.name}
					<div class="autocomplete-list-header">{group.name}</div>
				{/if}
				{#if group.items}
					{#each group.items as item}
						<div
							class="autocomplete-list-item"
							class:selected="{item.idx === highlightIndex}"
							on:click="{() => onclick(item)}">
							{@html item.highlightedName || item.name}
						</div>
					{/each}
				{/if}
			{/each}
		{:else if allowNew === true || allowNew === 'true' }
			<div class="autocomplete-list-item selected"
				on:click="{() => onclick({ name: inputEl && inputEl.value || '' })}">
					Create: <b>{inputEl && inputEl.value || ''}</b>
			</div>
		{/if}
	</div>
</div>

<script>
import { afterUpdate, createEventDispatcher, onDestroy, onMount } from 'svelte';
import { deepCopy, emphasize, fuzzy, highlight, recalculateListPosition, groupData } from './util';
import Icon from '../icon';
export let data = [];
export let value = null;
export let allowNew = false;
export let showAllInitially = true;
export let clearOnEsc = false;
export let id = undefined;
export let name = undefined;
export let title = undefined;
export let placeholder = undefined;
export let required = false;
export let disabled = undefined;
export let elevate = false;

$:elevated = elevate === 'true' || elevate === true;
const dispatch = createEventDispatcher();
let el, inputEl, listEl;
let initial = true;
let opened = false;
let hasEdited = false;
let mouseOverList = false;
let highlightIndex = 0;
let filteredData = [], groupedData = [];
let originalText = '';


onMount(() => {
	if (elevated) document.body.appendChild(listEl);
});

onDestroy(() => {
	if (elevated) listEl.remove();
});

afterUpdate(() => {
	if (!opened && data.length) {
		if (data.length && typeof data[0] === 'string') {
			data = data.map(item => ({ name: item }));
		}
		filter();
		initial = false;
		setInitialValue();
	}
});


function filter () {
	let filtered = deepCopy(data);
	const showAll = (showAllInitially === true || showAllInitially === 'true') && !hasEdited;
	if (!showAll && inputEl.value) {
		const q = inputEl.value.toLowerCase().trim();
		filtered = filtered.filter(item => fuzzy(item.name, q));
		filtered.forEach(item => {
			item.highlightedName = emphasize(item.name, q);
		});
	}

	filtered.forEach((item, idx) => item.idx = idx);
	filteredData = filtered;
	groupedData = groupData(filtered);

	highlightIndex = 0;
	if (listEl) highlight(listEl);
}



function open (e) {
	if (opened) return;
	opened = true;
	hasEdited = false;
	originalText = inputEl.value;
	addEventListeners();
	recalculateListPosition(listEl, inputEl, elevated);

	highlight(listEl);
	requestAnimationFrame(() => {
		if (e && e.type === 'focus') inputEl.select();
	});
}


function close () {
	if (!opened) return;
	removeEventListeners();
	mouseOverList = false;
	opened = false;
}



function selectItem () {
	if (filteredData[highlightIndex]) {
		value = filteredData[highlightIndex];
	}
	// should create a new item
	else if (allowNew) {
		value = { name: inputEl.value };
	}
	else revert();
	close();
}


function setInitialValue () {
	if (filteredData && filteredData.length) {
		let itemId = value;
		if (typeof value === 'object' && value !== null) {
			itemId = value.id || value.name;
		}
		const idx = filteredData.findIndex(i => i.id === itemId || i.name === itemId);
		if (idx > -1) {
			highlightIndex = idx;
			inputEl.value = filteredData[highlightIndex].name;
		}
		highlight(listEl);
	}
}


function up () {
	if (!opened) return open();
	let idx = highlightIndex - 1;
	while (idx > 0 && !filteredData[idx]) idx -= 1;
	if (idx !== highlightIndex && filteredData[idx]) {
		highlightIndex = filteredData[idx].idx;
		highlight(listEl);
	}
}


function down () {
	if (!opened) return open();
	let idx = highlightIndex + 1;
	while (idx < filteredData.length - 1 && !filteredData[idx]) idx += 1;
	if (idx !== highlightIndex && filteredData[idx]) {
		highlightIndex = filteredData[idx].idx;
		highlight(listEl);
	}
}


function revert () {
	if (originalText && originalText !== inputEl.value) inputEl.value = originalText;
	else if (value && value.name) inputEl.value = value.name;
}


function clear () {
	inputEl.value = '';
	filter();
	requestAnimationFrame(() => inputEl.focus());
}



/*** EVENT LISTENERS ******************************************************************************/
function oninput () {
	open();
	filter();
	recalculateListPosition(listEl, inputEl, elevated);
	hasEdited = true;
}


function onclick (item) {
	value = item;
	inputEl.value = item.name;
	highlightIndex = item.idx;
	close();
}


function onkeydown (e) {
	if (e.key === 'Tab') return close();
	const fnmap = {
		ArrowDown: down,
		ArrowUp: up,
		Escape: onEsc,
	};
	if (typeof fnmap[e.key] === 'function') {
		e.preventDefault();
		fnmap[e.key](e);
	}
}


function onkeypress (e) {
	if (e.key === 'Enter') {
		e.preventDefault();
		selectItem();
	}
}

function onEsc (e) {
	if (clearOnEsc && inputEl.value) {
		e.stopPropagation();
		return clear();
	}
	if (opened) {
		e.stopPropagation();
		revert();
		inputEl.focus();
		return close();
	}
	dispatch('keydown', e);
}


function onScrollOrResize (e) {
	if (!opened) return;
	if (e.target == listEl || mouseOverList) return;
	inputEl.blur();
	return close();
}

function onDocumentClick (e) {
	const notEl = el && !el.contains(e.target);
	const notList = listEl && !listEl.contains(e.target);
	if (open && notEl && notList) {
		e.stopPropagation();
		close();
	}
}

function addEventListeners () {
	window.addEventListener('resize', onScrollOrResize);
	document.addEventListener('scroll', onScrollOrResize, true);
	document.addEventListener('click', onDocumentClick, true);
}

function removeEventListeners () {
	window.removeEventListener('resize', onScrollOrResize);
	document.removeEventListener('scroll', onScrollOrResize, true);
	document.removeEventListener('click', onDocumentClick, true);
}
/*** EVENT LISTENERS ******************************************************************************/

</script>
