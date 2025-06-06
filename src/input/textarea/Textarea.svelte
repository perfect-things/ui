<div
	class="textarea {className}"
	class:autogrow
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft === true || labelOnTheLeft === 'true'}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class="textarea-inner" class:disabled>
		<InputError id={errorMessageId} msg={error} />

		<textarea
			id={_id}
			name={name}
			{disabled}
			{...rest}
			aria-invalid={error}
			aria-errormessage={error ? errorMessageId : undefined}
			aria-required={required}
			bind:this={inputElement}
			bind:value={value}
			onchange={bubble('change')}
			oninput={bubble('input')}></textarea>
	</div>
</div>
<script>
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
import './Textarea.css';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';





	/**
	 * @typedef {Object} Props
	 * @property {string} [class]
	 * @property {string} [id]
	 * @property {string} [name]
	 * @property {string} [value]
	 * @property {boolean} [autogrow]
	 * @property {any} [required]
	 * @property {boolean} [disabled]
	 * @property {string} [label]
	 * @property {any} [error]
	 * @property {any} [info]
	 * @property {boolean} [labelOnTheLeft]
	 * @property {any} [element]
	 * @property {any} [inputElement]
	 */

	/** @type {Props & { [key: string]: any }} */
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
	} = $props();


const _id = $derived(id || name || guid());

const errorMessageId = guid();


</script>
