{#if msg}
	<div class="error-wrap" bind:this="{element}" transition:slideError|local>
		<Error {id} {msg} />
	</div>
{/if}


<script>
import { get } from 'svelte/store';
import { ANIMATION_SPEED } from '../../utils';
import Error from '../../info-bar/Error.svelte';

export let id = undefined;
export let msg = '';
export let element = undefined;


function slideError (node) {
	const o = node.getBoundingClientRect().height;
	return {
		duration: get(ANIMATION_SPEED),
		css: (t) => `height: ${t * o}px`
	};
}


</script>
