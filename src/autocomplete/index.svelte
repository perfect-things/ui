<div class="autocomplete" bind:this="{el}">
	<Icon name="dots"/>
	<input type="text" class="autocomplete-input"
		{required}
		value="{text}"
		placeholder="{placeholder}"
		bind:this="{input}"
		on:input="{filter}"
		on:focus="{open}"
		on:keydown="{onkeydown}"
		on:keypress="{onkeypress}"
	>
	<div class="autocomplete-list {opened ? '' : 'hidden'}" bind:this="{list}">
		{#if groupedData.length}
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
export let placeholder = '';
export let required = false;
let el;
let opened = false;
let hasEdited = false;
let highlightIndex = 0;
let input, list, filteredData = [], groupedData = [];
const dispatch = createEventDispatcher();



function selectItem () {
	if (filteredData[highlightIndex]) {
		value = filteredData[highlightIndex];
		text = value.name;
	}
	// should create a new item
	else value = { id: null, name: text };
	close();
}

function up () {
	open();
	let idx = highlightIndex - 1;
	while (idx > 0 && !filteredData[idx]) idx -= 1;
	if (idx !== highlightIndex && filteredData[idx]) {
		highlightIndex = filteredData[idx].idx;
		highlight();
	}
}


function down () {
	open();
	let idx = highlightIndex + 1;
	while (idx < filteredData.length - 1 && !filteredData[idx]) idx += 1;
	if (idx !== highlightIndex && filteredData[idx]) {
		highlightIndex = filteredData[idx].idx;
		highlight();
	}
}


function highlight () {
	const selectedEl = list.querySelector('.selected');
	if (!selectedEl) return;
	const listEl = selectedEl.parentNode;

	// scrollIntoView doesn't work consistently, especially in safari
	// el.scrollIntoView({ behavior: 'smooth', block: 'center' });

	// going up
	if (listEl.scrollTop > selectedEl.offsetTop - selectedEl.offsetHeight) {
		listEl.scrollTo({
			top: selectedEl.offsetTop - selectedEl.offsetHeight,
			behavior: 'smooth'
		});
	}

	// going down
	else if (listEl.scrollTop < selectedEl.offsetTop + selectedEl.offsetHeight * 2 - listEl.offsetHeight) {
		listEl.scrollTo({
			top: selectedEl.offsetTop + selectedEl.offsetHeight * 2 - listEl.offsetHeight,
			behavior: 'smooth'
		});
	}

}


function filter () {
	text = input.value || '';
	open();
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


function onclick (item) {
	value = item;
	text = item.name;
	close();
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
		input.focus();
		close();
	}
	else dispatch('keydown', e);
}


function clear () {
	text = '';
	input.value = '';
	filter();
	requestAnimationFrame(() => input.focus());
}


function open () {
	if (opened) return;
	opened = true;
	hasEdited = false;
	addEventListeners();
	filter();
	if (value !== null && value.id && filteredData && filteredData.length) {
		highlightIndex = filteredData.findIndex(i => i.id === value.id);
		if (text === '') text = filteredData[highlightIndex].name;
	}
	if (input.value !== text) input.value = text;
	requestAnimationFrame(() => {
		input.select();
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

	if (list && list.style) {
		list.style.top = (input.offsetHeight + 2) + 'px';
		list.style.height = 'auto';
		const listBox = list.getBoundingClientRect();
		const listT = listBox.top;
		const listH = listBox.height;
		const winH = window.innerHeight;
		if (listT + listH + 10 > winH) {
			const maxH = winH - listT - 10;
			list.style.height = maxH + 'px';
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
