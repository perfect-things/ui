<!--
@component ## Range

A range slider input component with customizable ticks and visual feedback.
- Based on native HTML range input with enhanced styling
- Visual progress indication on slider track
- Click on ticks to jump to specific values

@example
```svelte
<Range
  label="Volume"
  min={0}
  max={100}
  step={5}
  bind:value={volume}
/>
```
@see {@link https://ui.perfectthings.dev/#Range Range Docs} for more info.
-->

<div bind:this={element} class={cls} {...restProps}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['range-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		{#if !hideTicks}
			<div class="range-ticks">
				<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
				{#each ticks as tick (tick)}
					<span onclick={e => onTickClick(e, tick)}>{tick}</span>
				{/each}
			</div>
		{/if}

		<input
			type="range"
			id={_id}
			{name}
			{disabled}
			{placeholder}
			{min}
			{max}
			{step}
			style="background-size: {progress}% 100%;"
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			bind:this={inputElement}
			bind:value
			{oninput}>
	</div>
</div>


<script lang="ts">
import './Range.css';
import type { RangeProps } from './types';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let {
	class: className = '',
	id = '',
	disabled = false,
	label = '',
	placeholder = '',
	error = undefined,
	info = undefined,
	name = undefined,
	labelOnTheLeft = false,
	min = 0,
	max = 10,
	step = 1,
	value = $bindable(min),
	hideTicks = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {},
	...restProps
}: RangeProps = $props();


const errorMessageId: string = guid();

const _id: string = $derived(id || name || guid());
const progress: number = $derived((value - min) / (max - min) * 100);
const ticks: number[] = $derived(Array.from({ length: 6 }, (_, i) => +min + i * ((max - min) / 5)));

const cls = $derived([
	'range',
	className,
	{
		'has-error': !!error,
		'label-on-the-left': labelOnTheLeft,
		disabled
	}
]);

function onTickClick (e: Event, tick: number): void {
	if (tick === value || disabled) return;
	value = tick;
	inputElement.value = String(tick);
	inputElement.dispatchEvent(new Event('change'));
	onchange(e, { value });
}

function oninput (e: Event): void {
	if (disabled) return;
	onchange(e, { value });
}

</script>
