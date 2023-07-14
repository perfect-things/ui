<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	role="dialog"
	aria-modal="true"
	aria-label="{title}"
	class="dialog-backdrop {className}"
	class:opened
	class:draw-borders="{drawborders === 'true' || drawborders === true}"
	bind:this="{element}"
	on:click="{onBackdropClick}">
	<div class="dialog" bind:this="{dialogEl}">
		<div tabindex="0" class="focus-trap focus-trap-top" on:focus="{focusLast}"></div>
		<h1 class="dialog-header">{title}</h1>
		<div class="dialog-content" bind:this="{contentEl}"><slot/></div>
		<div class="dialog-footer" bind:this="{footerEl}"><slot name="footer"/></div>
		<div tabindex="0" class="focus-trap focus-trap-bottom" on:focus="{focusFirst}"></div>
	</div>
</div>
<svelte:options accessors={true}/>

<script>
import { createEventDispatcher, onMount } from 'svelte';
import { ANIMATION_SPEED, FOCUSABLE_SELECTOR } from '../utils';


let className = '';
export { className as class };
export let title = '';
export let opened = false;
export let drawborders = false;
export let skipFirstFocus = false;

export let element;

const dispatch = createEventDispatcher();
let dialogEl, contentEl, footerEl, triggerEl, openTimer, closeTimer;



onMount(() => {
	document.body.appendChild(element);
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


function focusOtherButton (target, key) {
	// footer has `flex-flow: row-reverse;` so left is right
	const btnMap = {
		ArrowLeft: 'nextElementSibling',
		ArrowRight: 'previousElementSibling',
	};
	const otherBtn = btnMap[key] && target[btnMap[key]];
	if (otherBtn && otherBtn.tagName === 'BUTTON') otherBtn.focus();
}


function onDocKeydown (e) {
	if (!opened) return;
	const hasFocus = element.contains(document.activeElement);
	if (e.key === 'Tab' && !hasFocus) return focusFirst();
	if (e.key === 'Escape') {
		e.stopPropagation();
		return close();
	}
	const target = e.target && e.target.closest('button');
	if (target && e.key.startsWith('Arrow')) {
		e.preventDefault();
		focusOtherButton(target, e.key);
	}
}


export function open (openedBy) {
	if (opened) return;
	triggerEl = openedBy || document.activeElement;
	element.style.display = 'flex';
	if (openTimer) clearTimeout(openTimer);
	openTimer = setTimeout(() => {
		opened = true;
		element.style.display = 'flex';
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
		element.style.display = 'none';
		document.removeEventListener('keydown', onDocKeydown);
		dispatch('close');
	}, $ANIMATION_SPEED);
}

</script>
