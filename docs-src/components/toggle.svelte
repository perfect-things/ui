<h2>Toggle</h2>

The perfect toggle component in Svelte:
<ul>
	<li>allows <em>click</em> as well as <em>drag</em> to toggle
	<li>keyboard support: press <em>Enter</em> or <em>Space</em> to toggle
	<li>accessible (based on a checkbox input)
	<li>no bloat, no dependencies
</ul>
<br>

<Toggle on:change="{onchange}" bind:value="{toggleValue}" /> {toggleValue}
<div class="toggle-box" class:visible="{toggleValue}">
	<Toggle /> hidden initially<br>
	<Toggle value="true"/> hidden initially
</div>
<br><br><br>
<Toggle value="{true}" disabled /> (disabled)

<script>
import { Toggle } from '../../src';

let toggleValue = false;

function onchange (e) {
	console.log('onchange', e.detail);
}
</script>
