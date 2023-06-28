<div
	class="input-text {className}"
	class:has-error="{error}">

	{#if label}
		<label class="label" for="{_id}">{label}</label>
	{/if}

	<Info msg="{info}" />

	<div class="input-text-inner">
		{#if error}
			<div class="error-wrap" transition:slideError|local>
				<Error id="{errorMessageId}" msg="{error}" />
			</div>
		{/if}
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
import { pluck, guid, slideError } from '../../utils';
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
