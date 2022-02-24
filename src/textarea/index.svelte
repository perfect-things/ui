<div class="textarea" class:autogrow data-value="{autogrow ? value : undefined}">
	<textarea class="textarea-input" {disabled} {placeholder} bind:value="{value}"></textarea>
</div>
<script>
export let disabled = undefined;
export let placeholder = undefined;
export let value = '';
export let autogrow = false;

</script>
