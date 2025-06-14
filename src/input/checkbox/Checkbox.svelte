<div
	{title}
	class="check-and-radio checkbox {className}"
	class:indeterminate
	class:disabled
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft === true || labelOnTheLeft === 'true'}

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
			aria-invalid={error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			onchange={_onchange}>

		<Label {label} for={_id}/>
	</div>
</div>

<script>
import './Checkbox.css';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';




/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {boolean} [indeterminate]
 * @property {boolean} [checked]
 * @property {boolean} [disabled]
 * @property {string} [id]
 * @property {string} [label]
 * @property {any} [error]
 * @property {any} [info]
 * @property {any} [title]
 * @property {any} [tabindex]
 * @property {string} [name]
 * @property {any} [required]
 * @property {boolean} [labelOnTheLeft]
 * @property {any} [element]
 * @property {any} [inputElement]
 * @property {function} [onchange]
 */

/** @type {Props} */
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
	required = undefined,
	labelOnTheLeft = false,

	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {}
} = $props();


const errorMessageId = guid();

const _id = $derived(id || name || guid());


function _onchange (event) {
	checked = event.target.checked;
	indeterminate = event.target.indeterminate;
	onchange({ event, checked, indeterminate });
}
</script>
