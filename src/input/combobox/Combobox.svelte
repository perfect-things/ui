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

			<ComboInput
				{id}
				{disabled}
				{required}
				guid="{uuid}"
				placeholder="{placeholder ? placeholder : (multiselect ? 'Select...' : '')}"
				expanded="{opened}"
				bind:value="{inputValue}"
				bind:element="{inputElement}"
				on:event="{onInputEvent}"/>
		</div>
	</div>
</div>

<ComboList
	guid="{uuid}"
	items="{$FilteredItems}"
	inputElement="{inputElement}"
	{multiselect}
	{allowNew}
	{shouldShowNewItem}
	bind:opened="{opened}"
	bind:this="{list}"
	bind:element="{listElement}"
	on:click="{onclick}" />


<script>
import { afterUpdate } from 'svelte';
import { Filter, Items, FilteredItems, CheckedItems } from './store';
import { guid } from '../../utils';
import { Button } from '../../button';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';
import ComboInput from './ComboInput.svelte';
import ComboList from './ComboList.svelte';


let className = '';
export { className as class };
export let id = '';
export let disabled = false;
export let required = undefined;
export let allowNew = undefined;
export let showOnFocus = undefined;
// export let hideOnResize = undefined;
export let label = '';
export let error = undefined;
export let info = undefined;
export let labelOnTheLeft = undefined;
export let placeholder = undefined;
export let multiselect = undefined;

export let items = [];
export let value = null;

export let element = undefined;
export let inputElement = undefined;
export let listElement = undefined;

const uuid = guid();


const shouldShowNewItem = false;

$:_id = id || name || guid();
// $:valueMatchesItem = (filteredData && filteredData.length && filteredData.find(i => i.name === inputElement.value));
// $:shouldShowNewItem = allowNew && inputElement && inputElement.value && !valueMatchesItem;
// const dispatch = createEventDispatcher();
const errorMessageId = guid();


let list = undefined;
let inputValue = '';
// let valueName = value && value.name || '';
let opened = false;
// let hasEdited = false;
// let highlightIndex = 0;
// let filteredData = [], groupedData = [];
// let originalText = '';
// let hasSetValue = true;
// let isSelecting = false;
// let isHiding = false;



afterUpdate(() => {
	Items.init(items);
	Filter.set('');
	setInputValue(value);
});


function setInputValue (_value) {
	if (multiselect) {
		if (!Array.isArray(_value)) _value = [_value];
		inputValue = _value.map(i => i.name || i).join(', ');
	}
	else inputValue = _value && _value.name || '';
}


function onInputEvent (e) {
	e = e.detail;
	if (e.type === 'focus') onfocus(e.event);
	else if (e.type === 'click') onclick(e.event, e.item);
	else if (e.type === 'keydown') onkeydown(e.event, e.item);
}



function onfocus () {
	// originalText = inputElement.value;
	if (showOnFocus) opened = true;
}


function onclick () {
	opened = true;
	// if (multiselect) selectMultiselect(item);
	// else {
	// 	hasSetValue = false;
	// 	selectSingle(item);
	// }
}




