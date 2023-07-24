{#if label}
	<label
		class="label {className}"
		class:disabled
		bind:this="{element}"
		for="{_for}">{label}</label>
{/if}

<script>

let className = '';
export { className as class };

let _for = '';
export { _for as for };

export let label = '';
export let disabled = false;
export let element = undefined;


</script>
