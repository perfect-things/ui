<div class="splitter"
	class:vertical="{isVertical}"
	class:is-dragging="{isDragging}"
	on:mousedown="{mousedown}"
	bind:this="{el}"></div>

<script>
import { onMount, createEventDispatcher } from 'svelte';
import { getMouseX, getMouseY, innerWidth, innerHeight, ANIMATION_SPEED,
	minHeight, minWidth, getFlexFlow, maxHeight, maxWidth } from '../util';

const dispatch = createEventDispatcher();
const size = 8, halfsize = size / 2;

let isVertical = false;
let el, parentEl, targetEl;
let initialTargetBox, startX, startY;
let mousedownTargetBox;
let isDragging = false, bodyCursor;

onMount(() => {
	requestAnimationFrame(init);
});


export function setSize (to) {
	const prop = isVertical ? 'height' : 'width';
	const Prop = isVertical ? 'Height' : 'Width';
	const box = {};
	if (!to || to === 'default') box[prop] = initialTargetBox[prop];
	if (to === 'min') box[prop] = initialTargetBox['min' + Prop];
	else if (to === 'max') box[prop] = initialTargetBox['max' + Prop];
	// unit size
	else if (typeof to === 'number') box[prop] = to + 'px';
	updateSize(box, true);
}

function init () {
	targetEl = el.previousElementSibling;
	parentEl = el.parentElement;
	isVertical = getFlexFlow(parentEl) === 'column';
	initialTargetBox = targetEl.getBoundingClientRect();
	if (isVertical) {
		initialTargetBox.minHeight = minHeight(targetEl);
		initialTargetBox.maxHeight = Math.min(innerHeight(el.parentElement), maxHeight(targetEl));
	}
	else {
		initialTargetBox.minWidth = minWidth(targetEl);
		initialTargetBox.maxWidth = Math.min(innerWidth(el.parentElement),  maxWidth(targetEl));
	}
	updateSize(initialTargetBox);

	targetEl.style.flex = 'unset';
	targetEl.style.overflow = 'auto';
	if (isVertical) el.style.height = size + 'px';
	else el.style.width = size + 'px';
	el.nextElementSibling.style.overflow = 'auto';
}

function updateSize (box, withAnimation = false) {
	let originalTargetTransition, originalElTransition;
	if (withAnimation) {
		originalTargetTransition = targetEl.style.transition;
		originalElTransition = el.style.transition;
		const anim = ANIMATION_SPEED + 'ms ease-out';
		targetEl.style.transition = `width ${anim}, height ${anim}`;
		el.style.transition = `left ${anim}, top ${anim}`;
	}
	if (isVertical) {
		targetEl.style.height = box.height + 'px';
		el.style.top = (box.height - halfsize) + 'px';
	}
	else {
		targetEl.style.width = box.width + 'px';
		el.style.left = (box.width - halfsize) + 'px';
	}
	if (withAnimation) {
		setTimeout(() => {
			targetEl.style.transition = originalTargetTransition;
			el.style.transition = originalElTransition;
		}, ANIMATION_SPEED);
	}
}


function mousedown (e) {
	if (isDragging) return;
	isDragging = true;
	document.addEventListener('mouseup', mouseup);
	document.addEventListener('mousemove', mousemove);
	bodyCursor = document.body.style.cursor;
	document.body.style.cursor = (isVertical ? 'ns' : 'ew') + '-resize';

	if (isVertical) startY = getMouseY(e);
	else startX = getMouseX(e);

	mousedownTargetBox = targetEl.getBoundingClientRect();
	updateSize(mousedownTargetBox);
}


function mousemove (e) {
	e.preventDefault();
	if (isVertical) {
		let height = mousedownTargetBox.height + getMouseY(e) - startY;
		if (height < initialTargetBox.minHeight) height = initialTargetBox.minHeight;
		if (height > initialTargetBox.maxHeight) height = initialTargetBox.maxHeight;
		updateSize({ height });
	}
	else {
		let width = mousedownTargetBox.width + getMouseX(e) - startX;
		if (width < initialTargetBox.minWidth) width = initialTargetBox.minWidth;
		if (width > initialTargetBox.maxWidth) width = initialTargetBox.maxWidth;
		updateSize({ width });
	}
}


function mouseup () {
	if (!isDragging) return;
	isDragging = false;
	document.removeEventListener('mouseup', mouseup);
	document.removeEventListener('mousemove', mousemove);
	document.body.style.cursor = bodyCursor;
	const { width, height } = targetEl.getBoundingClientRect();
	dispatch('change', { width, height });
}
</script>
