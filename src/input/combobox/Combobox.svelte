<div
	class="input combobox {className}"
	class:open="{opened}"
	class:has-error="{error}"
	class:label-on-the-left="{!!labelOnTheLeft}"
	class:multiselect
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row" title="{inputValue}">
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
				value="{inputValue}"

				{disabled}
				placeholder="{multiselect && opened ? 'Type to filter...' : placeholder}"
				id="{_id}"
				{...$$restProps}

				bind:this="{inputElement}"
				on:input="{oninput}"
				on:focus="{onfocus}"
				on:mousedown="{open}"
				on:click="{open}"
				on:blur="{onblur}"
				on:keydown|capture="{onkeydown}">
		</div>
	</div>
</div>


<!-- svelte-ignore a11y-interactive-supports-focus a11y-click-events-have-key-events -->
{#if opened}
	<div
		id="combobox-list-{gui}"
		class="combobox-list {opened ? '' : 'hidden'}"
		class:multiselect
		class:empty="{!filteredData.length && !shouldShowNewItem}"
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
						{@const isChecked = multiselect && selectedItems
							.find(i => (i.id || i.name || i) === (item.id || item.name || item))
						}
						<div
							role="option"
							class="combobox-list-item"
							class:in-group="{!!item.group}"

							aria-selected="{item.idx === highlightIndex}"
							class:selected="{item.idx === highlightIndex}"

							aria-checked="{isChecked}"
							class:checked="{isChecked}"

							on:click="{e => onclick(item, e)}"
							on:mouseenter="{() => highlightIndex = item.idx}"
							on:mousedown|preventDefault
							on:mouseup="{e => onclick(item, e)}"
							on:touchstart="{touchStart}"
							on:touchend="{touchEnd}"
							>
							{#if multiselect}
								{#if isChecked}
									<Icon name="checkboxChecked" />
								{:else}
									<Icon name="checkbox" />
								{/if}
							{/if}
							{@html item.highlightedName || item.name}
						</div>
					{/each}
				{/if}
			{/each}
		{:else if allowNew}
			<div class="combobox-list-empty">No items found</div>
		{/if}

		{#if shouldShowNewItem}
		<div class="combobox-list-header">Create new item</div>
			<div
				role="option"
				class="combobox-list-item"
				class:selected="{highlightIndex === filteredData.length}"
				aria-selected="{highlightIndex === filteredData.length}"
				on:click="{() => onclick({ name: newItemName, idx: filteredData.length })}">
					{newItemName}
			</div>
		{/if}
	</div>
{/if}


<script>
import { afterUpdate, createEventDispatcher, onDestroy } from 'svelte';
import { emphasize, scrollToSelectedItem, groupData, findValueInSource, getInputValue, alignDropdown } from './utils';
import { deepCopy, fuzzy, guid, isMobile } from '../../utils';
import { Icon } from '../../icon';
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
export let allowNew = undefined;
export let clearOnEsc = undefined;
export let showOnFocus = undefined;
export let hideOnResize = undefined;
export let label = '';
export let error = undefined;
export let info = undefined;
export let labelOnTheLeft = undefined;
export let placeholder = undefined;

export let multiselect = undefined;
export let selectedItems = [];

export let element = undefined;
export let inputElement = undefined;
export let listElement = undefined;


$:_id = id || name || guid();
$:valueMatchesItem = (filteredData?.length && filteredData.find(i => i.name === inputElement.value));
$:shouldShowNewItem = allowNew && inputElement?.value && !valueMatchesItem;

const dispatch = createEventDispatcher();
const gui = guid();
const errorMessageId = guid();

let inputValue = getInputValue(value, multiselect);
let originalItems = null;
let opened = false;
let hasEdited = false;
let highlightIndex = 0;
let filteredData = [], groupedData = [];
let originalText = '';
let hasSetValue = true;
let isSelecting = false;
let isHiding = false;

let newItemName = '';


onDestroy(() => {
	if (listElement) listElement.remove();
});


afterUpdate(() => {
	if (!opened && items.length) {
		if (!originalItems) originalItems = deepCopy(items);
		if (items.length && typeof items[0] === 'string') {
			items = items.map(item => ({ name: item }));
		}
		filter();
		setInitialValue();
	}
});



function filter () {
	let filtered = deepCopy(items);
	if (hasEdited && inputElement.value) {
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
	scrollToSelectedItem(listElement);
	alignDropdown(listElement, inputElement);
}


function open (e) {
	const eType = e?.type;
	const clickOnMobile = isMobile() && eType === 'click';
	const mousedownElsewhere = !isMobile() && eType === 'mousedown';
	const typing = eType === 'typing';
	const navigating = eType === 'navigating';

	if (!clickOnMobile && !mousedownElsewhere && !typing && !navigating) return;
	if (mousedownElsewhere && opened) return close();
	if (opened) return;

	opened = true;
	hasEdited = false;
	if (multiselect) {
		if (!typing) {
			inputElement.value = '';
			inputValue = '';
		}
		filter();
	}

	requestAnimationFrame(() => {
		if (listElement && listElement.parentElement !== document.body) {
			document.body.appendChild(listElement);
		}
		addEventListeners();
		alignDropdown(listElement, inputElement, e);
	});
}


function close () {
	if (!opened) return;
	removeEventListeners();
	opened = false;
	isSelecting = false;

	const empty = !inputElement.value;
	const notInList = !multiselect && !allowNew && inputElement.value !== inputValue;
	const notInSelected = multiselect && inputElement.value !== inputValue;
	if (empty || notInList || notInSelected) revert();
}


function selectSingle (item) {
	if (multiselect || hasSetValue) return;
	const oldValue = deepCopy(value);

	if (!item) {
		if (filteredData[highlightIndex]) item = filteredData[highlightIndex];
		else if (allowNew) item = { name: inputElement.value };
		else if (value && value.name && inputElement.value !== value.name) inputValue = value.name;
	}
	if (item) {
		value = findValueInSource(item, originalItems) || item;
		if (value && value.name && inputElement.value !== value.name) inputValue = item.name;
	}

	hasSetValue = true;
	dispatch('change', { value, oldValue });
	requestAnimationFrame(() => {
		inputElement.focus();
		close();
	});

}

function selectMultiselect (item) {
	const oldValue = deepCopy(value);
	selectedItems = selectedItems || [];
	const itemId = item.id || item.name || item;
	const itemIndex = selectedItems.findIndex(i => (i.id || i.name || i) === itemId);
	if (itemIndex === -1) selectedItems.push(item);
	else selectedItems.splice(itemIndex, 1);

	value = findValueInSource(selectedItems, originalItems) || [];

	dispatch('change', { value, oldValue });
	requestAnimationFrame(() => inputElement.focus());
}


function setInitialValue () {
	if (!filteredData || !filteredData.length) return;
	if (!value || (Array.isArray(value) && !value.length)) return;

	if (multiselect) {
		if (!Array.isArray(value)) value = [value];

		const selectedIds = value.map(i => i.id || i.name || i);
		selectedItems = originalItems.filter(i => selectedIds.includes(i.id || i.name || i));

		if (opened) inputValue = '';
		else inputValue = getInputValue(selectedItems, multiselect);
	}
	else {
		const itemId = value.id || value.name || value;
		if (itemId) {
			const item = filteredData.find(i => (i.id || i.name || i) === itemId);
			if (item) {
				highlightIndex = item.idx;
				inputElement.value = filteredData[highlightIndex].name;
			}
			scrollToSelectedItem(listElement);
		}
		else inputElement.value = '';
	}
}


function up () {
	if (!opened) return open({ type: 'navigating' });
	let idx = highlightIndex - 1;
	while (idx > 0 && !filteredData[idx]) idx -= 1;
	if (idx !== highlightIndex && filteredData[idx]) {
		highlightIndex = filteredData[idx].idx;
		scrollToSelectedItem(listElement);
	}
}


function down () {
	if (!opened) return open({ type: 'navigating' });
	let idx = highlightIndex + 1;
	while (idx < filteredData.length - 1 && !filteredData[idx]) idx += 1;

	let item = filteredData[idx];

	if (shouldShowNewItem && idx === filteredData.length) {
		item = { idx: filteredData.length };
	}

	if (idx !== highlightIndex && item) {
		highlightIndex = item.idx;
		scrollToSelectedItem(listElement);
	}
}


function revert () {
	if (multiselect) {
		inputElement.value = inputValue = getInputValue(selectedItems, multiselect);
	}
	else if (originalText && originalText !== inputElement.value) inputElement.value = originalText;
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
	if (showOnFocus) open({ type: 'navigating' });
	requestAnimationFrame(() => inputElement.select());
}


function oninput () {
	open({ type: 'typing' });
	requestAnimationFrame(filter);
	hasEdited = true;
	hasSetValue = false;
	newItemName = inputElement.value;
}


function onblur () {
	if (!isSelecting) close();
}


function onListMouseDown () {
	isSelecting = true;
}


function touchStart (e) {
	const el = e.target.closest('.combobox-list-item');
	el.classList.add('blinking');
}


function touchEnd (e) {
	const el = e.target.closest('.combobox-list-item');
	requestAnimationFrame(() => el.classList.remove('blinking'));
}


function onclick (item, e) {
	// click should only be handled on touch devices
	if (isMobile() && e?.type !== 'click') return e.preventDefault();
	if (!isMobile() && e?.type === 'click') return;

	if (multiselect) selectMultiselect(item);
	else {
		hasSetValue = false;
		selectSingle(item);
	}
}


function onkeydown (e) {
	if (e.key === 'Tab') return close();

	const fnmap = {
		ArrowDown: down,
		ArrowUp: up,
		Escape: onEsc,
		' ': onSpace,
		Enter: onEnter,
	};
	if (typeof fnmap[e.key] === 'function') {
		e.preventDefault();
		fnmap[e.key](e);
	}
}


function onEnter () {
	if (!opened) return open({ type: 'navigating' });

	if (multiselect) {
		close();
		inputElement.focus();
	}
	else {
		hasSetValue = false;
		selectSingle();
	}
}

function onSpace (e) {
	if (!multiselect || !opened) return;
	const item = filteredData[highlightIndex];
	onclick(item, e);
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
	else open({ type: 'navigating' });

	isHiding = false;
	if (inputElement) inputElement.focus();
}


function onResize () {
	if (!opened) return;
	if (hideOnResize) return;
	inputElement.blur();
	return close();
}


function onViewportResize () {
	if (!opened) return;
	alignDropdown(listElement, inputElement);
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
