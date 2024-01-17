<div
	class="range {className}"
	class:has-error="{error}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	class:disabled
	{title}
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="range-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		{#if !hideTicks}
			<div class="range-ticks">
				<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
				{#each ticks as tick (tick)}
					<span on:click="{() => onTickClick(tick)}">{tick}</span>
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
			id="{_id}"
			style="background-size: {progress}% 100%;"
			aria-invalid="{error}"
			aria-errormessage="{error ? errorMessageId : undefined}"
			bind:this="{inputElement}"
			bind:value="{value}"
			on:change
			on:input>
	</div>
</div>


<script>
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };

export let id = '';
export let disabled = false;
export let label = '';
export let error = undefined;
export let info = undefined;
export let title = undefined;
export let name = undefined;
export let labelOnTheLeft = false;
export let min = 0;
export let max = 10;
export let step = 1;
export let value = min;
export let hideTicks = false;

export let element = undefined;
export let inputElement = undefined;

const errorMessageId = guid();

$:_id = id || name || guid();
$:progress = (value - min) / (max - min) * 100;

$:ticks = Array.from({ length: 6 }, (_, i) => +min + i * ((max - min) / 5));


function onTickClick (tick) {
	if (tick === value || disabled) return;
	inputElement.value = value = tick;
	inputElement.dispatchEvent(new Event('change'));
}

</script>
