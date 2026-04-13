<Util id="AnimationSpeed" name="UI.ANIMATION_SPEED" {example}>
	<ul>
		<li>Svelte state</li>
		<li>Type: number</li>
		<li>Returns a number of milliseconds that the default animation duration should last (default is <b>200</b>).</li>
		<li>If the user has set <em>prefers-reduced-motion: reduce</em> in the OS, the value will be 0.</li>
	</ul>
</Util>

<script>
import Util from '../Util.svelte';

const example = `
<script&gt;
    import { UI } from '@perfectthings/ui';
    console.log(UI.ANIMATION_SPEED);
</script&gt;
`;
</script>
