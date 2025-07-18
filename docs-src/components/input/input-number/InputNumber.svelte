<h2>Input Number</h2>
<p>Only allows numbers, a single dot (for decimals) and the minus sign at the beginning.</p>


<h3>Normal</h3>
<InputNumber label="Enter amount" />

<h3>With validation error</h3>
<InputNumber label="Enter amount" {error} bind:value={value} oninput={validator} />

<h3>With info box</h3>
<InputNumber label="Enter amount" info="Additional information." />

<h3>With comma as the decimal separator</h3>
<InputNumber label="Enter amount" separator="," />

<h3>Label on the left</h3>
<InputNumber label="Label is on the left" labelOnTheLeft/>



<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';

import { InputNumber } from '../../../../src';
import { CodeExample } from '../../../code-example';

let error = $state('Number must be <100');
let value = $state(123);

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.required,
	PROPS.bindinputelement,
	PROPS.oninput,
	{ name: 'separator', type: 'string', default: '.', description: 'Custom decimal separator.' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
];


const exampleHtml = `
<InputNumber label="Enter amount"/>
`;

function validator (e) {
	const num = parseFloat('' + e.target.value) || 0;
	error = (num > 100) ? 'Number must be <100' : '';
}
</script>
