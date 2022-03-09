<div class="autocomplete" bind:this="{el}">
	<Icon name="dots"/>
	<input type="text" class="autocomplete-input" autocomplete="off"
		{name}
		{title}
		{placeholder}
		{required}
		{disabled}
		value="{value && value.name || text || ''}"
		bind:this="{inputEl}"
		on:input="{filter}"
		on:focus="{open}"
		on:change="{onchange}"
		on:keydown="{onkeydown}"
		on:keypress="{onkeypress}">

	<div class="autocomplete-list {opened ? '' : 'hidden'}" bind:this="{listEl}">
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
				on:click="{() => onclick({ name: text })}">
					Create: <b>{text}</b>
			</div>
		{/if}
	</div>
</div>

<script>
import { createEventDispatcher } from 'svelte';
import { deepCopy, emphasize, fuzzy } from './util';
import Icon from '../icon';
export let data = [];
export let value = null;
export let text = '';
export let allowNew = false;
export let showAllInitially = true;
export let clearOnEsc = false;
export let name = undefined;
export let title = undefined;
export let placeholder = undefined;
export let required = false;
export let disabled = undefined;

let el, inputEl, listEl;
let opened = false;
let hasEdited = false;
let highlightIndex = 0;
let filteredData = [], groupedData = [];
let originalText = '';
const dispatch = createEventDispatcher();


function filter () {
	text = inputEl.value || '';
	open({ type: 'filter' });
	const showAll = (showAllInitially === true || showAllInitially === 'true') && !hasEdited;
	const q = showAll ? '' : text.toLowerCase().trim();
	let filtered = deepCopy(data);
	if (text) {
		filtered = filtered
			.filter(item => typeof item === 'string' || fuzzy(item.name, q))
			.map(item => {
				item.highlightedName = emphasize(item.name, q);
				// item.score = 1;
				// if (item.name.toLowerCase().includes(q)) item.score = 2;
				// if (item.name.includes(text)) item.score = 3;
				// if (item.name.toLowerCase() === q) item.score = 4;
				// if (item.name === text) item.score = 5;
				return item;
			});
		// .sort((a, b) => b.score - a.score);
	}

	filtered.forEach((item, idx) => item.idx = idx);
	filteredData = filtered;

	let nogroup = [];
	const _groups = {};
	filtered.forEach(item => {
		if (!item.group) return nogroup.push(item);
		_groups[item.group] = _groups[item.group] || { name: item.group, items: [] };
		_groups[item.group].items.push(item);
	});
	const groups = Object.values(_groups).filter(g => !!g.items.length);
	groupedData = [{ items: nogroup }, ...groups];

	highlightIndex = -1;
	hasEdited = true;
	requestAnimationFrame(recalculateListHeight);
	down();
}



function highlight () {
	const selectedEl = listEl.querySelector('.selected');
	if (!selectedEl) return;

	// going up
	if (listEl.scrollTop > selectedEl.offsetTop) {
		listEl.scrollTo({ top: selectedEl.offsetTop, behavior: 'smooth' });
	}

	// going down
	else if (listEl.scrollTop < selectedEl.offsetTop + selectedEl.offsetHeight - listEl.offsetHeight) {
		listEl.scrollTo({
			top: selectedEl.offsetTop + selectedEl.offsetHeight - listEl.offsetHeight,
			behavior: 'smooth'
		});
	}

}


function onclick (item) {
	value = item;
	text = item.name;
	close();
}


function onchange () {
	selectItem();
}


function onkeydown (e) {
	let key = e.key;
	if (key === 'Tab') return close();
	const fnmap = {
		ArrowDown: down.bind(this),
		ArrowUp: up.bind(this),
		Escape: onEsc.bind(this),
	};
	const fn = fnmap[key];
	if (typeof fn === 'function') {
		e.preventDefault();
		fn(e);
	}
}


function onkeypress (e) {
	if (e.key === 'Enter') {
		e.preventDefault();
		selectItem();
	}
}


function onEsc (e) {
	e.stopPropagation();
	if (clearOnEsc && text) return clear();
	if (opened) {
		revert();
		inputEl.focus();
		close();
	}
	else dispatch('keydown', e);
}




function selectItem () {
	if (filteredData[highlightIndex]) {
		value = filteredData[highlightIndex];
		text = value.name;
	}
	// should create a new item
	else if (allowNew) {
		value = { id: null, name: text };
	}
	else revert();
	close();
}


function up () {
	if (!opened) return open({ type: 'up' });
	let idx = highlightIndex - 1;
	while (idx > 0 && !filteredData[idx]) idx -= 1;
	if (idx !== highlightIndex && filteredData[idx]) {
		highlightIndex = filteredData[idx].idx;
		requestAnimationFrame(highlight);
	}
}


function down () {
	if (!opened) return open({ type: 'down' });
	let idx = highlightIndex + 1;
	while (idx < filteredData.length - 1 && !filteredData[idx]) idx += 1;
	if (idx !== highlightIndex && filteredData[idx]) {
		highlightIndex = filteredData[idx].idx;
		requestAnimationFrame(highlight);
	}
}


function revert () {
	if (originalText && originalText !== text) text = originalText;
	else if (value.name) text = value.name;
	if (inputEl.value !== text) inputEl.value = text;
}


function clear () {
	text = '';
	inputEl.value = '';
	filter();
	requestAnimationFrame(() => inputEl.focus());
}


function open (e) {
	if (opened) return;
	opened = true;
	hasEdited = false;
	originalText = text;
	addEventListeners();
	filter();
	const id = value && typeof value === 'object' && value.id ? value.id : value;
	if (id && filteredData && filteredData.length) {
		highlightIndex = filteredData.findIndex(i => i.id === id);
		if (!text) text = filteredData[highlightIndex].name;
	}
	if (inputEl.value !== text) inputEl.value = text;
	requestAnimationFrame(() => {
		if (e && e.type === 'focus') inputEl.select();
		highlight();
	});
}


function close () {
	if (!opened) return;
	removeEventListeners();
	opened = false;
}


function recalculateListHeight (e) {
	if (!opened) return;
	if (e && e.type === 'scroll') return;

	if (listEl && listEl.style) {
		listEl.style.top = (inputEl.offsetHeight + 2) + 'px';
		listEl.style.height = 'auto';
		const listBox = listEl.getBoundingClientRect();
		const listT = listBox.top;
		const listH = listBox.height;
		const winH = window.innerHeight;
		if (listT + listH + 10 > winH) {
			const maxH = winH - listT - 10;
			listEl.style.height = maxH + 'px';
		}
	}
}


function onDocumentClick (e) {
	if (el && !el.contains(e.target)) close();
}

function addEventListeners () {
	document.addEventListener('click', onDocumentClick);
	window.addEventListener('resize', recalculateListHeight);
	document.addEventListener('scroll', recalculateListHeight, true);
}

function removeEventListeners () {
	document.removeEventListener('click', onDocumentClick);
	window.removeEventListener('resize', recalculateListHeight);
	document.removeEventListener('scroll', recalculateListHeight, true);
}


</script>
