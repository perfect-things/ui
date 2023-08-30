<h3 class="util">empty(value)</h3>
<p>Similar to PHP's <em>empty</em> - returns true if a value is empty.</p>
<ul>
	<li><em>value</em> - any data type.
</ul>

<p>Empty will return true if the <em>value</em> is one of the following:</p>
<ul>
	<li><em>undefined</em>
	<li><em>null</em>
	<li><em>empty string</em>
	<li><em>empty array</em>
	<li><em>empty object</em>
</ul>

<CodeExample nohr html="{example}" />


<script>
import { CodeExample } from '../../code-example';

const example = `
<script>
	empty();        // true
	empty(null);    // true
	empty('');      // true
	empty([]);      // true
	empty({});      // true

	empty(0);       // false
	empty(false);   // false
	empty('0');     // false
	empty([0]);     // false
	empty({a: 0});  // false
&lt;/script>
`;


</script>
