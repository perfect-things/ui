<pre><code class="language-">{@html highlightedHtml}</code></pre>

<script>
/**
 * @typedef {Object} Props
 * @property {string} [tag]
 * @property {Object} [props]
 * @property {string} [text]
 */

/** @type {Props} */
const { tag = 'div', props = {}, text = '' } = $props();

const html = $derived(buildHtml(props));
const highlightedHtml = $derived(window.Prism.highlight(html, window.Prism.languages.svelte, 'svelte'));


function buildHtml () {
	const _props = {};
	for (const prop in props) {
		if (props[prop] === false) continue;
		if (props[prop] === '') continue;
		_props[prop] = props[prop];
	}
	let propsStr = JSON.stringify(_props)
		.replace(/"([^"]+)":/g, '$1:')
		.replace(/(:)/g, '=')
		.replace(/,/g, ' ')
		.replace(/({|}|=true|default)/g, '')
		.trim();
	if (propsStr) propsStr = ' ' + propsStr;

	if (!text) return `<${tag}${propsStr}/>`;
	return `<${tag}${propsStr}>${text}</${tag}>`;
}

</script>
