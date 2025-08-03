<Util id="animate" name="animate(element, from, to, options?)" {example} {api}>
	<p>Animates an element from one state to another. Shortcut & wrapper for the native javascript animation.</p>
	<p>Returns a promise which resolves when the animation finishes.</p>
</Util>

<script>
import Util from '../Util.svelte';

const example = `
<script&gt;
    const el = document.querySelector('.some-div');
    animate(el, { opacity: 0 }, { opacity: 1 }, { duration: 1000 })
        .then(() => console.log('animation finished'));
</script&gt;
`;

const api = [
	{ name: 'element', type: 'HTMLElement', description: 'An element that will be animated.' },
	{ name: 'from', type: 'object', description: 'object of properties to animate from, e.g. <em>&lbrace; opacity: 0 &rbrace;</em>' },
	{ name: 'to', type: 'object', description: 'object of properties to animate to, e.g. <em>&lbrace; opacity: 1 &rbrace;</em>' },
	{ name: 'options', type: 'object', description: 'optional object of animation options: duration, easing, fill (see more at <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#options">MDN</a>).' },
];

</script>
