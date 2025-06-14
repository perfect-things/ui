<div
	class="input combobox {className}"
	class:open={opened}
	class:has-error={error}
	class:label-on-the-left={!!labelOnTheLeft}
	class:multiselect
	{title}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class="input-inner" class:disabled>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-row" title={inputValue}>
			<Button
				link
				icon="dots"
				class="combobox-button"
				tabindex="-1"
				onmousedown={onIconMouseDown}
				onclick={onIconClick}/>

			<input
				id={_id}
				name={name}
				type="text"
				role="combobox"
				autocomplete="off"
				class="prevent-scrolling-on-focus"
				value={inputValue}
				placeholder={multiselect && opened ? 'Type to filter...' : placeholder}
				aria-autocomplete="list"
				aria-controls="combobox-list-{gui}"
				aria-expanded={opened}
				aria-invalid={!!error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}

				{disabled}
				{...restProps}

				bind:this={inputElement}
				oninput={oninput}
				onfocus={onfocus}
				onmousedown={open}
				onclick={open}
				onblur={onblur}
				onkeydowncapture={_onkeydown}>
		</div>
	</div>
</div>


{#if opened}
	<!-- svelte-ignore a11y_interactive_supports_focus -->
	<div
		id="combobox-list-{gui}"
		class="combobox-list {opened ? '' : 'hidden'}"
		class:multiselect
		class:empty={!filteredData.length && !shouldShowNewItem}
		role="listbox"
		onmousedown={onListMouseDown}
		bind:this={listElement}>
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
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<div
							role="option"
							class="combobox-list-item"
							class:in-group={!!item.group}

							aria-selected={item.idx === highlightIndex}
							class:selected={item.idx === highlightIndex}

							aria-checked={!!isChecked}
							class:checked={isChecked}

							onclick={e => onclick(item, e)}
							onmouseenter={() => highlightIndex = item.idx}
							onmousedown={e => e.preventDefault()}
							onmouseup={e => onclick(item, e)}
							ontouchstart={touchStart}
							ontouchend={touchEnd}
							>
							{#if multiselect}
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icon-tabler-square-check">
									<rect x="4" y="4" width="16" height="16" rx="3"></rect>
									<path class="tick" d="M8 12l3 3l5.5 -5.5"></path>
								</svg>
							{/if}
							<span>{@html item.highlightedName || item.name}</span>
						</div>
					{/each}
				{/if}
			{/each}
		{:else if allowNew}
			<div class="combobox-list-empty">No items found</div>
		{/if}

		{#if shouldShowNewItem}
		<div class="combobox-list-header">Create new item</div>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<div
				role="option"
				class="combobox-list-item"
				class:selected={highlightIndex === filteredData.length}
				aria-selected={highlightIndex === filteredData.length}
				onclick="{() => onclick({ name: newItemName, idx: filteredData.length })}">
					{newItemName}
			</div>
		{/if}
	</div>
{/if}


<script>
import './Combobox.css';
import { onDestroy } from 'svelte';
import { emphasize, scrollToSelectedItem, groupData, findValueInSource, getInputValue,
	alignDropdown, hasValueChanged } from './utils';
import { deepCopy, fuzzy, guid, isMobile } from '../../utils';
import { Button } from '../../button';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';

/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {boolean} [disabled]
 * @property {any} [required]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [items]
 * @property {any} [value]
 * @property {boolean} [allowNew]
 * @property {boolean} [clearOnEsc]
 * @property {boolean} [showOnFocus]
 * @property {boolean} [hideOnResize]
 * @property {string} [label]
 * @property {any} [error]
 * @property {any} [info]
 * @property {boolean} [labelOnTheLeft]
 * @property {string} [placeholder]
 * @property {boolean} [multiselect]
 * @property {Array} [selectedItems]
 * @property {any} [element]
 * @property {any} [inputElement]
 * @property {any} [listElement]
 * @property {function} [onchange]
 * @property {function} [onkeydown]
 */

/** @type {Props} */
let {
	class: className = '',
	disabled = false,
	required = undefined,
	id = '',
	name = '',
	title = '',
	items = [],
	value = $bindable(null),
	allowNew = undefined,
	clearOnEsc = undefined,
	showOnFocus = undefined,
	hideOnResize = undefined,
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = undefined,
	placeholder = undefined,
	multiselect = undefined,
	selectedItems = [],

	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	listElement = $bindable(undefined),
	onchange = () => {},
	onkeydown = () => {},
	...restProps
} = $props();




const _id = $derived(id || name || guid());
const valueMatchesItem = $derived((filteredData?.length && filteredData.find(i => i.name === inputElement.value)));
const shouldShowNewItem = $derived(allowNew && inputElement?.value && !valueMatchesItem);

const gui = guid();
const errorMessageId = guid();

let inputValue = $state(getInputValue(value, multiselect));
let opened = $state(false);
let highlightIndex = $state(0);
let filteredData = $state([]);
let groupedData = $state([]);
let newItemName = $state('');

let originalItems = null;
let hasEdited = false;
let originalText = '';
let hasSetValue = true;
let isSelecting = false;
let isHiding = false;
let initialised = false;


$effect(() => {
	if (!initialised && !opened && items.length) {
		initialised = true;
		originalItems = deepCopy(items);
		if (items.length && typeof items[0] === 'string') {
			items = items.map(item => ({ name: item }));
		}
		filter();
		setInitialValue();
	}
});


onDestroy(() => {
	if (listElement) listElement.remove();
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
	const type = e?.type;
	const clickOnMobile = isMobile() && type === 'click';
	const mousedownOnDesktop = !isMobile() && type === 'mousedown';
	const typing = type === 'typing';
	const navigating = type === 'navigating';
	if (!clickOnMobile && !mousedownOnDesktop && !typing && !navigating) return;
	if (mousedownOnDesktop && opened) return close();
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
	if (hasValueChanged(oldValue, value)) onchange({ value, oldValue });
	requestAnimationFrame(() => {
		inputElement.select();
		close();
	});

}

function selectMultiselect (item) {
	const oldValue = deepCopy(value);
	selectedItems = selectedItems || [];
	const itemId = item.id || item.name || item;
	const itemIndex = selectedItems.findIndex(i => (i?.id || i?.name || i) === itemId);
	if (itemIndex === -1) selectedItems.push(item);
	else selectedItems.splice(itemIndex, 1);

	value = findValueInSource(selectedItems, originalItems) || [];

	if (hasValueChanged(oldValue, value, true)) onchange({ value, oldValue });
	requestAnimationFrame(() => inputElement.select());
}


function setInitialValue () {
	if (!filteredData || !filteredData.length) return;

	if (multiselect) {
		if (value === null || value === undefined) value = [];
		if (!Array.isArray(value)) value = [value];

		const selectedIds = value.map(i => i?.id || i?.name || i);
		selectedItems = originalItems.filter(i => selectedIds.includes(i.id || i.name || i));

		if (opened) inputValue = '';
		else inputValue = getInputValue(selectedItems, multiselect);
	}
	else {
		const itemId = value?.id || value?.name || value;
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
	requestAnimationFrame(() => inputElement.select());
}



/*** EVENT LISTENERS ******************************************************************************/
function onfocus () {
	originalText = inputElement.value;
	if (showOnFocus) open({ type: 'navigating' });
}


function oninput () {
	open({ type: 'typing' });
	hasEdited = true;
	requestAnimationFrame(filter);
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


function _onkeydown (e) {
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
		inputElement.select();
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
		inputElement.select();
		return close();
	}
	onkeydown(e);
}


function onIconMouseDown () {
	isHiding = opened;
}


function onIconClick () {
	if (isHiding) close();
	else open({ type: 'navigating' });

	isHiding = false;
	if (inputElement) inputElement.select();
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
