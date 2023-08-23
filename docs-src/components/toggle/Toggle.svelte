<h2>Toggle</h2>

The perfect toggle component in Svelte:
<ul>
	<li>allows <em>click</em> as well as <em>drag</em> to toggle
	<li>keyboard support: press <em>Enter</em> or <em>Space</em> to toggle
	<li>accessible (based on a checkbox input)
	<li>no bloat, no dependencies
</ul>

<hr>

<h3>Normal</h3>
<Toggle bind:value="{toggleValue}" /> {toggleValue}
<div class="toggle-box" class:visible="{toggleValue}">
	<Toggle /> hidden initially<br>
	<Toggle value="true"/> hidden initially
</div>
<br><br><br>

<h3>Disabled</h3>
<Toggle value="{true}" disabled /> (disabled)


<h3>Label</h3>
<Toggle label="Toggle the lights" />

<h3>Info</h3>
<Toggle label="Toggle the lights" info="This toggle switches the bathroom lights on/off" />

<h3>Error</h3>
<Toggle label="Toggle the lights" error="{error}" on:change="{onchange}"/>

<h3>Label on the left</h3>
<Toggle label="Label is on the left" labelOnTheLeft="true"/>


<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { Toggle } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input (if not set, a random string will be assigned).' },
	{ name: 'info', type: 'string', description: 'Show info message above the toggle.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the toggle.' },
	{ name: 'name', type: 'string', description: 'Assign name to the underlying input.' },
	{ name: 'label', type: 'string', description: 'Label for the input.' },
	{ name: 'labelOnTheLeft', type: ['true', 'false'], default: 'false', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' },
	{ name: 'required', description: 'Mark the input as <i>aria-required</i>.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'value', type: ['true', 'false'], description: 'Initial value of the toggle.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
];

const exampleHtml = `
<Toggle value="true" label="Field label" on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('onchange', e.detail);
}
&lt;/script>
`;


let error = 'I can\'t see anything now!';
let toggleValue = false;

function onchange (e) {
	const val = e.detail;
	error = val ? '' : 'I can\'t see anything now!';
	console.log('onchange', e.detail);
}
</script>
