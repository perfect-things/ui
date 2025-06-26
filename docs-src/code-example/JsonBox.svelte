{#key code}<pre class="language-json"><code class="language-json">{@html code}</code></pre>{/key}

<script lang="ts">

interface Props {
	value?: string | object;
}

const {
	value = ''
}: Props = $props();


const valueString = $derived((typeof value !== 'string') ? stringify(value) : value);
// @ts-ignore
const code = $derived(window.Prism.highlight(valueString, window.Prism.languages.json, 'json'));


function stringify (json) {
	if (!json) return '';
	let s = JSON.stringify(json);
	s = s.replace(/([:,])/g, '$1 ');						// add space after colon and comma
	if (s.match(/^{/)) s = s.replace(/{/g, '{ ');			// value is an object - add space after opening brace
	else {													// value is an array
		if (s.match(/}/)) s = s.replace(/\]/g, '\n]');		// if array of objects - put closing bracket on new line
		s = s.replace(/{/g, '\n    { ');					// indent opening brace
	}
	s = s.replace(/}/g, ' }');								// space before closing brace
	return s;
}

</script>
