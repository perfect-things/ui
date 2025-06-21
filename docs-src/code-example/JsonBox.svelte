<pre class="language-json"><code class="language-json">{@html code}</code></pre>

<script lang="ts">

interface Props {
	value?: string | object;
}

const { value = '' }: Props = $props();

const valueString = $derived((typeof value !== 'string') ? stringify(value) : value);
// @ts-expect-error this is correct
const code = $derived(window.Prism.highlight(valueString, window.Prism.languages.json, 'json'));



function stringify (json) {
	if (!json) return '';
	let s = JSON.stringify(json);
	s = s.replace(/([:,])/g, '$1 ');
	if (s.match(/^{/)) s = s.replace(/{/g, '{ ');
	else {
		if (s.match(/}/)) s = s.replace(/\]/g, '\n]');
		s = s.replace(/{/g, '\n    { ');
	}
	s = s.replace(/}/g, ' }');
	return s;
}

</script>
