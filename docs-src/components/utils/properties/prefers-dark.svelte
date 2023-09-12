<Util id="PrefersDark" name="PREFERS_DARK" {example}>
	<ul>
		<li>Svelte store<em>*</em>
		<li>Type: boolean
		<li>Updates on system theme change.
		<li>Returns user preference for dark mode.
	</ul>
</Util>

<script>
import Util from '../Util.svelte';
const example = `
<script>
	import { PREFERS_DARK } from '@perfectthings/ui';

	console.log($PREFERS_DARK ? 'dark mode' : 'light mode');
&lt;/script>
`;
</script>
