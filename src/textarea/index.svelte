<div class="textarea" class:autogrow data-value="{autogrow ? value : undefined}">
	<textarea class="textarea-input"
		{name}
		{title}
		{placeholder}
		{disabled}
		bind:value="{value}"></textarea>
</div>
<script>
export let name = undefined;
export let title = undefined;
export let placeholder = undefined;
export let disabled = undefined;
export let value = '';
export let autogrow = false;

</script>
