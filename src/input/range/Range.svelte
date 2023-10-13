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

		{#if !hideTooltip}
			<div class="range-tooltip">
				<div class="popover-plate popover-top tooltip-plate opened" style="left: {progress}%;">
					<div class="popover tooltip" role="tooltip">
						<div class="popover-content tooltip-content">{value}</div>
					</div>
				</div>
			</div>
		{/if}
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
export let hideTooltip = false;

export let element = undefined;
export let inputElement = undefined;


$:_id = id || name || guid();
$:progress = (value - min) / (max - min) * 100;

const errorMessageId = guid();


</script>
