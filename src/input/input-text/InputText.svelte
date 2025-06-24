<div
	bind:this={element}
	class={[
		'input',
		'input-text',
		className,
		{
			'has-error': !!error,
			'label-on-the-left': labelOnTheLeft
		}
	]}>
	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />
		<input
			id={_id}
			autocomplete="off"
			type="text"
			{name}
			{disabled}
			{...rest}
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			bind:this={inputElement}
			bind:value>
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
	value = $bindable(''),
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	...rest
}: InputProps = $props();


const _id = $derived(id || name || guid());

const errorMessageId = guid();

</script>
