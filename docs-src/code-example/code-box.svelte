<code>
	{@html html}
</code>

<script>

export let tag = 'div';
export let props = {};
export let text = '';
let html ='';

$:html = buildHtml(tag, props, text);


function buildHtml () {
	const _props = {};
	for (let prop in props) {
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

	let _html = '';
	if (!text) _html = `<${tag}${propsStr}/>`;
	else _html = `<${tag}${propsStr}>${text}</${tag}>`;

	return encode(_html);
}



function encode (s) {
	return s.replace(/[\u00A0-\u9999<>&]/gim, i => `&#${i.charCodeAt(0)};`);
}

</script>
