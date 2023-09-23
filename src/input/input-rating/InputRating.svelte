<!-- svelte-ignore a11y-no-static-element-interactions a11y-no-noninteractive-tabindex -->
<div
	{title}
	class="input input-rating {className}"
	class:has-error="{error}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	class:light
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div
		class="input-inner"
		tabindex="0"
		on:blur={() => highlighted = 0}
		on:mouseout={() => highlighted = 0}
		on:keydown="{onKey}">
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row">
			{#each stars as star}
				<Button
					link
					icon="{icon}"
					tabindex="-1"
					class="{value >= star ? 'active' : ''} {highlighted >= star ? 'highlighted' : ''}"
					on:focus="{() => highlighted = star}"
					on:blur="{() => highlighted = 0}"
					on:mouseover="{() => highlighted = star}"
					on:mouseout="{() => highlighted = 0}"
					on:click="{() => set(star)}"></Button>
			{/each}
			<Button
				link
				icon="close"
				class="btn-reset"
				disabled="{value === ''}"
				on:focus="{() => highlighted = 0}"
				on:blur="{() => highlighted = 0}"
				on:mouseover="{() => highlighted = 0}"
				on:mouseout="{() => highlighted = 0}"
				on:click="{reset}"/>
			<input
				type="hidden"
				{name}
				{disabled}
				id="{_id}"
				aria-invalid="{error}"
				aria-errormessage="{error ? errorMessageId : undefined}"
				aria-required="{required}"
				bind:this="{inputElement}"
				bind:value="{value}"
				on:input
				on:focus
				on:blur>
		</div>
	</div>
</div>



<script>
import { Button } from '../../button';
import { createEventDispatcher } from 'svelte';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };
export let id = '';
export let name = guid();
export let disabled = undefined;
export let required = undefined;
export let value = '';
export let title = '';
export let label = '';
export let error = undefined;
export let info = undefined;
export let labelOnTheLeft = false;
export let max = 5;
export let icon = 'star';
export let light = undefined;

export let element = undefined;
export let inputElement = undefined;

$:stars = new Array(+max).fill(0).map((_, i) => i + 1);

const dispatch = createEventDispatcher();
const errorMessageId = guid();

$:_id = id || name || guid();

let highlighted = 0;

function fireKeydown (event) { dispatch('keydown', { event, value }); }


function onKey (e) {
	if (e.target.closest('.btn-reset')) return;
	const key = e.key;
	if (key === 'ArrowRight') highlighted = Math.min(highlighted + 1, max);
	else if (key === 'ArrowLeft') highlighted = Math.max(highlighted - 1, 0);
	else if (key === 'Enter') set(highlighted);
	else if (key === 'Escape') highlighted = 0;
	else if (key === 'Tab') highlighted = 0;
	else if (key === 'ArrowUp') e.preventDefault();
	else if (key === 'ArrowDown') e.preventDefault();

	if (key) return fireKeydown(e);
	e.preventDefault();
}

function reset (e) {
	e.preventDefault();
	e.stopPropagation();
	set();
}

function set (v) {
	if (typeof v !== 'undefined' && v !== '') {
		const num = parseFloat('' + v);
		value = isNaN(num) ? '' : ('' + num);
	}
	else value = '';
	element.querySelector('.input-inner').focus();
	dispatch('change', value);
}
</script>
