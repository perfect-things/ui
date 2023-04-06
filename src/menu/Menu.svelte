<!-- svelte-ignore a11y-no-noninteractive-tabindex a11y-no-noninteractive-element-to-interactive-role -->
<ul
	class="menu {className}"
	class:hidden="{!opened}"
	role="menu"
	bind:this="{menuEl}"
	tabindex="0">
		<slot></slot>
</ul>

<svelte:options accessors={true}/>

<script>
import { createEventDispatcher, onDestroy, onMount, setContext } from 'svelte';
import initLongPressEvent from './longpress.js';
import { addArias, removeArias, onEachCall, matchQuery, updatePosition } from './utils.js';

const dispatch = createEventDispatcher();
const isMobileSafari = navigator.userAgent.match(/safari/i) && navigator.vendor.match(/apple/i) && navigator.maxTouchPoints;
const contextmenu = isMobileSafari ? 'longpress' : 'contextmenu';

export let type = undefined;          // can be undefined, 'context' or 'input'
export let targetSelector = 'body';   // target element for context menu
export let closeOnClick = true;
export let elevate = false;
export let offset = 2;

let className = '';
export { className as class };


$:elevated = elevate === 'true' || elevate === true;
const menuButtons = [];
let menuEl, targetEl, focusedEl, opened = false;
let isBelowTarget = true;	// default - screen size may change that
let isClicking = false;		// used to allow to focus input after menuItem was clicked, without opening the menu again


setContext('MenuContext', {
	targetEl: () => targetEl
});

onMount(() => {
	if (type === 'context') {
		initLongPressEvent();
		document.addEventListener(contextmenu, onContextMenu);
	}
	else if (type === 'input') {
		document.addEventListener('focus', onDocFocus, true);
		addTargetEventListeners();
	}
	if (elevated) document.body.appendChild(menuEl);
	indexButtons();
});


onDestroy(() => {
	if (type === 'context') document.removeEventListener(contextmenu, onContextMenu);
	else if (type === 'input') {
		document.removeEventListener('focus', onDocFocus, true);
		removeTargetEventListeners();
	}
	if (elevated) menuEl.remove();
});



function indexButtons () {
	if (!menuEl) return;
	const addBtn = el => menuButtons.push({ el, text: el.textContent.trim().toLowerCase() });
	menuEl.querySelectorAll('.menu-button').forEach(addBtn);
}


function matchTypeQuery (key) {
	const btn = matchQuery(menuButtons, key);
	if (btn) {
		btn.el.focus();
		focusedEl = btn.el;
	}
}


function onContextMenu (e) {
	_close();
	targetEl = e.target.closest(targetSelector);
	if (!targetEl) return;

	e.stopPropagation();
	e.preventDefault();
	isBelowTarget = updatePosition(e, type, menuEl, offset, isBelowTarget);
	open(e);
}


function onDocumentClick (e) {
	if (type === 'input') {
		const isMyTarget = e.target && e.target.closest(targetSelector);
		if (isMyTarget) return;
	}
	if (!menuEl.contains(e.target)) _close();
	else {
		const shouldClose = closeOnClick === true || closeOnClick === 'true';
		const clickedOnItem = !!e.target.closest('.menu-item:not(.menu-separator,.disabled)');
		if (shouldClose && clickedOnItem) close(e);
		if (type === 'input') {
			isClicking = true;
			setTimeout(() => targetEl.focus(), 300);
		}
	}
}


function onDocFocus (e) {
	if (isClicking) return isClicking = false;

	const target = e.target && e.target.closest(targetSelector);
	if (target) {
		targetEl = target;
		return open(e);
	}
	if (menuEl.contains(e.target)) return;
	_close();
}


function onscroll (e) {
	if (e.target.closest('.menu')) return;
	if (opened) _close();
}


function onmousemove (e) {
	const btn = e.target.closest('.menu-button');
	if (btn) {
		focusedEl = btn;
		focusedEl.focus();
	}
	if (type === 'input') {
		if (!e.target.closest('.menu,' + targetSelector)) targetEl.focus();
	}
}

