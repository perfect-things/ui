<Util id="isset" name="isset()" {example}>
	<p>Checks if a variable is <em>defined</em> and not <em>null</em>.</p>
</Util>



<script>
import Util from '../Util.svelte';

const example = `
<script>
	if (isset(a)) {
		console.log('a is set');
	} else {
		console.log('a is not set');
	}
&lt;/script>
`;

</script>
