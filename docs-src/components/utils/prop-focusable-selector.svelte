<h3 class="util">FOCUSABLE_SELECTOR</h3>
<ul>
	<li>Svelte store<em>*</em>
	<li>Type: string
	<li>Returns a list of selectors that can be focused.
</ul>
<CodeExample nohr html="{example}" />

<script>
import { CodeExample } from '../../code-example';

const example = `
<script>
	import { FOCUSABLE_SELECTOR } from '@perfectthings/ui';

	const focusableElements = document.querySelectorAll($FOCUSABLE_SELECTOR);
	console.log(focusableElements);
&lt;/script>
`;
</script>
