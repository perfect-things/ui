<div
	class="input-text {className}"
	class:has-error="{error}">

	{#if label}
		<label class="label" for="{_id}">{label}</label>
	{/if}

	<InputInfo>{info || ''}</InputInfo>

	<div class="input-text-inner">

		<InputError id="{errorMessageId}">{error || ''}</InputError>

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
import { InputInfo } from '../input-info';
import { InputError } from '../input-error';

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
