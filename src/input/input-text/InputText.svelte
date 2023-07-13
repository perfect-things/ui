<div
	class="input input-text {className}"
	class:has-error="{error}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<input
			autocomplete="off"
			type="text"
			{...props}
			{disabled}
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
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';

$:props = pluck($$props, ['title', 'name', 'placeholder']);

let className = '';
export { className as class };
export let id = '';
export let required = undefined;
export let disabled = false;
export let value = '';
export let label = '';
export let error = undefined;
export let info = undefined;

$:_id = id || name || guid();

const errorMessageId = guid();

</script>
