{#if visible}
	<div
		class="tooltip-plate tooltip-{position}"
		class:visible
		on:mouseover="{show}"
		on:focus="{show}"
		on:click="{show}"
		on:mouseout="{hide}"
		on:blur="{hide}"
		bind:this="{el}">
		<div class="tooltip"><div class="tooltip-content"><slot/></div></div>
	</div>
{/if}
<script>
import { onDestroy, onMount } from 'svelte';
export let target = 'body';
export let events = ['hover'];

let position = 'top';
let visible = false;
let hideTimer;
let el, targetEl, tooltipContainer;


onMount(() => {
	init();
	targetEl = document.querySelector('#' + target);
	if (targetEl) {
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
});

onDestroy(() => {
	if (targetEl) {
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
});


function show () {
	clearTimeout(hideTimer);
	if (visible) return;
	visible = true;
	requestAnimationFrame(() => {
		tooltipContainer.appendChild(el);
		align();
	});
}


function hide (e) {
	if (!visible) return;
	if (e.type === 'scroll' || e.type === 'resize') return visible = false;
	if (e.type === 'click') {
		if (targetEl.contains(e.target) || el.contains(e.target)) return;
		visible = false;
	}
	if (events.includes('hover')) {
		hideTimer = setTimeout(() => visible = false, 50);
	}
	if (events.includes('focus') && e.type === 'blur') {
		hideTimer = setTimeout(() => visible = false, 500);
	}
}


function align () {
	const targetBox = targetEl.getBoundingClientRect();
	const tooltipBox = el.getBoundingClientRect();

	let top = targetBox.top - tooltipBox.height;
	let left = targetBox.left + (targetBox.width / 2) - (tooltipBox.width / 2);

	if (top < 0) {
		top = targetBox.top + targetBox.height;
		position = 'bottom';
	}

	el.style.top = top + 'px';
	el.style.left = left + 'px';
}


function init () {
	tooltipContainer = document.querySelector('.tooltip-container');
	if (!tooltipContainer) {
		tooltipContainer = document.createElement('DIV');
		tooltipContainer.className = 'tooltip-container';
		document.body.appendChild(tooltipContainer);
	}
}
</script>
