<div
	class="toggle {className}"
	class:checked="{value}"
	role="switch"
	aria-checked="{value}"
	tabindex="{disabled ? undefined : 0}"
	bind:this="{el}"
	on:keydown="{onKey}"
	on:touchstart={dragStart}
	on:mousedown={dragStart}
	on:contextmenu|preventDefault
	on:click|preventDefault>
	<label class="toggle-inner" {title} bind:this="{label}">
		<div class="toggle-scroller" bind:this="{scroller}">
			<div class="toggle-option"></div>
			<div class="toggle-handle" bind:this="{handle}"><div class="toggle-knob"></div></div>
			<div class="toggle-option"></div>
			<input {...inputProps} type="checkbox" class="toggle-input" bind:checked="{value}">
		</div>
	</label>
</div>
<script>
import { onMount, afterUpdate , createEventDispatcher } from 'svelte';
import { pluck } from '../utils';
import { getMouseX, isTouchDevice, initialMeasure } from './utils';

const dispatch = createEventDispatcher();

export let value = false;
export let disabled = undefined;
let className = '';
export { className as class };

let el, label, scroller, handle, startX, currentX = 0;
let scrollerStartX, scrollerEndX, handleStartX;
let isClick = false, isDragging = false;
let oldValue;

$:title = $$props.title;
$:inputProps = pluck($$props, ['id', 'name', 'disabled', 'required']);


onMount(() => {
	toggleTransitions(false);
	({ scrollerStartX, scrollerEndX, handleStartX } = initialMeasure(el));
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
	handle.style.left = `${Math.round(handleLeft)}px`;
}

</script>
