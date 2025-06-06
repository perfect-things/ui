<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
{#if opened}
	<div
		class="popover-plate popover-{_position} tooltip-plate"
		class:opened
		class:info
		class:success
		class:warning
		class:danger
		bind:this={element}>

		<div class="popover tooltip {className}" role="tooltip">
			<div class="popover-content tooltip-content">
				<div class="tooltip-text"><slot/></div>
				{@html formatShortcut(shortcut)}
			</div>
		</div>
	</div>
{/if}
<script>
import './Tooltip.css';
import { afterUpdate, onDestroy, onMount } from 'svelte';
import { alignItem, isSymbol, replaceKeySymbols } from '../utils.js';
export let target = '';
export let delay = 0;
export let position = 'top';
export let offset = 2;
export let shortcut = '';


let className = '';
export { className as class };
export let info = false;
export let success = false;
export let warning = false;
export let danger = false;
export let element = undefined;


let _position = position;
let opened = false;
let showTimer, hideTimer, shownEvent, noHide = false;
let targetEl;


onMount(() => {
	targetEl = target ? document.querySelector('#' + target) : document.body;
	addTargetEvents();
});

onDestroy(removeTargetEvents);
afterUpdate(align);


function formatShortcut () {
	if (!shortcut) return '';
	return replaceKeySymbols(shortcut)
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
	showTimer = setTimeout(() => _show(e), parseFloat(delay) || 0);
}


function _show (e) {
	opened = true;
	noHide = false;
	showTimer = null;
	shownEvent = e.type;
	requestAnimationFrame(() => {
		if (element.parentElement !== document.body) {
			document.body.appendChild(element);
		}

		addTooltipEvents();
		align();
	});
}


function align () {
	_position = alignItem({
		element, target:
		targetEl,
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
