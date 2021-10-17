<svelte:window on:click={onDocumentClick}/>
<div class="autocomplete">
	<input type="text" class="autocomplete-input"
		value="{text}"
		bind:this="{input}"
		on:input="{filter}"
		on:focus="{open}"
		on:keydown="{onkeydown}"
		on:keypress="{onkeypress}"
		>
	<div class="autocomplete-list {opened ? '' : 'hidden'}" bind:this="{list}">
		{#each filteredData as item, i (item.id)}
			<div
				class="autocomplete-list-item"
				class:selected="{i === highlightIndex}"
				on:click="{() => onclick(item)}">

				{@html item.highlightedName || item.name}
			</div>
		{/each}
	</div>
</div>


<script>
import './index.css';
import { deepCopy, emphasize, fuzzy } from './util';
export let data = [];
export let value = null;
export let text = '';
let opened = false;
let highlightIndex = 0;
let input, list, filteredData = [];

function onDocumentClick (e) {
	if (!e.target.closest('.autocomplete')) close();
}


function selectItem () {
	value = filteredData[highlightIndex];
	text = value.name;
	close();
}

function up () {
	open();
	if (highlightIndex > 0) highlightIndex--;
	highlight();
}

function down () {
	open();
	if (highlightIndex < filteredData.length - 1) highlightIndex++;
	highlight();
}

function highlight () {
	const el = list.querySelector('.selected');
	if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


function onclick (item) {
	value = item;
	text = item.name;
	close();
}


function onkeydown (e) {
	let key = e.key;
	if (key === 'Tab' && e.shiftKey) key = 'ShiftTab';
	const fnmap = {
		Tab: opened ? down.bind(this) : null,
		ShiftTab: opened ? up.bind(this) : null,
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


function filter () {
	text = input.value || '';
	open();
	highlightIndex = 0;

	const q = text.toLowerCase();
	let filtered = deepCopy(data);
	if (text) {
		filtered = filtered
			.filter(item => fuzzy(item.name, q))
			.map(item => {
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
}


function onkeypress (e) {
	if (e.key === 'Enter') {
		e.preventDefault();
		selectItem();
	}
}

function onEsc (e) {
	e.stopPropagation();
	if (text) return clear();
	if (opened) {
		input.focus();
		close();
	}
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
	if (input.value !== text) input.value = text;
	filter();
	requestAnimationFrame(() => input.select());
}

function close () {
	if (!opened) return;
	opened = false;
}

</script>
