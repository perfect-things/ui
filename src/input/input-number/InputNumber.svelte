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
			on:drop="{ondrop}"
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
	if (key === '-' && inputElement.selectionStart === 0 && !val.includes('-')) {
		return fireKeydown(e);
	}
	if (key === separator && !val.includes(separator)) return fireKeydown(e);

	e.preventDefault();
}


function ondrop () {
	requestAnimationFrame(onchange);
}

function onpaste () {
	requestAnimationFrame(onchange);
}


function onchange () {
	const nonNumeric = new RegExp(`[^0-9${separator}-]+`, 'g');

	// escape regex special chars, as if separator='.' - it would remove any character
	const escapedSeparator = separator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const trailingSeparator = new RegExp(`${escapedSeparator}$`);

	value = ('' + value)
		.replace(/^0+(?=\d)/, '')        // remove leading zeros if they are not followed by a dot
		.replace(nonNumeric, '')         // remove all non-numeric characters except the dot and the minus sign
		.replace(/(?!^)-/g, '')          // remove minus sign if it's not the first character
		.replace(trailingSeparator, ''); // remove separator if it's the last character

	const v = value.replace(separator, '.');
	const num = parseFloat(v);
	if (isNaN(num)) value = '';
	dispatch('change', { value });
}
</script>
