<!-- svelte-ignore a11y-no-static-element-interactions a11y-no-noninteractive-tabindex -->
<div
	{title}
	class="input input-tag {className}"
	class:has-error="{error}"
	class:has-value="{value !== ''}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div
		class="input-inner"
		class:disabled
		inert="{disabled}"
		tabindex="0"
		on:keydown="{onkeydown}"
		on:click="{open}"
		bind:this="{boxElement}">

		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row">
			<Icon name="tag"/>
			{#each _value as tag}
				<Tag noTabIndex icon="close"
					on:click="{() => removeTagFromValue(tag)}">{tag}</Tag>
			{/each}

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

<Popover
	hideTip
	dontHideOnTargetClick
	class="input-tag-popover"
	on:close="{onclose}"
	bind:element="{listElement}"
	bind:this="{listPopover}">

	<div class="input-tag-list-tags">
		{#each tags as tag}
			<Tag icon="add"
				on:click="{() => addTagToValue(tag.text)}">{tag.text}</Tag>
		{/each}
	</div>
	<form class="input-tag-list-add-row" on:submit|preventDefault="{addTag}">
		<InputText bind:value="{newTagName}"/>
		<Button submit link icon="add"/>
	</form>
</Popover>

<script>
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
export let boxElement = undefined;
export let inputElement = undefined;
export let listElement = undefined;

const errorMessageId = guid();
let newTagName = '';
let opened = false;
let listPopover;


$:_id = id || name || guid();
$:_value = valueToArray(value);

function valueToArray (val) {
	return val.split(/[, ;]/).map(tag => tag.trim()).filter(tag => tag !== '');
}

function open () {
	if (opened) return;
	opened = true;
	listPopover.open(boxElement);
}

function updatePosition () {
	if (!opened) return;
	requestAnimationFrame(listPopover.updatePosition);
}

function onclose () {
	opened = false;
}

function onkeydown (e) {
	if (e.key === 'Enter') open();
}

function addTagToValue (tag) {
	const val = valueToArray(value);
	val.push(tag);
	// unique list of tags
	value = [...new Set(val)].join(', ');
	updatePosition();
}

function removeTagFromValue (tag) {
	const val = valueToArray(value).filter(t => t !== tag);
	// wait for docclick in popover to fire
	// before removing the tag from the value
	// so that the popover can check that the click was within the target and do nothing
	requestAnimationFrame(() => {
		value = val.join(', ');
		updatePosition();
	});
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

</script>
