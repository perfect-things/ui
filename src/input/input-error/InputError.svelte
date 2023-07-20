{#if msg}
	<div class="error-wrap" bind:this="{element}" transition:slideError|local>
		<Error {id} {msg} />
	</div>
{/if}


<script>
import { ANIMATION_SPEED } from '../../utils';
import Error from '../../info-bar/Error.svelte';

export let id = undefined;
export let msg = '';
export let element = undefined;
export let animOffset = 0;	// slides up content after error for additional offset in px
							// used in checkbox, as there is a gap between input and error


function slideError (node) {
	const o = node.getBoundingClientRect().height;
	animOffset = parseInt(animOffset, 10) || 0;
	return {
		duration: $ANIMATION_SPEED,
		css: (t) => `height: ${t * o}px; opacity: ${t}; margin-bottom: -${animOffset - t * animOffset}px;`,
	};
}


</script>
