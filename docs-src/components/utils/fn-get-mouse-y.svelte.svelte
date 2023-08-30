<h3 class="util">getMouseY (event)</h3>
<p>Returns the mouse Y position. Event is standardised across platforms (touch & pointer)</p>

<CodeExample nohr html="{example}" />


<script>
import { CodeExample } from '../../code-example';

const example = `
<script>
	document.addEventListener('mousedown', e => {
		const y = getMouseY(e);
		console.log(y);
	});
&lt;/script>
`;

</script>
