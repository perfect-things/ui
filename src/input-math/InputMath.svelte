<div class="input-math-wrapper {className}">
	<Icon name="calculator"/>
	<input
		type="text"
		autocomplete="off"
		class="input-math"
		{...props}
		bind:this="{_this}"
		bind:value="{value}"
		on:keydown="{onkeydown}"
		on:change="{onchange}"
		on:focus
		on:blur>
</div>
<script>
import { createEventDispatcher } from 'svelte';
import { Icon } from '../icon';
import { pluck, roundAmount } from '../util';

export let _this = undefined;
export let value = '';
let className = '';
export { className as class };

$:props = pluck($$props, ['id', 'title', 'name', 'disabled', 'placeholder', 'required']);

const dispatch = createEventDispatcher();
const DECIMAL_SEPARATOR = '.';
const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', 'Meta',
	'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight', 'Backspace', 'Delete', 'Tab', 'Enter', 'Ctrl'
];

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

const save_eval = eval;	// https://rollupjs.org/guide/en/#eval2--eval
function parseAmount (amount) {
	if (!amount) return '';
	amount = ('' + amount).replace(/[\s,]/g, '');
	if (!(/^[+\-\\*/()\d.]+$/i).test(amount)) return 0;
	if ((/[+\-\\*/.]+/i).test(amount)) {
		try { amount = save_eval(amount); }
		catch (e) { amount = 0; }
	}
	const num = parseFloat(amount);
	return (num === Infinity || isNaN(num)) ? 0 : roundAmount(num);
}
</script>
