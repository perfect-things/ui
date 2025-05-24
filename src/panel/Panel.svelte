<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
	class="panel {className}"
	class:collapsible
	class:expanded
	class:round
	class:disabled
	class:info
	class:success
	class:warning
	class:danger
	inert="{disabled}"
	bind:this="{element}">

	{#if title}
		<details open="{open}" on:keydown={toggle} on:click={toggle}>
			<summary class="panel-header" bind:this="{headerEl}" inert="{!collapsible}">
				{title}
				{#if collapsible}
					<div class="chevron">{@html getIcon('chevronRight')}</div>
				{/if}
			</summary>
			<div class="panel-content"><slot/></div>
		</details>
	{:else}
		<div class="panel-content"><slot/></div>
	{/if}
</div>

<script>
import { createEventDispatcher , onMount } from 'svelte';
import { getIcon } from '../icon';
import { animate } from '../utils';
const dispatch = createEventDispatcher();

let className = '';
export { className as class };
export let title = '';
export let open = false;
export let round = false;
export let collapsible = false;
export let disabled = false;
export let info = false;
export let success = false;
export let warning = false;
export let danger = false;

export let element = undefined;


let headerEl, expanded = open || !title;
const expandedProps = { height: 0 };
const collapsedProps = { height: 0 };



onMount(calcHeights);

function calcHeights () {
	const wasOpen = open;
	open = true;
	requestAnimationFrame(() => {
		if (!element) return;
		const wrapCss = getComputedStyle(element);
		const borderTop = parseInt(wrapCss.borderTopWidth || 0, 10);
		const borderBottom = parseInt(wrapCss.borderTopWidth || 0, 10);
		const headerH = headerEl ? headerEl.offsetHeight : 0;
		expandedProps.height = element.getBoundingClientRect().height + 'px';
		collapsedProps.height = (headerH + borderTop + borderBottom) + 'px';
		open = wasOpen;
	});
}

export function toggle (e) {
	if (!collapsible) {
		if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') e.preventDefault();
		return;
	}

	e = e || { target: null, type: 'click', preventDefault: () => {} };
	const skipToggleOn = ['BUTTON', 'INPUT', 'A', 'SELECT', 'TEXTAREA'];
	if (e.target && skipToggleOn.includes(e.target.tagName)) return;
	if (e.target && e.target.closest('.panel-content')) return;
	// toggling works for space key natively, but on keyup, which adds a delay
	// as user needs to release the key for the animation to start
	// manually handling space on keydown fixes that
	if (e.type === 'keydown' && e.key !== ' ') return;
	e.preventDefault();

	if (expanded) {
		expanded = false;
		animate(element, expandedProps, collapsedProps)
			.then(() => {
				open = expanded;
				dispatch('close');
			});
	}
	else {
		expanded = true;
		open = true;
		animate(element, collapsedProps, expandedProps).then(() => dispatch('open'));
	}
}

</script>
