<input
	type="number"
	autocomplete="off"
	class="number-input {className}"
	step="any"
	{...$$props}
	bind:value="{value}"
	on:keydown="{onkeydown}"
	on:change="{onchange}">
<script>
export let value = '';
export let className = '';

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
	if (e.key === '-' && !('' + value).includes('-')) return;
	if (e.key === DECIMAL_SEPARATOR && !('' + value).includes(DECIMAL_SEPARATOR)) return;
	e.preventDefault();
}

function onchange () {
	const num = parseFloat(value);
	value = isNaN(num) ? '' : num;
}
</script>
