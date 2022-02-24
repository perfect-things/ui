<input
	class="input-number-plus"
	type="text"
	placeholder="{placeholder}"
	bind:value="{value}"
	on:keydown="{onkeydown}"
	on:change="{onchange}"
	on:blur="{onblur}">

<script>
import { createEventDispatcher } from 'svelte';

export let value = '';
export let placeholder = '';

const dispatch = createEventDispatcher();
const DECIMAL_SEPARATOR = '.';
const allowedKeys = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'+',
	'-',
	'/',
	'*',
	'ArrowLeft',
	'ArrowDown',
	'ArrowUp',
	'ArrowRight',
	'Backspace',
	'Delete',
	'Tab',
	'Meta',
	'Ctrl',
	'Enter',
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
	if (e.key === DECIMAL_SEPARATOR && !('' + value).includes(DECIMAL_SEPARATOR)) return;
	e.preventDefault();
}

function onchange (e) {
	const num = parseAmount(value);
	value = isNaN(num) ? '' : num;
	dispatch('change', e);
}

function onblur (e) {
	dispatch('blur', e);
}

// https://rollupjs.org/guide/en/#eval2--eval
const save_eval = eval;
function parseAmount (amount) {
	amount = ('' + amount).replace(/[\s,]/g, '');
	if (!(/^[+\-\\*/()\d.]+$/i).test(amount)) return 0;
	if ((/[+\-\\*/.]+/i).test(amount)) {
		try { amount = save_eval(amount); }
		catch (e) { amount = 0; }
	}
	let num = parseFloat(amount);
	if (num === Infinity || isNaN(num)) return 0;
	return num;
}
</script>
