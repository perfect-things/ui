<h2>Checkbox</h2>

	<h3>Normal</h3>
		<Checkbox label="I do not wish to be excluded from the dont-send-newsletter list, not." />

	<h3>Disabled</h3>
		<Checkbox disabled label="I would like to receive all your spam, please."/><br>
		<Checkbox disabled checked label="You can't uncheck me!"/>

	<h3>Checked</h3>
		<Checkbox checked label="Check the checkbox to have the checkbox checked."/>


	<h3>Indeterminate</h3>
		<Checkbox indeterminate label="Check, mate!"/>


	<h3>With error and live validation</h3>
		<Checkbox {error} label="Please, check this by mistake." {onchange}/>

	<h3>With info</h3>
		<Checkbox info="This checkbox is the most important box ever!" label="Please, check this by mistake."/>

	<h3>With error and info</h3>
		<Checkbox
			info="This checkbox is the most important box ever!"
			error="And you're wrong!"
			label="Please, check this by mistake."/>


	<h3>Label on the left</h3>
		<Checkbox label="Label is on the left" labelOnTheLeft/>


<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';
import { Checkbox } from '../../../../src';
import { CodeExample } from '../../../code-example';

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.bindinputelement,

	{ name: 'checked', type: ['true', 'false'], description: 'Make the checkbox checked or unchecked.' },
	{ name: 'indeterminate', type: ['true', 'false'], description: 'If set to <i>true</i> it makes the checkbox show its 3rd state - indeterminate.' },
];

const exampleHtml = `
<Checkbox {onchange} label="I'm a little label" {error} />

<script>
let error = '';

function onchange (e, { checked, indeterminate }) {
	error = checked ? '' : 'You must check me!'
	console.log({ checked, indeterminate });
}
&lt;/script>
`;

let error = $state('You must check me!');

function onchange (e, data) {
	const { checked, indeterminate } = data;
	error = checked ? '' : 'You must check me!';
	console.log({ checked, indeterminate });
}
</script>
