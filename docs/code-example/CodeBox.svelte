<Code nohr notitle>{html}</Code>

<script lang="ts">
import type { CodeBoxProps } from './types';
import Code from './Code.svelte';

const {
	tag = 'div',
	props = {},
	text = ''
}: CodeBoxProps = $props();


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

	return _html;
}

</script>
