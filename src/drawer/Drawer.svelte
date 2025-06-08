{#if isVisible}
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<div
		class="drawer {className}"
		tabindex="-1"
		use:docclick
		bind:this={element}
		in:fly="{{ x: 300, duration: $ANIMATION_SPEED }}"
		out:fly="{{ x: 300, duration: $ANIMATION_SPEED ? $ANIMATION_SPEED + 100 : 0 }}"
	>
		<div tabindex="0" class="focus-trap focus-trap-top" onfocus={focusLast}></div>
		<header class="drawer-header" bind:this={headerEl} >
			<h2>{title}</h2>
			<Button round text icon="close" class="btn-close" title="Close" onclick={close}/>
		</header>
		<div class="drawer-content">{@render children?.()}</div>
		<div tabindex="0" class="focus-trap focus-trap-bottom" onfocus={focusFirst}></div>
	</div>
{/if}
<script>
import './Drawer.css';
import { fly } from 'svelte/transition';
import { ANIMATION_SPEED, FOCUSABLE_SELECTOR } from '../utils';
import { Button } from '../button';


/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {string} [title]
 * @property {any} [element]
 * @property {function} [onopen]
 * @property {function} [onclose]
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let {
	class: className = '',
	title = 'Drawer',
	element = $bindable(undefined),
	onopen = () => {},
	onclose = () => {},
	children
} = $props();


let isVisible = $state(false);
let headerEl = $state(), targetBtn;


function docclick () {
	requestAnimationFrame(() => document.addEventListener('click', onDocClick));
	return {
		destroy: () => document.removeEventListener('click', onDocClick)
	};
}


function onDocClick (e) {
	if (element.contains(e.target)) return;
	if (!isVisible) return;
	e.preventDefault();
	e.stopPropagation();
	close();
}


export function toggle (target) {
	if (target) targetBtn = target;
	isVisible ? close() : open(target);
}


export function open (target) {
	targetBtn = target || document.activeElement;
	isVisible = true;
	requestAnimationFrame(() => headerEl?.querySelector('.btn-close').focus());
	onopen();
}


export function close () {
	isVisible = false;
	if (targetBtn) targetBtn.focus();
	onclose();
}


function focusFirst () {
	const first = getFocusableElements().shift();
	const last = getFocusableElements().pop();
	if (last && last.scrollIntoView) last.scrollIntoView({ block: 'end' });
	if (first && first.focus) first.focus();
}


function focusLast () {
	const first = getFocusableElements().shift();
	const last = getFocusableElements().pop();
	if (first && first.scrollIntoView) first.scrollIntoView({ block: 'end' });
	if (last && last.focus) last.focus();
}


function getFocusableElements () {
	return Array.from(element.querySelectorAll(FOCUSABLE_SELECTOR));
}


export {
	className,
	title,
	element,
};
</script>
