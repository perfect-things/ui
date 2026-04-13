<Code notitle lang="json">{code}</Code>

<script lang="ts">
import type { JsonBoxProps } from './types';
import Code from './Code.svelte';

const { value = '' }: JsonBoxProps = $props();

const code = $derived(stringify(value));


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
