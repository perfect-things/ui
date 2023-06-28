<div
	class="input-text {className}"
	class:has-error="{error}">

	{#if label}
		<label class="label" for="{_id}">{label}</label>
	{/if}

	<Info msg="{info}" />

	<div class="input-text-inner">

		<Error id="{errorMessageId}" msg="{error}" />

		<input
			autocomplete="off"
			type="text"
			{...props}
			id="{_id}"
			aria-invalid="{error}"
			aria-errormessage="{error ? errorMessageId : undefined}"
			aria-required="{required}"
			bind:value="{value}"
			on:input
			on:keydown
			on:change
			on:focus
			on:blur>
	</div>
</div>

<script>
import { pluck, guid } from '../../utils';
import { Info, Error } from '../../info-bar';


$:props = pluck($$props, ['title', 'name', 'disabled', 'placeholder']);

let className = '';
export { className as class };
export let id = '';
export let required = false;
export let value = '';
export let label = '';
export let error = '';
export let info = '';

$:_id = id || name || guid();

const errorMessageId = guid();

</script>
