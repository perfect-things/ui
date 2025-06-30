<h2>Input Search</h2>

	<h3>Normal</h3>
		<InputSearch oninput={oninput} bind:value />
		<p>Input value: {value}</p>

	<h3>Disabled</h3>
		<InputSearch disabled value="disabled value" {oninput} />

	<h3>With validation</h3>
		<InputSearch
			label="Validate on change"
			error={error1}
			{value}
			{onchange} />

		<br>
		<InputSearch
			label="Validate on input"
			info="This should be avoided in most cases. Validating input as user is typing is a bad UX."
			required
			error={error2}
			{value}
			{oninput} />

	<h3>Label on the left</h3>
		<InputSearch label="Label is on the left" labelOnTheLeft/>


<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';

import { InputSearch } from '../../../../src';
import { CodeExample } from '../../../code-example';

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.required,
	PROPS.oninput,
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
];


const exampleHtml = `
<InputSearch label="Email" error="Invalid email" value="admin" onchange={onChange} />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;

let value = $state('Hi!');
let error1 = $state(''), error2 = $state('');


function validate (v) {
	if (!v) return 'This field is required';
	return;
}

function onchange (e) {
	error1 = validate(e.target.value);
	console.log(e.target.value);
}

function oninput (e) {
	error2 = validate(e.target.value);
	console.log(e.target.value);
}


oninput({ target: { value: '-' } });

</script>
