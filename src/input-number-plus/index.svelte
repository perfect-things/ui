<input class="input-number-plus" type="text" bind:value="{value}" on:keydown="{onkeydown}" on:change="{onchange}">
<script>
import './index.css';
let value = '';
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
];

function onkeydown (e) {
	if (allowedKeys.includes(e.key)) return;
	if (e.key === DECIMAL_SEPARATOR && !value.includes(DECIMAL_SEPARATOR)) return;
	e.preventDefault();
}

function onchange () {
	const num = parseAmount(value);
	value = isNaN(num) ? '' : num;
}


function parseAmount (amount) {
	/* eslint no-eval: 0 */
	amount = ('' + amount).replace(/\s/g, '');
	if (!(/^[+\-\\*/()\d.]+$/i).test(amount)) return 0;
	if ((/[+\-\\*/.]+/i).test(amount)) {
		try { amount = eval(amount); }
		catch (e) { amount = 0; }
	}
	let num = parseFloat(amount);
	if (num === Infinity || isNaN(num)) num = 'error';
	return num;
}
</script>
