{#if msg}
	<div class="error-wrap" bind:this={element} transition:slideError|local>
		<Error {id} {msg} />
	</div>
{/if}


<script>
import './InputError.css';
import { ANIMATION_SPEED } from '../../utils';
import Error from '../../info-bar/Error.svelte';


// slides up content after error for additional offset in px


// used in checkbox and toggle, as there is no plate around these inputs

/**
 * @typedef {Object} Props
 * @property {any} [id]
 * @property {string} [msg]
 * @property {any} [element]
 * @property {number} [animOffset] - used in checkbox, as there is a gap between input and error
 * @property {boolean} [animOpacity] - so that the animation looks weird without the fadein/out
 */

/** @type {Props} */
let {
	id = undefined,
	msg = '',
	element = $bindable(undefined),
	animOffset = 0,
	animOpacity = false
} = $props();

const _animOffset = $derived(parseInt(animOffset, 10) || 0);
const _hasOffset = $derived(_animOffset > 0);
const _animOpacity = $derived((animOpacity === 'true' || animOpacity === true) || _hasOffset);


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
