<h3 class="util" id="PrefersDark">PREFERS_DARK</h3>
<ul>
	<li>Svelte store<em>*</em>
	<li>Type: boolean
	<li>Updates on system theme change.
	<li>Returns user preference for dark mode.
</ul>

<CodeExample nohr html="{example}" />

<script>
import { CodeExample } from '../../../code-example';

const example = `
<script>
	import { PREFERS_DARK } from '@perfectthings/ui';

	console.log($PREFERS_DARK ? 'dark mode' : 'light mode');
&lt;/script>
`;
</script>
