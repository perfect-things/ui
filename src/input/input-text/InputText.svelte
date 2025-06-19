<div
	class="input input-text {className}"
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class="input-inner" class:disabled>
		<InputError id={errorMessageId} msg={error} />

		<input
			id={_id}
			autocomplete="off"
			type="text"
			{disabled}
			{...rest}
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required === 'true' || required === true}
			bind:this={inputElement}
			bind:value={value}>
	</div>
</div>

<script lang="ts">
import './InputText.css';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';



interface Props {
	class?: string;
	id?: string;
	required?: boolean | string;
	disabled?: boolean;
	value?: string;
	label?: string;
	error?: string;
	info?: string;
	labelOnTheLeft?: boolean | string;
	element?: any;
	inputElement?: any;
	[key: string]: any; // Allow additional properties
}

let {
	class: className = '',
	id = '',
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
}: Props = $props();


const _id = $derived(id || name || guid());

const errorMessageId = guid();

</script>
