<div
	class="input input-time {className}"
	class:has-error={error}
	class:has-value={value !== ''}
	class:label-on-the-left={labelOnTheLeft === true || labelOnTheLeft === 'true'}
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
				{...rest}
				aria-invalid={error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:this={inputElement}
				bind:value={value}
				oninput={bubble('input')}
				onchange={bubble('change')}
				onfocus={bubble('focus')}
				onblur={bubble('blur')}>
		</div>
	</div>
</div>

<script>
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
import './InputTime.css';
import { guid } from '../../utils';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';




	/**
	 * @typedef {Object} Props
	 * @property {string} [class]
	 * @property {string} [id]
	 * @property {string} [name]
	 * @property {any} [required]
	 * @property {boolean} [disabled]
	 * @property {string} [value]
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
	} = $props();


const _id = $derived(id || name || guid());

const errorMessageId = guid();

</script>