function onkeydown (e) {
	if (e.key === 'Tab') opened = false;

	const fnmap = {
		ArrowDown: () => list.down(),
		ArrowUp: () => list.up(),
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
	if (!opened) return opened = true;
	if (!multiselect) value = list.getItem();
	opened = false;
}


function onSpace () {
	if (!multiselect || !opened) return;
	Items.toggle(list.getItem());
	value = $CheckedItems;
	setInputValue(value);
}


function onEsc (e) {
	if (opened) {
		e.stopPropagation();
		// revert();
		// filter();
		inputElement.focus();
		opened = false;
	}
}







// function filter () {
// 	let filtered = deepCopy(items);
// 	if (hasEdited && inputElement.value) {
// 		const q = inputElement.value.toLowerCase().trim();
// 		filtered = filtered
// 			.filter(item => fuzzy(item.name, q))
// 			.map(item => {
// 				item.highlightedName = emphasize(item.name, q);
// 				item.score = 1;
// 				if (item.name.toLowerCase().includes(q)) item.score = 2;
// 				if (item.name.includes(q)) item.score = 3;
// 				if (item.name.toLowerCase() === q) item.score = 4;
// 				if (item.name === q) item.score = 5;
// 				return item;
// 			})
// 			.sort((a, b) => b.score - a.score);
// 	}
// 	groupedData = groupData(filtered);
// 	if (multiselect) setSelectedItems();

// 	const filteredAndSorted = [];
// 	let idx = 0;
// 	groupedData.forEach(g => {
// 		g.items.forEach(i => {
// 			i.idx = idx++;
// 			filteredAndSorted.push(i);
// 		});
// 	});
// 	filteredData = filteredAndSorted;

// 	highlightIndex = 0;
// 	highlight(listElement);
// }


// function setSelectedItems () {
// 	const selectedIds = value.map(i => i.id || i.name || i);
// 	selectedItems = items.filter(i => selectedIds.includes(i.id || i.name || i));

// 	groupedData.forEach(g => {
// 		g.items.forEach(i => {
// 			i.checked = selectedIds.includes(i.id || i.name || i);
// 		});
// 	});
// 	groupedData = groupedData;
// }

// function open (e) {
// 	const eType = e && e.type;
// 	const clickOnMobile = isMobile() && eType === 'click';
// 	const mousedownElsewhere = !isMobile() && eType === 'mousedown';

// 	if (e && !(clickOnMobile || mousedownElsewhere)) return;
// 	if (e && mousedownElsewhere && multiselect && opened) return close();
// 	if (opened) return;

// 	opened = true;
// 	hasEdited = false;
// 	if (multiselect) {
// 		inputElement.value = '';
// 		valueName = '';
// 		filter();
// 	}
// 	requestAnimationFrame(() => {
// 		if (listElement && listElement.parentElement !== document.body) {
// 			document.body.appendChild(listElement);
// 		}
// 		addEventListeners();
// 		highlight(listElement);
// 	});
// }


// function close () {
// 	if (!opened) return;
// 	removeEventListeners();
// 	opened = false;
// 	isSelecting = false;
// 	if (multiselect) valueName = selectedItems.map(i => i.name || i).join(', ');
// }



// function selectSingle (item) {
// 	if (multiselect || hasSetValue) return;
// 	const oldValue = deepCopy(value);

// 	if (!item) {
// 		if (filteredData[highlightIndex]) item = filteredData[highlightIndex];
// 		else if (allowNew) item = { name: inputElement.value };
// 		else if (value && value.name && inputElement.value !== value.name) valueName = value.name;
// 	}
// 	if (item) {
// 		value = findValueInSource(item, originalItems) || item;
// 		if (value && value.name && (inputElement.value !== value.name || valueName !== value.name)) {
// 			inputElement.value = value.name;
// 			valueName = value.name;
// 		}
// 		originalText = '';
// 	}

// 	hasSetValue = true;
// 	filter();

// 	if (hasValueChanged(oldValue, value)) dispatch('change', { value, oldValue });
// 	requestAnimationFrame(() => {
// 		inputElement.focus();
// 		close();
// 	});

// }

// function selectMultiselect (item) {
// 	const oldValue = deepCopy(value);
// 	selectedItems = selectedItems || [];
// 	if (!item.checked) selectedItems.push(item);
// 	else {
// 		const _item = item.id || item.name || item;
// 		selectedItems = selectedItems.filter(i => (i.id || i.name || i) !== _item);
// 	}
// 	value = findValueInSource(selectedItems, originalItems) || [];

// 	setSelectedItems();

// 	if (hasValueChanged(oldValue, value, true)) dispatch('change', { value, oldValue });
// 	requestAnimationFrame(() => inputElement.focus());
// }


// function setInitialValue () {
// 	if (!filteredData || !filteredData.length) return;

// 	if (!value || (multiselect && !value.length)) return;

// 	if (multiselect) {
// 		if (!Array.isArray(value)) value = [value];
// 		setSelectedItems();

// 		if (opened) valueName = '';
// 		else valueName = selectedItems.map(i => i.name || i).join(', ');
// 	}
// 	else {
// 		const itemId = value.id || value.name || value;
// 		if (itemId) {
// 			console.log(filteredData);
// 			const idx = filteredData.findIndex(i => (i.id || i.name || i) === itemId);
// 			if (idx > -1) {
// 				highlightIndex = idx;
// 				inputElement.value = filteredData[highlightIndex].name;
// 			}
// 			// highlight(listElement);
// 		}
// 		else inputElement.value = '';
// 	}
// }


// function revert () {
// 	if (multiselect) return;	// in multiselect selection is applied when item is clicked
// 	if (originalText && originalText !== inputElement.value) inputElement.value = originalText;
// 	else if (value && value.name) inputElement.value = value.name;
// 	else inputElement.value = '';
// }



// /*** EVENT LISTENERS ******************************************************************************/


// function oninput () {
// 	open();
// 	requestAnimationFrame(filter);
// 	hasEdited = true;
// 	hasSetValue = false;
// }


// function onblur () {
// 	if (isSelecting) return;
// 	if (opened && !inputElement.value) return revert();
// 	selectSingle();
// }


// function onclick (e) {
// 	const item = e.detail?.item;
// 	if (multiselect) selectMultiselect(item);
// 	else {
// 		hasSetValue = false;
// 		selectSingle(item);
// 	}
// }



function onIconMouseDown () {
// 	isHiding = opened;
}


function onIconClick () {
// 	if (isHiding) close();
// 	else open();

// 	isHiding = false;
// 	if (inputElement) inputElement.focus();
}


// function onResize () {
// 	if (!opened) return;
// 	if (hideOnResize) return;
// 	inputElement.blur();
// 	return close();
// }


// function onViewportResize () {
// 	if (!opened) return;
// 	// alignDropdown(listElement, inputElement);
// }


// function onDocumentClick (e) {
// 	const notEl = element && !element.contains(e.target);
// 	const notList = listElement && !listElement.contains(e.target);
// 	if (open && notEl && notList) close();
// }


// function addEventListeners () {
// 	window.addEventListener('resize', onResize);
// 	document.addEventListener('click', onDocumentClick, true);
// 	window.visualViewport.addEventListener('resize', onViewportResize);
// }


// function removeEventListeners () {
// 	window.removeEventListener('resize', onResize);
// 	document.removeEventListener('click', onDocumentClick, true);
// 	window.visualViewport.removeEventListener('resize', onViewportResize);
// }
/*** EVENT LISTENERS ******************************************************************************/

</script>
