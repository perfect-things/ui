<div
	class="input input-time {className}"
	class:has-error={error}
	class:has-value={value !== ''}
	class:label-on-the-left={labelOnTheLeft}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class="input-inner" class:disabled>
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
import { guid } from '../../utils';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';



interface Props {
	class?: string;
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
