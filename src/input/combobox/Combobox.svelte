<div
	{title}
	bind:this={element}
	class={[
		'input',
		'combobox',
		className,
		{
			open: opened,
			'has-error': !!error,
			'label-on-the-left': !!labelOnTheLeft,
			multiselect
		},
	]}>

	<ComboboxInput
		{id}
		{listId}
		{name}
		{disabled}
		{required}
		{label}
		{error}
		{info}
		{opened}
		{placeholder}
		bind:value={inputValue}
		bind:inputElement
		oniconclick={onIconClick}
		onclick={onInputClick}
		onkeydown={_onkeydown}
		{onfocus}
		{oninput}
		{...restProps} />
</div>

<ComboboxList
	{listId}
	{allowNew}
	{multiselect}
	items={filteredItems}
	{selectedItems}
	{opened}
	{shouldShowNewItem}
	newItemName={inputValue}
	bind:highlightIndex
	bind:listElement
	onclick={onItemClick} />

<script lang="ts">
import './Combobox.css';
import type { InputProps } from '../types';
import { emphasize, scrollToSelectedItem, findValueInSource, getInputValue,
	alignDropdown, hasValueChanged, groupData, normalizeItems } from './utils';
import { deepCopy, fuzzy, guid, isMobile } from '../../utils';
import ComboboxInput from './ComboboxInput.svelte';
import ComboboxList from './ComboboxList.svelte';


interface Props extends InputProps {
	items?: any[];
	selectedItems?: any[];
	multiselect?: boolean;
	showOnFocus?: boolean;
	allowNew?: boolean;
	opened?: boolean;
	listId?: string;
	listElement?: HTMLDivElement;
	oniconclick?: () => void;
	onclick?: () => void;
	onchange?: (e: Event, value: any, oldValue: any) => void;
}

let {
	class: className = '',
	disabled = false,
	required = undefined,
	id = '',
	name = '',
	title = '',
	items = [],
	value = $bindable(undefined),
	allowNew = undefined,
	showOnFocus = undefined,
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
}: Props = $props();


const listId = `combobox-list-${guid()}`;

let opened = $state(false);
let highlightIndex = $state(0);
let hasEdited = $state(false);
let previousInputValue = $state('');
let previousValue = $state(deepCopy(value));


let inputValue = $derived(multiselect && opened ? '' : getInputValue(value, multiselect));
const normalizedItems = $derived(normalizeItems(items));
const filteredItems = $derived(filter(normalizedItems, inputValue));
const shouldShowNewItem = $derived(allowNew && inputValue && !filteredItems?.length);



