<div class="textarea {className}" class:autogrow class:has-error="{error}">
	{#if label}
		<label class="label" for="{_id}">{label}</label>
	{/if}

	<Info msg="{info}" />

	<div class="textarea-inner" data-value="{autogrow ? value : undefined}">
		{#if error}
			<div class="error-wrap" transition:slideError|local>
				<Error id="{errorMessageId}" msg="{error}" />
			</div>
		{/if}

		<textarea
			{...props}
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
import { pluck, guid, slideError } from '../../utils';
import { Info, Error } from '../../info-bar';


let className = '';
export { className as class };

export let id = '';
export let value = '';
export let autogrow = false;
export let required = false;
export let label = '';
export let error = '';
export let info = '';


$:props = pluck($$props, ['title', 'name', 'disabled', 'placeholder']);
$:_id = id || name || guid();

const errorMessageId = guid();


</script>
