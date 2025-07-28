<!--
@component ## InputMath

A mathematical expression input component with evaluation capabilities.
- Supports basic arithmetic operations (+, -, *, /)
- Calculates the value, and updates the input on change (on `blur` or Enter key)
- Calculator icon for visual indication
- Error handling for invalid expressions
- Integrated label, info, and error message support

@example
```svelte
<InputMath
  label="Calculate total"
  placeholder="Enter math expression"
  bind:value={calculation}
/>

<InputMath
  label="Budget calculation"
  info="Use +, -, *, / for calculations"
  bind:value={budget}
/>
```
@see {@link https://ui.perfectthings.dev/#InputMath Input Math Docs} for more info.
-->

<div
	bind:this={element}
	class={cls}
	{...restProps}>

	<Label {label} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			<Icon name={ICON.CALCULATOR}/>
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
import type { InputMathProps } from './types';
import { Icon, ICON } from '../../icon';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';
import { parseAmount, roundAmount } from './utils';


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
	precision = 2,
	onchange = () => {},
	onkeydown = () => {},
	...restProps
}: InputMathProps = $props();


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


function updateValue () {
	const num = parseAmount(value) || 0;
	value = value ? roundAmount(num, precision) : '';
}

function _onkeydown (e) {
	onkeydown(e);
	if (e.key === 'Enter') return updateValue();
	if (allowedKeys.includes(e.key)) return;
	if (e.metaKey || e.ctrlKey) return;
	if (e.key === separator) return;
	e.preventDefault();
}


function _onpaste (e) {
	requestAnimationFrame(() => _onchange(e));
}


function _onchange (e) {
	updateValue();
	onchange(e, { value });
}

</script>
