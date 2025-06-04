<div
	class="toggle {className}"
	class:has-error="{error}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	role="switch"
	aria-checked="{value}"
	tabindex="{disabled ? undefined : 0}"
	bind:this="{element}"
	on:keydown="{onKey}"
	on:touchstart={dragStart}
	on:mousedown={dragStart}
	on:contextmenu|preventDefault
	on:click|preventDefault>

	<Label {label} {disabled} for="{_id}"/>

	<Info msg="{info}" />
	<InputError id="{errorMessageId}" msg="{error}" animOpacity="true"/>

	<div class="toggle-inner">
		<label class="toggle-label" {title}>
			<div class="toggle-scroller" bind:this="{scroller}">
				<div class="toggle-option"></div>
				<div class="toggle-handle" bind:this="{handle}"><div class="toggle-knob"></div></div>
				<div class="toggle-option"></div>
				<input
					id="{_id}"
					type="checkbox"
					class="toggle-input"
					{disabled}
					{name}
					aria-invalid="{error}"
					aria-errormessage="{error ? errorMessageId : undefined}"
					aria-required="{required}"
					bind:this="{inputElement}"
					bind:checked="{value}">
			</div>
		</label>
	</div>
</div>

<script>
import './Toggle.css';
import { onMount, afterUpdate , createEventDispatcher } from 'svelte';
import { guid, getMouseX } from '../../utils';
import { isTouchDevice, initialMeasure } from './utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


const dispatch = createEventDispatcher();

let className = '';
export { className as class };
export let id = '';
export let name = guid();
export let title = '';
export let required = undefined;
export let disabled = false;
export let label = '';
export let error = undefined;
export let info = undefined;
export let value = false;
export let labelOnTheLeft = false;

export let element = undefined;
export let inputElement = undefined;


$:_id = id || name || guid();

const errorMessageId = guid();

let scroller, handle, startX, currentX = 0;
let scrollerStartX, scrollerEndX, handleStartX;
let isClick = false, isDragging = false;
let oldValue;


onMount(() => {
	toggleTransitions(false);
	({ scrollerStartX, scrollerEndX, handleStartX } = initialMeasure(element));
});


afterUpdate(() => {
	if (typeof value !== 'boolean') value = !!value;
	setValue(value);
});



function setValue (v = false, force = false) {
	if (typeof v !== 'boolean') v = !!v;
	if (v !== value) return value = v;
	if (value === oldValue && !force) return;
	startX = currentX = value ? scrollerEndX : scrollerStartX;
	oldValue = value;
	setKnobPosition();
	dispatch('change', value);
}


function onKey (e) {
	toggleTransitions(true);
	if (e.key === 'Enter' || e.key === ' ') {
		e.preventDefault();
		setValue(!value);
	}
}


function dragStart (e) {
	const target = e.target;
	if (!target.closest('.toggle-inner, .toggle>label')) return;

	// prevent double call
	if (isTouchDevice && e.type !== 'touchstart') return;

	if (e.type === 'touchstart') {
		document.addEventListener('touchend', dragEnd);
		document.addEventListener('touchmove', drag, { passive: false });
	}
	else {
		document.addEventListener('mouseup', dragEnd);
		document.addEventListener('mousemove', drag, { passive: false });
	}
	toggleTransitions(false);
	startX = getMouseX(e) - currentX;
	isDragging = true;
	isClick = true;
}


function dragEnd () {
	document.removeEventListener('mouseup', dragEnd);
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('touchend', dragEnd);
	document.removeEventListener('touchmove', drag);
	toggleTransitions(true);
	isDragging = false;
	if (isClick) setValue(!value);
	else {
		// drag-end left knob at over 50% of the toggle width
		setValue(currentX - scrollerStartX >= (scrollerEndX - scrollerStartX) / 2, true);
	}
}


function drag (e) {
	if (!isDragging) return;
	isClick = false;
	e.preventDefault();
	currentX = (getMouseX(e) - startX) - scrollerEndX;
	setKnobPosition();
}


function toggleTransitions (enable) {
	handle.style.transition = enable ? '' : 'none';
	scroller.style.transition = enable ? '' : 'none';
}

function setKnobPosition () {
	if (currentX < scrollerStartX) currentX = scrollerStartX;
	if (currentX > scrollerEndX) currentX = scrollerEndX;
	scroller.style.marginLeft = Math.round(currentX) + 'px';

	let handleLeft = handleStartX;
	if (isDragging || value) handleLeft -= scrollerStartX;
	if (isDragging) handleLeft += currentX;
	handle.style.left = `${Math.round(handleLeft - 1)}px`;
}

</script>
