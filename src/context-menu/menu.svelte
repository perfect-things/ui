<ul class="context-menu"
	class:hidden="{!opened}"
	bind:this="{menuEl}">

	<slot></slot>
</ul>

<svelte:options accessors={true}/>

<script>
import { createEventDispatcher, onMount } from 'svelte';
const dispatch = createEventDispatcher();

let menuEl, targetEl, focusedEl, opened = false;
export let targetSelector = 'body';

onMount(() => {
	document.addEventListener('contextmenu', onContextMenu);
});


function updatePosition (e)  {
	if (e) {	// update position to pointer
		menuEl.style.left = e.x + 'px';
		menuEl.style.top = e.y + 'px';
	}
	else {		// make sure it stays on screen
		let {x, y, width, height} = menuEl.getBoundingClientRect();
		const winH = window.innerHeight;
		const winW = window.innerWidth;
		const padding = 10;
		if (winH - height - y < padding) y = winH - height - padding;
		if (winW - width - x < padding) x = winW - width - padding;
		menuEl.style.left = x + 'px';
		menuEl.style.top = y + 'px';
	}
}

function onContextMenu (e) {
	close();
	targetEl = e.target.closest(targetSelector);
	if (!targetEl) return;
	e.stopPropagation();
	e.preventDefault();
	updatePosition(e);
	open();
}

function onDocumentClick (e) {
	if (e.button !== 0) return;
	if (!menuEl.contains(e.target)) close();
}

function onscroll () {
	if (opened) close();
}

function onmousemove () {
	if (focusedEl) {
		focusedEl.blur();
		focusedEl = null;
	}
}

function onKeydown (e) {
	if (e.key === 'Escape') close();
	else if (e.key === 'ArrowDown') focusNext();
	else if (e.key === 'ArrowUp') focusPrev();
}


function focusNext () {
	const buttons = Array.from(menuEl.querySelectorAll('.context-menu-button'));
	let idx = -1;
	if (focusedEl) idx = buttons.findIndex(el => el == focusedEl);
	if (idx >= buttons.length - 1) return;
	focusedEl = buttons[idx + 1];
	if (focusedEl) focusedEl.focus();
}

function focusPrev () {
	const buttons = Array.from(menuEl.querySelectorAll('.context-menu-button'));
	let idx = buttons.length;
	if (focusedEl) idx = buttons.findIndex(el => el == focusedEl);
	if (idx <= 0) return;
	focusedEl = buttons[idx - 1];
	if (focusedEl) focusedEl.focus();
}

export function open () {
	opened = true;
	focusedEl = null;
	return new Promise(resolve => requestAnimationFrame(() => {
		// needs to finish rendering first
		updatePosition();
		dispatch('open');
		addEventListeners();
		requestAnimationFrame(resolve);
	}));
}

export function close () {
	opened = false;
	return new Promise(resolve => requestAnimationFrame(() => {
		dispatch('close');
		removeEventListeners();
		requestAnimationFrame(resolve);
	}));
}


function addEventListeners () {
	document.addEventListener('click', onDocumentClick);
	document.addEventListener('keydown', onKeydown);
	document.addEventListener('wheel', onscroll);
	document.addEventListener('mousemove', onmousemove);
}


function removeEventListeners () {
	document.removeEventListener('click', onDocumentClick);
	document.removeEventListener('keydown', onKeydown);
	document.removeEventListener('wheel', onscroll);
	document.removeEventListener('mousemove', onmousemove);
}

</script>
