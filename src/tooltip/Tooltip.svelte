{#if opened}
	<div
		bind:this={element}
		class={[
			'popover-plate',
			'popover-' + _position,
			'tooltip-plate',
			{ opened, info, success, warning, danger },
		]}>
		<div class="popover tooltip {className}" role="tooltip">
			<div class="popover-content tooltip-content">
				<div class="tooltip-text">
					{@render children?.()}
				</div>
				{@html formatShortcut(shortcut)}
			</div>
		</div>
	</div>
{/if}

<script lang="ts">
import './Tooltip.css';
import type { ClassValue } from 'svelte/elements';
import { onDestroy, onMount, type Snippet } from 'svelte';
import { alignItem, isSymbol, replaceKeySymbols } from '../utils';

interface Props {
	class?: ClassValue;
	element?: HTMLElement;
	target?: string;
	offset?: number | string;
	delay?: number | string;
	position?: 'top' | 'bottom' | 'left' | 'right';
	shortcut?: string;
	danger?: boolean;
	info?: boolean;
	success?: boolean;
	warning?: boolean;
	children?: Snippet;
}


let {
	class: className = '',
	element = $bindable(undefined),
	target = '',
	offset = 2,
	delay = 0,
	position = 'top',
	shortcut = '',
	danger = false,
	info = false,
	success = false,
	warning = false,
	children
}: Props = $props();


let _position = $state(position);
let opened = $state(false);
let showTimer, hideTimer, shownEvent, noHide = false;
let targetEl;


onMount(() => {
	targetEl = target ? document.querySelector('#' + target) : document.body;
	addTargetEvents();
});

onDestroy(removeTargetEvents);

$effect(align);


function formatShortcut (_shortcut = shortcut) {
	if (!_shortcut) return '';
	return replaceKeySymbols(_shortcut)
		.replace(/\+/g, ' ')
		.replace(/\s+/g, ' ')
		.split(' ')
		.map(key => `<kbd ${isSymbol(key) ? 'class="symbol"' : ''}>${key}</kbd>`)
		.join(' ');
}


function show (e) {
	if (hideTimer) {
		clearTimeout(hideTimer);
		hideTimer = null;
	}
	if (opened || showTimer) return;
	showTimer = setTimeout(() => _show(e), parseFloat(String(delay)) || 0);
}


function _show (e) {
	opened = true;
	noHide = false;
	showTimer = null;
	shownEvent = e.type;
	requestAnimationFrame(() => {
		if (element?.parentElement !== document.body && element) {
			document.body.appendChild(element);
		}
		align();
		// prevents flickering on tooltip show
		requestAnimationFrame(addTooltipEvents);
	});
}


function align () {
	_position = alignItem({
		element,
		event: targetEl,
		alignH: 'center',
		alignV: position,
		offsetV: +offset
	});
}


function preventHiding () {
	noHide = true;
}


function _hide () {
	opened = false;
	removeTooltipEvents();
}


/**
 * Hide tooltip only with the corresponding event:
 * - when shown on mouseover - hide with mouseout
 * - when shown on focus - hide on blur
 * - when shown on click/mousedown - hide only on click/mousedown elsewhere
 * @param e - hide event
 */
function hide (e) {
	const targetIsSelf = (targetEl instanceof Node) && (e.target instanceof Node) && targetEl.contains(e.target);
	const targetIsTooltip = element && (e.target instanceof Node) && element.contains(e.target);

	if ((e.type === 'mousedown' || e.type === 'click') && targetIsSelf) return;
	if (showTimer && shownEvent !== 'click') {
		clearTimeout(showTimer);
		showTimer = null;
	}
	if (!opened) return;
	if (e.type === 'click' || e.type === 'mousedown') {
		if (targetIsSelf || targetIsTooltip) return;
		_hide();
	}
	if (shownEvent === 'mouseover' && e.type === 'mouseout') return hideTimer = setTimeout(_hide, 50);
	if (shownEvent === 'focus' && e.type === 'blur' && !noHide) return _hide();
	if (shownEvent === 'mousedown' && e.type === 'mousedown') return _hide();
	if (e.type === 'keydown') return _hide();
}


function onKey (e) {
	if (e.key === 'Escape') hide(e);
}


function addTooltipEvents () {
	if (!element) return;
	element.addEventListener('mousedown', preventHiding);
	element.addEventListener('focus', show);
	element.addEventListener('blur', hide);
	element.addEventListener('mouseover', show);
	element.addEventListener('mouseout', hide);
	document.addEventListener('keydown', onKey);
}


function removeTooltipEvents () {
	if (!element) return;
	element.removeEventListener('mousedown', preventHiding);
	element.removeEventListener('focus', show);
	element.removeEventListener('blur', hide);
	element.removeEventListener('mouseover', show);
	element.removeEventListener('mouseout', hide);
	document.removeEventListener('keydown', onKey);
}


function addTargetEvents () {
	if (!targetEl) return;
	targetEl.addEventListener('focus', show);
	targetEl.addEventListener('blur', hide);
	targetEl.addEventListener('mouseover', show);
	targetEl.addEventListener('mouseout', hide);
}


function removeTargetEvents () {
	if (!targetEl) return;
	targetEl.removeEventListener('focus', show);
	targetEl.removeEventListener('blur', hide);
	targetEl.removeEventListener('mouseover', show);
	targetEl.removeEventListener('mouseout', hide);
}
</script>
