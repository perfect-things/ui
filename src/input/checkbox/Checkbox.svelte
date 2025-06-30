<div bind:this={element} class={cls} {...restProps}>
	<Info msg={info} />
	<InputError id={errorMessageId} msg={error} animOffset={8} />

	<div class="checkbox-row">
		<input
			id={_id}
			type="checkbox"
			{name}
			{disabled}
			{tabindex}
			bind:checked
			bind:indeterminate
			bind:this={inputElement}
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			onchange={onchange}>

		<Label {label} for={_id}/>
	</div>
</div>

<script lang="ts">
import './Checkbox.css';
import type { CheckboxProps } from './types';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let {
	class: className = '',
	checked = $bindable(),
	indeterminate = $bindable(),
	disabled = false,
	id = '',
	label = '',
	error = undefined,
	info = undefined,
	tabindex = undefined,
	name = '',
	required = false,
	labelOnTheLeft = false,

	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {},
	...restProps
}: CheckboxProps = $props();


const errorMessageId = guid();
const _id = $derived(id || guid());
const cls = $derived([
	'check-and-radio',
	'checkbox',
	className,
	{
		indeterminate,
		disabled,
		'has-error': !!error,
		'label-on-the-left': labelOnTheLeft
	}
]);


</script>
