<h2>Input Number</h2>
<p>Only allows numbers, a single dot (for decimals) and the minus sign at the beginning.</p>


<h3>Normal</h3>
<InputNumber label="Enter amount" />

<h3>With validation error</h3>
<InputNumber label="Enter amount" {error} bind:value="{value}" on:input="{validator}" />

<h3>With info box</h3>
<InputNumber label="Enter amount" info="Additional information." />

<h3>With comma as the decimal separator</h3>
<InputNumber label="Enter amount" separator="," />



<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>


<script>
import { InputNumber } from '../../../src';
import { CodeExample } from '../../code-example';
import { API } from '../../api-table';

let error = 'Number must be <100';
let value = 123;

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'info', type: 'string', description: 'Show info message above the input.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the input.' },
	{ name: 'label', type: 'string', description: 'Label for the input.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'placeholder', type: 'string', description: 'Assign placeholder to the underlying input.' },
	{ name: 'required', description: 'Mark the input as <i>aria-required</i>. The actual validation must be done in the consumer.' },
	{ name: 'separator', type: 'string', default: '.', description: 'Custom decimal separator.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
	{ name: 'on:change', type: 'function', description: 'Triggered after the value changes and the focus leaves the input.' },
	{ name: 'on:input', type: 'function', description: 'Triggered as soon as the input value changes.' },
];


const exampleHtml = `
<InputNumber label="Enter amount"/>
`;

function validator (e) {
	const num = parseFloat('' + e.target.value) || 0;
	error = (num > 100) ? 'Number must be <100' : '';
}
</script>
