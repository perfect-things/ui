<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
{#if opened}
	<menu class="menu {className}" bind:this="{menuEl}" tabindex="0">
		<slot></slot>
	</menu>
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
const buttonSelector = '.menu-item:not(.disabled,.menu-separator)';

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
	if (btn && btn.el) highlightElement(btn.el);
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
		const clickedOnItem = !!e.target.closest(buttonSelector);
		if (shouldClose && clickedOnItem) close(e);
	}
}


function onscroll (e) {
	if (e.target.closest('.menu')) return;
	if (opened) _close();
}


function highlightElement (el) {
	focusedEl = el;
	if (focusedEl) {
		focusedEl.scrollIntoView({ block: 'nearest' });
		focusedEl.focus();
	}
}

function onmousemove (e) {
	const btn = e.target.closest(buttonSelector);
	highlightElement(btn);
}

function onmouseout () {
	highlightElement(null);
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


function onKeydown (e) {
	if (e.key === 'Escape' || !menuEl.contains(e.target)) return _close();
	if (e.key === 'Enter' || e.key === ' ') return;
	if (e.key === 'Tab') return e.preventDefault();
	if (e.key.startsWith('Arrow') || e.key.startsWith(' ')) e.preventDefault();

	if (e.key === 'ArrowDown') return focusNext();
	if (e.key === 'ArrowUp') return focusPrev();
	if (e.key === 'ArrowLeft') return focusFirst();
	if (e.key === 'ArrowRight') return focusLast();

	matchTypeQuery(e.key);
}


function focusTarget () {
	if (targetEl && targetEl.focus) targetEl.focus();
}


function focusFirst () {
	const buttons = Array.from(menuEl.querySelectorAll(buttonSelector));
	highlightElement(buttons[0]);
}


function focusLast () {
	const buttons = Array.from(menuEl.querySelectorAll(buttonSelector));
	highlightElement(buttons[buttons.length - 1]);
}


function focusNext () {
	const buttons = Array.from(menuEl.querySelectorAll(buttonSelector));
	let idx = -1;
	if (focusedEl) idx = buttons.findIndex(el => el === focusedEl);
	if (idx >= buttons.length - 1) idx = -1;
	highlightElement(buttons[idx + 1]);
}


function focusPrev () {
	const buttons = Array.from(menuEl.querySelectorAll(buttonSelector));
	let idx = buttons.length;
	if (focusedEl) idx = buttons.findIndex(el => el === focusedEl);
	if (idx <= 0) idx = buttons.length;
	highlightElement(buttons[idx - 1]);
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
		if (menuEl) menuEl.focus();
	}));
}


/**
 * Highlights the clicked button and closes the menu (provided that the button's event handler did not call preventDefault())
 */
export function close (e) {
	if (!opened) return Promise.resolve();

	if (e && e.detail && e.detail.target) e = e.detail;
	if (e && e.target) e.target.focus();
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
	document.addEventListener('wheel', onscroll);
	document.addEventListener('mousemove', onmousemove);
	document.addEventListener('mouseout', onmouseout);
	if (targetEl) targetEl.addEventListener('blur', closeOnBlur);
}


function removeEventListeners () {
	document.removeEventListener('click', onDocumentClick);
	document.removeEventListener('keydown', onKeydown);
	document.removeEventListener('wheel', onscroll);
	document.removeEventListener('mousemove', onmousemove);
	document.removeEventListener('mouseout', onmouseout);
	if (targetEl) targetEl.removeEventListener('blur', closeOnBlur);
}

</script>
