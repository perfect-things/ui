<h2>Input Rating</h2>

<br>

<h3>Normal</h3>
<InputRating {onkeydown} bind:value/>
{value || ''}


<h3>Different symbol</h3>
<InputRating icon="circle" />


<h3>More stars</h3>
<InputRating max={8} />


<h3>Light (no background)</h3>
<InputRating light />

<h3>Light & hideReset</h3>
<InputRating light hideReset />


<h3>Label</h3>
<InputRating label="Pick one" />


<h3>Info</h3>
<InputRating label="Pick one" info="Pick your pick" />


<h3>Error</h3>
<InputRating label="Pick one" {error} {onchange}/>


<h3>Label on the left</h3>
<InputRating label="Label is on the left" labelOnTheLeft/>



<CodeExample html={exampleHtml} />

<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';

import { InputRating } from '../../../../src';
import { CodeExample } from '../../../code-example';

let value = $state(2);

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.icon,
	PROPS.required,
	PROPS.onkeydown,
	{ name: 'max', type: 'number', description: 'How many stars to show.' },
	{ name: 'value', type: 'string', description: 'Initial value of the input.' },
	{ name: 'light', type: 'boolean', default: 'false', description: 'Disable background and border - for use cases other than in form context.<br>Light does not work when the input has error.' },
];

const exampleHtml = `
<InputRating {onchange} bind:value />

<script>
let value = 4;
function onchange (e, { value }) {
	console.log(value);
}
&lt;/script>

`;



let error = $state('You picked wrong!');

function onchange (e, data) {
	error = data.value === '1' ? '' : 'You picked wrong!';
}


function onkeydown (e) {
	console.log(e.key);
}
</script>
