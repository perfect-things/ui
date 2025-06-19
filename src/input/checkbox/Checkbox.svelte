<div
	{title}
	class="check-and-radio checkbox {className}"
	class:indeterminate
	class:disabled
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft}

	bind:this={element}>

	<Info msg={info} />
	<InputError id={errorMessageId} msg={error} animOffset="8" />

	<div class="checkbox-row">
		<input
			type="checkbox"
			{name}
			id={_id}
			{disabled}
			{tabindex}
			bind:this={inputElement}
			bind:checked={checked}
			bind:indeterminate={indeterminate}
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			onchange={_onchange}>

		<Label {label} for={_id}/>
	</div>
</div>

<script lang="ts">
import './Checkbox.css';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


interface Props {
	class?: string;
	indeterminate?: boolean;
	checked?: boolean;
	disabled?: boolean;
	id?: string;
	label?: string;
	error?: string;
	info?: string;
	title?: string;
	tabindex?: number;
	name?: string;
	required?: boolean;
	labelOnTheLeft?: boolean;

	element?: HTMLDivElement; 			// bindable
	inputElement?: HTMLInputElement;	// bindable
	onchange?: (event: { event: Event, checked: boolean, indeterminate: boolean }) => void;
}

let {
	class: className = '',
	indeterminate = $bindable(),
	checked = $bindable(),
	disabled = false,
	id = '',
	label = '',
	error = undefined,
	info = undefined,
	title = undefined,
	tabindex = undefined,
	name = '',
	required = false,
	labelOnTheLeft = false,

	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {}
}: Props = $props();


const errorMessageId = guid();

const _id = $derived(id || name || guid());


function _onchange (event) {
	checked = event.target.checked;
	indeterminate = event.target.indeterminate;
	onchange({ event, checked, indeterminate });
}
</script>
