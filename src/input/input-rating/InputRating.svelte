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
		on:touchstart="{onMouseDown}"
		on:mousedown={onMouseDown}
		on:keydown="{onKey}"
		bind:this="{innerBox}">

		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row">
			{#each stars as star}
				<Button
					link
					icon="{icon}"
					tabindex="-1"
					data-star="{star}"
					class="{value >= star ? 'active' : ''}"/>
					<!-- on:mousedown="{() => set(star)}"
					on:mouseup="{() => set(star)}"/> -->
			{/each}

			<Button link
				icon="close"
				class="btn-reset"
				disabled="{value === ''}"
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
import { guid, getMouseY, getMouseX } from '../../utils';
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
let innerBox = undefined;
let mouseY = 0;

$:stars = new Array(+max).fill(0).map((_, i) => i + 1);

const dispatch = createEventDispatcher();
const errorMessageId = guid();

$:_id = id || name || guid();


function fireKeydown (event) { dispatch('keydown', { event, value }); }


function onKey (e) {
	if (e.target.closest('.btn-reset')) return;
	const key = e.key, v = parseInt(value, 10) || 0;
	if (key === 'ArrowRight') set(Math.min(v + 1, max));
	else if (key === 'ArrowLeft') set(Math.max(v - 1, 0));
	else if (key === 'Escape') set();

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


function setStarFromCursor (e) {
	const mouseX = getMouseX(e);
	const target = document.elementFromPoint(mouseX, mouseY);
	if (target && target.dataset) set(target.dataset.star);
}


function onMouseDown (e) {
	e.preventDefault();
	mouseY = getMouseY(e);
	addEventListeners();
}

function onMouseMove (e) {
	setStarFromCursor(e);
}

function onMouseUp (e) {
	setStarFromCursor(e);
	removeEventListeners();
}

function addEventListeners () {
	document.addEventListener('mouseup', onMouseUp);
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('touchend', onMouseUp);
	document.addEventListener('touchmove', onMouseMove);
}

function removeEventListeners () {
	document.removeEventListener('mouseup', onMouseUp);
	document.removeEventListener('mousemove', onMouseMove);
	document.removeEventListener('touchend', onMouseUp);
	document.removeEventListener('touchmove', onMouseMove);
}
</script>
