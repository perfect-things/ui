<div
	class="range {className}"
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft}
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
			aria-invalid={!!error}
			aria-errormessage={error ? errorMessageId : undefined}
			bind:this={inputElement}
			bind:value={value}
			{...restProps}>
	</div>
</div>


<script lang="ts">
import './Range.css';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';

interface Props {
	class?: string;
	id?: string;
	disabled?: boolean;
	label?: string;
	error?: string;
	info?: string;
	title?: string;
	name?: string;
	labelOnTheLeft?: boolean;
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	hideTicks?: boolean;
	element?: HTMLDivElement;
	inputElement?: HTMLInputElement;
	[key: string]: any;
}

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
	inputElement = $bindable(undefined),
	...restProps
}: Props = $props();

const errorMessageId: string = guid();

const _id: string = $derived(id || name || guid());
const progress: number = $derived((value - min) / (max - min) * 100);
const ticks: number[] = $derived(Array.from({ length: 6 }, (_, i) => +min + i * ((max - min) / 5)));

function onTickClick (tick: number): void {
	if (tick === value || disabled) return;
	value = tick;
	inputElement.value = String(tick);
	inputElement.dispatchEvent(new Event('change'));
}

</script>
