<h2>Checkbox</h2>

<h3>Normal</h3>
<Checkbox onchange={onchange} label="I do not wish to be excluded from the dont-send-newsletter list, not." />

<h3>Disabled</h3>
<Checkbox disabled label="I would like to receive all your spam, please."/><br>
<Checkbox checked="true" disabled label="You can't check me!"/>

<h3>Checked</h3>
<Checkbox checked="true" label="Check the checkbox to have the checkbox checked."/>


<h3>Indeterminate</h3>
<Checkbox indeterminate="true" label="Check, mate!"/>


<h3>With error and live validation</h3>
<Checkbox {error} label="Please, check this by mistake." onchange={onchange}/>

<h3>With info</h3>
<Checkbox info="This checkbox is the most important box ever!" label="Please, check this by mistake."/>

<h3>With error and info</h3>
<Checkbox
	info="This checkbox is the most important box ever!"
	error="And you're wrong!"
	label="Please, check this by mistake."/>


<h3>Label on the left</h3>
<Checkbox label="Label is on the left" labelOnTheLeft="true"/>



<CodeExample html={exampleHtml} />

<API props={apiProps}/>


<script>
import { Checkbox } from '../../../../src';
import { API } from '../../../api-table';
import { CodeExample } from '../../../code-example';

const apiProps = [
	{ name: 'checked', type: ['true', 'false'], description: 'Make the checkbox checked or unchecked.' },
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the input.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'indeterminate', type: ['true', 'false'], description: 'If set to <i>true</i> it makes the checkbox show its 3rd state - indeterminate.' },
	{ name: 'info', type: 'string', description: 'Show info message above the input.' },
	{ name: 'label', type: 'string', description: 'Label for the input.' },
	{ name: 'labelOnTheLeft', type: ['true', 'false'], default: 'false', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'title', type: 'string', description: 'Assign title to the component.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'onchange', type: 'function', description: 'Triggered when the value changes.' },
];

const exampleHtml = `
<Checkbox onchange={onChange} label="I'm a little label" {error} />

<script>
let error = '';

function onChange (e) {
	const { checked, indeterminate } = e.detail;
	error = checked ? '' : 'You must check me!'
	console.log({ checked, indeterminate });
}
&lt;/script>
`;

let error = $state('You must check me!');

function onchange (e) {
	const { checked, indeterminate } = e.detail;
	error = checked ? '' : 'You must check me!';
	console.log({ checked, indeterminate });
}
</script>
