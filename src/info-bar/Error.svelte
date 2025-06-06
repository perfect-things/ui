<InfoBar class={className} {id} {msg} type="error" bind:element={element} />

<script>
import InfoBar from './InfoBar.svelte';



/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {any} [element]
 * @property {any} [id]
 * @property {string} [msg]
 */

/** @type {Props} */
let {
	class: className = '',
	element = $bindable(undefined),
	id = undefined,
	msg = ''
} = $props();

</script>
