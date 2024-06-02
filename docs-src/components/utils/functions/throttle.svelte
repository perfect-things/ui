<Util id="throttle" name="throttle(fn, timeout = 300)" {example}>
	<p>The "throttled" function will only be called once every <em>timeout</em> milliseconds.</p>
	<ul>
		<li><em>fn</em> - function to debounce.
		<li><em>timeout</em> - milliseconds to wait before calling <em>fn</em>.
	</ul>

	<p>This is slightly different to <em>debounce</em> but serves a similar purpose - performance optimization.<br>
		It's useful when a heavy event handler function would be to costly to call on every event.
	</p>
	<p>One caveat is that the throttled function will be called once every x miliseconds, so if an event would stop firing
		before the function is called the next time - the function will not be called at the end. E.g.:
	</p>
	<ul>
		<li>we would like to update a position of a tooltip when the window is resizing.
		<li>we don't want to call the function on every resize event, because it's heavy and resize events are fired with every pixel of the window size change.
		<li>we also don't want to call the function only once at the end of the resize, because the tooltip would be in the wrong place for the whole duration of the resize.
		<li>throttle is a good option here, but the caveat mentioned above may cause the tooltip to be in the wrong place at the end of the resize.
		<li>in this case it is a good idea to use both: throttle and debounce: throttle the function to be called every 300ms, but also debounce it to be called at the end of the resize.
	</ul>
</Util>


<script>
import Util from '../Util.svelte';

const example = `
<script>
	function updatePosition () {
		console.log('updating...');
	}
	const throttled = throttle(updatePosition);
	const debounced = debounce(updatePosition);
	window.addEventListener('resize', () => {
		throttled();
		debounced();
	});
&lt;/script>
`;


</script>
