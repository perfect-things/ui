<div
	bind:this={element}
	class={[
		'input',
		'input-number',
		className,
		{
			'has-error': !!error,
			'label-on-the-left': labelOnTheLeft
		}
	]}>

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
			{...rest}
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			bind:this={inputElement}
			bind:value
			onkeydown={_onkeydown}
			onchange={_onchange}
			{onpaste}
			{ondrop}>
	</div>
</div>

<script lang="ts">
import type { InputProps } from '../types';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';

interface Props extends InputProps {
	separator?: string;
	onchange?: (e: Event, value: string | number) => void;
	onkeydown?: (e: Event, value: string | number) => void;
}

let {
	class: className = '',
	id = '',
	name = guid(),
	disabled = undefined,
	required = undefined,
	value = $bindable(''),
	label = '',
	error = undefined,
	info = undefined,
	separator = '.',
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {},
	onkeydown = () => {},
	...rest
}: Props = $props();


const errorMessageId = guid();
const allowedKeys = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight',
	'Meta', 'Ctrl', 'Shift', 'Backspace', 'Delete', 'Tab', 'Enter', 'Escape'
];


const _id = $derived(id || name || guid());


function _onkeydown (e: KeyboardEvent) {
	const key = e.key;

	if (allowedKeys.includes(key)) return onkeydown(e, value);
	if (key === 'v' && e.metaKey) return onkeydown(e, value);
	if (key === 'c' && e.metaKey) return onkeydown(e, value);
	if (key === 'x' && e.metaKey) return onkeydown(e, value);

	const hasMinus = ('' + value).includes('-');
	const carretAtStart = inputElement.selectionStart === 0;
	if (key === '-' && carretAtStart && !hasMinus) return onkeydown(e, value);

	const hasSeparator = ('' + value).includes(separator);
	if (key === separator && !hasSeparator) return onkeydown(e, value);

	e.preventDefault();
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
	onchange(e, value);
}
</script>
