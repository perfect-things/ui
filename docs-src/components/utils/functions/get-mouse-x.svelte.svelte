<Util id="getMouseX" name="getMouseX(event)" {example}>
	<p>Returns the mouse X position. Event is standardised across platforms (touch & pointer)</p>
</Util>


<script>
import Util from '../Util.svelte';

const example = `
<script>
	document.addEventListener('mousedown', e => {
		const x = getMouseX(e);
		console.log(x);
	});
&lt;/script>
`;

</script>
