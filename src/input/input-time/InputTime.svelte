<div
	bind:this={element}
	class={[
		'input',
		'input-time',
		className,
		{
			'has-error': !!error,
			'has-value': value !== '',
			'label-on-the-left': labelOnTheLeft
		}
	]}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			<Icon name="clock"/>

			<input
				id={_id}
				name={name}
				autocomplete="off"
				type="time"
				{disabled}
				aria-invalid={!!error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:this={inputElement}
				bind:value={value}
				{...rest}>
		</div>
	</div>
</div>

<script lang="ts">
import './InputTime.css';
import type { ClassValue } from 'svelte/elements';
import { guid } from '../../utils';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';



interface Props {
	class?: ClassValue;
	id?: string;
	name?: string;
	required?: boolean;
	disabled?: boolean;
	value?: string;
	label?: string;
	error?: string;
	info?: string;
	labelOnTheLeft?: boolean;
	element?: HTMLDivElement;
	inputElement?: HTMLInputElement;
	[key: string]: any;
}

let {
	class: className = '',
	id = '',
	name = '',
	required = undefined,
	disabled = false,
	label = '',
	error = undefined,
	info = undefined,
	value = $bindable(''),
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	...rest
}: Props = $props();


const _id = $derived(id || name || guid());
const errorMessageId = guid();

</script>
