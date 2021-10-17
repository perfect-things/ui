<div class="select-wrap">
	<select name="{name}"
		bind:value="{value}"
		bind:this="{el}"
		on:change="{onChange}">

		<option value="">None</option>
		{#each items as item}
			<option value="{item.id}">{item.name}</option>
		{/each}
	</select>
</div>

<script>
import './index.css';
export let value = undefined;
export let name = undefined;
export let items = [];
let el;


function onChange () {
	console.log(value);
}

</script>
