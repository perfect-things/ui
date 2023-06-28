<div
	{title}
	class="checkbox {className}"
	class:indeterminate
	class:disabled
	class:has-error="{error}">

	<Info msg="{info}" />
	{#if error}
		<div class="error-wrap" transition:slideError|local>
			<Error id="{errorMessageId}" msg="{error}" />
		</div>
	{/if}

	<div class="checkbox-row">
		<input
			type="checkbox"
			{name}
			id="{_id}"
			{disabled}
			bind:this="{_this}"
			bind:checked="{checked}"
			bind:indeterminate="{indeterminate}"
			aria-invalid="{error}"
			aria-errormessage="{error ? errorMessageId : undefined}"
			aria-required="{required}"
			on:change="{onchange}">
		<label class="label" for="{_id}">{label}</label>
	</div>
</div>

<script>
import { createEventDispatcher } from 'svelte';
import { guid, slideError } from '../../utils';
import { Info, Error } from '../../info-bar';


let className = '';
export { className as class };
export let _this = undefined;
export let indeterminate = false;
export let checked = false;
export let disabled = false;
export let id = '';
export let label = '';
export let error = '';
export let info = '';
export let title = undefined;
export let name = '';
export let required = false;

const errorMessageId = guid();
const dispatch = createEventDispatcher();

$:_id = id || name || guid();


function onchange (event) {
	checked = event.target.checked;
	indeterminate = event.target.indeterminate;
	dispatch('change', { event, checked, indeterminate });
}
</script>
