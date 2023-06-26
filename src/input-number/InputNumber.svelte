<div class="input-text input-number {className}" class:has-error="{error}">
	{#if label}
		<label class="label" for="{_id}">{label}</label>
	{/if}
	{#if info}
		<div class="input-info">
			<Icon name="info"/>
			<p>{info}</p>
		</div>
	{/if}

	<div class="input-text-inner">
		{#if error}
			<div class="input-error" transition:slide|local="{{ axis: 'y', duration: $ANIMATION_SPEED }}">
				<Icon name="error"/>
				<p id="{errorMessageId}">{error}</p>
			</div>
		{/if}
		<input
			type="text"
			inputmode="numeric"
			pattern="-?\d+(\.\d+)?"
			autocomplete="off"
			{...props}
			id="{_id}"
			aria-invalid="{error}"
			aria-errormessage="{error ? errorMessageId : undefined}"
			aria-required="{required}"
			bind:value="{value}"
			on:keydown="{onkeydown}"
			on:change="{onchange}"
			on:input
			on:focus
			on:blur>
	</div>
</div>

<script>
import { createEventDispatcher } from 'svelte';
import { slide } from 'svelte/transition';
import { Icon } from '../icon';
import { pluck, guid, ANIMATION_SPEED } from '../utils';


let className = '';
export { className as class };
export let id = '';
export let required = false;
export let value = '';
export let label = '';
export let error = '';
export let info = '';
export let separator = '.';		// decimal separator


const dispatch = createEventDispatcher();
const errorMessageId = guid();
const allowedKeys = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight',
	'Backspace', 'Delete', 'Tab', 'Meta',
];


$:props = pluck($$props, ['title', 'name', 'disabled', 'placeholder']);
$:_id = id || name || guid();


function fireKeydown (event) {
	dispatch('keydown', { event, value });
}


function onkeydown (e) {
	const key = e.key;
	const val = ('' + value);

	if (allowedKeys.includes(key)) return fireKeydown(e);
	if (key === '-' && !val.includes('-')) return fireKeydown(e);
	if (key === separator && !val.includes(separator)) return fireKeydown(e);

	e.preventDefault();
}


function onchange () {
	const v = ('' + value).replace(separator, '.');
	const num = parseFloat(v);
	value = isNaN(num) ? '' : ('' + num).replace('.', separator);
	dispatch('change', { value });
}
</script>
