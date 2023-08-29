<h3 class="util">animate(element, from, to, options?)</h3>

<p>Animates an element from one state to another. Shortcut & wrapper for the native javascript animation.</p>

<ul>
	<li><em>element</em> - HTMLElement to animate
	<li><em>from</em> - object of properties to animate from, e.g. <em>&lbrace; opacity: 0 &rbrace;</em>
	<li><em>to</em> - object of properties to animate to, e.g. <em>&lbrace; opacity: 1 &rbrace;</em>
	<li><em>options</em> - optional object of animation options: duration, easing, fill (see more at <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options">MDN</a>).
	<li>Returns a promise which resolves when the animation finishes.
</ul>
<CodeExample nohr html="{example}" />


<script>
import { CodeExample } from '../../code-example';

const example = `
<script>
	const el = document.querySelector('.some-div');
	animate(el, { opacity: 0 }, { opacity: 1 }, { duration: 1000 })
		.then(() => console.log('animation finished'));
&lt;/script>
`;
</script>
