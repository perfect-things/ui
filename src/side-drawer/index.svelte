{#if isVisible}
	<div class="drawer" tabindex="-1"
		use:docclick
		bind:this="{el}"
		in:fly="{{ x: 300, duration: 200 }}"
		out:fly="{{ x: 300, duration: 300 }}"
	>
		<div tabindex="0" class="focus-trap focus-trap-top" on:focus="{focusLast}"></div>
		<header class="drawer-header" bind:this="{headerEl}" >
			<h1>{title}</h1>
			<Button icon cssClass="btn-close" title="Close" on:click="{close}">
				<Icon name="close"/>
			</Button>
		</header>
		<div class="drawer-content">
			<slot></slot>
		</div>
		<div tabindex="0" class="focus-trap focus-trap-bottom" on:focus="{focusFirst}"></div>
	</div>
{/if}
<svelte:options accessors={true}/>

<script>
import './index.css';
import { fly } from 'svelte/transition';
import Icon from '../icon';
import Button from '../button';

export let title = 'Drawer';
let isVisible = false;
let el, headerEl, targetBtn;

function docclick () {
	requestAnimationFrame(() => document.addEventListener('click', onDocClick));
	return {
		destroy: () => document.removeEventListener('click', onDocClick)
	};
}

function onDocClick (e) {
	if (e.target.closest('.dialog-backdrop,.drawer')) return;
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
}

export function close () {
	isVisible = false;
	if (targetBtn) targetBtn.focus();
}


function focusFirst () {
	const focusable = getFocusableElements().shift();
	if (focusable) focusable.focus();
}

function focusLast () {
	const focusable = getFocusableElements().pop();
	if (focusable) focusable.focus();
}

function getFocusableElements () {
	const FOCUSABLE_SELECTOR = 'a[href],button:not([disabled]),iframe:not([disabled]),input:not([disabled]),' +
		'select:not([disabled]),textarea:not([disabled]),[contentEditable]';
	return Array.from(el.querySelectorAll(FOCUSABLE_SELECTOR));
}

</script>
