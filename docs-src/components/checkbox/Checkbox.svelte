<h2>Checkbox</h2>

<h3>Normal</h3>
<Checkbox on:change="{onchange}" label="I do not wish to be excluded from the dont-send-newsletter list, not." />

<h3>Disabled</h3>
<Checkbox disabled label="I would like to receive all your spam, please."/><br>
<Checkbox checked="true" disabled label="You can't check me!"/>

<h3>Checked</h3>
<Checkbox checked="true" label="Check the checkbox to have the checkbox checked."/>


<h3>Indeterminate</h3>
<Checkbox indeterminate="true" label="Check, mate!"/>


<h3>With error</h3>
<Checkbox {error} label="Please, check this by mistake." on:change="{onchange}"/>

<h3>With info</h3>
<Checkbox info="This checkbox is the most important box ever!" label="Please, check this by mistake."/>

<h3>With error and info</h3>
<Checkbox
	info="This checkbox is the most important box ever!"
	error="And you're wrong!"
	label="Please, check this by mistake."/>


<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { Checkbox } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'checked', type: ['true', 'false'], description: 'Make the checkbox checked or unchecked.' },
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the input.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'indeterminate', type: ['true', 'false'], description: 'If set to <i>true</i> it makes the checkbox show its 3rd state - indeterminate.' },
	{ name: 'info', type: 'string', description: 'Show info message above the input.' },
	{ name: 'label', type: 'string', description: 'Label for the input.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'title', type: 'string', description: 'Assign title to the component.' },
];

const exampleHtml = `
<Checkbox on:change="{onChange}" label="I'm a little label" {error} />

<script>
let error = '';

function onChange (e) {
	const { checked, indeterminate } = e.detail;
	error = checked ? '' : 'You must check me!'
	console.log({ checked, indeterminate });
}
&lt;/script>
`;

let error = 'You must check me!';

function onchange (e) {
	const { checked, indeterminate } = e.detail;
	error = checked ? '' : 'You must check me!';
	console.log({ checked, indeterminate });
}
</script>
