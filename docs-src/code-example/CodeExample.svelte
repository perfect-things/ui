{#if !notitle}
	{#if nohr === undefined}<hr>{/if}
	<h3>Example</h3>
{/if}

<pre><code class="language-svelte">{@html _html}</code></pre>

<script lang="ts">
import './CodeExample.css';

interface Props {
	html?: string;
	notitle?: boolean;
	nohr?: boolean;
}

const {
	html = '',
	notitle = false,
	nohr = undefined
}: Props = $props();


const _html = $derived(encode(html));



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
