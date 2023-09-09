<h3 class="util" id="Pluck">pluck(object, props)</h3>
<p>Creates a new object with only the plucked properties from the original object..</p>
<ul>
	<li><em>object</em> - object to pluck from.
	<li><em>props</em> - an array of property names.
</ul>

<CodeExample nohr html="{example}" />


<script>
import { CodeExample } from '../../../code-example';

const example = `
<script>
	pluck({ a: 1, b: 2, c: 3 }, ['a', 'b']);	// { a: 1, b: 2 }
&lt;/script>
`;

</script>
