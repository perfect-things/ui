<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
{#if isVisible}
	<div
		bind:this={element}
		class={['drawer', className,]}
		tabindex="-1"
		use:docclick
		in:fly="{{ x: 300, duration: UI.ANIMATION_SPEED }}"
		out:fly="{{ x: 300, duration: UI.ANIMATION_SPEED ? UI.ANIMATION_SPEED + 100 : 0 }}"
		{...restProps}>

		<div tabindex="0" class="focus-trap focus-trap-top" onfocus={focusLast}></div>
		<header class="drawer-header" bind:this={headerEl} >
			<h2>{title}</h2>
			<Button round text icon="close" class="btn-close" title="Close" onclick={close}/>
		</header>
		<div class="drawer-content">{@render children?.()}</div>
		<div tabindex="0" class="focus-trap focus-trap-bottom" onfocus={focusFirst}></div>
	</div>
{/if}
<script lang="ts">
import './Drawer.css';
import type { DrawerProps } from './types';
import { fly } from 'svelte/transition';
import { UI } from '../utils';
import { Button } from '../button';


let {
	class: className = '',
	title = '',
	element = $bindable(undefined),
	onopen = () => {},
	onclose = () => {},
	children,
	...restProps
}: DrawerProps = $props();


let isVisible: boolean = $state(false);
let headerEl: HTMLElement = $state();
let targetBtn: HTMLElement = $state();


function docclick (_: any) {
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


export function toggle (target?: HTMLElement) {
	if (target) targetBtn = target;
	if (isVisible) close();
	else open(target);
}


export function open (target?: HTMLElement) {
	targetBtn = target || document.activeElement as HTMLElement;
	isVisible = true;
	requestAnimationFrame(() => {
		const btn = headerEl?.querySelector('.btn-close');
		if (btn) btn.focus();
	});
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
	return Array.from(element.querySelectorAll(UI.FOCUSABLE_SELECTOR));
}


export {
	className,
	title,
	element,
};
</script>
