<h3 class="util">isInScrollable (node)</h3>
<p>Checks whether the given node is inside a scrollable element.</p>
<p>This function is useful when determining whether a swipe event should be allowed
	to start on a given element.<br>
	If an element is inside a scrollable element, the swipe event will not start,
	allowing the browser to trigger the normal scrolling.
</p>

<CodeExample nohr html="{example}" />


<script>
import { CodeExample } from '../../code-example';

const example = `
<script>
	const isInScrl = isInScrollable(document.querySelector('.element'));
&lt;/script>
`;

</script>
