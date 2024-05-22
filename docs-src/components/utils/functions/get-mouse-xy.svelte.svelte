<Util id="getMouseXY" name="getMouseXY(event)" {example}>
	<p>Returns the mouse XY position (as an array: [x, y]). Event is standardised across platforms (touch & pointer)</p>
</Util>


<script>
import Util from '../Util.svelte';

const example = `
<script>
	document.addEventListener('mousedown', e => {
		const [x, y] = getMouseXY(e);
		console.log(x, y);
	});
&lt;/script>
`;

</script>
