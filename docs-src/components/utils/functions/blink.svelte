<Util id="blink" name="blink(element, duration = 160)" {example}>
	<p>Animates an element by changing its opacity from 0.5 to 1.</p>
	<ul>
		<li><em>element</em> - HTMLElement to animate
		<li><em>duration</em> - how long to animate (in ms).
		<li>Returns a promise which resolves when the animation finishes.
	</ul>
</Util>


<script>
import Util from '../Util.svelte';

const example = `
<script>
	const el = document.querySelector('.some-div');
	blink(el).then(() => console.log('animation finished'));
&lt;/script>
`;

</script>
