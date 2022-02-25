<div class="panel-wrap" class:expanded bind:this="{wrapEl}">
	<details class="panel" {open} on:keypress={toggle} on:click={toggle}>
		<summary class="panel-header" bind:this="{headerEl}">
			{title}
			<div class="chevron">{@html icons.chevronRight}</div>
		</summary>
		<div class="panel-content"><slot></slot></div>
	</details>
</div>

<script>
import { onMount } from 'svelte';
import { icons } from '../icon';
import { animate } from '../util';
export let title = '';
export let open = false;
let wrapEl, headerEl, expanded = open;
const expandedProps = { height: 0 };
const collapsedProps = { height: 0 };

onMount(calcHeights);

function calcHeights () {
	const wasOpen = open;
	open = true;
	requestAnimationFrame(() => {
		const wrapCss = getComputedStyle(wrapEl);
		const borderTop = parseInt(wrapCss.borderTopWidth || 0, 10);
		const borderBottom = parseInt(wrapCss.borderTopWidth || 0, 10);
		expandedProps.height = wrapEl.getBoundingClientRect().height + 'px';
		collapsedProps.height = (headerEl.offsetHeight + borderTop + borderBottom) + 'px';
		open = wasOpen;
	});
}

function toggle (e) {
	e.preventDefault();
	if (e.type === 'keypress' && e.key !== 'Enter') return;
	if (expanded) {
		expanded = false;
		animate(wrapEl, expandedProps, collapsedProps).then(() => open = expanded);
	}
	else {
		expanded = true;
		open = true;
		animate(wrapEl, collapsedProps, expandedProps);
	}
}

</script>
