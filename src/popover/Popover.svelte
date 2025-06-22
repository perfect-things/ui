<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
{#if opened}
	<div
		bind:this={element}
		class={[
			'popover-plate',
			'popover-' + _position,
			className,
			{
				opening,
				'hide-tip': hideTip
			}
		]}>
		<div class="popover">
			<div tabindex="0" class="focus-trap focus-trap-top" onfocus={focusLast}></div>
			<div class="popover-content" bind:this={contentEl}>
				{@render children?.()}
			</div>
			<div tabindex="0" class="focus-trap focus-trap-bottom" onfocus={focusFirst}></div>
		</div>
	</div>
{/if}


<script lang="ts">
import './Popover.css';
import type { Snippet } from 'svelte';
import type { ClassValue } from 'svelte/elements';
import { addArias, removeArias } from './utils';
import { alignItem, throttle, debounce, FOCUSABLE_SELECTOR } from '../utils';

interface Props {
	class?: ClassValue;
	offset?: string | number;
	element?: HTMLElement;
	contentEl?: HTMLElement;
	position?: 'top' | 'bottom' | 'left' | 'right';
	hideTip?: boolean;
	dontHideOnTargetClick?: boolean;
	setMinWidthToTarget?: boolean;
	children?: Snippet;
	onopen?: (event: { event: Event, target: EventTarget }) => void;
	onclose?: (event: { target: EventTarget }) => void;
}

let {
	class: className = '',
	offset = 2,
	element = $bindable(undefined),
	contentEl = $bindable(undefined),
	position = 'bottom',
	hideTip = false,
	dontHideOnTargetClick = false,
	setMinWidthToTarget = false,
	children,
	onopen = () => {},
	onclose = () => {},
}: Props = $props();


let opened = $state(false);
let opening = $state(false);
let closing = $state(false);
let _position = $state(position);
let targetEl: EventTarget = $state();
let eventsAdded = false;

const observer = new MutationObserver(updatePosition);



export function updatePosition () {
	if (!opened) return;
	_position = alignItem({
		element,
		event: targetEl,
		alignH: 'center',
		alignV: position,
		offsetV: +offset,
		setMinWidthToTarget: setMinWidthToTarget
	});
}


export const isOpened = () => opened;

export function open (e) {
	if (closing) return Promise.resolve();
	if (opened) return close();
	opened = true;
	opening = true;

	if (e && e.detail && e.detail instanceof Event) e = e.detail;

	if (e instanceof Event) targetEl = e && e.target;
	if (e instanceof HTMLElement) targetEl = e;

	if (targetEl) addArias(targetEl);

	return new Promise<void>(resolve => requestAnimationFrame(() => {
		if (element && element.parentElement !== document.body) {
			document.body.appendChild(element);
		}
		updatePosition();
		focusFirst();
		addEventListeners();
		requestAnimationFrame(() => {
			updatePosition();
			opening = false;
		});
		onopen({ event: e, target: targetEl });
		resolve();
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

	return new Promise<void>(resolve => requestAnimationFrame(() => {
		removeEventListeners();
		resolve();
		onclose({ target: targetEl });
		setTimeout(() => closing = false, 300);
	}));
}



function focusFirst () {
	let first = getFocusableElements().shift();
	const last = getFocusableElements().pop();
	if (!first && !last && contentEl) {
		contentEl.setAttribute('tabindex', '0');
		first = contentEl;
	}
	if (first) first.focus();
}


function focusLast () {
	const first = getFocusableElements().shift();
	let last = getFocusableElements().pop();
	if (!first && !last && contentEl) {
		contentEl.setAttribute('tabindex', '0');
		last = contentEl;
	}
	if (last) last.focus();
}


function getFocusableElements () {
	if (!contentEl) return [];
	return Array.from(contentEl.querySelectorAll(FOCUSABLE_SELECTOR));
}



/*** EVENTS & LISTENERS ***************************************************************************/
const throttledResize = throttle(updatePosition, 50);
const debouncedResize = debounce(updatePosition, 50);

// throttle ensures that the popover is repositioned max once every 200ms (to not overload resize events)
// but it doesn't ensure that the fn is called at the end of resizing. Debounce ensures that.
function onResize () {
	throttledResize();
	debouncedResize();
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
	if (e.key === 'Tab') {
		e.stopPropagation();
		if (!hasFocus) focusFirst();
		return;
	}
	if (e.key === 'Escape') {
		e.stopPropagation();
		return close();
	}
}


function addEventListeners () {
	if (eventsAdded) return;
	document.addEventListener('click', onDocumentClick, true);
	document.addEventListener('keydown', onKeydown, true);
	window.addEventListener('resize', onResize);
	window.addEventListener('scroll', onResize, true);
	if (element) observer.observe(element, { attributes: false, childList: true, subtree: true });
	eventsAdded = true;
}


function removeEventListeners () {
	document.removeEventListener('click', onDocumentClick, true);
	document.removeEventListener('keydown', onKeydown, true);
	window.removeEventListener('resize', onResize);
	window.removeEventListener('scroll', onResize, true);
	observer.disconnect();
	eventsAdded = false;
}
/*** EVENTS & LISTENERS ***************************************************************************/

</script>
