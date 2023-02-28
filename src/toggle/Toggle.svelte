<div
	class="toggle {className}"
	class:checked="{value}"
	tabIndex="{disabled ? undefined : 0}"
	bind:this="{el}"
	on:keydown="{onKey}"
	on:touchstart={dragStart}
	on:mousedown={dragStart}
	on:contextmenu|preventDefault
	on:click|preventDefault>
	<label class="toggle-label" {title} bind:this="{label}">
		<span class="toggle-handle" bind:this="{handle}"></span>
		<input {...inputProps} type="checkbox" class="toggle-input" bind:checked="{value}">
	</label>
</div>
<script>
import { onMount, afterUpdate } from 'svelte';
import { createEventDispatcher } from 'svelte';
import { pluck } from '../util';

const dispatch = createEventDispatcher();
const isTouchDevice = 'ontouchstart' in document.documentElement;

export let value = false;
export let disabled = undefined;
export let className = '';

let el, label, handle, startX, maxX, minX, currentX = 0;
let isClick = false, isDragging = false;
let oldValue;

$:title = $$props.title;
$:inputProps = pluck($$props, ['id', 'name', 'title', 'disabled', 'required']);


onMount(() => {
	initialMeasure(el);
});


afterUpdate(() => {
	if (typeof value !== 'boolean') value = !!value;
	setValue(value);
});



function getMouseX (e) {
	return (e.type.includes('touch')) ? e.touches[0].clientX : e.clientX;
}


function _outerWidth (_el) {
	return _el.getBoundingClientRect().width;
}


function _innerWidth (_el) {
	const css = getComputedStyle(_el);
	const borders = parseFloat(css.borderLeftWidth) + parseFloat(css.borderRightWidth);
	const padding = parseFloat(css.paddingLeft) + parseFloat(css.paddingRight);
	return _el.getBoundingClientRect().width - borders - padding;
}


function initialMeasure (_el) {
	const isHidden = _el.offsetParent === null;
	if (isHidden) {
		_el = _el.cloneNode(true);
		document.body.appendChild(_el);
	}
	const _handle = _el.querySelector('.toggle-handle');
	maxX = _innerWidth(_el);
	minX = _outerWidth(_handle);
	if (isHidden && _el) _el.remove();
}


function setValue (v, skipEvent = false, force = false) {
	if (typeof v === 'undefined') v = false;
	if (typeof v !== 'boolean') v = !!v;
	if (v !== value) return value = v;
	if (value === oldValue && !force) return;
	startX = currentX = value ? maxX : minX;
	label.style.width = `${Math.round(currentX)}px`;
	oldValue = value;
	if (!skipEvent) dispatch('change', value);
}


function onKey (e) {
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
	label.style.transition = 'none';
	startX = getMouseX(e) - currentX;
	isDragging = true;
	isClick = true;
}


function dragEnd () {
	document.removeEventListener('mouseup', dragEnd);
	document.removeEventListener('mousemove', drag);
	document.removeEventListener('touchend', dragEnd);
	document.removeEventListener('touchmove', drag);
	label.style.transition = '';
	isDragging = false;
	if (isClick) setValue(!value);
	else setValue(currentX - minX >= (maxX - minX) / 2, false, true);
}


function drag (e) {
	if (!isDragging) return;
	isClick = false;
	e.preventDefault();
	currentX = getMouseX(e) - startX;
	if (currentX > maxX) currentX = maxX;
	if (currentX < minX) currentX = minX;
	label.style.width = `${Math.round(currentX)}px`;
}
</script>
