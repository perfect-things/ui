<!-- svelte-ignore a11y-no-noninteractive-tabindex a11y-no-noninteractive-element-to-interactive-role -->
{#if opened}
	<ul
		class="menu {className}"
		role="menu"
		bind:this="{menuEl}"
		tabindex="0">
			<slot></slot>
	</ul>
{/if}

<svelte:options accessors={true}/>

<script>
import { createEventDispatcher, onDestroy, onMount, setContext } from 'svelte';
import initLongPressEvent from './longpress.js';
import { addArias, removeArias, matchQuery, updatePosition } from './utils.js';

const dispatch = createEventDispatcher();
const isMobileSafari = navigator.userAgent.match(/safari/i) && navigator.vendor.match(/apple/i) && navigator.maxTouchPoints;
const contextmenu = isMobileSafari ? 'longpress' : 'contextmenu';

export let type = undefined;          // can be undefined or 'context'
export let targetSelector = 'body';   // target element for context menu
export let closeOnClick = true;
export let elevate = false;
export let offset = 2;
export let align = 'left';			// can be 'left' or 'right'

let className = '';
export { className as class };


$:elevated = elevate === 'true' || elevate === true;
const menuButtons = [];
const buttonSelector = '.menu-button:not([disabled])';

let menuEl, targetEl, focusedEl, opened = false;
let isBelowTarget = true;	// default - screen size may change that


setContext('MenuContext', {
	targetEl: () => targetEl
});

onMount(() => {
	if (type === 'context') {
		initLongPressEvent();
		document.addEventListener(contextmenu, onContextMenu);
	}
});


onDestroy(() => {
	if (type === 'context') document.removeEventListener(contextmenu, onContextMenu);
	if (elevated && menuEl) menuEl.remove();
});



function indexButtons () {
	if (!menuEl) return;
	const addBtn = el => menuButtons.push({ el, text: el.textContent.trim().toLowerCase() });
	menuEl.querySelectorAll(buttonSelector).forEach(addBtn);
}


function matchTypeQuery (key) {
	const btn = matchQuery(menuButtons, key);
	if (btn) {
		// btn.el.focus();
		focusedEl = btn.el;
	}
}


function onContextMenu (e) {
	_close();
	targetEl = e.target.closest(targetSelector);
	if (!targetEl) return;

	e.stopPropagation();
	e.preventDefault();
	open(e);
}


function onDocumentClick (e) {
	if (!menuEl.contains(e.target)) _close();
	else {
		const shouldClose = closeOnClick === true || closeOnClick === 'true';
		const clickedOnItem = !!e.target.closest('.menu-item:not(.menu-separator,.disabled)');
		if (shouldClose && clickedOnItem) close(e);
	}
}


function onscroll (e) {
	if (e.target.closest('.menu')) return;
	if (opened) _close();
}


function onmousemove (e) {
	const btn = e.target.closest('.menu-button');
	if (btn) {
		focusedEl = btn;
		// focusedEl.focus();
	}
}

function onmouseout () {
	focusedEl = null;
}


function closeOnBlur (e) {
	if (e.key !== 'Tab' || !e || !e.target || !(e.target instanceof Node)) return;
	if (!menuEl.contains(e.target)) return close();
	if (!document.activeElement || !document.activeElement.closest('.menu')) return close();
	requestAnimationFrame(() => {
		if (!menuEl.contains(e.target)) return close();
		if (!document.activeElement || !document.activeElement.closest('.menu')) return close();
	});
}


function onKeyup (e) {
	closeOnBlur(e);
}

function onKeydown (e) {
	closeOnBlur(e);

	if (e.key === 'Escape') _close();
	// if (!menuEl.contains(e.target)) return;

	if (e.key.startsWith('Arrow') || e.key.startsWith(' ')) e.preventDefault();

	if (e.key === 'ArrowDown') focusNext();
	else if (e.key === 'ArrowUp') focusPrev();
	else if (e.key === 'ArrowLeft') focusFirst();
	else if (e.key === 'ArrowRight') focusLast();

	else matchTypeQuery(e.key);
}


function focusTarget () {
	// if (targetEl && targetEl.focus) targetEl.focus();
}


function focusFirst () {
	const buttons = Array.from(menuEl.querySelectorAll(buttonSelector));
	focusedEl = buttons[0];
	// if (focusedEl) focusedEl.focus();
}


function focusLast () {
	const buttons = Array.from(menuEl.querySelectorAll(buttonSelector));
	focusedEl = buttons[buttons.length - 1];
	// if (focusedEl) focusedEl.focus();
}


function focusNext () {
	const buttons = Array.from(menuEl.querySelectorAll(buttonSelector));
	let idx = -1;
	if (focusedEl) idx = buttons.findIndex(el => el === focusedEl);
	if (idx >= buttons.length - 1) idx = -1;
	focusedEl = buttons[idx + 1];
	// if (focusedEl) focusedEl.focus();
}


function focusPrev () {
	const buttons = Array.from(menuEl.querySelectorAll(buttonSelector));
	let idx = buttons.length;
	if (focusedEl) idx = buttons.findIndex(el => el === focusedEl);
	if (idx <= 0) idx = buttons.length;
	focusedEl = buttons[idx - 1];
	// if (focusedEl) focusedEl.focus();
}


export function open (e) {
	if (opened) {
		if (type !== 'context') return close();
		return Promise.resolve();
	}
	opened = true;
	focusedEl = null;

	if (e && e.detail && e.detail instanceof Event) e = e.detail;
	if (type !== 'context') targetEl = e && e.target;
	if (targetEl) {
		removeArias(targetSelector);
		addArias(targetEl);
	}

	return new Promise(resolve => requestAnimationFrame(() => {
		if (elevated) document.body.appendChild(menuEl);
		indexButtons();

		// needs to finish rendering first
		isBelowTarget = updatePosition(e, type, menuEl, offset, align, isBelowTarget);
		dispatch('open', { event: e, target: targetEl });
		addEventListeners();
		requestAnimationFrame(resolve);
		// if (menuEl) menuEl.focus();
	}));
}


/**
 * Highlights the clicked button and closes the menu (provided that the button's event handler did not call preventDefault())
 */
export function close (e) {
	if (!opened) return Promise.resolve();

	if (e && e.detail && e.detail.target) e = e.detail;
	// if (e && e.target) e.target.focus();
	// need to wait for the button to trigger click and check if it's not cancelled by consumers
	// the timeout must be longer than the menu-item blink + some 20ms
	return new Promise(resolve => {
		setTimeout(() => {
			if (!e || !e.defaultPrevented) _close().then(() => resolve());
			else resolve();
		}, 220);
	});
}


function _close () {
	if (!opened) return Promise.resolve();

	opened = false;
	removeArias(targetSelector);
	removeArias(targetEl);

	return new Promise(resolve => requestAnimationFrame(() => {
		dispatch('close', { target: targetEl });
		removeEventListeners();
		focusTarget();
		requestAnimationFrame(resolve);
	}));
}


function addEventListeners () {
	document.addEventListener('click', onDocumentClick);
	document.addEventListener('keydown', onKeydown);
	document.addEventListener('keyup', onKeyup);
	document.addEventListener('wheel', onscroll);
	document.addEventListener('mousemove', onmousemove);
	document.addEventListener('mouseout', onmouseout);
}


function removeEventListeners () {
	document.removeEventListener('click', onDocumentClick);
	document.removeEventListener('keydown', onKeydown);
	document.removeEventListener('keyup', onKeyup);
	document.removeEventListener('wheel', onscroll);
	document.removeEventListener('mousemove', onmousemove);
	document.removeEventListener('mouseout', onmouseout);
}

</script>
