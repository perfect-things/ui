<ul class="menu" class:hidden="{!opened}" bind:this="{menuEl}">
	<slot></slot>
</ul>

<svelte:options accessors={true}/>

<script>
import { createEventDispatcher, onDestroy, onMount } from 'svelte';
import initLongPressEvent from '../longpress.js';

const dispatch = createEventDispatcher();
const isMobileSafari = navigator.userAgent.match(/safari/i) && navigator.vendor.match(/apple/i) && navigator.maxTouchPoints;
const contextmenu = isMobileSafari ? 'longpress' : 'contextmenu';

export let type = undefined;          // can be undefined or 'context'
export let targetSelector = 'body';   // target element for context menu
export let closeOnClick = true;
export let elevate = false;
$:elevated = elevate === 'true' || elevate === true;
let menuEl, targetEl, focusedEl, opened = false;


onMount(() => {
	initLongPressEvent();

	if (type === 'context') {
		// document.querySelectorAll(targetSelector).forEach(el => {
		// 	el.style['-webkit-touch-callout'] = 'none';
		// 	el.style.touchCallout = 'none';
		// });
		document.addEventListener(contextmenu, onContextMenu);
	}
	if (elevated) document.body.appendChild(menuEl);
});


onDestroy(() => {
	if (type === 'context') {
		document.removeEventListener(contextmenu, onContextMenu);
	}
	if (elevated) menuEl.remove();
});



function updatePosition (e) {
	if (e && e.detail && e.detail instanceof Event) e = e.detail;

	const etype = e && e.type;

	if (type === 'context') {
		if (etype === 'contextmenu') {
			menuEl.style.top = e.y + 'px';
			menuEl.style.left = e.x + 'px';
		}
		else if (etype === 'longpress') {
			menuEl.style.top = e.detail.y + 'px';
			menuEl.style.left = e.detail.x + 'px';
		}
	}

	// regular menu
	else if (etype === 'click' && type !== 'context') {
		const btnBox = e.target.getBoundingClientRect();
		menuEl.style.top = (btnBox.top + btnBox.height + 3) + 'px';
		menuEl.style.left = btnBox.left + 'px';
	}

	// ensure it stays on screen
	let { x, y, width, height } = menuEl.getBoundingClientRect();
	const winH = window.innerHeight;
	const winW = window.innerWidth;
	const padding = 10;

	if (y > winH - height - padding) menuEl.style.top = (winH - height - padding) + 'px';
	if (x > winW - width - padding) menuEl.style.left = (winW - width - padding) + 'px';
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
	if (!menuEl.contains(e.target)) close();
	else {
		const shouldClose = closeOnClick === true || closeOnClick === 'true';
		const clickedOnItem = e.target.closest('.menu-item:not(.menu-separator)');
		if (shouldClose && clickedOnItem) highlightButtonAndClose(e.target, e);
	}
}


function onscroll () {
	if (opened) close();
}


function onmousemove (e) {
	const btn = e.target.closest('.menu-button');
	if (btn) {
		focusedEl = btn;
		focusedEl.focus();
	}
}


function onKeydown (e) {
	if (e.key === 'Escape') close();

	if (!menuEl.contains(e.target)) return;

	if (e.key === 'ArrowDown') {
		e.preventDefault();
		focusNext();
	}
	else if (e.key === 'ArrowUp') {
		e.preventDefault();
		focusPrev();
	}
}


function focusTarget () {
	if (targetEl && targetEl.focus) targetEl.focus();
}


function focusNext () {
	const buttons = Array.from(menuEl.querySelectorAll('.menu-button'));
	let idx = -1;
	if (focusedEl) idx = buttons.findIndex(el => el === focusedEl);
	if (idx >= buttons.length - 1) return;
	focusedEl = buttons[idx + 1];
	if (focusedEl) focusedEl.focus();
}


function focusPrev () {
	const buttons = Array.from(menuEl.querySelectorAll('.menu-button'));
	let idx = buttons.length;
	if (focusedEl) idx = buttons.findIndex(el => el === focusedEl);
	if (idx <= 0) return;
	focusedEl = buttons[idx - 1];
	if (focusedEl) focusedEl.focus();
}


export function open (e) {
	opened = true;
	focusedEl = null;

	if (e && e.detail && e.detail instanceof Event) e = e.detail;
	if (type !== 'context') targetEl = e.target;

	return new Promise(resolve => requestAnimationFrame(() => {
		// needs to finish rendering first
		updatePosition(e);
		dispatch('open');
		addEventListeners();
		requestAnimationFrame(resolve);
		focusNext();
	}));
}


function highlightButtonAndClose (btn, e) {
	btn.focus();
	// need to wait for the button to trigger click
	// and check if it's not cancelled by consumers
	// the timeout must be longer than the menu-item blink + some 20ms
	setTimeout(() => {
		if (!e.defaultPrevented) close();
	}, 260);
}


export function close () {
	opened = false;
	return new Promise(resolve => requestAnimationFrame(() => {
		dispatch('close');
		removeEventListeners();
		requestAnimationFrame(resolve);
		focusTarget();
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
