<h3 class="util" id="Fuzzy">fuzzy(haystack = '', needle = '')</h3>
<p>Fuzzy finds if <em>haystack</em> contains characters from the <em>needle</em> in the same order.</p>
<ul>
	<li><em>haystack</em> - a string to be searched in.
	<li><em>needle</em> - a string to search for.
</ul>

<p>It's useful for filtering lists of items by a search string.</p>

<CodeExample nohr html="{example}" />


<script>
import { CodeExample } from '../../../code-example';

const example = `
<script>
	fuzzy('hello world', 'hell');    // true
	fuzzy('hello world', 'helloo');  // true
	fuzzy('hello world', 'helll');   // true
	fuzzy('hello world', 'hellooo'); // false
&lt;/script>
`;


</script>
