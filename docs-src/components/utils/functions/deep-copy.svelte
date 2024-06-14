<Util id="deepCopy" name="deepCopy(object)" {example}>
	<p>Creates a deep copy of an object.
		Because the native <em>structuredClone</em> is not only oddly named, but also extremely slow.</p>
</Util>

<script>
import Util from '../Util.svelte';

const example = `
<script>
	const o1 = {a: 1, b: {c: 2}, d: [3, 4]};
	const o2 = deepCopy(o1);
&lt;/script>
`;

</script>
