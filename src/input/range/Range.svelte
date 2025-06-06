<div
	class="range {className}"
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft === true || labelOnTheLeft === 'true'}
	class:disabled
	{title}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class="range-inner" class:disabled>
		<InputError id={errorMessageId} msg={error} />

		{#if !hideTicks}
			<div class="range-ticks">
				<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
				{#each ticks as tick (tick)}
					<span onclick={() => onTickClick(tick)}>{tick}</span>
				{/each}
			</div>
		{/if}

		<input
			type="range"
			{name}
			{disabled}
			{min}
			{max}
			{step}
			id={_id}
			style="background-size: {progress}% 100%;"
			aria-invalid={error}
			aria-errormessage={error ? errorMessageId : undefined}
			bind:this={inputElement}
			bind:value={value}
			onchange={bubble('change')}
			oninput={bubble('input')}>
	</div>
</div>


<script>
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
import './Range.css';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';





	/**
	 * @typedef {Object} Props
	 * @property {string} [class]
	 * @property {string} [id]
	 * @property {boolean} [disabled]
	 * @property {string} [label]
	 * @property {any} [error]
	 * @property {any} [info]
	 * @property {any} [title]
	 * @property {any} [name]
	 * @property {boolean} [labelOnTheLeft]
	 * @property {number} [min]
	 * @property {number} [max]
	 * @property {number} [step]
	 * @property {any} [value]
	 * @property {boolean} [hideTicks]
	 * @property {any} [element]
	 * @property {any} [inputElement]
	 */

	/** @type {Props} */
	let {
		class: className = '',
		id = '',
		disabled = false,
		label = '',
		error = undefined,
		info = undefined,
		title = undefined,
		name = undefined,
		labelOnTheLeft = false,
		min = 0,
		max = 10,
		step = 1,
		value = $bindable(min),
		hideTicks = false,
		element = $bindable(undefined),
		inputElement = $bindable(undefined)
	} = $props();

const errorMessageId = guid();

const _id = $derived(id || name || guid());
const progress = $derived((value - min) / (max - min) * 100);

const ticks = $derived(Array.from({ length: 6 }, (_, i) => +min + i * ((max - min) / 5)));


function onTickClick (tick) {
	if (tick === value || disabled) return;
	inputElement.value = value = tick;
	inputElement.dispatchEvent(new Event('change'));
}

</script>
