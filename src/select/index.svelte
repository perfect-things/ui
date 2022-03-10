<div class="select-wrap" class:disabled>
	<select
		{id}
		{name}
		{title}
		{disabled}
		bind:value="{value}"
		bind:this="{el}"
		on:change="{onChange}">

		{#if placeholder}
			<option>{placeholder}</option>
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
export let value = undefined;
export let id = undefined;
export let name = undefined;
export let title = undefined;
export let placeholder = undefined;
export let items = [];
export let disabled = undefined;
let el, groups = [];

$:{
	let nogroup = [];
	const _groups = {};
	items.forEach(item => {
		if (!item.group) return nogroup.push(item);
		_groups[item.group] = _groups[item.group] || { name: item.group, items: [] };
		_groups[item.group].items.push(item);
	});
	groups = [...nogroup, ...Object.values(_groups)];
}

function onChange () {
	console.log(value);
}

</script>
