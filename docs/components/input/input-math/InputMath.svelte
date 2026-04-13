<h2>Input Math</h2>
<p>Enhanced input number field, which allows user to enter the basic math symbols: <em>+ - * / ( )</em><br>
	and - on blur - replaces the equasion with the resolved number.</p>

<hr>

<h3>Normal</h3>
<InputMath label="Enter amount" {onchange} />

<h3>High precision</h3>
<InputMath label="Enter amount" precision={6} value={123.4567890} {onchange} />

<h3>With info box</h3>
<InputMath label="Enter amount" info="You can add 2 numbers here" {onchange}/>

<h3>With info box and error.</h3>
<InputMath label="Enter amount" info="You can add 2 numbers here" {error} onchange={onchange2}/>

<h3>Label on the left</h3>
<InputMath label="Label is on the left" labelOnTheLeft/>


<Code>{`
<InputMath label="Enter amount" {onchange} />

<script&gt;
function onchange (e, { value }) {
    console.log(value);
}
</script>
`}</Code>

<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';

import { InputMath } from '../../../../src';
import { Code } from '../../../code-example';

let error = 'Number must be big!';

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.required,
	PROPS.bindinputelement,
	{ name: 'precision', type: 'number', default: 2, description: 'How many decimal places to round to.' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
];


function onchange (e, { value }) {
	console.log('onchange', value);
}

function onchange2 (e, { value }) {
	if (value > 100) {
		error = undefined;
	}
	else {
		error = 'Number must be big!';
	}

}

</script>
