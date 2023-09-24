<div
	class="input input-tag {className}"
	class:has-error="{error}"
	class:has-value="{value !== ''}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	{title}
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row">
			<Icon name="tag"/>
			{#each _value as tag}
				<Tag icon="close">{tag}</Tag>
			{/each}
			<Button link
				icon="add"
				class="input-add-button"
				{disabled}
				on:click="{toggle}"/>

			<input
				{name}
				{disabled}
				id="{_id}"
				type="hidden"
				bind:value="{value}"
				bind:this="{inputElement}"/>
		</div>
	</div>
</div>

{#if opened}
	<div
		id="input-tag-list-{listId}"
		class="input-tag-list {opened ? '' : 'hidden'}"
		role="listbox"
		bind:this="{listElement}">
		<div class="input-tag-list-tags">
			{#each tags as tag}
				<Tag icon="add">{tag.text}</Tag>
			{/each}
		</div>
		<form class="input-tag-list-add-row" on:submit|preventDefault="{addTag}">
			<InputText bind:value="{newTagName}"/>
			<Button submit link icon="add"/>
		</form>
	</div>
{/if}

<script>
import { InputText } from '../input-text';
import { Button } from '../../button';
import { Tag } from '../../tag';
import { guid, alignItem, FOCUSABLE_SELECTOR } from '../../utils';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };
export let id = '';
export let name = '';
export let disabled = false;
export let title = false;
export let label = '';
export let error = undefined;
export let info = undefined;
export let labelOnTheLeft = false;
export let value = '';
export let tags = [];

export let element = undefined;
export let inputElement = undefined;
export let listElement = undefined;


const listId = guid();
const errorMessageId = guid();
let opened = false;
let newTagName = '';


$:_id = id || name || guid();
$:_value = value.split(/[, ;]/).map(tag => tag.trim()).filter(tag => tag !== '');



function toggle () {
	if (opened) close();
	else open();
}

function open (e) {
	if (opened) return;
	opened = true;
	requestAnimationFrame(() => {
		if (listElement.parentElement !== document.body) {
			document.body.appendChild(listElement);
		}
		addEventListeners();
		alignDropdown(e);
		listElement.querySelector(FOCUSABLE_SELECTOR).focus();
	});
}


function close () {
	if (!opened) return;
	removeEventListeners();
	opened = false;
}


function addTag () {
	const newTags = newTagName
		.split(/[, ;]/)
		.map(tag => tag.trim())
		.filter(tag => tag !== '')
		.map(tag => ({ text: tag }));

	tags = [...tags, ...newTags];
	newTagName = '';
}

function alignDropdown () {
	alignItem({
		element: listElement,
		target: element,
		setMinWidthToTarget: true,
	});
}


function onResize () {
	if (!opened) return;
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

</script>