function onmouseout (e) {
	focusedEl = null;
	if (type === 'input') {
		if (!e.target.closest('.menu,' + targetSelector)) targetEl.focus();
	}
	else menuEl.focus();
}


function onKeydown (e) {
	if (e.key === 'Escape') _close();
	const isInput = type === 'input' && e.target.closest(targetSelector);
	if (!menuEl.contains(e.target) && !isInput) return;

	if (e.key === 'ArrowDown') {
		e.preventDefault();
		if (isInput && !opened) return open(e).then(focusFirst);
		if (isInput && !isBelowTarget) return;
		return focusNext();
	}
	if (e.key === 'ArrowUp') {
		e.preventDefault();
		if (isInput && !opened) return open(e).then(focusFirst);
		if (isInput && isBelowTarget) return;
		return focusPrev();
	}

	if (isInput) return;

	if (e.key.startsWith('Arrow') || e.key.startsWith(' ')) e.preventDefault();

	else if (e.key === 'ArrowLeft') focusFirst();
	else if (e.key === 'ArrowRight') focusLast();

	else matchTypeQuery(e.key);
}


function focusTarget () {
	if (targetEl && targetEl.focus) targetEl.focus();
}


function focusFirst () {
	const buttons = Array.from(menuEl.querySelectorAll('.menu-button'));
	focusedEl = buttons[0];
	if (focusedEl) focusedEl.focus();
}


function focusLast () {
	const buttons = Array.from(menuEl.querySelectorAll('.menu-button'));
	focusedEl = buttons[buttons.length - 1];
	if (focusedEl) focusedEl.focus();
}


function focusNext () {
	const buttons = Array.from(menuEl.querySelectorAll('.menu-button'));
	if (type === 'input' && !isBelowTarget) buttons.push(targetEl);
	let idx = -1;
	if (focusedEl) idx = buttons.findIndex(el => el === focusedEl);
	if (idx >= buttons.length - 1) return;
	focusedEl = buttons[idx + 1];
	if (focusedEl) focusedEl.focus();
}


function focusPrev () {
	const buttons = Array.from(menuEl.querySelectorAll('.menu-button'));
	if (type === 'input' && isBelowTarget) buttons.unshift(targetEl);
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
	if (targetEl) {
		removeArias(targetSelector);
		addArias(targetEl);
	}

	return new Promise(resolve => requestAnimationFrame(() => {
		// needs to finish rendering first
		isBelowTarget = updatePosition(e, type, menuEl, offset, isBelowTarget);
		dispatch('open', { event: e, target: targetEl });
		addEventListeners();
		requestAnimationFrame(resolve);
		if (menuEl && type !== 'input') menuEl.focus();
	}));
}


/**
 * Highlights the clicked button and closes the menu (provided that the button's event handler did not call preventDefault())
 */
export function close (e) {
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
	if (targetEl) removeArias(targetSelector);

	return new Promise(resolve => requestAnimationFrame(() => {
		dispatch('close', { target: targetEl });
		removeEventListeners();
		if (type !== 'input') focusTarget();
		requestAnimationFrame(resolve);
	}));
}


function addEventListeners () {
	document.addEventListener('click', onDocumentClick);
	document.addEventListener('keydown', onKeydown);
	document.addEventListener('wheel', onscroll);
	document.addEventListener('mousemove', onmousemove);
	document.addEventListener('mouseout', onmouseout);
	if (type === 'input') removeTargetEventListeners();	// so that there's only 1 onkeydown
}


function removeEventListeners () {
	document.removeEventListener('click', onDocumentClick);
	document.removeEventListener('keydown', onKeydown);
	document.removeEventListener('wheel', onscroll);
	document.removeEventListener('mousemove', onmousemove);
	document.removeEventListener('mouseout', onmouseout);
	if (type === 'input') addTargetEventListeners();	// so that there's only 1 onkeydown
}


function addTargetEventListeners () {
	onEachCall(targetSelector, inp => {
		inp.addEventListener('keydown', onKeydown);
		inp.addEventListener('click', open);
	});
}

function removeTargetEventListeners () {
	onEachCall(targetSelector, inp => {
		inp.removeEventListener('keydown', onKeydown);
		inp.removeEventListener('click', open);
	});
}

</script>
