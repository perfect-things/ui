<h2>Radio</h2>

	<h3>Normal</h3>
		<Radio items={items1} name="my-radio1" bind:value label="Select option 1" {onchange} />

	<h3>Disabled</h3>
		<Radio items={items2} name="my-radio2" label="Select option 2" disabled />

	<h3>List of strings as values</h3>
		<Radio items={strings} name="my-radio3" label="Select option 3" {onchange} />

	<h3>With error and live validation</h3>
		<Radio items={strings} name="my-radio4" label="Select option 4" error={error4} onchange={validate4} />

	<h3>With info</h3>
		<Radio items={strings} name="my-radio5" label="Select option 5" info="Here be info message." />

	<h3>With info and error</h3>
		<Radio
			items={strings}
			name="my-radio6"
			label="Select option 5"
			error="Here be error message."
			info="Here be info message." />

	<h3>Label on the left</h3>
		<Radio items={strings} label="Label is on the left" labelOnTheLeft/>


<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';
import { Radio } from '../../../../src';
import { CodeExample } from '../../../code-example';


const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.required,
	{ name: 'items', type: 'array', required: true, description: 'An array of strings or objects in the following format: <code>&lbrace; name: string, value: string | number, id?: string | number, disabled?: boolean &rbrace;</code>(if <i>id</i> is present - it should be unique).' },
	{ name: 'value', type: ['string', 'number'], description: 'Value of the component (=value of the checked item).' },
];

const exampleHtml = `
<Radio {items} name="my-radio" bind:value={value} label="Select option" />


<script>
const items = [
	{ name: 'One', value: 1, disabled: true },
	{ name: 'Two', value: 2 },
	{ name: 'Three', value: 3 },
	{ name: 'Four', value: 4 },
];

function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;


const items1 = [
	{ name: 'One', value: '1', disabled: true },
	{ name: 'Two', value: '2' },
	{ name: 'Three', value: '3' },
	{ name: 'Four', value: '4' },
];

let value = $state(items1[1].value);

const items2 = ['One', 'Two', 'Three', 'Four'];
const strings = ['One', 'Two', 'Three', 'Four'];

function onchange (e, val, item) {
	console.log(item, val);
}

let error4 = $state('You must select "Four"!');
function validate4 (e, val) {
	error4 = val.value === strings[3] ? '' : 'You must select "Four"!';
}
</script>
