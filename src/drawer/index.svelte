{#if isVisible}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="drawer {className}" tabindex="-1"
		use:docclick
		bind:this="{el}"
		in:fly="{{ x: 300, duration: ANIMATION_SPEED }}"
		out:fly="{{ x: 300, duration: ANIMATION_SPEED ? ANIMATION_SPEED + 100 : 0 }}"
	>
		<div tabindex="0" class="focus-trap focus-trap-top" on:focus="{focusLast}"></div>
		<header class="drawer-header" bind:this="{headerEl}" >
			<h2>{title}</h2>
			<Button round text icon="close" className="btn-close" title="Close" on:click="{close}"/>
		</header>
		<div class="drawer-content"><slot></slot></div>
		<div tabindex="0" class="focus-trap focus-trap-bottom" on:focus="{focusFirst}"></div>
	</div>
{/if}
<svelte:options accessors={true}/>

<script>
import { createEventDispatcher } from 'svelte';
import { fly } from 'svelte/transition';
import { ANIMATION_SPEED, FOCUSABLE_SELECTOR } from '../util';
import Button from '../button';

export let title = 'Drawer';
export let className = '';

const dispatch = createEventDispatcher();
let isVisible = false;
let el, headerEl, targetBtn;


function docclick () {
	requestAnimationFrame(() => document.addEventListener('click', onDocClick));
	return {
		destroy: () => document.removeEventListener('click', onDocClick)
	};
}


function onDocClick (e) {
	if (el.contains(e.target)) return;
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
	requestAnimationFrame(() => headerEl.querySelector('.btn-close').focus());
	dispatch('open');
}


export function close () {
	isVisible = false;
	if (targetBtn) targetBtn.focus();
	dispatch('close');
}


function focusFirst () {
	const first = getFocusableElements().shift();
	const last = getFocusableElements().pop();
	if (last) last.scrollIntoView({ block: 'end' });
	if (first) first.focus();
}


function focusLast () {
	const first = getFocusableElements().shift();
	const last = getFocusableElements().pop();
	if (first) first.scrollIntoView({ block: 'end' });
	if (last) last.focus();
}


function getFocusableElements () {
	return Array.from(el.querySelectorAll(FOCUSABLE_SELECTOR));
}

</script>
