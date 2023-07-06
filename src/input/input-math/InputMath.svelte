<div
	class="input-text input-math {className}"
	class:has-error="{error}">

	{#if label}
		<label class="label" for="{_id}">{label}</label>
	{/if}

	<Info msg="{info}" />


	<div class="input-text-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-text-row">
			<Icon name="calculator"/>
			<input
				type="text"
				autocomplete="off"
				{...props}
				{disabled}
				id="{_id}"
				aria-invalid="{error}"
				aria-errormessage="{error ? errorMessageId : undefined}"
				aria-required="{required}"
				bind:this="{_this}"
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
import { pluck, roundAmount, guid } from '../../utils';
import { Info, InputError } from '../../info-bar';


export let _this = undefined;
let className = '';
export { className as class };

export let id = '';
export let required = undefined;
export let disabled = false;
export let value = '';
export let label = '';
export let error = undefined;
export let info = undefined;

const errorMessageId = guid();
const dispatch = createEventDispatcher();
const DECIMAL_SEPARATOR = '.';
const allowedKeys = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'+', '-', '/', '*', '(', ')', 'Meta',
	'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight', 'Backspace', 'Delete', 'Tab', 'Enter', 'Ctrl'
];


$:props = pluck($$props, ['title', 'name', 'placeholder']);
$:_id = id || props.name || guid();



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
		catch (e) { amount = 0; }
	}
	const num = parseFloat(amount);
	return (num === Infinity || isNaN(num)) ? 0 : roundAmount(num);
}
</script>
