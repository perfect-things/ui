<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
{#if opened}
	<div
		class="popover-plate popover-{position} {className} {hideTip ? 'hide-tip' : ''}"
		bind:this="{element}">
		<div class="popover">
			<div tabindex="0" class="focus-trap focus-trap-top" on:focus="{focusLast}"></div>
			<div class="popover-content" bind:this="{contentEl}">
				<slot/>
			</div>
			<div tabindex="0" class="focus-trap focus-trap-bottom" on:focus="{focusFirst}"></div>
		</div>
	</div>
{/if}

<svelte:options accessors={true}/>

<script>
import { createEventDispatcher } from 'svelte';
import { addArias, removeArias } from './utils.js';
import { alignItem, throttle, debounce, FOCUSABLE_SELECTOR } from '../utils.js';

const dispatch = createEventDispatcher();

let className = '';
export { className as class };
export let offset = 2;
export let element = undefined;
export let contentEl = undefined;
export let position = 'bottom';
export let hideTip = false;
export let dontHideOnTargetClick = false;

let targetEl, opened = false;
let closing = false;
let eventsAdded = false;

const observer = new MutationObserver(onContentChange);




export function updatePosition () {
	if (!opened) return;
	position = alignItem({
		element,
		target: targetEl,
		alignH: 'center',
		alignV: position,
		offsetV: +offset
	});
}


export function open (e) {
	if (closing) return;
	if (opened) return close();
	opened = true;

	if (e && e.detail && e.detail instanceof Event) e = e.detail;

	if (e instanceof Event) targetEl = e && e.target;
	if (e instanceof HTMLElement) targetEl = e;

	if (targetEl) addArias(targetEl);

	return new Promise(resolve => requestAnimationFrame(() => {
		if (element && element.parentElement !== document.body) {
			document.body.appendChild(element);
		}

		updatePosition();
		dispatch('open', { event: e, target: targetEl });

		focusFirst();
		addEventListeners();
		requestAnimationFrame(resolve);
	}));
}


/**
 * Highlights the clicked button and closes the menu (provided that the button's event handler did not call preventDefault())
 */
export function close () {
	if (!opened) return Promise.resolve();

	if (targetEl) targetEl.focus();

	opened = false;
	closing = true;
	removeArias(targetEl);

	return new Promise(resolve => requestAnimationFrame(() => {
		dispatch('close', { target: targetEl });
		removeEventListeners();
		requestAnimationFrame(resolve);
		setTimeout(() => closing = false, 300);
	}));
}



function focusFirst () {
	let first = getFocusableElements().shift();
	const last = getFocusableElements().pop();
	if (!first && !last) {
		contentEl.setAttribute('tabindex', 0);
		first = contentEl;
	}
	if (first) first.focus();
}


function focusLast () {
	const first = getFocusableElements().shift();
	let last = getFocusableElements().pop();
	if (!first && !last) {
		contentEl.setAttribute('tabindex', 0);
		last = contentEl;
	}
	if (last) last.focus();
}


function getFocusableElements () {
	return Array.from(contentEl.querySelectorAll(FOCUSABLE_SELECTOR));
}



/*** EVENTS & LISTENERS ***************************************************************************/
const throttledResize = throttle(updatePosition, 200);
const debouncedResize = debounce(updatePosition, 200);

// throttle ensures that the popover is repositioned max once every 200ms (to not overload resize events)
// but it doesn't ensure that the fn is called at the end of resizing. Debounce ensures that.
function onResize () {
	throttledResize();
	debouncedResize();
}


function onContentChange () {
	updatePosition();
}


function onDocumentClick (e) {
	if (!element) return;
	if (element.contains(e.target)) return;
	if (dontHideOnTargetClick && targetEl &&
		(targetEl === e.target || targetEl.contains(e.target))) return;
	close();
}


function onKeydown (e) {
	const hasFocus = element.contains(document.activeElement);
	if (e.key === 'Tab' && !hasFocus) return focusFirst();
	if (e.key === 'Escape') {
		e.stopPropagation();
		return close();
	}
}


function addEventListeners () {
	if (eventsAdded) return;
	document.addEventListener('click', onDocumentClick);
	document.addEventListener('keydown', onKeydown);
	window.addEventListener('resize', onResize);
	observer.observe(element, { attributes: false, childList: true, subtree: true });
	eventsAdded = true;
}


function removeEventListeners () {
	document.removeEventListener('click', onDocumentClick);
	document.removeEventListener('keydown', onKeydown);
	window.removeEventListener('resize', onResize);
	observer.disconnect();
	eventsAdded = false;
}
/*** EVENTS & LISTENERS ***************************************************************************/

</script>
