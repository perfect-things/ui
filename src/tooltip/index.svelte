{#if visible}
	<div class="tooltip-plate tooltip-{position}" class:visible bind:this="{el}">
		<div class="tooltip">
			<div class="tooltip-content {className}">
				<slot/>
			</div>
		</div>
	</div>
{/if}
<script>
import { afterUpdate, onDestroy, onMount } from 'svelte';
export let target = 'body';
export let events = 'hover';	// hover, click, focus
export let className = '';
export let delay = '0';

let position = 'top';
let visible = false;
let showTimer, hideTimer, noHide = false;
let el, targetEl, tooltipContainer;

onMount(() => {
	initContainer();
	targetEl = document.querySelector('#' + target);
	addTargetEvents();
});

onDestroy(() => {
	removeTargetEvents();
});

afterUpdate(align);


function show () {
	clearTimeout(hideTimer);
	if (visible || showTimer) return;
	showTimer = setTimeout(_show, parseFloat(delay) || 0);
}


function _show () {
	visible = true;
	noHide = false;
	showTimer = null;
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


function hide (e) {
	if (!visible) return;
	if (e.type === 'scroll' || e.type === 'resize') return _hide();
	if (e.type === 'click') {
		if (targetEl.contains(e.target) || el.contains(e.target)) return;
		_hide();
	}
	if (events.includes('hover')) hideTimer = setTimeout(_hide, 50);
	if (events.includes('focus') && e.type === 'blur' && !noHide) _hide();
}


function align () {
	if (!visible) return;
	const targetBox = targetEl.getBoundingClientRect();
	const tooltipBox = el.getBoundingClientRect();

	position = 'top';
	let top = targetBox.top - tooltipBox.height;
	let left = targetBox.left + (targetBox.width / 2) - (tooltipBox.width / 2);

	if (top < 0) {
		top = targetBox.top + targetBox.height;
		position = 'bottom';
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
}


function addTargetEvents () {
	if (!targetEl) return;
	if (events.includes('click')) {
		targetEl.addEventListener('click', show);
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
	window.addEventListener('resize', hide);
	document.addEventListener('scroll', hide, true);
}


function removeTargetEvents () {
	if (!targetEl) return;
	if (events.includes('click')) {
		targetEl.removeEventListener('click', show);
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
	window.removeEventListener('resize', hide);
	document.removeEventListener('scroll', hide, true);
}
</script>
