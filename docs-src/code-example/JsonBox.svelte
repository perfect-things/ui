<pre class="language-json"><code class="language-json">{@html code}</code></pre>

<script>
/**
 * @typedef {Object} Props
 * @property {string} [value]
 */

/** @type {Props} */
const { value = '' } = $props();

const valueString = $derived((typeof value !== 'string') ? stringify(value) : value);
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
