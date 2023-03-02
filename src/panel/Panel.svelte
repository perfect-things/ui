<div class="panel-wrap {className}" class:expanded class:round bind:this="{wrapEl}">
	<details class="panel" {open} on:keydown={toggle} on:click={toggle}>
		<summary class="panel-header" bind:this="{headerEl}">
			{title}
			<div class="chevron">{@html icons.chevronRight}</div>
		</summary>
		<div class="panel-content"><slot></slot></div>
	</details>
</div>

<script>
import { createEventDispatcher , onMount } from 'svelte';
import { icons } from '../icon';
import { animate } from '../util';
const dispatch = createEventDispatcher();

export let title = '';
export let open = false;
export let round = false;
let className = '';
export { className as class };

let wrapEl, headerEl, expanded = open;
const expandedProps = { height: 0 };
const collapsedProps = { height: 0 };



onMount(calcHeights);

function calcHeights () {
	const wasOpen = open;
	open = true;
	requestAnimationFrame(() => {
		if (!wrapEl) return;
		const wrapCss = getComputedStyle(wrapEl);
		const borderTop = parseInt(wrapCss.borderTopWidth || 0, 10);
		const borderBottom = parseInt(wrapCss.borderTopWidth || 0, 10);
		expandedProps.height = wrapEl.getBoundingClientRect().height + 'px';
		collapsedProps.height = (headerEl.offsetHeight + borderTop + borderBottom) + 'px';
		open = wasOpen;
	});
}

function toggle (e) {
	const skipToggleOn = ['BUTTON', 'INPUT', 'A', 'SELECT', 'TEXTAREA'];
	if (skipToggleOn.includes(e.target.tagName)) return;
	if (e.target.closest('.panel-content')) return;
	// toggling works for space key natively, but on keyup, which adds a delay
	// as user needs to release the key for the animation to start
	// manually handling space on keydown - fixes that
	if (e.type === 'keydown' && e.key !== ' ') return;
	e.preventDefault();
	if (expanded) {
		expanded = false;
		animate(wrapEl, expandedProps, collapsedProps)
			.then(() => {
				open = expanded;
				dispatch('close');
			});
	}
	else {
		expanded = true;
		open = true;
		animate(wrapEl, collapsedProps, expandedProps)
			.then(() => {
				dispatch('open');
			});
	}
}

</script>
