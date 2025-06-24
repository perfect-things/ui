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
			{onblur}></textarea>
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

</script>
