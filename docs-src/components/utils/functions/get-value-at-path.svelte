<Util id="getValueAtPath" name="getValueAtPath(obj, path, defaultValue)" {example}>
	<p>Get a value from a given path in an object.</p>
</Util>


<script>
import Util from '../Util.svelte';

const example = `
<script>
	const obj = {
		a: [
			{ b: { c: 1 } }
		]
	};

	getValueAtPath(obj, 'a[0].b.c', 123)
&lt;/script>
`;
</script>
