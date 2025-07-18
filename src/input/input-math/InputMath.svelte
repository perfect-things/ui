 <div
	bind:this={element}
	class={cls}
	{...restProps}>

	<Label {label} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			<Icon name="calculator"/>
			<input
				type="text"
				autocomplete="off"
				id={_id}
				name={name}
				{disabled}
				{placeholder}
				aria-invalid={!!error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:this={inputElement}
				bind:value
				onchange={_onchange}
				onkeydown={_onkeydown}
				onpaste={_onpaste}>
		</div>
	</div>
</div>
<script lang="ts">
import './InputMath.css';
import type { InputProps } from '../types';
import { Icon } from '../../icon';
import { roundAmount, guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let {
	class: className = '',
	id = '',
	name = '',
	required = undefined,
	disabled = false,
	placeholder = undefined,
	value = $bindable(''),
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {},
	onkeydown = () => {},
	...restProps
}: InputProps = $props();


const errorMessageId = guid();
const separator = '.';
const allowedKeys = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'+', '-', '/', '*', '(', ')',
	'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight',
	'Meta', 'Ctrl', 'Shift', 'Backspace', 'Delete', 'Tab', 'Enter', 'Escape'
];


const _id = $derived(id || guid());
const cls = $derived([
	'input',
	'input-math',
	className,
	{
		'has-error': !!error,
		'label-on-the-left': labelOnTheLeft,
	},
]);


function _onkeydown (e) {
	onkeydown(e);
	if (e.key === 'Enter') {
		const num = parseAmount(value);
		value = String(num) || '';
		return;
	}
	if (allowedKeys.includes(e.key)) return;
	if (e.metaKey || e.ctrlKey) return;
	if (e.key === separator) return;
	e.preventDefault();
}


function _onpaste (e) {
	requestAnimationFrame(() => _onchange(e));
}


function _onchange (e) {
	const num = parseAmount(value);
	value = String(num) || '';
	onchange(e, { value });
}


function parseAmount (amount): number | string {
	if (!amount) return '';
	amount = ('' + amount).replace(/[\s,]/g, '').replace(/^-?0+(?=\d)/, '');
	if (!(/^[+\-\\*/()\d.]+$/i).test(amount)) return 0;
	if ((/[+\-\\*/.]+/i).test(amount)) {
		// eslint-disable-next-line @typescript-eslint/no-implied-eval
		try { amount = new Function(`return ${amount}`)(); }
		catch { amount = 0; }
	}
	const num = parseFloat(amount);
	return (num === Infinity || isNaN(num)) ? 0 : roundAmount(num);
}
</script>
