<div class="autocomplete" bind:this="{el}">
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
		{#if filteredData.length}
			{#each filteredData as item, i}
				{#if typeof item === 'string' && hasItemsAfter(filteredData, i)}
					<div class="autocomplete-list-header">{item}</div>
				{:else if typeof item !== 'string'}
					<div
						class="autocomplete-list-item"
						class:selected="{i === highlightIndex}"
						on:click="{() => onclick(item)}">

						{@html item.highlightedName || item.name}
					</div>
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
<svelte:window on:click={onDocumentClick}
	on:resize="{recalculateListHeight}"/>

<script>
import './index.css';
import { createEventDispatcher, onDestroy, onMount } from 'svelte';
import { deepCopy, emphasize, fuzzy } from './util';
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
let input, list, filteredData = [];
const dispatch = createEventDispatcher();

onMount(() => {
	document.addEventListener('scroll', recalculateListHeight, true);
});

onDestroy(() => {
	document.removeEventListener('scroll', recalculateListHeight, true);
});

function onDocumentClick (e) {
	const target = e.target.closest('.autocomplete');
	if (!target || target != el) close();
}


function hasItemsAfter (items, i) {
	for (let idx = i, item; item = items[++idx] ;) {
		if (typeof item !== 'string') return true;
		if (typeof item === 'string') return false;
	}
	return false;
}


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
	while (idx > 0 && typeof filteredData[idx] !== 'object') idx -= 1;
	if (idx !== highlightIndex && typeof filteredData[idx] === 'object') {
		highlightIndex = idx;
		highlight();
	}
}


function down () {
	open();
	let idx = highlightIndex + 1;
	while (idx < filteredData.length - 1 && typeof filteredData[idx] !== 'object') idx += 1;
	if (idx !== highlightIndex && typeof filteredData[idx] === 'object') {
		highlightIndex = idx;
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
				if (typeof item === 'string') return item;
				item.highlightedName = emphasize(item.name, q);
				item.score = 1;
				if (item.name.toLowerCase().includes(q)) item.score = 2;
				if (item.name.includes(text)) item.score = 3;
				if (item.name.toLowerCase() === q) item.score = 4;
				if (item.name === text) item.score = 5;
				return item;
			})
			.sort((a, b) => b.score - a.score);
	}
	filteredData = filtered;
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
	if (input.value !== text) input.value = text;
	filter();
	requestAnimationFrame(() => input.select());
}


function close () {
	if (!opened) return;
	opened = false;
}


function recalculateListHeight (e) {
	if (!opened) return;
	if (e?.target?.closest('.autocomplete-list')) return;

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

</script>
