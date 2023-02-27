<span class="text-fit" bind:this="{el}">
	<slot></slot>
</span>

<script>
import { onMount, onDestroy } from 'svelte';
export let margin = 0;
const DEBOUNCE_RESIZE = 10;
let el, parent, resizeObserver, timer, mutationObserver;

function resize () {
	el.style.transform = '';
	const textW = el.getBoundingClientRect().width;
	const parentW = parent.getBoundingClientRect().width;
	const val = (parentW - margin) / textW;
	el.style.transform = `matrix(${val}, 0, 0, ${val}, 0, 0)`;
}

onMount(() => {
	parent = el.parentNode;
	resizeObserver = new ResizeObserver(() => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(resize, DEBOUNCE_RESIZE);
	});
	resizeObserver.observe(parent);

	mutationObserver = new MutationObserver(resize);
	mutationObserver.observe(el.firstChild, { characterData: true });

	resize();
});

onDestroy(() => {
	resizeObserver.unobserve(parent);
	mutationObserver.disconnect();
});
</script>
