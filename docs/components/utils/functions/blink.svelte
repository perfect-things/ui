<Util id="blink" name="blink(element, duration = 160)" {example}>
	<p>Animates an element by changing its opacity from 0.5 to 1.</p>
	<ul>
		<li><em>element</em> - HTMLElement to animate</li>
		<li><em>duration</em> - how long to animate (in ms).</li>
		<li>Returns a promise which resolves when the animation finishes.</li>
	</ul>
</Util>


<script>
import Util from '../Util.svelte';

const example = `
<script&gt;
    const el = document.querySelector('.some-div');
    blink(el).then(() => console.log('animation finished'));
</script&gt;
`;

</script>
