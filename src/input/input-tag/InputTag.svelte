<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
	{title}
	class="input input-tag {className}"
	class:has-error={error}
	class:has-value={value !== ''}
	class:label-on-the-left={labelOnTheLeft}
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
			<!-- eslint-disable svelte/require-each-key -->
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
		{#each _tags as tag (tag.text)}
			<Tag clickable icon="add" disabled={tag.disabled} onclick={() => addTagToValue(tag.text)}>{tag.text}</Tag>
		{/each}
	</div>
	<form class="input-tag-list-add-row" onsubmit={addNewTag}>
		<InputText bind:value={newTagName}/>
		<Button submit link icon="add"/>
	</form>
</Popover>

<script lang="ts">
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



interface TagItem {
	text: string;
	disabled: boolean;
}

interface Props {
	class?: string;
	id?: string;
	disabled?: boolean;
	value?: string;
	label?: string;
	error?: string;
	info?: string;
	labelOnTheLeft?: boolean;
	name?: string;
	title?: string;
	tags?: string[];
	element?: HTMLDivElement;
	inputElement?: HTMLInputElement;
	boxElement?: HTMLDivElement;
	listElement?: HTMLDivElement;
	onchange?: (data: { value: string }) => void;
}

let {
	class: className = '',
	id = '',
	name = '',
	title = '',
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
}: Props = $props();



const errorMessageId = guid();
let opened = false;
let listPopover: Popover;

let newTagName = $state('');
let _tags = $state<TagItem[]>([]);

const _id = $derived(id || name || guid());
const _value = $derived(valueToArray(value));


$effect(hydrateTags);


function hydrateTags (): void {
	const val = valueToArray(value);
	_tags = tags.map(tag => {
		return { text: tag, disabled: val.includes(tag) };
	});
}


function open (): Promise<void> {
	if (opened) return;
	return listPopover
		.open(boxElement)
		.then(() => {
			opened = listPopover.isOpened();
		});
}


function onclose (): void {
	opened = false;
}


function updatePosition (): void {
	requestAnimationFrame(listPopover.updatePosition);
}


function onkeydown (e: KeyboardEvent): Promise<void> {
	if (e.key === 'Enter') return open();
	if (e.key === 'ArrowDown') {
		e.preventDefault();
		return open()?.then(() => {
			(listElement?.querySelector('.ui-tag') as HTMLElement)?.focus();
		});
	}
}


function valueToArray (val: string): string[] {
	return val.split(/[, ;]/).map(tag => tag.trim()).filter(tag => tag !== '');
}


function setValue (arr: string[]): void {
	// unique list of tags
	value = [...new Set(arr)].join(',');
	updatePosition();
	onchange({ value });
}

function addTagToValue (tag: string): void {
	const val = valueToArray(value);
	val.push(tag);
	setValue(val);
}


function removeTagFromValue (tag: string): void {
	const val = valueToArray(value).filter(t => t !== tag);
	setValue(val);
}


function addNewTag (e: Event): void {
	e.preventDefault();
	const val = valueToArray(value);
	const newTags = valueToArray(newTagName);
	newTagName = '';
	setValue([...val, ...newTags]);
}

</script>
