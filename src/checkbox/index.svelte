<input
	type="checkbox"
	class="checkbox"
	class:indeterminate
	{id}
	{name}
	{title}
	{disabled}
	{required}
	bind:this="{_this}"
	bind:checked="{checked}"
	bind:indeterminate="{indeterminate}"
	on:change>
<script>
export let _this = undefined;
export let id = undefined;
export let name = undefined;
export let title = undefined;
export let disabled = undefined;
export let indeterminate = false;
export let required = false;
export let checked = false;

</script>
