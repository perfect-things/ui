<Util id="FocusableSelector" name="FOCUSABLE_SELECTOR" {example}>
	<ul>
		<li>Svelte store<em>*</em>
		<li>Type: string
		<li>Returns a list of selectors that can be focused.
	</ul>
</Util>

<script>
import Util from '../Util.svelte';

const example = `
<script>
	import { FOCUSABLE_SELECTOR } from '@perfectthings/ui';

	const focusableElements = document.querySelectorAll($FOCUSABLE_SELECTOR);
	console.log(focusableElements);
&lt;/script>
`;
</script>
