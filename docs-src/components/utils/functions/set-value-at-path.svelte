<Util id="setValueAtPath" name="setValueAtPath(obj, path, value)" {example}>
	<p>Set a value for a given path in an object.</p>
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

	setValueAtPath(obj, 'a[0].b.c', 123)
&lt;/script>
`;
</script>
