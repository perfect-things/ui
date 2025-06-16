<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
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
	inert={disabled}
	bind:this={element}>

	{#if title}
		<details {open} onkeydown={e => toggle(e)} onclick={e => toggle(e)}>
			<summary class="panel-header" bind:this={headerEl} inert={!collapsible}>
				{title}
				{#if collapsible}
					<div class="chevron">{@html getIcon('chevronRight')}</div>
				{/if}
			</summary>
			<div class="panel-content">{@render children?.()}</div>
		</details>
	{:else}
		<div class="panel-content">{@render children?.()}</div>
	{/if}
</div>

<script>
import './Panel.css';
import { onMount } from 'svelte';
import { getIcon } from '../icon';
import { animate } from '../utils';



/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {string} [title]
 * @property {boolean} [open]
 * @property {boolean} [round]
 * @property {boolean} [collapsible]
 * @property {boolean} [disabled]
 * @property {boolean} [info]
 * @property {boolean} [success]
 * @property {boolean} [warning]
 * @property {boolean} [danger]
 * @property {any} [element]
 * @property {function} [onopen]
 * @property {function} [onclose]
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let {
	class: className = '',
	title = '',
	open = $bindable(false),
	round = false,
	collapsible = false,
	disabled = false,
	info = false,
	success = false,
	warning = false,
	danger = false,
	element = $bindable(undefined),
	onopen = () => {},
	onclose = () => {},
	children
} = $props();


let headerEl = $state(), expanded = $state(open || !title);
const expandedProps = { height: '0' };
const collapsedProps = { height: '0' };



onMount(calcHeights);

function calcHeights () {
	const wasOpen = open;
	open = true;
	requestAnimationFrame(() => {
		if (!element) return;
		const wrapCss = getComputedStyle(element);
		const borderTop = parseInt(wrapCss.borderTopWidth || '0', 10);
		const borderBottom = parseInt(wrapCss.borderTopWidth || '0', 10);
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
		return animate(element, expandedProps, collapsedProps)
			.then(() => {
				open = expanded;
				onclose();
			});
	}

	expanded = true;
	open = true;
	return animate(element, collapsedProps, expandedProps)
		.then(() => {
			onopen();
		});
}

</script>
