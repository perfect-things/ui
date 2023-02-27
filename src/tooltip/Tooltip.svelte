{#if visible}
	<div class="tooltip-plate tooltip-{_position}" class:visible bind:this="{el}">
		<div class="tooltip">
			<div class="tooltip-content {className}">
				<slot/>
			</div>
		</div>
	</div>
{/if}
<script>
import { afterUpdate, onDestroy, onMount } from 'svelte';
export let target = '';
export let events = 'hover';	// hover, click, focus
export let className = '';
export let delay = '0';
export let position = 'auto';

let _position = 'top';
let visible = false;
let showTimer, hideTimer, shownEvent, noHide = false;
let el, targetEl, tooltipContainer;

onMount(() => {
	initContainer();
	targetEl = target ? document.querySelector('#' + target) : document.body;
	addTargetEvents();
});

onDestroy(removeTargetEvents);
afterUpdate(align);


function show (e) {
	if (hideTimer) {
		clearTimeout(hideTimer);
		hideTimer = null;
	}
	if (visible || showTimer) return;
	showTimer = setTimeout(() => _show(e), parseFloat(delay) || 0);
}


function _show (e) {
	visible = true;
	noHide = false;
	showTimer = null;
	shownEvent = e.type;
	requestAnimationFrame(() => {
		tooltipContainer.appendChild(el);
		align();
	});
	requestAnimationFrame(addTooltipEvents);
}


function preventHiding () {
	noHide = true;
}


function _hide () {
	visible = false;
	removeTooltipEvents();
}


/**
 * Hide tooltip only with the corresponding event:
 * - when shown on mouseover - hide with mouseout
 * - when shown on focus - hide on blur
 * - when shown on click/mousedown - hide only on click/mousedown elsewhere
 * @param e - hide event
 */
function hide (e) {
	const targetIsSelf = targetEl.contains(e.target);
	if ((e.type === 'mousedown' || e.type === 'click') && targetIsSelf) return;
	if (showTimer && shownEvent !== 'click') {
		clearTimeout(showTimer);
		showTimer = null;
	}
	if (!visible) return;
	if (e.type === 'scroll' || e.type === 'resize') return _hide();
	if (e.type === 'click' || e.type === 'mousedown') {
		if (targetEl.contains(e.target) || el.contains(e.target)) return;
		_hide();
	}
	if (shownEvent === 'mouseover' && e.type === 'mouseout') return hideTimer = setTimeout(_hide, 50);
	if (shownEvent === 'focus' && e.type === 'blur' && !noHide) return _hide();
	if (shownEvent === 'mousedown' && e.type === 'mousedown') return _hide();
}


function align () {
	if (!visible) return;
	const targetBox = targetEl.getBoundingClientRect();
	const tooltipBox = el.getBoundingClientRect();

	_position = 'top';
	let top = targetBox.top - tooltipBox.height - 2;
	let left = targetBox.left + (targetBox.width / 2) - (tooltipBox.width / 2);

	if (top < 0 || position === 'bottom') {
		top = targetBox.top + targetBox.height + 2;
		_position = 'bottom';
	}
	el.style.top = top + 'px';
	el.style.left = left + 'px';
}


function initContainer () {
	tooltipContainer = document.querySelector('.tooltip-container');
	if (!tooltipContainer) {
		tooltipContainer = document.createElement('DIV');
		tooltipContainer.className = 'tooltip-container';
		document.body.appendChild(tooltipContainer);
	}
}


function addTooltipEvents () {
	if (!el) return;
	el.addEventListener('mousedown', preventHiding);
	if (events.includes('focus')) {
		el.addEventListener('focus', show);
		el.addEventListener('blur', hide);
	}
	if (events.includes('hover')) {
		el.addEventListener('mouseover', show);
		el.addEventListener('mouseout', hide);
	}
	window.addEventListener('resize', hide);
	document.addEventListener('scroll', hide, true);
}


function removeTooltipEvents () {
	if (!el) return;
	el.removeEventListener('mousedown', preventHiding);
	if (events.includes('focus')) {
		el.removeEventListener('focus', show);
		el.removeEventListener('blur', hide);
	}
	if (events.includes('hover')) {
		el.removeEventListener('mouseover', show);
		el.removeEventListener('mouseout', hide);
	}
	window.removeEventListener('resize', hide);
	document.removeEventListener('scroll', hide, true);
}


function addTargetEvents () {
	if (!targetEl) return;
	if (events.includes('click')) {
		targetEl.addEventListener('mousedown', show);
		document.addEventListener('mousedown', hide);
		document.addEventListener('click', hide);
	}
	if (events.includes('focus')) {
		targetEl.addEventListener('focus', show);
		targetEl.addEventListener('blur', hide);
	}
	if (events.includes('hover')) {
		targetEl.addEventListener('mouseover', show);
		targetEl.addEventListener('mouseout', hide);
	}
}


function removeTargetEvents () {
	if (!targetEl) return;
	if (events.includes('click')) {
		targetEl.removeEventListener('mousedown', show);
		document.removeEventListener('mousedown', hide);
		document.removeEventListener('click', hide);
	}
	if (events.includes('focus')) {
		targetEl.removeEventListener('focus', show);
		targetEl.removeEventListener('blur', hide);
	}
	if (events.includes('hover')) {
		targetEl.removeEventListener('mouseover', show);
		targetEl.removeEventListener('mouseout', hide);
	}
}
</script>
