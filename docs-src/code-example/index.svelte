{#if !notitle}
	<hr><h3>Example</h3>
{/if}
<code>{@html encode(html)}</code>

<script>
export let html = '';
export let notitle = false;

function encode (s) {
	// return s.replace(/[\u00A0-\u9999<>&]/gim, i => `&#${i.charCodeAt(0)};`);
	return s
		.replace(/{/gim, '&lbrace;')
		.replace(/}/gim, '&rbrace;')
		.replace(/</gim, '&lt;')
		.replace(/>/gim, '&gt;')
		.replace(/\t/gim, '    ')
		.trim();
}
</script>
