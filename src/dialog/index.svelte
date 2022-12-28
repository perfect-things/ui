<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div aria-modal="true"
	aria-label="{title}"
	class="dialog-backdrop {className}"
	class:opened
	class:draw-borders="{drawborders === 'true' || drawborders === true}"
	bind:this="{backdropEl}"
	on:click="{onBackdropClick}">

	<div class="dialog" bind:this="{dialogEl}">
		<div tabindex="0" class="focus-trap focus-trap-top" on:focus="{focusLast}"></div>
		<h1 class="dialog-header">{title}</h1>
		<div class="dialog-content" bind:this="{contentEl}"><slot></slot></div>
		<div class="dialog-footer" bind:this="{footerEl}"><slot name="footer"></slot></div>
		<div tabindex="0" class="focus-trap focus-trap-bottom" on:focus="{focusFirst}"></div>
	</div>
</div>
<svelte:options accessors={true}/>

<script>
import { createEventDispatcher, onMount } from 'svelte';
import { ANIMATION_SPEED, FOCUSABLE_SELECTOR } from '../util';
export let title = '';
export let opened = false;
export let drawborders = false;
export let className = '';
export let skipFirstFocus = false;

const dispatch = createEventDispatcher();
let backdropEl, dialogEl, contentEl, footerEl, triggerEl, openTimer, closeTimer;

onMount(() => {
	document.body.appendChild(backdropEl);
});

function focusFirst () {
	let first = getFocusableElements().shift();
	const last = getFocusableElements().pop();
	if (!first && !last) {
		contentEl.setAttribute('tabindex', 0);
		first = contentEl;
	}
	if (last) last.scrollIntoView({ block: 'end' });
	if (first) first.focus();
}

function focusLast () {
	const first = getFocusableElements().shift();
	let last = getFocusableElements().pop();
	if (!first && !last) {
		contentEl.setAttribute('tabindex', 0);
		last = contentEl;
	}
	if (first) first.scrollIntoView({ block: 'end' });
	if (last) last.focus();
}

function getFocusableElements () {
	const contentElements = Array.from(contentEl.querySelectorAll(FOCUSABLE_SELECTOR));
	const footerElements = Array.from(footerEl.querySelectorAll(FOCUSABLE_SELECTOR));
	return [...contentElements, ...footerElements];
}

function onBackdropClick (e) {
	if (!dialogEl.contains(e.target)) {
		e.stopPropagation();
		close();
	}
}

function onDocKeydown (e) {
	const hasFocus = backdropEl.contains(document.activeElement);
	if (e.key === 'Escape' && opened && hasFocus) {
		e.stopPropagation();
		close();
	}
}


export function open (openedBy) {
	if (opened) return;
	triggerEl = openedBy || document.activeElement;
	backdropEl.style.display = 'flex';
	if (openTimer) clearTimeout(openTimer);
	openTimer = setTimeout(() => {
		opened = true;
		backdropEl.style.display = 'flex';
		if (skipFirstFocus !== true && skipFirstFocus !== 'true') focusFirst();
		document.addEventListener('keydown', onDocKeydown);
		dispatch('open');
	}, 100);
}

export function close () {
	if (!opened) return;
	opened = false;
	if (triggerEl && triggerEl.focus) triggerEl.focus();
	if (closeTimer) clearTimeout(closeTimer);
	closeTimer = setTimeout(() => {
		opened = false;
		backdropEl.style.display = 'none';
		document.removeEventListener('keydown', onDocKeydown);
		dispatch('close');
	}, ANIMATION_SPEED);
}

</script>
