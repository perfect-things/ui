<!--
@component ## Splitter

A resizable splitter component for creating adjustable layouts.
- Smart horizontal and vertical splitting based on parent flex direction
- Uses [min|max]-[width|height] properties to determine resize limits
- Provides programmatic control via instance methods (collapse, expand, setSize, toggle)
- Smooth animations when resizing programmatically
- Mouse and touch support for interactive resizing

@example
```svelte
<div style="display: flex; height: 300px;">
  <div style="min-width: 100px; max-width: 400px;">Left Panel</div>
  <Splitter bind:this={splitter} onchanged={() => console.log('Resized')}/>
  <div>Right Panel</div>
</div>

<div style="display: flex; flex-direction: column; height: 300px;">
  <div style="min-height: 50px;">Top Panel</div>
  <Splitter/>
  <div>Bottom Panel</div>
</div>
```
@see {@link https://ui.perfectthings.dev/#Splitter Splitter Docs} for more info.
-->

<div class={cls} bind:this={element} {onmousedown} {...restProps}></div>


<script lang="ts">
import './Splitter.css';
import type { SplitterProps, SplitterBox } from './types';
import { onMount } from 'svelte';
import { innerWidth, innerHeight, minHeight, minWidth, maxWidth, maxHeight, getFlexFlow } from './utils';
import { getMouseX, getMouseY, UI } from '../utils';


let {
	class: className = '',
	element = $bindable(undefined),
	onchange = () => {},
	onchanged = () => {},
	...restProps
}: SplitterProps = $props();


const size = 8, halfsize = size / 2;
const Box: SplitterBox = {};

let isDragging = $state(false);
let isVertical = $state(false);
let parentEl, targetEl;
let initialTargetBox, startX, startY;
let mousedownTargetBox;
let bodyCursor;

const cls = $derived([
	'splitter',
	className,
	{
		'vertical': isVertical,
		'is-dragging': isDragging,
	}
]);



onMount(init);


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


function init (count = 5) {
	if (!element && count > 0) {
		setTimeout(() => init(count - 1), 100);
		return;
	}

	targetEl = element.previousElementSibling;
	parentEl = element.parentElement;
	isVertical = getFlexFlow(parentEl) === 'column';
	initialTargetBox = targetEl.getBoundingClientRect();
	if (isVertical) {
		initialTargetBox.minHeight = minHeight(targetEl);
		initialTargetBox.maxHeight = Math.min(innerHeight(parentEl), maxHeight(targetEl));
	}
	else {
		initialTargetBox.minWidth = minWidth(targetEl);
		initialTargetBox.maxWidth = Math.min(innerWidth(parentEl), maxWidth(targetEl));
	}
	updateSize(initialTargetBox);

	targetEl.style.flex = 'unset';
	targetEl.style.overflow = 'auto';
	if (isVertical) element.style.height = size + 'px';
	else if (element) element.style.width = size + 'px';
	if (element && element.nextElementSibling) element.nextElementSibling.style.overflow = 'auto';
}


function updateSize (box, withAnimation = false) {
	if (!targetEl || !element) return;

	let originalTargetTransition, originalElTransition;
	if (withAnimation) {
		originalTargetTransition = targetEl.style.transition;
		originalElTransition = element.style.transition;
		const anim = UI.ANIMATION_SPEED + 'ms ease-out';
		targetEl.style.transition = `width ${anim}, height ${anim}`;
		element.style.transition = `left ${anim}, top ${anim}`;
	}
	if (isVertical) {
		targetEl.style.height = box.height + 'px';
		element.style.top = (box.height - halfsize) + 'px';
		const collapsed = initialTargetBox.minHeight === box.height;
		Box.height = box.height;
		Box.collapsed = collapsed;
		onchange(undefined, Box);
	}
	else {
		targetEl.style.width = box.width + 'px';
		element.style.left = (box.width - halfsize) + 'px';
		const collapsed = initialTargetBox.minWidth === box.width;
		Box.width = box.width;
		Box.collapsed = collapsed;
		onchange(undefined, Box);
	}

	if (withAnimation) {
		setTimeout(() => {
			targetEl.style.transition = originalTargetTransition;
			element.style.transition = originalElTransition;
			onchanged(undefined, Box);
		}, UI.ANIMATION_SPEED);
	}
}


function onmousedown (e) {
	if (isDragging || !targetEl) return;

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


function mousemove (e: MouseEvent) {
	e.preventDefault();
	e.stopPropagation();
	if (!mousedownTargetBox || !initialTargetBox || !element || !targetEl) return;

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


function mouseup (e: MouseEvent) {
	if (!isDragging) return;
	isDragging = false;
	document.removeEventListener('mouseup', mouseup);
	document.removeEventListener('mousemove', mousemove);
	document.body.style.cursor = bodyCursor;
	onchanged(e, Box);
}
</script>
