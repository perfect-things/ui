<div
	class="ui-tag {className} {colorClass}"
	class:round
	class:dark={color && isColorDark(color)}
	class:light={color && !isColorDark(color)}
	class:disabled
	class:clickable
	style="{color ? `background-color: ${color};` : ''}"
	role="button"
	tabindex={disabled || !clickable ? undefined : 0}
	inert={disabled || !clickable}
	bind:this={element}
	onkeydown={_onkeydown}
	onclick={_onclick}>
	{#if icon}
		<Icon name={icon}/>
	{/if}
	<div class="ui-tag-label">{@render children?.()}</div>
</div>

<script>
import './Tag.css';
import { Icon } from '../icon';
import { isColorDark } from '../utils';



/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {boolean} [round]
 * @property {any} [icon]
 * @property {any} [color]
 * @property {any} [element]
 * @property {boolean} [disabled]
 * @property {boolean} [clickable]
 * @property {function} [onclick] - Callback function when the tag is clicked
 * @property {import('svelte').Snippet} [children]
 */

/** @type {Props} */
let {
	class: className = '',
	round = false,
	icon = undefined,
	color = undefined,
	element = $bindable(undefined),
	disabled = false,
	clickable = false,
	onclick = () => {},
	children
} = $props();


const colorClass = $derived(['info', 'warning', 'danger', 'success'].includes(color) ? color : '');

function _onclick (e) {
	onclick({ target: element, originalEvent: e });
}

function _onkeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') _onclick(e);
}
</script>
