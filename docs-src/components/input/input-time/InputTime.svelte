<h2>Input Time</h2>
	<p>This is just a simple wrapper around the native input time control.</p>

	<h3>Normal</h3>
		<InputTime bind:value />
		<p>Input value: {value}</p>

	<h3>Disabled</h3>
		<InputTime disabled value="00:00"/>

	<h3>With validation</h3>
		<InputTime
			label="Select Midnight"
			error={error1}
			value="00:01"
			{onchange} />


	<h3>Label on the left</h3>
		<InputTime label="Label is on the left" labelOnTheLeft/>

<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';
import { InputTime } from '../../../../src';
import { CodeExample } from '../../../code-example';

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.required,
	PROPS.oninput,
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
];


const exampleHtml = `
<InputTime label="Email" error="Invalid email" value="00:00" {onchange} />

<script>
function onchange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;

let value = $state('00:00');
let error1 = $state('Select midnight please.');

function onchange (e, val) {
	console.log(val);
	error1 = (val === '00:00' ? '' : 'Select midnight please.');
}

</script>
