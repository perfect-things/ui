<input
	type="checkbox"
	class="checkbox"
	class:indeterminate
	{...$$props}
	bind:this="{_this}"
	bind:checked="{checked}"
	bind:indeterminate="{indeterminate}"
	on:focus
	on:change>
<script>
export let _this = undefined;
export let indeterminate = false;
export let checked = false;

</script>
