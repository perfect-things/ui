<div
	class="textarea {className}"
	class:autogrow
	class:has-error="{error}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="textarea-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<textarea
			id="{_id}"
			name="{name}"
			{disabled}
			{...$$restProps}
			aria-invalid="{error}"
			aria-errormessage="{error ? errorMessageId : undefined}"
			aria-required="{required}"
			bind:this="{inputElement}"
			bind:value="{value}"
			on:change
			on:input></textarea>
	</div>
</div>
<script>
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };

export let id = '';
export let name = '';
export let value = '';
export let autogrow = false;
export let required = undefined;
export let disabled = false;
export let label = '';
export let error = undefined;
export let info = undefined;
export let labelOnTheLeft = false;

export let element = undefined;
export let inputElement = undefined;


$:_id = id || name || guid();

const errorMessageId = guid();


</script>