function filter (_items = normalizedItems, _inputValue = inputValue) {
	let filtered = deepCopy(_items);
	if (hasEdited && _inputValue) {
		const q = _inputValue.toLowerCase().trim();
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

	// add indexes
	groupData(filtered);

	requestAnimationFrame(() => alignDropdown(listElement, inputElement));

	return filtered;
}


function open (type) {
	if (opened) return;

	if (type !== 'typing' && type !== 'navigating') return;
	opened = true;
	hasEdited = false;

	// inputValue is cleared in multiselect after open, via $derived
	// if list opened via oninput - char needs to be preserved
	const tempValue = inputElement.value;

	if (multiselect) {
		if (type !== 'typing') inputValue = '';
	}
	else {
		const itemId = value?.id || value?.name || value;
		const item = itemId && filteredItems.find(i => (i.id || i.name || i) === itemId);
		if (item) {
			highlightIndex = item.idx;
			requestAnimationFrame(() => {
				scrollToSelectedItem(listElement);
			});
		}
	}

	requestAnimationFrame(() => {
		if (listElement && listElement.parentElement !== document.body) {
			document.body.appendChild(listElement);
		}
		addEventListeners();
		alignDropdown(listElement, inputElement);
		if (type === 'typing' && inputValue === '') {
			inputValue = tempValue;
		}
	});
}


function closeAndSelect () {
	requestAnimationFrame(() => {
		close();
		inputElement.select();
	});
}


function close () {
	if (!opened) return;
	removeEventListeners();
	opened = false;
	previousInputValue = inputValue;
	previousValue = deepCopy(value);
}




function selectSingle (e: Event, item?) {
	const oldValue = deepCopy(value);

	if (!item) {
		if (filteredItems[highlightIndex]) item = filteredItems[highlightIndex];
		else if (allowNew) item = { name: inputValue };
		else if (value && value.name && inputValue !== value.name) inputValue = value.name;
	}
	if (item) {
		value = findValueInSource(item, items) || item;
		if (value && value.name && inputValue !== value.name) inputValue = item.name;
	}

	if (hasValueChanged(oldValue, value)) {
		onchange(e, value, oldValue);
	}

}


function selectMultiselect (e: Event, item) {
	const oldValue = deepCopy(value);
	const _selectedItems = deepCopy(selectedItems || []);

	const itemId = item.id || item.name || item;
	const itemIndex = _selectedItems.findIndex(i => (i?.id || i?.name || i) === itemId);
	if (itemIndex === -1) _selectedItems.push(item);
	else _selectedItems.splice(itemIndex, 1);

	selectedItems = _selectedItems;
	value = findValueInSource(selectedItems, items) || [];

	if (hasValueChanged(oldValue, value, true)) onchange(e, value, oldValue);
	requestAnimationFrame(() => inputElement.select());
}



function up () {
	if (!opened) return open('navigating');

	let idx = highlightIndex || 0;
	if (idx > 0) idx -= 1;

	if (!filteredItems[idx]) {
		while (idx > 0 && !filteredItems[idx]) idx -= 1;
	}

	if (filteredItems[idx] && idx !== highlightIndex) {
		highlightIndex = idx;
		scrollToSelectedItem(listElement);
	}
}


function down () {
	if (!opened) return open('navigating');

	let idx = highlightIndex || 0;
	if (idx < filteredItems.length - 1) idx += 1;

	if (!filteredItems[idx]) {
		while (idx < filteredItems.length - 1 && !filteredItems[idx]) idx += 1;
	}

	if ((filteredItems[idx] || shouldShowNewItem) && idx !== highlightIndex) {
		highlightIndex = idx;
		scrollToSelectedItem(listElement);
	}
}


function revert () {
	if (multiselect) {
		inputValue = getInputValue(selectedItems, multiselect);
	}
	else if (previousInputValue && previousInputValue !== inputValue) {
		inputValue = previousInputValue;
		value = previousValue;
	}
	else if (value && value.name) {
		inputValue = value.name;
	}
	else inputValue = '';
}


function clear () {
	inputValue = '';
	requestAnimationFrame(() => inputElement.select());
}




/*** EVENT LISTENERS ******************************************************************************/
function onfocus () {
	previousInputValue = inputValue;
	previousValue = deepCopy(value);

	if (multiselect && value && !selectedItems.length) {
		if (Array.isArray(value)) selectedItems = deepCopy(value);
		else if (value && value.name) selectedItems = [deepCopy(value)];
		else selectedItems = [];
	}

	if (showOnFocus) open('navigating');
}


function oninput () {
	open('typing');
	highlightIndex = 0;
	hasEdited = true;
}


function onItemClick (e: Event, item) {
	// click should only be handled on touch devices
	if (isMobile() && e?.type !== 'click') return e.preventDefault();
	if (!isMobile() && e?.type === 'click') return;

	if (multiselect) selectMultiselect(e, item);
	else {
		selectSingle(e, item);
		closeAndSelect();
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


function onEnter (e) {
	if (!opened) return open('navigating');
	if (multiselect) revert();
	else selectSingle(e);
	closeAndSelect();
}


function onSpace (e) {
	if (multiselect && opened) {
		const item = filteredItems[highlightIndex];
		onItemClick(e, item);
	}
}


function onEsc (e) {
	if (opened) {
		e.stopPropagation();
		if (inputValue && (multiselect || hasEdited)) return clear();

		revert();
		return closeAndSelect();
	}
	onkeydown(e);
}


function onInputClick () {
	if (opened) return;
	open('navigating');
	if (inputElement) inputElement.select();
}


function onIconClick () {
	if (opened) return close();
	open('navigating');
	if (inputElement) inputElement.select();
}





function onResize () {
	if (!opened) return;
	inputElement.blur();
	return close();
}


function onDocumentClick (e) {
	const clickedOutside = !e.target.closest('.combobox,.combobox-list');
	if (opened && clickedOutside) close();
}


function addEventListeners () {
	window.addEventListener('resize', onResize);
	document.addEventListener('click', onDocumentClick, true);
}


function removeEventListeners () {
	window.removeEventListener('resize', onResize);
	document.removeEventListener('click', onDocumentClick, true);
}
/*** EVENT LISTENERS ******************************************************************************/

</script>
