<div class="textarea {className}" class:autogrow data-value="{autogrow ? value : undefined}">
	<textarea
		{...$$props}
		class="textarea-input"
		bind:value="{value}"
		on:change
		on:input></textarea>
</div>
<script>
export let value = '';
export let autogrow = false;
export let className = '';

</script>
