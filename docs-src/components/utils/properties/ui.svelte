<Util id="UI" name="UI" {example}>
	<p>A framework helper module. Provides a bunch of useful functions and properties, like:</p>
	<ul>
		<li><em>UI.ANIMATION_SPEED</em> - default animation duration in ms. If the user prefers reduced-motion - this will be <em>0</em>.</li>
		<li><em>UI.IS_MOBILE</em> - returns true if the user is on a mobile device.</li>
		<li><em>UI.PREFERS_DARK</em> - returns true if the user prefers dark mode.</li>
		<li><em>UI.VERSION</em> - the current version of the framework.</li>
		<li><em>UI.init()</em> - initializes the UI module and sets up some event listeners.</li>
		<li><em>UI.destroy()</em> - cleans up the UI module and removes the event listeners.</li>
		<li><em>UI.on(eventName: string, callback: Function)</em> - adds an event listener for the specified event.</li>
		<li><em>UI.off(eventName: string, callback: Function)</em> - removes the event listener for the specified event.</li>
	</ul>
	<h3>Events:</h3>
	<ul>
		<li><em>change</em> - fired when a property value changes (for <em>ANIMATION_SPEED</em> and <em>PREFERS_DARK</em>, as others don't change at runtime).</li>
	</ul>
	<h3>UI.init()</h3>
	<p>Initializes the UI module:</p>
	<ul>
		<li>It sets the <em>ANIMATION_SPEED</em> and <em>PREFERS_DARK</em> properties based on the user's preferences.</li>
		<li>It adds either <em>mobile</em> or <em>desktop</em> class to the html element based on the user's device.</li>
		<li>It adds event listeners for keyboard and mouse, and toggles the <em>ui-keyboard</em> class on the html element based on the user's interactions.
			This is useful for providing better accessibility and user experience, e.g. show additional controls or visual focus for keyboard users.</li>
	</ul>
</Util>

<script>
import Util from '../Util.svelte';
const example = `
<script&gt;
    import { UI } from '@perfectthings/ui';

    UI.init();
    UI.on('change', (property, value) => {
        console.log(\`UI.$\{property} changed to $\{value}\`);
    });
    console.log(UI.ANIMATION_SPEED + 'ms');
    console.log(UI.IS_MOBILE ? 'mobile' : 'desktop');
    console.log(UI.PREFERS_DARK ? 'dark mode' : 'light mode');
    console.log('Framework version', UI.VERSION);
</script&gt;
`;



import { UI } from '../../../../src/utils';

UI.init();
UI.on('change', (property, value) => {
	console.log(`UI.${property} changed to ${value}`);
});
console.log(UI.ANIMATION_SPEED + 'ms');
console.log(UI.IS_MOBILE ? 'mobile' : 'desktop');
console.log(UI.PREFERS_DARK ? 'dark mode' : 'light mode');
console.log('Framework version', UI.VERSION);
</script>
