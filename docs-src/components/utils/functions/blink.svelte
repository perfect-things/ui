<h3 class="util" id="Blink">blink(element, duration = 160)</h3>
<p>Animates an element by changing its opacity from 0.5 to 1.</p>
<ul>
	<li><em>element</em> - HTMLElement to animate
	<li><em>duration</em> - how long to animate (in ms).
	<li>Returns a promise which resolves when the animation finishes.
</ul>
<CodeExample nohr html="{example}" />


<script>
import { CodeExample } from '../../../code-example';

const example = `
<script>
	const el = document.querySelector('.some-div');
	blink(el).then(() => console.log('animation finished'));
&lt;/script>
`;


</script>
