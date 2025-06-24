<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
	role="dialog"
	aria-modal="true"
	aria-label={title}
	bind:this={element}
	class={cls}
	onmousedown={onBackdropMousedown}
	onclick={onBackdropClick}
	{...restProps}>
	<div class="dialog" class:no-title={!title} bind:this={dialogEl}>
		<div tabindex="0" class="focus-trap focus-trap-top" onfocus={focusLast}></div>
		<h1 class="dialog-header">{title}</h1>
		<div class="dialog-content" bind:this={contentEl}>{@render children?.()}</div>
		<div class="dialog-footer" bind:this={footerEl}>{@render footer?.()}</div>
		<div tabindex="0" class="focus-trap focus-trap-bottom" onfocus={focusFirst}></div>
	</div>
</div>

<script lang="ts">
import './Dialog.css';
import type { DialogProps } from './types';
import { onMount } from 'svelte';
import { ANIMATION_SPEED, FOCUSABLE_SELECTOR } from '../utils';


let {
	class: className = '',
	title = '',
	opened = $bindable(false),
	skipFirstFocus = false,
	modal = false,
	element = $bindable(),
	children,
	footer,
	onopen = () => {},
	onclose = () => {},
	...restProps
}: DialogProps = $props();


let dialogEl: HTMLElement = $state();
let contentEl: HTMLElement = $state();
let footerEl: HTMLElement = $state();
let triggerEl: HTMLElement = $state();
let openTimer, closeTimer, scrollPos;

const cls = $derived([
	'dialog-backdrop',
	className,
	{ opened }
]);

onMount(() => {
	document.body.appendChild(element);
});


function focusFirst () {
	let first = getFocusableElements().shift();
	const last = getFocusableElements().pop();
	if (!first && !last && contentEl) {
		contentEl.setAttribute('tabindex', '0');
		first = contentEl;
	}
	if (last) last.scrollIntoView({ block: 'end' });
	if (first) first.focus();
}


function focusLast () {
	const first = getFocusableElements().shift();
	let last = getFocusableElements().pop();
	if (!first && !last) {
		contentEl.setAttribute('tabindex', '0');
		last = contentEl;
	}
	if (first) first.scrollIntoView({ block: 'end' });
	if (last) last.focus();
}


function getFocusableElements () {
	if (!dialogEl || !contentEl || !footerEl) return [];
	const contentElements = Array.from(contentEl.querySelectorAll(FOCUSABLE_SELECTOR));
	const footerElements = Array.from(footerEl.querySelectorAll(FOCUSABLE_SELECTOR));
	return [...contentElements, ...footerElements];
}


function onBackdropMousedown (e) {
	if (modal) {
		e.stopPropagation();
		e.preventDefault();
	}
}


function onBackdropClick (e) {
	if (!dialogEl.contains(e.target) && !modal) {
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

	const direction = btnMap[key];
	let otherBtn = target[direction];
	while (otherBtn && otherBtn.tagName !== 'BUTTON') {
		otherBtn = otherBtn[direction];
	}
	if (otherBtn) otherBtn.focus();
}


function onDocKeydown (e) {
	if (!opened) return;
	const hasFocus = element.contains(document.activeElement);
	if (e.key === 'Tab' && !hasFocus) return focusFirst();
	if (e.key === 'Escape' && !modal) {
		e.stopPropagation();
		return close();
	}
	const target = e.target?.closest('button');
	if (target && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
		focusOtherButton(target, e.key);
	}
}


function freezeBody (freeze) {
	if (freeze) {
		scrollPos = window.scrollY;
		document.body.classList.add('has-dialog');
		document.body.style.top = `-${scrollPos}px`;
	}
	else {
		document.body.classList.remove('has-dialog');
		document.scrollingElement.scrollTop = scrollPos;
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
	if (element) element.style.display = 'flex';
	return new Promise<void>(resolve => {
		if (openTimer) clearTimeout(openTimer);
		openTimer = setTimeout(() => {
			freezeBody(true);
			opened = true;
			if (!skipFirstFocus) focusFirst();
			document.addEventListener('keydown', onDocKeydown);
			onopen();
			resolve();
		}, $ANIMATION_SPEED / 2);
	});
}


export function close () {
	if (!opened) return;
	opened = false;
	if (triggerEl && triggerEl.focus) triggerEl.focus();
	return new Promise<void>(resolve => {
		if (closeTimer) clearTimeout(closeTimer);
		closeTimer = setTimeout(() => {
			opened = false;
			element.style.display = 'none';
			document.removeEventListener('keydown', onDocKeydown);
			if (triggerEl && triggerEl !== document.body) {
				triggerEl.removeAttribute('aria-expanded');
			}
			freezeBody(false);
			onclose();
			resolve();
		}, $ANIMATION_SPEED);
	});
}

</script>
