<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="splitter {className}"
	class:vertical="{isVertical}"
	class:is-dragging="{isDragging}"
	on:mousedown="{mousedown}"
	bind:this="{element}"></div>

<script>
import './Splitter.css';
import { onMount, createEventDispatcher } from 'svelte';
import { innerWidth, innerHeight, minHeight, minWidth, maxWidth, maxHeight, getFlexFlow } from './utils';
import { getMouseX, getMouseY, ANIMATION_SPEED } from '../utils';


let className = '';
export { className as class };
export let element = undefined;


const dispatch = createEventDispatcher();
const size = 8, halfsize = size / 2;
const Box = {};


let isVertical = false;
let parentEl, targetEl;
let initialTargetBox, startX, startY;
let mousedownTargetBox;
let isDragging = false, bodyCursor;




onMount(() => {
	requestAnimationFrame(init);
});


export function toggle () {
	setSize(Box.collapsed ? 'max' : 'min', true);
}

export function collapse () {
	setSize('min', true);
}

export function expand () {
	setSize('max', true);
}

export function setSize (to, withAnimation = false) {
	const prop = isVertical ? 'height' : 'width';
	const Prop = isVertical ? 'Height' : 'Width';
	const box = {};
	if (!to || to === 'default') box[prop] = initialTargetBox[prop];
	if (to === 'min') box[prop] = initialTargetBox['min' + Prop];
	else if (to === 'max') box[prop] = initialTargetBox['max' + Prop];
	// unit size
	else if (typeof to === 'number') box[prop] = to;
	updateSize(box, withAnimation);
}


function init () {
	targetEl = element.previousElementSibling;
	parentEl = element.parentElement;
	isVertical = getFlexFlow(parentEl) === 'column';
	initialTargetBox = targetEl.getBoundingClientRect();
	if (isVertical) {
		initialTargetBox.minHeight = minHeight(targetEl);
		initialTargetBox.maxHeight = Math.min(innerHeight(element.parentElement), maxHeight(targetEl));
	}
	else {
		initialTargetBox.minWidth = minWidth(targetEl);
		initialTargetBox.maxWidth = Math.min(innerWidth(element.parentElement), maxWidth(targetEl));
	}
	updateSize(initialTargetBox);

	targetEl.style.flex = 'unset';
	targetEl.style.overflow = 'auto';
	if (isVertical) element.style.height = size + 'px';
	else element.style.width = size + 'px';
	if (element && element.nextElementSibling) element.nextElementSibling.style.overflow = 'auto';
}


function updateSize (box, withAnimation = false) {
	let originalTargetTransition, originalElTransition;
	if (withAnimation) {
		originalTargetTransition = targetEl.style.transition;
		originalElTransition = element.style.transition;
		const anim = ANIMATION_SPEED + 'ms ease-out';
		targetEl.style.transition = `width ${anim}, height ${anim}`;
		element.style.transition = `left ${anim}, top ${anim}`;
	}
	if (isVertical) {
		targetEl.style.height = box.height + 'px';
		element.style.top = (box.height - halfsize) + 'px';
		const collapsed = initialTargetBox.minHeight === box.height;
		Box.height = box.height;
		Box.collapsed = collapsed;
		dispatch('change', Box);
	}
	else {
		targetEl.style.width = box.width + 'px';
		element.style.left = (box.width - halfsize) + 'px';
		const collapsed = initialTargetBox.minWidth === box.width;
		Box.width = box.width;
		Box.collapsed = collapsed;
		dispatch('change', Box);
	}

	if (withAnimation) {
		setTimeout(() => {
			targetEl.style.transition = originalTargetTransition;
			element.style.transition = originalElTransition;
			dispatch('changed', Box);
		}, ANIMATION_SPEED);
	}
}


function mousedown (e) {
	if (isDragging) return;
	isDragging = true;
	e.preventDefault();
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
	e.stopPropagation();
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
	dispatch('changed', Box);
}
</script>
