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
{#snippet inner()}
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
{/snippet}


<div bind:this={element} class={cls} {...restProps}>
	{#if labelOnTheLeft}
		<Info msg={info} />
		<Warning msg={warning} />
		<div class="input-label-row">
			<Label {label} {disabled} for={_id}/>
			{@render inner()}
		</div>
	{:else}
		<Label {label} {disabled} for={_id}/>
		<Info msg={info} />
		<Warning msg={warning} />
		{@render inner()}
	{/if}
</div>

<script lang="ts">
import type { InputProps } from '../types';
import { guid } from '../../utils';
import { Info, Warning } from '../../info-bar';
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
	warning = undefined,
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
