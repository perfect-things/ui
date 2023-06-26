<div
	{title}
	class="checkbox {className}"
	class:indeterminate
	class:disabled
	class:has-error="{error}">

	{#if info}
		<div class="input-info">
			<Icon name="info"/>
			<p>{info}</p>
		</div>
	{/if}

	{#if error}
		<div class="input-error" transition:slide="{{ axis: 'y', duration }}">
			<Icon name="error"/>
			<p id="{errorMessageId}">{error}</p>
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
import { slide } from 'svelte/transition';
import { guid, ANIMATION_SPEED } from '../utils';
import { Icon } from '../icon';


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
export let title = '';
export let name = '';
export let required = false;

const errorMessageId = guid();
const dispatch = createEventDispatcher();

$:_id = id || name || guid();
$:duration = $ANIMATION_SPEED;


function onchange (event) {
	checked = event.target.checked;
	indeterminate = event.target.indeterminate;
	dispatch('change', { event, checked, indeterminate });
}
</script>
