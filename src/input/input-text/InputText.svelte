<div bind:this={element} class={cls} {...restProps}>
	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />
		<input
			id={_id}
			{autocomplete}
			type="text"
			{name}
			{disabled}
			{placeholder}
			{maxlength}
			{minlength}
			{pattern}
			{tabindex}
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			bind:this={inputElement}
			bind:value
			{onfocus}
			{onblur}
			{onkeydown}>
	</div>
</div>

<script lang="ts">
import './InputText.css';
import type { InputProps } from '../types';
import { guid } from '../../utils';
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
	autocomplete = 'off',
	maxlength = undefined,
	minlength = undefined,
	pattern = undefined,
	tabindex = undefined,
	value = $bindable(''),
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onfocus = () => {},
	onblur = () => {},
	onkeydown = () => {},
	...restProps
}: InputProps = $props();


const _id = $derived(id || name || guid());
const cls = $derived([
	'input',
	'input-text',
	className,
	{
		'has-error': !!error,
		'label-on-the-left': labelOnTheLeft
	}
]);


const errorMessageId = guid();

</script>
