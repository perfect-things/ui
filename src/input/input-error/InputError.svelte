{#if msg}
	<div class="error-wrap" bind:this="{element}" transition:slideError|local>
		<Error {id} {msg} />
	</div>
{/if}


<script>
import './InputError.css';
import { ANIMATION_SPEED } from '../../utils';
import Error from '../../info-bar/Error.svelte';

export let id = undefined;
export let msg = '';
export let element = undefined;

// slides up content after error for additional offset in px
// used in checkbox, as there is a gap between input and error
export let animOffset = 0;

// used in checkbox and toggle, as there is no plate around these inputs
// so that the animation looks weird without the fadein/out
export let animOpacity = false;

$:_animOffset = parseInt(animOffset, 10) || 0;
$:_hasOffset = _animOffset > 0;
$:_animOpacity = (animOpacity === 'true' || animOpacity === true) || _hasOffset;


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
