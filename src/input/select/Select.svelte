<div
	class="input select {className}"
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft === true || labelOnTheLeft === 'true'}
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

				aria-invalid={error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:value={value}
				bind:this={inputElement}
				onchange={bubble('change')}>

				{#if placeholder}
					<option value="">{placeholder}</option>
				{/if}
				{#each groups as group}
					{#if group.items}
						<optgroup label={group.name}>
							{#each group.items as item}
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

<script>
	import { run, createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
import './Select.css';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';




	/**
	 * @typedef {Object} Props
	 * @property {string} [class]
	 * @property {string} [id]
	 * @property {boolean} [disabled]
	 * @property {any} [required]
	 * @property {any} [value]
	 * @property {any} [placeholder]
	 * @property {any} [items]
	 * @property {any} [title]
	 * @property {any} [name]
	 * @property {string} [label]
	 * @property {any} [error]
	 * @property {any} [info]
	 * @property {boolean} [labelOnTheLeft]
	 * @property {any} [element]
	 * @property {any} [inputElement]
	 */

	/** @type {Props} */
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
		inputElement = $bindable(undefined)
	} = $props();


let groups = $state([]);
const errorMessageId = guid();

const _id = $derived(id || name || guid());

run(() => {
	const nogroup = [];
	const _groups = {};
	items.forEach(item => {
		if (!item.group) return nogroup.push(item);
		_groups[item.group] = _groups[item.group] || { name: item.group, items: [] };
		_groups[item.group].items.push(item);
	});
	let all = [...nogroup, ...Object.values(_groups)];

	if (typeof all[0] === 'string') {
		all = all.map(item => ({ id: item, name: item }));
	}
	groups = all;
});

</script>
