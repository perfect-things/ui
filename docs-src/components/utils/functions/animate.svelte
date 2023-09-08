<h3 class="util" id="Animate">animate(element, from, to, options?)</h3>

<p>Animates an element from one state to another. Shortcut & wrapper for the native javascript animation.</p>

<API props="{apiProps}" title="Parameters"/>
<p>Returns a promise which resolves when the animation finishes.</p>


<CodeExample nohr html="{example}" />


<script>
import { API } from '../../../api-table';
import { CodeExample } from '../../../code-example';

const apiProps = [
	{ name: 'element', type: 'HTMLElement', description: 'An element that will be animated.' },
	{ name: 'from', type: 'object', description: 'object of properties to animate from, e.g. <em>&lbrace; opacity: 0 &rbrace;</em>' },
	{ name: 'to', type: 'object', description: 'object of properties to animate to, e.g. <em>&lbrace; opacity: 1 &rbrace;</em>' },
	{ name: 'options', type: 'object', description: 'optional object of animation options: duration, easing, fill (see more at <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options">MDN</a>).' },
];



const example = `
<script>
	const el = document.querySelector('.some-div');
	animate(el, { opacity: 0 }, { opacity: 1 }, { duration: 1000 })
		.then(() => console.log('animation finished'));
&lt;/script>
`;
</script>
