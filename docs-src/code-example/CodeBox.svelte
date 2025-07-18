<pre><code class="language">{@html html}</code></pre>


<script lang="ts">

interface Props {
	tag?: string;
	props?: Record<string, any>;
	text?: string;
}

const {
	tag = 'div',
	props = {},
	text = ''
}: Props = $props();


const html = $derived(buildHtml(props, text, tag));


function buildHtml (_props, _text, _tag) {
	const _filteredProps = {};
	for (const prop in _props) {
		if (props[prop] === false) continue;
		if (props[prop] === '') continue;
		_filteredProps[prop] = _props[prop];
	}
	let propsStr = JSON.stringify(_filteredProps)
		.replace(/"([^"]+)":/g, '$1:')
		.replace(/(:)/g, '=')
		.replace(/,/g, ' ')
		.replace(/({|}|=true|default)/g, '')
		.trim();

	if (propsStr) propsStr = ' ' + propsStr;

	let _html = '';
	if (_text) _html = `<${_tag}${propsStr}>${_text}</${_tag}>`;
	else _html = `<${_tag}${propsStr} />`;

	// @ts-ignore
	return window.Prism.highlight(_html, window.Prism.languages.svelte, 'svelte');
}

</script>
