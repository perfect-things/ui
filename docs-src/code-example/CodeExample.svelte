{#if !notitle}
	{#if nohr === undefined}<hr>{/if}
	<h3>Example</h3>
{/if}
<pre><code class="language-svelte">
	{@html encode(html)}
</code></pre>

<script>
import './CodeExample.css';

/**
 * @typedef {Object} Props
 * @property {string} [html]
 * @property {boolean} [notitle]
 * @property {any} [nohr]
 */

/** @type {Props} */
const { html = '', notitle = false, nohr = undefined } = $props();

function encode (s) {
	return s
		.replace(/{/gim, '&lbrace;')
		.replace(/}/gim, '&rbrace;')
		.replace(/</gim, '&lt;')
		.replace(/>/gim, '&gt;')
		.replace(/\t/gim, '    ')
		.trim();
}
</script>
