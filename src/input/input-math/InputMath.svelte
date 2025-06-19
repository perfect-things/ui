 <div
	class="input input-math {className}"
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft}
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
				name={name}
				{...rest}
				aria-invalid={!!error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:this={inputElement}
				bind:value={value}
				onchange={_onchange}
				onkeydown={_onkeydown}
				onpaste={_onpaste}>
		</div>
	</div>
</div>
<script lang="ts">
import './InputMath.css';
import { Icon } from '../../icon';
import { roundAmount, guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


interface Props {
	class?: string;
	id?: string;
	name?: string;
	required?: boolean;
	disabled?: boolean;
	value?: string;
	label?: string;
	error?: string;
	info?: string;
	labelOnTheLeft?: boolean;
	element?: HTMLElement;
	inputElement?: HTMLInputElement;
	onchange?: (e: Event) => void;
	onkeydown?: (e: KeyboardEvent) => void;
}


let {
	class: className = '',
	id = '',
	name = '',
	required = undefined,
	disabled = false,
	value = $bindable(''),
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {},
	onkeydown = () => {},
	...rest
}: Props = $props();


const errorMessageId = guid();
const separator = '.';
const allowedKeys = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'+', '-', '/', '*', '(', ')',
	'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight',
	'Meta', 'Ctrl', 'Shift', 'Backspace', 'Delete', 'Tab', 'Enter', 'Escape'
];


const _id = $derived(id || name || guid());



function _onkeydown (e) {
	onkeydown(e);
	if (e.key === 'Enter') {
		const num = parseAmount(value);
		value = String(num) || '';
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


function _onpaste (e) {
	requestAnimationFrame(() => _onchange(e));
}


function _onchange (e) {
	const num = parseAmount(value);
	value = String(num) || '';
	onchange(e);
}


function parseAmount (amount): number | string {
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
