<div
	class="input input-number {className}"
	class:has-error="{error}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner">
		<InputError id="{errorMessageId}" msg="{error}" />

		<input
			type="text"
			autocomplete="off"
			{name}
			{disabled}
			id="{_id}"
			{...$$restProps}
			aria-invalid="{error}"
			aria-errormessage="{error ? errorMessageId : undefined}"
			aria-required="{required}"
			bind:this="{inputElement}"
			bind:value="{value}"
			on:keydown="{onkeydown}"
			on:change="{onchange}"
			on:paste="{onpaste}"
			on:input
			on:focus
			on:blur>
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
export let id = '';
export let name = guid();
export let disabled = undefined;
export let required = undefined;
export let value = '';
export let label = '';
export let error = undefined;
export let info = undefined;
export let separator = '.';		// decimal separator
export let labelOnTheLeft = false;

export let element = undefined;
export let inputElement = undefined;


const dispatch = createEventDispatcher();
const errorMessageId = guid();
const allowedKeys = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight',
	'Meta', 'Ctrl', 'Shift', 'Backspace', 'Delete', 'Tab', 'Enter', 'Escape'
];


$:_id = id || name || guid();


function fireKeydown (event) {
	dispatch('keydown', { event, value });
}


function onkeydown (e) {
	const key = e.key;
	const val = ('' + value);

	if (allowedKeys.includes(key)) return fireKeydown(e);
	if (key === 'v' && e.metaKey) return fireKeydown(e);
	if (key === 'c' && e.metaKey) return fireKeydown(e);
	if (key === 'x' && e.metaKey) return fireKeydown(e);
	if (key === '-' && !val.includes('-')) return fireKeydown(e);
	if (key === separator && !val.includes(separator)) return fireKeydown(e);

	e.preventDefault();
}


function onpaste () {
	requestAnimationFrame(onchange);
}


function onchange () {
	const v = ('' + value).replace(separator, '.');
	const num = parseFloat(v);
	if (isNaN(num)) value = '';
	else {
		value = value
			.replace(/^0+(?=\d)/, '')
			.replace(/[^0-9.-]+/g, '')
			.replace(/^0+(?=\d)/, '');
	}
	dispatch('change', { value });
}
</script>
