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



<hr>
<h3>Example instantiation</h3>
<code>
&lt;Toggle value="true" on:change="&lbrace;onChange&rbrace;" /&gt;

&lt;script&gt;
function onChange (e) &lbrace;
    console.log('onchange', e.detail);
&rbrace;
&lt;/script&gt;
</code>

<hr>
<API props="{apiProps}"/>


<script>
import { Toggle } from '../../src';
import API from '../api-table';

const apiProps = [
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until filled.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'className', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'value', type: 'string', description: 'Initial value of the input.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
];


let toggleValue = false;

function onchange (e) {
	console.log('onchange', e.detail);
}
</script>
