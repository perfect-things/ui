<h3 class="util">deepCopy(object)</h3>
<p>This is just an alias for an oddly-named native function: <b>structuredClone</b>.</p>
<ul>
	<li><em>object</em> - any object or array to clone.
</ul>
<CodeExample nohr html="{example}" />


<script>
import { CodeExample } from '../../code-example';

const example = `
<script>
	const original = {a: 1, b: 2, c: 3};
	const clone = deepCopy(original);
&lt;/script>
`;


</script>
