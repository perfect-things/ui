<Util id="AnimationSpeed" name="ANIMATION_SPEED" {example}>
	<ul>
		<li>Svelte store<em>*</em>
		<li>Type: number
		<li>Returns a number of milliseconds that the default animation duration should last (default is <b>300</b>).
		<li>If the user has set <em>prefers-reduced-motion: reduce</em> in the OS, the value will be 0.
	</ul>
</Util>

<script>
import Util from '../Util.svelte';

const example = `
<script>
	import { ANIMATION_SPEED } from '@perfectthings/ui';
	console.log($ANIMATION_SPEED);
&lt;/script>
`;
</script>
