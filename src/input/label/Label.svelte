{#if label}
	<label
		class="label {className}"
		class:disabled
		for="{_for}">{label}</label>
{/if}

<script>

let className = '';
export { className as class };

let _for = '';
export { _for as for };

export let label = '';
export let disabled = false;


</script>
