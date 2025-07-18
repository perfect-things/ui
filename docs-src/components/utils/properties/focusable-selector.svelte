<Util id="FocusableSelector" name="UI.FOCUSABLE_SELECTOR" {example}>
	<ul>
		<li>Type: string</li>
		<li>Returns a list of selectors that can be focused.</li>
	</ul>
</Util>

<script>
import Util from '../Util.svelte';

const example = `
<script>
	import { UI } from '@perfectthings/ui';

	const focusableElements = document.querySelectorAll(UI.FOCUSABLE_SELECTOR);
	console.log(focusableElements);
&lt;/script>
`;
</script>
