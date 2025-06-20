{#if msg}
	<div class="error-wrap" bind:this={element} transition:slideError|local>
		<Error {id} {msg} />
	</div>
{/if}


<script lang="ts">
import './InputError.css';
import { ANIMATION_SPEED } from '../../utils';
import Error from '../../info-bar/Error.svelte';



interface Props {
	id?: string;
	msg?: string;
	element?: HTMLElement;
	animOffset?: number;		// - used in checkbox, as there is a gap between input and error
	animOpacity?: boolean;		// - so that the animation looks weird without the fadein/out
}

let {
	id = undefined,
	msg = '',
	element = $bindable(undefined),
	animOffset = 0,
	animOpacity = false
}: Props = $props();

const _animOffset = $derived(parseInt(String(animOffset), 10) || 0);
const _hasOffset = $derived(_animOffset > 0);
const _animOpacity = $derived(animOpacity || _hasOffset);


function slideError (node) {
	const o = node.getBoundingClientRect().height;
	return {
		duration: $ANIMATION_SPEED,
		css: (t) => {
			return `height: ${t * o}px;` +
				(_animOpacity ? `opacity: ${t};` : '') +
				(_hasOffset ? `margin-bottom: ${t * _animOffset - _animOffset}px;` : '');
		},
	};
}


</script>
