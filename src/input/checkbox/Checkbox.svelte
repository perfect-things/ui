<div
	{title}
	class="checkbox {className}"
	class:indeterminate
	class:disabled
	class:has-error="{error}"
	bind:this="{element}">

	<Info msg="{info}" />
	<InputError id="{errorMessageId}" msg="{error}" />

	<div class="checkbox-row">
		<input
			type="checkbox"
			{name}
			id="{_id}"
			{disabled}
			{tabindex}
			bind:this="{inputElement}"
			bind:checked="{checked}"
			bind:indeterminate="{indeterminate}"
			aria-invalid="{error}"
			aria-errormessage="{error ? errorMessageId : undefined}"
			aria-required="{required}"
			on:change="{onchange}">

		<Label {label} for="{_id}"/>
	</div>
</div>

<script>
import { createEventDispatcher } from 'svelte';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };
export let indeterminate = false;
export let checked = false;
export let disabled = false;
export let id = '';
export let label = '';
export let error = undefined;
export let info = undefined;
export let title = undefined;
export let tabindex = undefined;
export let name = '';
export let required = undefined;

export let element = undefined;
export let inputElement = undefined;


const errorMessageId = guid();
const dispatch = createEventDispatcher();

$:_id = id || name || guid();


function onchange (event) {
	checked = event.target.checked;
	indeterminate = event.target.indeterminate;
	dispatch('change', { event, checked, indeterminate });
}
</script>
