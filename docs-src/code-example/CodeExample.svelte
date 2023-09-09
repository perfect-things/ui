{#if !notitle}
	{#if nohr === undefined}<hr>{/if}
	<h3>Example</h3>
{/if}
<pre><code class="language-svelte">
	{@html encode(html)}
</code></pre>

<script>
export let html = '';
export let notitle = false;
export let nohr = undefined;

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
