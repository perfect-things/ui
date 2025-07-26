<!--
@component ## Textarea

A multi-line text input component with auto-grow option.

@example
```svelte
<Textarea
  label="Comments"
  placeholder="Enter your comments here..."
  bind:value={comments}
  autogrow
/>
```
@see {@link https://ui.perfectthings.dev/#Textarea Textarea Docs} for more info.
-->

<div bind:this={element} class={cls} {...restProps}>
	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['textarea-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<textarea
			id={_id}
			{name}
			{disabled}
			{placeholder}
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			bind:this={inputElement}
			bind:value
			{onfocus}
			{onblur}
			oninput={handleInput}></textarea>
	</div>
</div>
<script lang="ts">
import './Textarea.css';
import type { TextareaProps } from './types';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';

let {
	class: className = '',
	id = '',
	name = '',
	value = $bindable(''),
	autogrow = false,
	required = undefined,
	disabled = false,
	placeholder = undefined,
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onfocus = undefined,
	onblur = undefined,
	oninput = undefined,
	...restProps
}: TextareaProps = $props();

const _id: string = $derived(id || name || guid());
const errorMessageId: string = guid();

const cls = $derived([
	'textarea',
	className,
	{
		autogrow,
		'label-on-the-left': labelOnTheLeft,
		'has-error': !!error
	}
]);

// Handle autogrow functionality with JavaScript for better mobile compatibility
function adjustTextareaHeight() {
	if (!autogrow || !inputElement) return;
	
	// Reset height to get proper scrollHeight
	inputElement.style.height = 'auto';
	
	// Set height to scrollHeight to fit content
	const scrollHeight = inputElement.scrollHeight;
	inputElement.style.height = `${scrollHeight}px`;
}

// Reactive effect to handle autogrow when value or autogrow changes
$effect(() => {
	if (autogrow && inputElement) {
		// Use requestAnimationFrame to ensure DOM is updated
		requestAnimationFrame(() => {
			adjustTextareaHeight();
		});
	}
});

// Handle input events for real-time autogrow
function handleInput(event: Event) {
	if (autogrow) {
		adjustTextareaHeight();
	}
	// Call original oninput handler if provided
	if (oninput) {
		oninput(event);
	}
}

</script>
