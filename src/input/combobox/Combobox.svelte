<div
	class="input combobox {className}"
	class:open="{opened}"
	class:has-error="{error}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row">
			<Button
				link
				icon="dots"
				class="combobox-button"
				tabindex="-1"
				on:mousedown="{onIconMouseDown}"
				on:click="{onIconClick}"/>

			<input
				type="text"
				role="combobox"
				class="prevent-scrolling-on-focus"
				aria-autocomplete="list"
				aria-controls="combobox-list-{gui}"
				aria-expanded="{opened}"
				aria-invalid="{error}"
				aria-errormessage="{error ? errorMessageId : undefined}"
				aria-required="{required}"
				autocomplete="off"
				value="{value && value.name || ''}"

				{...props}
				{disabled}
				id="{_id}"

				bind:this="{inputElement}"
				on:input="{oninput}"
				on:focus="{onfocus}"
				on:click="{open}"
				on:blur="{onblur}"
				on:keydown|capture="{onkeydown}"
				on:keypress="{onkeypress}">
		</div>
	</div>
</div>


<!-- svelte-ignore a11y-interactive-supports-focus a11y-click-events-have-key-events -->
{#if opened}
	<div
		id="combobox-list-{gui}"
		class="combobox-list {opened ? '' : 'hidden'}"
		role="listbox"
		on:mousedown={onListMouseDown}
		bind:this="{listElement}">
		{#if filteredData.length}
			{#each groupedData as group}
				{#if group.name}
					<div class="combobox-list-header">{group.name}</div>
				{/if}
				{#if group.items}
					{#each group.items as item}
						<div
							role="option"
							aria-selected="{item.idx === highlightIndex}"
							class="combobox-list-item"
							class:in-group="{!!item.group}"
							class:selected="{item.idx === highlightIndex}"
							on:click="{() => onclick(item)}">
							{@html item.highlightedName || item.name}
						</div>
					{/each}
				{/if}
			{/each}
		{:else if allowNew !== true && allowNew !== 'true'}
			<div class="combobox-list-empty">No items found</div>
		{/if}

		{#if shouldShowNewItem}
		<div class="combobox-list-header">Create new item</div>
			<div
				role="option"
				aria-selected="{highlightIndex === filteredData.length}"
				class="combobox-list-item"
				class:selected="{highlightIndex === filteredData.length}"
				on:click="{() => onclick({ name: inputElement.value, idx: filteredData.length })}">
					{inputElement.value}
			</div>
		{/if}
	</div>
{/if}


<script>
import { afterUpdate, createEventDispatcher, onDestroy } from 'svelte';
import { emphasize, highlight, groupData } from './utils';
import { deepCopy, empty, fuzzy, pluck, guid, alignItem } from '../../utils';
import { Button } from '../../button';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };
export let disabled = false;
export let required = undefined;
export let id = '';
export let items = [];
export let value = null;
export let allowNew = false;
export let showAllInitially = true;
export let clearOnEsc = false;
export let showOnFocus = false;
export let hideOnResize = false;
export let label = '';
export let error = undefined;
export let info = undefined;
export let labelOnTheLeft = false;

export let element = undefined;
export let inputElement = undefined;
export let listElement = undefined;


// @deprecated. Use `items` instead
export let data = [];



$:_id = id || name || guid();
$:props = pluck($$props, ['title', 'name', 'placeholder']);
$:valueMatchesItem = (filteredData && filteredData.length && filteredData.find(i => i.name === inputElement.value));
$:shouldShowNewItem = (allowNew === true || allowNew === 'true') && inputElement && inputElement.value && !valueMatchesItem;

const dispatch = createEventDispatcher();
const gui = guid();
const errorMessageId = guid();


let opened = false;
let hasEdited = false;
let highlightIndex = 0;
let filteredData = [], groupedData = [];
let originalText = '';
let hasSetValue = true;
let isSelecting = false;
let isHiding = false;


onDestroy(() => {
	if (listElement) listElement.remove();
});


afterUpdate(() => {
	if (empty(items) && !empty(data)) items = data;
	if (!opened && items.length) {
		if (items.length && typeof items[0] === 'string') {
			items = items.map(item => ({ name: item }));
		}
		filter();
		setInitialValue();
	}
});


function filter () {
	let filtered = deepCopy(items);
	const showAll = (showAllInitially === true || showAllInitially === 'true') && !hasEdited;
	if (!showAll && inputElement.value) {
		const q = inputElement.value.toLowerCase().trim();
		filtered = filtered
			.filter(item => fuzzy(item.name, q))
			.map(item => {
				item.highlightedName = emphasize(item.name, q);
				item.score = 1;
				if (item.name.toLowerCase().includes(q)) item.score = 2;
				if (item.name.includes(q)) item.score = 3;
				if (item.name.toLowerCase() === q) item.score = 4;
				if (item.name === q) item.score = 5;
				return item;
			})
			.sort((a, b) => b.score - a.score);
	}
	groupedData = groupData(filtered);
	const filteredAndSorted = [];
	let idx = 0;
	groupedData.forEach(g => {
		g.items.forEach(i => {
			i.idx = idx++;
			filteredAndSorted.push(i);
		});
	});
	filteredData = filteredAndSorted;

	highlightIndex = 0;
	highlight(listElement);
	alignDropdown();
}


function open (e) {
	if (opened) return;
	opened = true;
	hasEdited = false;
	requestAnimationFrame(() => {
		if (listElement.parentElement !== document.body) {
			document.body.appendChild(listElement);
		}

		addEventListeners();
		highlight(listElement);
		alignDropdown(e);
	});
}


function alignDropdown (e) {
	requestAnimationFrame(() => {
		alignItem({
			element: listElement,
			target: inputElement,
			setMinWidthToTarget: true,
			offsetH: -1
		});
		if (e && e.type === 'focus') inputElement.select();
	});
}


function close () {
	if (!opened) return;
	removeEventListeners();
	opened = false;
	isSelecting = false;
}



function selectItem () {
	if (hasSetValue) return;

	const oldValue = value;
	if (filteredData[highlightIndex]) {
		value = filteredData[highlightIndex];
		if (value && value.name && inputElement.value !== value.name) inputElement.value = value.name;
	}
	// should create a new item
	else if (allowNew) {
		value = { name: inputElement.value };
	}
	// entered value does not match any record - revert
	else {
		if (value && value.name && inputElement.value !== value.name) inputElement.value = value.name;
	}

	hasSetValue = true;
	dispatch('change', { value, oldValue });
	close();
}


function setInitialValue () {
	if (filteredData && filteredData.length) {
		let itemId = value;
		if (typeof value === 'object' && value !== null) {
			itemId = value.id || value.name;
		}
		if (itemId) {
			const idx = filteredData.findIndex(i => i.id === itemId || i.name === itemId);
			if (idx > -1) {
				highlightIndex = idx;
				inputElement.value = filteredData[highlightIndex].name;
			}
			highlight(listElement);
		}
		else inputElement.value = '';
	}
}


function up () {
	if (!opened) return open();
	let idx = highlightIndex - 1;
	while (idx > 0 && !filteredData[idx]) idx -= 1;
	if (idx !== highlightIndex && filteredData[idx]) {
		highlightIndex = filteredData[idx].idx;
		highlight(listElement);
	}
}


function down () {
	if (!opened) return open();
	let idx = highlightIndex + 1;
	while (idx < filteredData.length - 1 && !filteredData[idx]) idx += 1;

	let item = filteredData[idx];

	if (shouldShowNewItem && idx === filteredData.length) {
		item = { idx: filteredData.length };
	}

	if (idx !== highlightIndex && item) {
		highlightIndex = item.idx;
		highlight(listElement);
	}
}


function revert () {
	if (originalText && originalText !== inputElement.value) inputElement.value = originalText;
	else if (value && value.name) inputElement.value = value.name;
	else inputElement.value = '';
}


function clear () {
	inputElement.value = '';
	filter();
	requestAnimationFrame(() => inputElement.focus());
}



/*** EVENT LISTENERS ******************************************************************************/
function onfocus () {
	originalText = inputElement.value;
	if (showOnFocus === true || showOnFocus === 'true') open();
}


function oninput () {
	inputElement.value = inputElement.value;	// svelte needs this to rerender some stuff
	open();
	requestAnimationFrame(filter);
	hasEdited = true;
	hasSetValue = false;
}


function onblur () {
	if (isSelecting) return;
	if (opened && !inputElement.value) return revert();
	selectItem();
	setTimeout(() => {
		if (document.activeElement != inputElement) close();
	}, 200);
}


function onListMouseDown () {
	isSelecting = true;
}


function onclick (item) {
	const oldValue = value;
	value = item;
	inputElement.value = item.name;
	highlightIndex = item.idx;
	dispatch('change', { value, oldValue });
	requestAnimationFrame(() => {
		inputElement.focus();
		close();
	});
}


function onkeydown (e) {
	if (e.key === 'Tab') {
		selectItem();
		return close();
	}

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
	if (e.key === 'Enter' && opened) {
		e.preventDefault();
		hasSetValue = false;
		selectItem();
	}
}


function onEsc (e) {
	if (clearOnEsc && inputElement.value) {
		e.stopPropagation();
		return clear();
	}
	if (opened) {
		e.stopPropagation();
		revert();
		inputElement.focus();
		return close();
	}
	dispatch('keydown', e);
}


function onIconMouseDown () {
	isHiding = opened;
}

function onIconClick () {
	if (isHiding) close();
	else open();

	isHiding = false;
	if (inputElement) inputElement.focus();
}


function onResize () {
	if (!opened) return;
	if (hideOnResize !== true && hideOnResize !== 'true') return;
	inputElement.blur();
	return close();
}

function onViewportResize () {
	if (!opened) return;
	alignDropdown();
}


function onDocumentClick (e) {
	const notEl = element && !element.contains(e.target);
	const notList = listElement && !listElement.contains(e.target);
	if (open && notEl && notList) close();
}


function addEventListeners () {
	window.addEventListener('resize', onResize);
	document.addEventListener('click', onDocumentClick, true);
	window.visualViewport.addEventListener('resize', onViewportResize);
}


function removeEventListeners () {
	window.removeEventListener('resize', onResize);
	document.removeEventListener('click', onDocumentClick, true);
	window.visualViewport.removeEventListener('resize', onViewportResize);
}
/*** EVENT LISTENERS ******************************************************************************/

</script>
