{@html svg}

<script>
import { getIcon } from './icons.js';

/**
 * @typedef {Object} Props
 * @property {string} [name]
 */

/** @type {Props} */
const { name = '' } = $props();

const svg = $derived(getIcon(name));
</script>
