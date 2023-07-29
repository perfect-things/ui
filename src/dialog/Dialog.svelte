<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->

<div
	role="dialog"
	aria-modal="true"
	aria-label="{title}"
	class="dialog-backdrop {className}"
	class:opened
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
export let skipFirstFocus = false;

export let element;

const dispatch = createEventDispatcher();
let dialogEl, contentEl, footerEl, triggerEl, openTimer, closeTimer, scrollPos;



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
	// footer has `flex-flow: row-reverse;` so that the most important button
	// (which is on the right) will be the first one to be focused on Tab key press
	// so here left is next, right is previous:
	const btnMap = {
		ArrowLeft: 'nextElementSibling',
		ArrowRight: 'previousElementSibling',
	};
	let otherBtn;
	while (otherBtn = btnMap[key] && target[btnMap[key]]) {
		if (!otherBtn || otherBtn.tagName === 'BUTTON') break;
		target = otherBtn;
	}

	if (otherBtn) otherBtn.focus();
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


function freezeBody (freeze) {
	if (freeze) {
		scrollPos = window.pageYOffset;
		document.body.classList.add('has-dialog');
		document.body.style.top = `-${scrollPos}px`;
	}
	else {
		document.body.classList.remove('has-dialog');
		document.documentElement.scrollTop = scrollPos;
		document.body.style.top = '';
	}
}


export function open (openedBy) {
	if (opened) return;

	if (openedBy instanceof Event) openedBy = openedBy.target;

	triggerEl = openedBy || document.activeElement;
	if (triggerEl && triggerEl !== document.body) {
		triggerEl.setAttribute('aria-haspopup', 'true');
		triggerEl.setAttribute('aria-expanded', 'true');
	}

	element.style.display = 'flex';
	if (openTimer) clearTimeout(openTimer);
	openTimer = setTimeout(() => {
		opened = true;
		element.style.display = 'flex';
		if (skipFirstFocus !== true && skipFirstFocus !== 'true') focusFirst();
		document.addEventListener('keydown', onDocKeydown);
		freezeBody(true);
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
		if (triggerEl && triggerEl !== document.body) {
			triggerEl.removeAttribute('aria-expanded');
		}
		freezeBody(false);
		dispatch('close');
	}, $ANIMATION_SPEED);
}

</script>
