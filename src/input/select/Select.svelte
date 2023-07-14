<div
	class="input select {className}"
	class:has-error="{error}"
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row">
			<select
				aria-invalid="{error}"
				aria-errormessage="{error ? errorMessageId : undefined}"
				aria-required="{required}"

				{title}
				{name}
				{disabled}
				id="{_id}"

				bind:value="{value}"
				bind:this="{inputElement}"
				on:change>

				{#if placeholder}
					<option value="">{placeholder}</option>
				{/if}
				{#each groups as group}
					{#if group.items}
						<optgroup label="{group.name}">
							{#each group.items as item}
								<option value="{item.id}">{item.name}</option>
							{/each}
						</optgroup>
					{:else}
						<option value="{group.id}">{group.name}</option>
					{/if}
				{/each}
			</select>
		</div>
	</div>
</div>

<script>
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };
export let id = '';
export let disabled = false;
export let required = undefined;
export let value = undefined;
export let placeholder = undefined;
export let items = [];
export let title = undefined;
export let name = undefined;
export let label = '';
export let error = undefined;
export let info = undefined;

export let element = undefined;
export let inputElement = undefined;


let groups = [];
const errorMessageId = guid();

$:_id = id || name || guid();

$: {
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
}

</script>
