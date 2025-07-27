<!--
@component ## Checkbox

A checkbox input component with label, validation, and accessibility features.
- Supports checked, unchecked, and indeterminate states
- Integrated label with proper for/id association
- Error message display with ARIA attributes
- Info message support for additional context

@example
```svelte
<Checkbox
  label="I agree to the terms and conditions"
  bind:checked={agreed}
  required
/>

<Checkbox
  label="Send me newsletter updates"
  info="You can unsubscribe at any time"
  bind:checked={newsletter}
/>

<Checkbox
  label="Select all items"
  bind:indeterminate={someSelected}
  bind:checked={allSelected}
/>
```
@see {@link https://ui.perfectthings.dev/#Checkbox Checkbox Docs} for more info.
-->

<div bind:this={element} class={cls} {...restProps}>
	<Info msg={info} />
	<InputError id={errorMessageId} msg={error} animOffset={24} />

	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class={['checkbox-row', { pressing }]}
		onmousedown={() => pressing = true}
		onmouseup={() => pressing = false}
		onmouseleave={() => pressing = false}>
		<input
			id={_id}
			type="checkbox"
			{name}
			{disabled}
			{tabindex}
			bind:checked
			bind:indeterminate
			bind:this={inputElement}
			aria-invalid={error ? true : undefined}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			onkeydown={(e) => { if (e.key === ' ') pressing = true; }}
			onkeyup={() => pressing = false}
			onchange={_onchange}>

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
	name = undefined,
	required = undefined,
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

let pressing = $state(false);

function _onchange (e: Event) {
	onchange(e, { checked, indeterminate });
}

</script>
