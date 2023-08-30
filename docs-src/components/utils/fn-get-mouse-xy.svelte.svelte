<h3 class="util">getMouseY (event)</h3>
<p>Returns the mouse XY position. Event is standardised across platforms (touch & pointer)</p>

<CodeExample nohr html="{example}" />


<script>
import { CodeExample } from '../../code-example';

const example = `
<script>
	document.addEventListener('mousedown', e => {
		const [x, y] = getMouseXY(e);
		console.log(x, y);
	});
&lt;/script>
`;

</script>
