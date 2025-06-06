 <div
	class="input input-math {className}"
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft === true || labelOnTheLeft === 'true'}
	bind:this={element}>

	<Label {label} for={_id}/>
	<Info msg={info} />

	<div class="input-inner" class:disabled>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			<Icon name="calculator"/>
			<input
				type="text"
				autocomplete="off"
				{disabled}
				id={_id}
				{...rest}
				aria-invalid={error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:this={inputElement}
				bind:value={value}
				oninput={bubble('input')}
				{onkeydown}
				{onchange}
				{onpaste}
				onfocus={bubble('focus')}
				onblur={bubble('blur')}>
		</div>
	</div>
</div>
<script>
import { createBubbler } from 'svelte/legacy';

const bubble = createBubbler();
import './InputMath.css';
import { createEventDispatcher } from 'svelte';
import { Icon } from '../../icon';
import { roundAmount, guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';




/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {string} [id]
 * @property {any} [required]
 * @property {boolean} [disabled]
 * @property {string} [value]
 * @property {string} [label]
 * @property {any} [error]
 * @property {any} [info]
 * @property {boolean} [labelOnTheLeft]
 * @property {any} [element]
 * @property {any} [inputElement]
 */

/** @type {Props & { [key: string]: any }} */
let {
	class: className = '',
	id = '',
	required = undefined,
	disabled = false,
	value = $bindable(''),
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	...rest
} = $props();


const errorMessageId = guid();
const dispatch = createEventDispatcher();
const separator = '.';
const allowedKeys = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'+', '-', '/', '*', '(', ')',
	'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight',
	'Meta', 'Ctrl', 'Shift', 'Backspace', 'Delete', 'Tab', 'Enter', 'Escape'
];


const _id = $derived(id || rest.name || guid());



function onkeydown (e) {
	dispatch('keydown', e);
	if (e.key === 'Enter') {
		const num = parseAmount(value);
		value = isNaN(num) ? '' : num;
		return;
	}
	if (allowedKeys.includes(e.key)) return;
	if (e.metaKey || e.ctrlKey) return;
	if (e.key === 'v' && e.metaKey) return;
	if (e.key === 'c' && e.metaKey) return;
	if (e.key === 'x' && e.metaKey) return;
	if (e.key === separator) return;
	e.preventDefault();
}


function onpaste (e) {
	requestAnimationFrame(() => onchange(e));
}


function onchange (e) {
	const num = parseAmount(value);
	value = isNaN(num) ? '' : num;
	dispatch('change', e);
}


function parseAmount (amount) {
	if (!amount) return '';
	amount = ('' + amount).replace(/[\s,]/g, '').replace(/^-?0+(?=\d)/, '');
	if (!(/^[+\-\\*/()\d.]+$/i).test(amount)) return 0;
	if ((/[+\-\\*/.]+/i).test(amount)) {
		try { amount = new Function(`return ${amount}`)(); }
		catch { amount = 0; }
	}
	const num = parseFloat(amount);
	return (num === Infinity || isNaN(num)) ? 0 : roundAmount(num);
}
</script>
