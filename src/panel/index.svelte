<details class="panel" class:collapsed {open}
	on:keypress={toggle}
	on:click={toggle}>

	<summary class="panel-header">
		{title}
		<div class="chevron"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>
	</summary>
	{#if !collapsed}
		<div class="panel-content" transition:slide="{{ duration: 300 }}">
			<slot></slot>
		</div>
	{/if}
</details>


<script>
import './index.css';
import { slide } from 'svelte/transition';
export let title = '';
export let collapsed = false;
let open = !collapsed;
let timer;

function toggle (e) {
	e.preventDefault();
	if (e.type === 'keypress' && e.key !== 'Enter') return;
	collapsed = !collapsed;
	if (timer) clearTimeout(timer);
	if (collapsed) timer = setTimeout(() => open = false, 300);
	else open = true;
}

</script>
