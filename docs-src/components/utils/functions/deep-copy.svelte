<Util id="DeepCopy" name="deepCopy(object)" {example}>
	<p>This is just an alias for an oddly-named native function: <b>structuredClone</b>.</p>
	<ul>
		<li><em>object</em> - any object or array to clone.
	</ul>
</Util>


<script>
import Util from '../Util.svelte';

const example = `
<script>
	const original = {a: 1, b: 2, c: 3};
	const clone = deepCopy(original);
&lt;/script>
`;

</script>
