<!-- @migration-task Error while migrating Svelte code: Can't migrate code with beforeUpdate. Please migrate by hand. -->
<!-- @migration-task Error while migrating Svelte code: Can't migrate code with beforeUpdate. Please migrate by hand. -->
<!-- svelte-ignore a11y-no-static-element-interactions a11y-no-noninteractive-tabindex -->
<div
	{title}
	class="input input-tag {className}"
	class:has-error={error}
	class:has-value={value !== ''}
	class:label-on-the-left={labelOnTheLeft === true || labelOnTheLeft === 'true'}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div
		class="input-inner"
		class:disabled
		inert={disabled}
		tabindex="0"
		on:keydown={onkeydown}
		on:click={open}
		bind:this={boxElement}>

		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			<Icon name="tag"/>
			{#each _value as tag}
				<Tag icon="close" clickable on:click={e => removeTagFromValue(tag, e)}>{tag}</Tag>
			{/each}

			<input
				{name}
				{disabled}
				id={_id}
				type="hidden"
				bind:value={value}
				bind:this={inputElement}/>
		</div>
	</div>
</div>

<Popover
	hideTip
	dontHideOnTargetClick
	setMinWidthToTarget
	class="input-tag-popover"
	on:close={onclose}
	bind:element={listElement}
	bind:this={listPopover}>

	<div class="input-tag-list-tags">
		{#each _tags as tag(tag.text)}
			<Tag clickable icon="add" disabled={tag.disabled} on:click={() => addTagToValue(tag.text)}>{tag.text}</Tag>
		{/each}
	</div>
	<form class="input-tag-list-add-row" on:submit|preventDefault={addNewTag}>
		<InputText bind:value={newTagName}/>
		<Button submit link icon="add"/>
	</form>
</Popover>

<script>
import './InputTag.css';
import { beforeUpdate, createEventDispatcher } from 'svelte';
import { InputText } from '../input-text';
import { Button } from '../../button';
import { Popover } from '../../popover';
import { Tag } from '../../tag';
import { guid } from '../../utils';
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
export let boxElement = undefined;
export let listElement = undefined;

const dispatch = createEventDispatcher();
const errorMessageId = guid();
let newTagName = '';
let opened = false;
let listPopover;
let _tags = [];

$:_id = id || name || guid();
$:_value = valueToArray(value);


beforeUpdate(hydrateTags);


function hydrateTags () {
	const val = valueToArray(value);
	_tags = tags.map(tag => {
		return { text: tag, disabled: val.includes(tag) };
	});
}


function open () {
	if (opened) return;
	return listPopover.open(boxElement).then(() => opened = listPopover.isOpened());
}


function onclose () {
	opened = false;
}


function updatePosition () {
	requestAnimationFrame(listPopover.updatePosition);
}


function onkeydown (e) {
	if (e.key === 'Enter') return open();
	if (e.key === 'ArrowDown') {
		e.preventDefault();
		return open().then(() => {
			listElement.querySelector('.ui-tag').focus();
		});
	}
}


function valueToArray (val) {
	return val.split(/[, ;]/).map(tag => tag.trim()).filter(tag => tag !== '');
}


function setValue (arr) {
	// unique list of tags
	value = [...new Set(arr)].join(', ');
	updatePosition();
	dispatch('change', { value });
}

function addTagToValue (tag) {
	const val = valueToArray(value);
	val.push(tag);
	setValue(val);
}


function removeTagFromValue (tag, e) {
	if (e && e.detail && e.detail.originalEvent) e.detail.originalEvent.stopPropagation();

	const val = valueToArray(value).filter(t => t !== tag);
	// wait for docclick in popover to fire
	// before removing the tag from the value
	// so that the popover can check that the click was within the target and do nothing
	requestAnimationFrame(() => setValue(val));
}


function addNewTag () {
	const val = valueToArray(value);
	const newTags = valueToArray(newTagName);
	newTagName = '';
	requestAnimationFrame(() => setValue([...val, ...newTags]));
}

</script>
