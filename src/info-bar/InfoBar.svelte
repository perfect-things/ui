{#if msg}
	<div class="info-bar info-bar-{type} {className}" bind:this={element}>
		<Icon name={type}/>
		<p {id}>{@html msg}</p>
	</div>
{/if}
<script>
import './InfoBar.css';
import { Icon } from '../icon';



/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {any} [element]
 * @property {any} [id]
 * @property {string} [msg]
 * @property {string} [type]
 */

/** @type {Props} */
let {
	class: className = '',
	element = $bindable(undefined),
	id = undefined,
	msg = '',
	type = 'info'
} = $props();


</script>
