<div
	class="input input-search {className}"
	class:has-error="{error}"
	class:has-value="{value !== ''}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row">
			<Icon name="search"/>

			<input
				id="{_id}"
				autocomplete="off"
				type="search"
				{disabled}
				{...$$restProps}
				aria-invalid="{error}"
				aria-errormessage="{error ? errorMessageId : undefined}"
				aria-required="{required}"
				bind:this="{inputElement}"
				bind:value="{value}"
				on:input
				on:keydown="{onkeydown}"
				on:change
				on:focus
				on:blur>

			<Button link
				icon="close"
				class="input-search-button {value !== '' && !disabled ? 'visible' : ''}"
				on:click="{clear}"/>
		</div>
	</div>
</div>

<script>
import { guid } from '../../utils';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


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


function clear () {
	value = '';
}


function onkeydown (event) {
	if (event.key === 'Escape') clear();
}
</script>
