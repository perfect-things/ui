<Util id="debounce" name="debounce(fn, timeout = 300)" {example}>
	<p>The "debounced" function will only be called after it has not been called for <em>timeout</em> milliseconds.</p>
	<ul>
		<li><em>fn</em> - function to debounce.</li>
		<li><em>timeout</em> - milliseconds to wait before calling <em>fn</em>.</li>
	</ul>

	<p>This is a useful e.g. when attaching an event listener to an event that is fired repeatedly & quickly (like scroll or resize).<br>
		Attaching a heavy function to such an event can cause performance issues, so debouncing it will ensure
		that the function is only called after it has not been called for <em>timeout</em> milliseconds.
	</p>
</Util>


<script>
import Util from '../Util.svelte';

const example = `
<script>
	function original() {
		console.log('resizing has stopped for 300ms');
	}
	const debounced = debounce(original);
	window.addEventListener('resize', debounced);
&lt;/script>
`;


</script>
