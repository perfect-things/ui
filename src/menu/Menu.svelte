<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
{#if opened}
	<menu tabindex="0" class="menu {className}" bind:this="{element}">
		<slot></slot>
	</menu>
{/if}

<svelte:options accessors={true}/>

<script>
import { createEventDispatcher, onDestroy, onMount, setContext } from 'svelte';
import { addArias, removeArias } from './utils.js';
import initLongPressEvent from './longpress.js';
import { alignItem, throttle, debounce, isMobile } from '../utils.js';

const dispatch = createEventDispatcher();
const isAnyMobile = isMobile();
const isMobileSafari = navigator.userAgent.match(/safari/i) && navigator.vendor.match(/apple/i) && navigator.maxTouchPoints;
// safari does not translate contextmenu to longpress
const contextmenuEventName = isMobileSafari ? 'longpress' : 'contextmenu';

let className = '';
export { className as class };
export let type = undefined;			// can be undefined or 'context'
export let targetSelector = 'body';		// target element for context menu
export let closeOnClick = true;
export let align = undefined;			// can be 'left', 'right' or 'center'
export let valign = undefined;			// can be 'top' or 'bottom' (preference only, as screen size/position decides ultimately)

export let element = undefined;


const menuButtons = [];
const buttonSelector = '.menu-item:not(.disabled,.menu-separator)';

let targetEl, focusedEl, opened = false;
let hovering = false;
let closing = false;
let eventsAdded = false;
let typeQuery = '', typeTimer;
let openEvent;	// needed for alignment of context menus


setContext('MenuContext', { targetEl: () => targetEl });


onMount(() => {
	if (type === 'context') {
		if (isMobileSafari) initLongPressEvent();
		if (isAnyMobile) document.addEventListener('touchend', onTouchend);
		document.addEventListener(contextmenuEventName, onContextMenu);
	}
});


onDestroy(() => {
	if (type === 'context') {
		if (isAnyMobile) document.removeEventListener('touchend', onTouchend);
		document.removeEventListener(contextmenuEventName, onContextMenu);
	}
	if (element) element.remove();
});




export function open (e) {
	if (closing) return;
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
	openEvent = e;

	return new Promise(resolve => requestAnimationFrame(() => {
		if (element.parentElement !== document.body) {
			document.body.appendChild(element);
		}
		indexButtons();
		// needs to finish rendering first
		updatePosition();

		dispatch('open', { event: e, target: targetEl });
		if (element) element.focus();
		requestAnimationFrame(resolve);
		if (!isAnyMobile || type !== 'context') addEventListeners();
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
	closing = true;
	removeArias(targetSelector);
	removeArias(targetEl);

	return new Promise(resolve => requestAnimationFrame(() => {
		dispatch('close', { target: targetEl });
		removeEventListeners();
		focusTarget();
		requestAnimationFrame(resolve);
		setTimeout(() => closing = false, 300);
	}));
}



function updatePosition () {
	const isContextMobile = type === 'context' && isAnyMobile;
	const alignH = align || (isContextMobile ? 'center' : 'left');
	const alignV = valign || (isContextMobile ? 'top' : 'bottom');
	const offsetV = isContextMobile ? 20 : 2;
	alignItem({ element, target: openEvent, alignH, alignV, offsetV });
}



/*** EVENTS & LISTENERS ***************************************************************************/
function onTouchend (e) {
	if (opened && !eventsAdded) {
		e.preventDefault();
		requestAnimationFrame(addEventListeners);
	}
}


function onContextMenu (e) {
	_close();
	targetEl = e.target.closest(targetSelector);
	if (!targetEl) return;

	e.preventDefault();
	open(e);
}


function onDocumentClick (e) {
	if (!element) return;
	if (!element.contains(e.target)) _close();
	else {
		const shouldClose = closeOnClick === true || closeOnClick === 'true';
		const clickedOnItem = !!e.target.closest(buttonSelector);
		if (shouldClose && clickedOnItem) close(e);
	}
}


function onMouseOver (e) {
	const isOverMenu = e.target.closest('.menu');

	if (isOverMenu && !hovering) hovering = true;
	else if (!isOverMenu && hovering) hovering = false;

	if (hovering) {
		const btn = e.target.closest(buttonSelector);
		if (btn) highlightElement(btn);
	}
	else highlightElement(null);
}


function onKeydown (e) {
	if (e.key === 'Escape' || !element.contains(e.target)) return _close();
	if (e.key === 'Enter') return;
	if (e.key === ' ' && !typeQuery) return;

	if (e.key === 'Tab') {
		e.preventDefault();
		e.stopPropagation();
		if (e.shiftKey) return focusPrev();
		return focusNext();
	}
	if (e.key.startsWith('Arrow') || e.key.startsWith(' ')) e.preventDefault();

	if (e.key === 'ArrowDown') return focusNext();
	if (e.key === 'ArrowUp') return focusPrev();
	if (e.key === 'ArrowLeft') return focusFirst();
	if (e.key === 'ArrowRight') return focusLast();

	const btn = matchQuery(menuButtons, e.key);
	if (btn && btn.el) highlightElement(btn.el);
}


function matchQuery (buttons, key) {
	if (!/^[\w| ]+$/i.test(key)) return;
	if (typeTimer) clearTimeout(typeTimer);
	typeTimer = setTimeout(() => typeQuery = '', 300);
	typeQuery += key;
	const reg = new RegExp(`^${typeQuery}`, 'i');
	const btns = buttons.filter(b => reg.test(b.text));

	if (!btns.length) return;
	if (btns.length === 1 || btns[0].el !== focusedEl) return btns[0];
	return btns[1];
}


const throttledResize = throttle(updatePosition, 200);
const debouncedResize = debounce(updatePosition, 200);

// throttle ensures that the popover is repositioned max once every 200ms (to not overload resize events)
// but it doesn't ensure that the fn is called at the end of resizing. Debounce ensures that.
function onResize () {
	throttledResize();
	debouncedResize();
}



function addEventListeners () {
	if (eventsAdded) return;
	document.addEventListener('click', onDocumentClick);
	if (type !== 'context') document.addEventListener(contextmenuEventName, onDocumentClick);
	document.addEventListener('keydown', onKeydown);
	document.addEventListener('mouseover', onMouseOver);
	window.addEventListener('resize', onResize);
	eventsAdded = true;
}


function removeEventListeners () {
	document.removeEventListener('click', onDocumentClick);
	if (type !== 'context') document.removeEventListener(contextmenuEventName, onDocumentClick);
	document.removeEventListener('keydown', onKeydown);
	document.removeEventListener('mouseover', onMouseOver);
	window.removeEventListener('resize', onResize);
	eventsAdded = false;
}
/*** EVENTS & LISTENERS ***************************************************************************/





/*** FOCUS & HIGHLIGHT ****************************************************************************/
function indexButtons () {
	if (!element) return;
	menuButtons.length = 0;
	const addBtn = el => menuButtons.push({ el, text: el.textContent.trim().toLowerCase() });
	element.querySelectorAll(buttonSelector).forEach(addBtn);
}


function highlightElement (el) {
	focusedEl = el;
	if (focusedEl) {
		focusedEl.scrollIntoView({ block: 'nearest' });
		focusedEl.focus();
	}
	else element && element.focus();
}


function focusTarget () {
	if (targetEl && targetEl.focus) targetEl.focus();
}


function focusFirst () {
	const buttons = Array.from(element.querySelectorAll(buttonSelector));
	highlightElement(buttons[0]);
}


function focusLast () {
	const buttons = Array.from(element.querySelectorAll(buttonSelector));
	highlightElement(buttons[buttons.length - 1]);
}


function focusNext () {
	const buttons = Array.from(element.querySelectorAll(buttonSelector));
	let idx = -1;
	if (focusedEl) idx = buttons.findIndex(el => el === focusedEl);
	if (idx >= buttons.length - 1) idx = -1;
	highlightElement(buttons[idx + 1]);
}


function focusPrev () {
	const buttons = Array.from(element.querySelectorAll(buttonSelector));
	let idx = buttons.length;
	if (focusedEl) idx = buttons.findIndex(el => el === focusedEl);
	if (idx <= 0) idx = buttons.length;
	highlightElement(buttons[idx - 1]);
}
/*** FOCUS & HIGHLIGHT ****************************************************************************/

</script>
