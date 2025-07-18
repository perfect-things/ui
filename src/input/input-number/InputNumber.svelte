<div
	class={cls}
	bind:this={element}
	{...restProps}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class="input-inner">
		<InputError id={errorMessageId} msg={error} />

		<input
			type="text"
			autocomplete="off"
			id={_id}
			{name}
			{disabled}
			{placeholder}
			{min}
			{max}
			{step}
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			bind:this={inputElement}
			bind:value
			onkeydown={_onkeydown}
			onchange={_onchange}
			{onpaste}
			{onfocus}
			{onblur}
			{ondrop}>
	</div>
</div>

<script lang="ts">
import type { InputNumberProps } from './types';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let {
	class: className = '',
	id = undefined,
	name = undefined,
	disabled = undefined,
	required = undefined,
	placeholder = undefined,
	value = $bindable(''),	// must be string to allow custom separators
	label = '',
	error = undefined,
	info = undefined,
	separator = '.',
	min = undefined,
	max = undefined,
	step = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {},
	onkeydown = () => {},
	onfocus = () => {},
	onblur = () => {},
	...restProps
}: InputNumberProps = $props();


const errorMessageId = guid();
const allowedKeys = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight',
	'Meta', 'Ctrl', 'Shift', 'Backspace', 'Delete', 'Tab', 'Enter', 'Escape'
];

const _id = $derived(id || guid());
const cls = $derived([
	'input',
	'input-number',
	className,
	{
		'has-error': !!error,
		'label-on-the-left': labelOnTheLeft
	}
]);



function _onkeydown (e: KeyboardEvent) {
	const key = e.key;

	if (key === 'ArrowUp') return creaseValue(e, true);
	if (key === 'ArrowDown') return creaseValue(e, false);
	if (allowedKeys.includes(key)) return onkeydown(e, value);
	if ((e.metaKey || e.ctrlKey) && 'vcx'.includes(key)) {
		return onkeydown(e, value);
	}
	const hasMinus = ('' + value).includes('-');
	const carretAtStart = inputElement.selectionStart === 0;
	if (key === '-' && carretAtStart && !hasMinus) return onkeydown(e, value);

	const hasSeparator = ('' + value).includes(separator);
	if (key === separator && !hasSeparator) return onkeydown(e, value);

	e.preventDefault();
}

/**
 * Increases or decreases the value based on the step.
 * @param up - if true, increases the value, otherwise decreases it.
 */
function creaseValue (e: Event, up: boolean) {
	e.preventDefault();

	if (value === '') value = '0';
	const _step = (step ? step : 1) * (up ? 1 : -1);
	const num = parseFloat(('' + value).replace(separator, '.'));
	let _value = (num + _step);

	if (min !== undefined && _value < min) value = min;
	else if (max !== undefined && _value > max) value = max;

	_value = Math.round(_value * 1000) / 1000; // round to 3 decimal places
	value = _value.toString().replace('.', separator);

	return onchange(e, { value });
}


function ondrop (e: DragEvent) {
	requestAnimationFrame(() => _onchange(e));
}

function onpaste (e: ClipboardEvent) {
	requestAnimationFrame(() => _onchange(e));
}


function _onchange (e: Event) {
	const nonNumeric = new RegExp(`[^0-9${separator}-]+`, 'g');

	// escape regex special chars, as if separator='.' - it would remove any character
	const escapedSeparator = separator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const trailingSeparator = new RegExp(`${escapedSeparator}$`);

	value = ('' + value)
		.replace(/^0+(?=\d)/, '')        // remove leading zeros if they are not followed by a dot
		.replace(nonNumeric, '')         // remove all non-numeric characters except the dot and the minus sign
		.replace(/(?!^)-/g, '')          // remove minus sign if it's not the first character
		.replace(trailingSeparator, ''); // remove separator if it's the last character

	const v = value.replace(separator, '.');
	const num = parseFloat(v);
	if (isNaN(num)) value = '';
	onchange(e, { value });
}
</script>
