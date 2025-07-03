{#key code}<pre class="language-json"><code class="language-json">{@html code}</code></pre>{/key}


<script lang="ts">
interface Props {
	value?: string | object;
}

const { value = '' }: Props = $props();

const code = $derived(highlight(value));




function highlight (json: string | object): string {
	json = stringify(value);

	// @ts-ignore
	const prism = window.Prism;
	if (!prism || !prism.highlight) {
		console.warn('Prism.js is not loaded. Please include it in your project.');
		return json;
	}
	return prism.highlight(json, prism.languages.json, 'json');
}



function stringify (json): string {
	if (!json) return '';
	if (typeof json === 'string') return json;

	let s = JSON.stringify(json) || '';
	s = s.replace(/([:,])/g, '$1 ');						// add space after colon and comma
	if (s.match(/^{/)) {
		s = s.replace(/{/g, '{ ');							// value is an object - add space after opening brace
	}
	else {													// value is an array
		if (s.match(/}/)) s = s.replace(/\]/g, '\n]');		// if array of objects - put closing bracket on new line
		s = s.replace(/{/g, '\n    { ');					// indent opening brace
	}
	s = s.replace(/}/g, ' }');								// space before closing brace
	return s;
}

</script>
