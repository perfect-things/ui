<h3 class="util" id="GetMouseX">getMouseX(event)</h3>
<p>Returns the mouse X position. Event is standardised across platforms (touch & pointer)</p>

<CodeExample nohr html="{example}" />


<script>
import { CodeExample } from '../../../code-example';

const example = `
<script>
	document.addEventListener('mousedown', e => {
		const x = getMouseX(e);
		console.log(x);
	});
&lt;/script>
`;

</script>
