{#if !notitle}
	<hr><h3>Example</h3>
{/if}
<pre><code class="language-svelte">
	{@html encode(html)}
</code></pre>

<script>
export let html = '';
export let notitle = false;

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
