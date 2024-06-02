<Util id="getMouseY" name="getMouseY(event)" {example}>
	<p>Returns the mouse Y position. Event is standardised across platforms (touch & pointer)</p>
</Util>


<script>
import Util from '../Util.svelte';

const example = `
<script>
	document.addEventListener('mousedown', e => {
		const y = getMouseY(e);
		console.log(y);
	});
&lt;/script>
`;

</script>
