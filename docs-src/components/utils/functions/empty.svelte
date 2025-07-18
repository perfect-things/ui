<Util id="empty" name="empty(value)" {example}>
	<p>Similar to PHP's <em>empty</em> - returns true if a value is empty.</p>
	<ul>
		<li><em>value</em> - any data type.</li>
	</ul>

	<p>Empty will return true if the <em>value</em> is one of the following:</p>
	<ul>
		<li><em>undefined</em></li>
		<li><em>null</em></li>
		<li><em>empty string</em></li>
		<li><em>empty array</em></li>
		<li><em>empty object</em></li>
	</ul>
</Util>


<script>
import Util from '../Util.svelte';

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
