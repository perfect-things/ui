<div
	class="input select {className}"
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class="input-inner" class:disabled>
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
				bind:value={value}
				bind:this={inputElement}
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
</div>

<script lang="ts">
import './Select.css';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';



interface Props {
	id?: string;
	class?: string;
	disabled?: boolean;
	required?: boolean;
	value?: any;
	placeholder?: string;
	items?: any[];
	title?: string;
	name?: string;
	label?: string;
	error?: string;
	info?: string;
	labelOnTheLeft?: boolean;
	element?: HTMLElement;
	inputElement?: HTMLSelectElement;
	onchange?: (e: Event) => void;
}


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
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {}
}: Props = $props();


// let groups = $state([]);
const errorMessageId = guid();

const _id = $derived(id || name || guid());
const groups = $derived(groupItems(items));


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
