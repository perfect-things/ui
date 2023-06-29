<div class="textarea {className}" class:autogrow class:has-error="{error}">
	{#if label}
		<label class="label" for="{_id}">{label}</label>
	{/if}

	<Info msg="{info}" />

	<div class="textarea-inner" class:disabled data-value="{autogrow ? value : undefined}">
		<InputError id="{errorMessageId}" msg="{error}" />

		<textarea
			{...props}
			{disabled}
			aria-invalid="{error}"
			aria-errormessage="{error ? errorMessageId : undefined}"
			aria-required="{required}"
			id="{_id}"
			bind:value="{value}"
			on:change
			on:input></textarea>
	</div>
</div>
<script>
import { pluck, guid } from '../../utils';
import { Info, InputError } from '../../info-bar';


let className = '';
export { className as class };

export let id = '';
export let value = '';
export let autogrow = false;
export let required = undefined;
export let disabled = false;
export let label = '';
export let error = undefined;
export let info = undefined;


$:props = pluck($$props, ['title', 'name', 'placeholder']);
$:_id = id || name || guid();

const errorMessageId = guid();


</script>
