<Util id="pluck" name="pluck(object, props)" {example}>
	<p>Creates a new object with only the plucked properties from the original object..</p>
	<ul>
		<li><em>object</em> - object to pluck from.</li>
		<li><em>props</em> - an array of property names.</li>
	</ul>
</Util>


<script>
import Util from '../Util.svelte';

const example = `
<script>
	pluck({ a: 1, b: 2, c: 3 }, ['a', 'b']);	// { a: 1, b: 2 }
&lt;/script>
`;

</script>
