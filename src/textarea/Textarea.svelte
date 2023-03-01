<div class="textarea {className}" class:autogrow data-value="{autogrow ? value : undefined}">
	<textarea
		{...props}
		class="textarea-input"
		bind:value="{value}"
		on:change
		on:input></textarea>
</div>
<script>
import { pluck } from '../util';

export let value = '';
export let autogrow = false;

let className = '';
export { className as class };

$:props = pluck($$props, ['id', 'title', 'name', 'disabled', 'placeholder', 'required']);

</script>
