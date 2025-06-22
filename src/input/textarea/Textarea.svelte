<div
	bind:this={element}
	class={[
		'textarea',
		className,
		{
			autogrow,
			'label-on-the-left': labelOnTheLeft,
			'has-error': !!error
		}
	]}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['textarea-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<textarea
			id={_id}
			name={name}
			{disabled}
			{...rest}
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			bind:this={inputElement}
			bind:value={value}></textarea>
	</div>
</div>
<script lang="ts">
import './Textarea.css';
import type { ClassValue } from 'svelte/elements';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';

interface Props {
	class?: ClassValue;
	id?: string;
	name?: string;
	value?: string;
	autogrow?: boolean;
	required?: boolean;
	disabled?: boolean;
	label?: string;
	error?: string;
	info?: string;
	labelOnTheLeft?: boolean;
	element?: HTMLDivElement;
	inputElement?: HTMLTextAreaElement;
	[key: string]: any;
}

let {
	class: className = '',
	id = '',
	name = '',
	value = $bindable(''),
	autogrow = false,
	required = undefined,
	disabled = false,
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	...rest
}: Props = $props();

const _id: string = $derived(id || name || guid());
const errorMessageId: string = guid();


</script>
