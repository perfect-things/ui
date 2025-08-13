<!--
@component ## InputText

A text input component with built-in label, validation, and accessibility features.

@example
```svelte
<InputText
  label="Full Name"
  placeholder="Enter your name"
  bind:value={name}
  error={nameError}
  required
/>

<InputText
  label="Email"
  info="We'll never share your email"
  bind:value={email}
/>
```
@see {@link https://ui.perfectthings.dev/#InputText Input Text Docs} for more info.
-->

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


const _id = $derived(id || guid());
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
