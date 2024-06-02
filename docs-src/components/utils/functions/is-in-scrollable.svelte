<Util id="isInScrollable" name="isInScrollable(node)" {example}>
	<p>Checks whether the given node is inside a scrollable element.</p>
	<p>This function is useful when determining whether a swipe event should be allowed
		to start on a given element.<br>
		If an element is inside a scrollable element, the swipe event will not start,
		allowing the browser to trigger the normal scrolling.
	</p>
</Util>


<script>
import Util from '../Util.svelte';

const example = `
<script>
	const isInScrl = isInScrollable(document.querySelector('.element'));
&lt;/script>
`;

</script>
