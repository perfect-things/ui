<!--
@component ## InputTime

A time input component with clock icon and native time picker.
- Uses native HTML time input for consistent behavior
- Clock icon for visual indication

@example
```svelte
<InputTime label="Meeting time" bind:value={meetingTime} required />
```
@see {@link https://ui.perfectthings.dev/#InputTime Input Time Docs} for more info.
-->

<div bind:this={element} class={cls} {...restProps}>
	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			<input
				id={_id}
				autocomplete="off"
				type="time"
				{name}
				{disabled}
				{placeholder}
				aria-invalid={!!error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:this={inputElement}
				bind:value
				onchange={_onchange}>
		</div>
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
	label = '',
	error = undefined,
	info = undefined,
	value = $bindable(''),
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = undefined,
	...restProps
}: InputProps = $props();


const _id = $derived(id || guid());
const cls = $derived([
	'input',
	'input-time',
	className,
	{
		'has-error': !!error,
		'has-value': value !== '',
		'label-on-the-left': labelOnTheLeft
	}
]);

const errorMessageId = guid();

function _onchange (event: Event) {
	const target = event.target as HTMLInputElement;
	if (onchange) {
		onchange(event, target.value);
	}
}
</script>
