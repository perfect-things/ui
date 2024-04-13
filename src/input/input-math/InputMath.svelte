<div
	class="input input-math {className}"
	class:has-error="{error}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	bind:this="{element}">

	<Label {label} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row">
			<Icon name="calculator"/>
			<input
				type="text"
				autocomplete="off"
				{disabled}
				id="{_id}"
				{...$$restProps}
				aria-invalid="{error}"
				aria-errormessage="{error ? errorMessageId : undefined}"
				aria-required="{required}"
				bind:this="{inputElement}"
				bind:value="{value}"
				on:input
				on:keydown="{onkeydown}"
				on:change="{onchange}"
				on:focus
				on:blur>
		</div>
	</div>
</div>
<script>
import { createEventDispatcher } from 'svelte';
import { Icon } from '../../icon';
import { roundAmount, guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };
export let id = '';
export let required = undefined;
export let disabled = false;
export let value = '';
export let label = '';
export let error = undefined;
export let info = undefined;
export let labelOnTheLeft = false;

export let element = undefined;
export let inputElement = undefined;


const errorMessageId = guid();
const dispatch = createEventDispatcher();
const DECIMAL_SEPARATOR = '.';
const allowedKeys = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'+', '-', '/', '*', '(', ')',
	'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight',
	'Meta', 'Ctrl', 'Shift', 'Backspace', 'Delete', 'Tab', 'Enter', 'Escape'
];


$:_id = id || $$restProps.name || guid();



function onkeydown (e) {
	dispatch('keydown', e);
	if (e.key === 'Enter') {
		const num = parseAmount(value);
		value = isNaN(num) ? '' : num;
		return;
	}
	if (allowedKeys.includes(e.key)) return;
	if (e.metaKey || e.ctrlKey) return;
	if (e.key === DECIMAL_SEPARATOR) return;
	e.preventDefault();
}


function onchange (e) {
	const num = parseAmount(value);
	value = isNaN(num) ? '' : num;
	dispatch('change', e);
}


function parseAmount (amount) {
	if (!amount) return '';
	amount = ('' + amount).replace(/[\s,]/g, '');
	if (!(/^[+\-\\*/()\d.]+$/i).test(amount)) return 0;
	if ((/[+\-\\*/.]+/i).test(amount)) {
		try { amount = eval(amount); }
		catch { amount = 0; }
	}
	const num = parseFloat(amount);
	return (num === Infinity || isNaN(num)) ? 0 : roundAmount(num);
}
</script>
