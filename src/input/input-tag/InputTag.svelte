<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
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
		onkeydown={onkeydown}
		onclick={open}
		bind:this={boxElement}>

		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			<Icon name="tag"/>
			{#each _value as tag}
				<Tag icon="close" clickable onclick={() => removeTagFromValue(tag)}>{tag}</Tag>
			{/each}

			<input
				{name}
				{disabled}
				id={_id}
				type="hidden"
				{value}
				bind:this={inputElement}/>
		</div>
	</div>
</div>

<Popover
	hideTip
	dontHideOnTargetClick
	setMinWidthToTarget
	class="input-tag-popover"
	onclose={onclose}
	bind:element={listElement}
	bind:this={listPopover}>

	<div class="input-tag-list-tags">
		{#each _tags as tag(tag.text)}
			<Tag clickable icon="add" disabled={tag.disabled} onclick={() => addTagToValue(tag.text)}>{tag.text}</Tag>
		{/each}
	</div>
	<form class="input-tag-list-add-row" onsubmit={addNewTag}>
		<InputText bind:value={newTagName}/>
		<Button submit link icon="add"/>
	</form>
</Popover>

<script>
import './InputTag.css';
import { InputText } from '../input-text';
import { Button } from '../../button';
import { Popover } from '../../popover';
import { Tag } from '../../tag';
import { guid } from '../../utils';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';




/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {string} [id]
 * @property {boolean} [disabled]
 * @property {string} [value]
 * @property {string} [label]
 * @property {any} [error]
 * @property {any} [info]
 * @property {boolean} [labelOnTheLeft]
 * @property {any} [name]
 * @property {any} [title]
 * @property {any} [tags]
 * @property {any} [element]
 * @property {any} [inputElement]
 * @property {any} [boxElement]
 * @property {any} [listElement]
 * @property {function} [onchange]
 */

/** @type {Props & { [key: string]: any }} */
let {
	class: className = '',
	id = '',
	name = '',
	title = false,
	disabled = false,
	value = $bindable(''),
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	tags = [],
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	boxElement = $bindable(undefined),
	listElement = $bindable(undefined),
	onchange = () => {},
} = $props();



const errorMessageId = guid();
let opened = false;
let listPopover;

let newTagName = $state('');
let _tags = $state([]);

const _id = $derived(id || name || guid());
const _value = $derived(valueToArray(value));


$effect(hydrateTags);


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
	value = [...new Set(arr)].join(',');
	updatePosition();
	onchange({ value });
}

function addTagToValue (tag) {
	const val = valueToArray(value);
	val.push(tag);
	setValue(val);
}


function removeTagFromValue (tag) {
	const val = valueToArray(value).filter(t => t !== tag);
	setValue(val);
}


function addNewTag (e) {
	e.preventDefault();
	const val = valueToArray(value);
	const newTags = valueToArray(newTagName);
	newTagName = '';
	// requestAnimationFrame(() => setValue([...val, ...newTags]));
	setValue([...val, ...newTags]);
}

</script>
