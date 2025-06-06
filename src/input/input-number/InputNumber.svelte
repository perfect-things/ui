<div
	class="input input-number {className}"
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft === true || labelOnTheLeft === 'true'}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class="input-inner">
		<InputError id={errorMessageId} msg={error} />

		<input
			type="text"
			autocomplete="off"
			{name}
			{disabled}
			id={_id}
			{...rest}
			aria-invalid={error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			bind:this={inputElement}
			bind:value={value}
			{onkeydown}
			{onchange}
			{onpaste}
			{ondrop}
			oninput={bubble('input')}
			onfocus={bubble('focus')}
			onblur={bubble('blur')}>
	</div>
</div>

<script>
import { createBubbler } from 'svelte/legacy';

const bubble = createBubbler();
import { createEventDispatcher } from 'svelte';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';




/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {string} [id]
 * @property {any} [name]
 * @property {any} [disabled]
 * @property {any} [required]
 * @property {string} [value]
 * @property {string} [label]
 * @property {any} [error]
 * @property {any} [info]
 * @property {string} [separator] - decimal separator
 * @property {boolean} [labelOnTheLeft]
 * @property {any} [element]
 * @property {any} [inputElement]
 */

/** @type {Props & { [key: string]: any }} */
let {
	class: className = '',
	id = '',
	name = guid(),
	disabled = undefined,
	required = undefined,
	value = $bindable(''),
	label = '',
	error = undefined,
	info = undefined,
	separator = '.',
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	...rest
} = $props();


const dispatch = createEventDispatcher();
const errorMessageId = guid();
const allowedKeys = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight',
	'Meta', 'Ctrl', 'Shift', 'Backspace', 'Delete', 'Tab', 'Enter', 'Escape'
];


const _id = $derived(id || name || guid());


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
