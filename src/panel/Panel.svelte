<!--
@component ## Panel

A collapsible container component with optional header and various styling options.
- Supports collapsible functionality with expand/collapse animations
- Multiple semantic variants (info, success, warning, danger)

@example
```svelte
<Panel title="Settings" collapsible>
  <p>Panel content goes here</p>
</Panel>

<Panel title="Error Information" danger round open>
  <p>Important error details</p>
</Panel>

<Panel>
  <p>Panel without title</p>
</Panel>
```
@see {@link https://ui.perfectthings.dev/#Panel Panel Docs} for more info.
-->

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	inert={disabled}
	class={cls}
	bind:this={element}
	{...restProps}>
	{#if title}
		<details {open} onkeydown={toggle} onclick={toggle}>
			<summary
				class="panel-header"
				inert={!collapsible}
				bind:this={headerEl}>
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

<script lang="ts">
import './Panel.css';
import type { PanelProps } from './types';

import { onMount } from 'svelte';
import { getIcon } from '../icon';


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
	children,
	...restProps
}: PanelProps = $props();

let headerEl = $state<HTMLElement | null>(null);
let expanded = $state(open || !title);

const cls = $derived([
	'panel',
	className,
	{ collapsible, expanded, round, disabled, info, success, warning, danger }
]);

const expandedProps = { height: '0' };
const collapsedProps = { height: '0' };


onMount(() => {
	calcHeights();
	if (element) element.addEventListener('transitionend', onTransitionEnd);
});



function calcHeights (): Promise<void> {
	return new Promise((resolve) => {
		if (!element) return resolve();

		const wasOpen = open;
		open = true;
		requestAnimationFrame(() => {
			const wrapCss = getComputedStyle(element);
			const borderTop = parseInt(wrapCss.borderTopWidth || '0', 10);
			const borderBottom = parseInt(wrapCss.borderBottomWidth || '0', 10);
			const headerH = headerEl ? headerEl.offsetHeight : 0;
			expandedProps.height = element.getBoundingClientRect().height + 'px';
			collapsedProps.height = (headerH + borderTop + borderBottom) + 'px';
			open = wasOpen;
			resolve();
		});

	});
}

function isEnterOrSpace (e: KeyboardEvent) {
	return e.key === 'Enter' || e.key === ' ';
}

export async function toggle (e?): Promise<void> {
	if (!collapsible) {
		if (e.type === 'click' || isEnterOrSpace(e)) e.preventDefault();
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

	await calcHeights();

	if (expanded) {
		expanded = false;
		element.style.height = expandedProps.height;
		requestAnimationFrame(() => element.style.height = collapsedProps.height);
	}
	else {
		expanded = true;
		open = true;
		element.style.height = collapsedProps.height;
		requestAnimationFrame(() => element.style.height = expandedProps.height);
	}
}


function onTransitionEnd (e: TransitionEvent) {
	if (e.propertyName !== 'height') return;
	element.style.height = 'auto';

	if (expanded) onopen();
	else {
		open = false;
		onclose();
	}
}

</script>
