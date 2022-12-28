<div class="textarea" class:autogrow data-value="{autogrow ? value : undefined}">
	<textarea {...$$props} class="textarea-input" bind:value="{value}"></textarea>
</div>
<script>
export let value = '';
export let autogrow = false;

</script>
