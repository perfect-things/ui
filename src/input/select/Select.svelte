<!--
@component ## Select

A select dropdown component based on native HTML select with enhanced data management.
- Accepts array of strings or objects as items
- Supports option groups for categorized selections

@example
```svelte
<Select
  label="Choose a country"
  placeholder="Select a country"
  items={countries}
  bind:value={selectedCountry}
/>
```
@see {@link https://ui.perfectthings.dev/#Select Select Docs} for more info.
-->

{#snippet inner()}
<div class={['input-inner', { disabled }]}>
	<InputError id={errorMessageId} msg={error} />

	<div class="input-row">
		<select
			id={_id}
			{title}
			{name}
			{disabled}

			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			bind:this={inputElement}
			bind:value
			{onchange}>

			{#if placeholder}
				<option value="">{placeholder}</option>
			{/if}
			{#each groups as group (group.id || group.name)}
				{#if group.items}
					<optgroup label={group.name}>
						{#each group.items as item (item.id || item.name)}
							<option value={item.id}>{item.name}</option>
						{/each}
					</optgroup>
				{:else}
					<option value={group.id}>{group.name}</option>
				{/if}
			{/each}
		</select>
	</div>
</div>
{/snippet}

<div bind:this={element} class={cls} {...restProps}>
	{#if labelOnTheLeft}
		<Info msg={info} />
		<Warning msg={warning} />
		<div class="input-label-row">
			<Label {label} {disabled} for={_id}/>
			{@render inner()}
		</div>
	{:else}
		<Label {label} {disabled} for={_id}/>
		<Info msg={info} />
		<Warning msg={warning} />
		{@render inner()}
	{/if}
</div>

<script lang="ts">
import './Select.css';
import type { SelectProps } from './types';
import { guid } from '../../utils';
import { Info, Warning } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let {
	class: className = '',
	id = '',
	disabled = false,
	required = undefined,
	value = $bindable(undefined),
	placeholder = undefined,
	items = [],
	title = undefined,
	name = undefined,
	label = '',
	error = undefined,
	info = undefined,
	warning = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {},
	...restProps
}: SelectProps = $props();


const errorMessageId = guid();

const _id = $derived(id || guid());
const groups = $derived(groupItems(items));

const cls = $derived([
	'input',
	'select',
	className,
	{
		'has-error': !!error,
		'label-on-the-left': labelOnTheLeft
	}
]);


function groupItems (_items) {
	const nogroup = [];
	const _groups = {};
	_items.forEach(item => {
		if (!item.group) return nogroup.push(item);
		_groups[item.group] = _groups[item.group] || { name: item.group, items: [] };
		_groups[item.group].items.push(item);
	});
	let all = [...nogroup, ...Object.values(_groups)];

	if (typeof all[0] === 'string') {
		all = all.map(item => ({ id: item, name: item }));
	}
	return all;
}


</script>
