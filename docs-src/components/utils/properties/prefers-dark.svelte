<Util id="PrefersDark" name="UI.PREFERS_DARK" {example}>
	<ul>
		<li>Svelte state variable<em>*</em></li>
		<li>Type: boolean</li>
		<li>Updates on system theme change.</li>
		<li>Returns user preference for dark mode.</li>
	</ul>
</Util>

<script>
import Util from '../Util.svelte';
const example = `
<script>
	import { UI } from '@perfectthings/ui';

	console.log(UI.PREFERS_DARK ? 'dark mode' : 'light mode');
&lt;/script>
`;
</script>
