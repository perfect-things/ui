<Util id="IsColorDark" name="isColorDark(hex)" {example}>
	<p>Checks if a colour is dark or light (so that e.g. a text colour can have a better contrast against the background).</p>
</Util>

<script>
import Util from '../Util.svelte';

const example = `
<script>
	isColorDark('#fff'); // false
	isColorDark('#000'); // true
&lt;/script>
`;

</script>
