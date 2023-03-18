<div class="select-wrapper {className}">
	<select
		{...props}
		bind:value="{value}"
		bind:this="{el}"
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

<script>
import { pluck } from '../utils';
export let value = undefined;
export let placeholder = undefined;
export let items = [];
let className = '';
export { className as class };


let el, groups = [];

$:props = pluck($$props, ['id', 'title', 'name', 'disabled', 'required']);

$: {
	const nogroup = [];
	const _groups = {};
	items.forEach(item => {
		if (!item.group) return nogroup.push(item);
		_groups[item.group] = _groups[item.group] || { name: item.group, items: [] };
		_groups[item.group].items.push(item);
	});
	groups = [...nogroup, ...Object.values(_groups)];
}

</script>
