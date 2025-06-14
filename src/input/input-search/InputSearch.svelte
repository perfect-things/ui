<div
	class="input input-search {className}"
	class:has-error={error}
	class:has-value={value !== ''}
	class:label-on-the-left={labelOnTheLeft === true || labelOnTheLeft === 'true'}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class="input-inner" class:disabled>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			<Icon name="search"/>

			<input
				id={_id}
				autocomplete="off"
				type="search"
				{disabled}
				aria-invalid={error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:this={inputElement}
				bind:value={value}
				{onkeydown}
				{...restProps}>

			<Button link
				icon="close"
				class="input-search-button {value !== '' && !disabled ? 'visible' : ''}"
				onclick={clear}/>
		</div>
	</div>
</div>

<script>
import './InputSearch.css';
import { guid } from '../../utils';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';




/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {string} [id]
 * @property {any} [required]
 * @property {boolean} [disabled]
 * @property {string} [value]
 * @property {string} [label]
 * @property {any} [error]
 * @property {any} [info]
 * @property {boolean} [labelOnTheLeft]
 * @property {any} [element]
 * @property {any} [inputElement]
 * @property {Object} [restProps] - Any other props that should be passed to the input element
 */

/** @type {Props & { [key: string]: any }} */
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
	...restProps
} = $props();


const _id = $derived(id || name || guid());
const errorMessageId = guid();


function clear () {
	value = '';
}


function onkeydown (event) {
	if (event.key === 'Escape') clear();
}
</script>
