<span class="text-fit {className}" bind:this="{element}">
	<slot></slot>
</span>

<script>
import { onMount, onDestroy } from 'svelte';

let className = '';
export { className as class };
export let margin = 0;
export let element = undefined;


const DEBOUNCE_RESIZE = 10;
let parent, resizeObserver, timer, mutationObserver;


onMount(() => {
	parent = element.parentNode;
	resizeObserver = new ResizeObserver(() => {
		if (timer) clearTimeout(timer);
		timer = setTimeout(resize, DEBOUNCE_RESIZE);
	});
	resizeObserver.observe(parent);

	mutationObserver = new MutationObserver(resize);
	mutationObserver.observe(element.firstChild, { characterData: true });

	resize();
});


onDestroy(() => {
	resizeObserver.unobserve(parent);
	mutationObserver.disconnect();
});



function resize () {
	element.style.transform = '';
	const textW = element.getBoundingClientRect().width;
	const parentW = parent.getBoundingClientRect().width;
	const val = ((parentW - margin) / textW) || 0;
	element.style.transform = `matrix(${val}, 0, 0, ${val}, 0, 0)`;
}

</script>
