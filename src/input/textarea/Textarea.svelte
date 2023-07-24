<div
	class="textarea {className}"
	class:autogrow
	class:has-error="{error}"
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
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
			bind:this="{inputElement}"
			bind:value="{value}"
			on:change
			on:input></textarea>
	</div>
</div>
<script>
import { pluck, guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


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

export let element = undefined;
export let inputElement = undefined;


$:props = pluck($$props, ['title', 'name', 'placeholder']);
$:_id = id || name || guid();

const errorMessageId = guid();


</script>
