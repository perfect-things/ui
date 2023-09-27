<div
	class="input input-time {className}"
	class:has-error="{error}"
	class:has-value="{value !== ''}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row">
			<Icon name="clock"/>

			<input
				autocomplete="off"
				type="time"
				{...props}
				{disabled}
				id="{_id}"
				aria-invalid="{error}"
				aria-errormessage="{error ? errorMessageId : undefined}"
				aria-required="{required}"
				bind:this="{inputElement}"
				bind:value="{value}"
				on:input
				on:change
				on:focus
				on:blur>
		</div>
	</div>
</div>

<script>
import { pluck, guid } from '../../utils';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';

$:props = pluck($$props, ['title', 'name', 'placeholder']);

let className = '';
export { className as class };
export let id = '';
export let required = undefined;
export let disabled = false;
export let value = '';
export let label = '';
export let error = undefined;
export let info = undefined;
export let labelOnTheLeft = false;

export let element = undefined;
export let inputElement = undefined;


$:_id = id || name || guid();

const errorMessageId = guid();

</script>
