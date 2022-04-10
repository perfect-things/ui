<div class="splitter"
	class:vertical="{isVertical}"
	class:is-dragging="{isDragging}"
	on:mousedown="{mousedown}"
	bind:this="{el}"></div>

<script>
import { onMount, createEventDispatcher } from 'svelte';
import { getMouseX, getMouseY, innerWidth, innerHeight,
	minHeight, minWidth, getFlexFlow, maxHeight, maxWidth } from '../util';

const dispatch = createEventDispatcher();
const size = 10, halfsize = size / 2;

let isVertical = false;
let el, parentEl, targetEl;
let initialTargetBox, startX, startY, minX, minY, maxX, maxY;
let isDragging = false, bodyCursor;

onMount(() => {
	requestAnimationFrame(init);
});


function init () {
	targetEl = el.previousElementSibling;
	parentEl = el.parentElement;
	isVertical = getFlexFlow(parentEl) === 'column';
	initialTargetBox = targetEl.getBoundingClientRect();
	updateSize(initialTargetBox);

	targetEl.style.flex = 'unset';
	targetEl.style.overflow = 'auto';
	el.nextElementSibling.style.overflow = 'auto';
}

function updateSize (box) {
	if (isVertical) {
		targetEl.style.height = box.height + 'px';
		el.style.top = (box.height - halfsize) + 'px';
	}
	else {
		targetEl.style.width = box.width + 'px';
		el.style.left = (box.width - halfsize) + 'px';
	}
}


function mousedown (e) {
	if (isDragging) return;
	isDragging = true;
	document.addEventListener('mouseup', mouseup);
	document.addEventListener('mousemove', mousemove);
	bodyCursor = document.body.style.cursor;
	document.body.style.cursor = (isVertical ? 'ns' : 'ew') + '-resize';

	if (isVertical) {
		minY = minHeight(targetEl) + halfsize;
		maxY = Math.min(innerHeight(el.parentElement), maxHeight(targetEl)) - halfsize;
		startY = getMouseY(e);
	}
	else {
		minX = minWidth(targetEl) + halfsize;
		maxX = Math.min(innerWidth(el.parentElement),  maxWidth(targetEl)) - halfsize;
		startX = getMouseX(e);
	}

	initialTargetBox = targetEl.getBoundingClientRect();
	updateSize(initialTargetBox);
}


function mousemove (e) {
	e.preventDefault();
	if (isVertical) {
		let height = initialTargetBox.height + getMouseY(e) - startY;
		if (height < minY) height = minY;
		if (height > maxY) height = maxY;
		updateSize({ height });
	}
	else {
		let width = initialTargetBox.width + getMouseX(e) - startX;
		if (width < minX) width = minX;
		if (width > maxX) width = maxX;
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
