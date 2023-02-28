<pre><code class="language-">{@html html}</code></pre>

<script>
import { afterUpdate } from 'svelte';
export let tag = 'div';
export let props = {};
export let text = '';
let html ='';


afterUpdate(() => {
	requestAnimationFrame(update);
});


function update () {
	html = window.Prism.highlight(buildHtml(), window.Prism.languages.svelte, 'svelte');
}

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
