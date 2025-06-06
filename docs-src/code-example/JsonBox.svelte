<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
<pre><code class="language-json">{@html code}</code></pre>

<script>
import { afterUpdate } from 'svelte';
export let value ='';
let code ='';


afterUpdate(() => {
	requestAnimationFrame(update);
});


function update () {
	if (typeof value !== 'string') value = stringify(value);
	code = window.Prism.highlight(value, window.Prism.languages.json, 'json');
}



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
