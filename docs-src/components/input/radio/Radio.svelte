<h2>Radio</h2>

<h3>Normal</h3>
<Radio items={items1} name="my-radio1" bind:value={val} label="Select option 1" on:change={onchange} />

<h3>Disabled</h3>
<Radio items={items2} name="my-radio2" label="Select option 2" disabled />

<h3>List of strings as values</h3>
<Radio items={strings} name="my-radio3" label="Select option 3" on:change={onchange} />

<h3>With error and live validation</h3>
<Radio items={strings} name="my-radio4" label="Select option 4" error={error4} on:change={validate4} />

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
<Radio items={strings} label="Label is on the left" labelOnTheLeft="true"/>



<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script>
import { Radio } from '../../../../src';
import { API } from '../../../api-table';
import { CodeExample } from '../../../code-example';


const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Make all radio buttons disabled.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the whole component.' },
	{ name: 'info', type: 'string', description: 'Show info message above the inputs.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the inputs.' },
	{ name: 'items', type: 'array', required: true, description: 'An array of strings or objects in the following format: <code>&lbrace; name: string, value: string | number, id?: string | number, disabled?: boolean &rbrace;</code>(if <i>id</i> is present - it should be unique).' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'label', type: 'string', description: 'Label for the whole component.' },
	{ name: 'labelOnTheLeft', type: ['true', 'false'], default: 'false', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' },
	{ name: 'title', type: 'string', description: 'Assign title to whole component.' },
	{ name: 'value', type: ['string', 'number'], description: 'Value of the component (=value of the checked item).' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
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
	{ name: 'One', value: 1, disabled: true },
	{ name: 'Two', value: 2 },
	{ name: 'Three', value: 3 },
	{ name: 'Four', value: 4 },
];

let val = $state(items1[1].value);

const items2 = ['One', 'Two', 'Three', 'Four'];
const strings = ['One', 'Two', 'Three', 'Four'];

function onchange (e) {
	const { item, value } = e.detail;
	console.log(item, value);
}

let error4 = $state('You must select "Four"!');
function validate4 (e) {
	const { value } = e.detail;
	error4 = value === strings[3] ? '' : 'You must select "Four"!';
}
</script>
