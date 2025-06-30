<h2>Input Math</h2>
<p>Enhanced input number field, which allows user to enter the basic math symbols: <em>+ - * / ( )</em><br>
	and - on blur - replaces the equasion with the resolved number.</p>

<hr>

<h3>Normal</h3>
<InputMath label="Enter amount" />

<h3>With info box</h3>
<InputMath label="Enter amount" info="You can add 2 numbers here"/>

<h3>With info box and error.</h3>
<InputMath label="Enter amount" info="You can add 2 numbers here" error="Number must be big!"/>

<h3>Label on the left</h3>
<InputMath label="Label is on the left" labelOnTheLeft/>


<CodeExample html={exampleHtml} />

<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';

import { InputMath } from '../../../../src';
import { CodeExample } from '../../../code-example';

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.placeholder,
	PROPS.required,
	PROPS.bindinputelement,
	PROPS.onchange,

	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
];


const exampleHtml = `
<InputMath label="Enter amount" onchange={onChange} />

<script>
function onChange (e) {
    const { value, oldValue } = e.detail;
    console.log({ value, oldValue });
}
&lt;/script>
`;

</script>
