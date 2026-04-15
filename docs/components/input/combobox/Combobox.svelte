<h2>Combobox</h2>

<h3>Normal</h3>
<Combobox {items} {onchange} bind:value={itemValue} />

<h4>Selected value: </h4>
<JsonBox value={itemValue} />


<Button onclick={resetSingle}>Reset</Button>

<h3>Disabled</h3>
<Combobox disabled {items} bind:value={itemValue} />

<h3>Allow arbitrary values</h3>
<Combobox
	{items}
	placeholder="Type to filter"
	allowNew
	bind:value={itemValue} />


<h3>Show on focus</h3>
<Combobox showOnFocus {items} bind:value={itemValue} />

<h3>Simpler data (no ID, just 'name')</h3>
<Combobox items={dataSimpler} placeholder="Type to filter"
	bind:value={valueSimpler} />

<h4>Selected value: </h4>
<JsonBox value={valueSimpler} />


<h3>Simple data (just an array of strings)</h3>
<Combobox items={dataSimple} placeholder="Type to filter"
	bind:value={valueSimple} />

<h4>Selected value: </h4>
<JsonBox value={valueSimple} />


<h3>Label</h3>
<Combobox {items} label="Combobox label" />

<h3>Info & Warning</h3>
<Combobox {items} label="Combobox label" info="Select something here" warning="Select with care" />

<h3>Error</h3>
<Combobox {items} label="Combobox label" error="You picked the wrong side!" />

<h3>Label on the left</h3>
<Combobox {items} label="Label is on the left" labelOnTheLeft/>

<h3>Label on the left and info & warning text</h3>
<Combobox {items} label="Label is on the left" labelOnTheLeft info="Select something here" warning="Select with care"/>


<Code>{`
<Combobox
    {items}
    {onchange}
    bind:value={ value } />

<script&gt;
const items = [
    { id: 1, name: 'Alpha', group: 'Group 1' },
    { id: 2, name: 'Beta', group: 'Group 1' },
    { id: 3, name: 'Gamma', group: 'Group 2' },
    { id: 4, name: 'Delta', group: 'Group 2' },
];
let value = data[1];

function onchange (e) {
    const { value, oldValue } = e;
    console.log({ value, oldValue });
}
</script>
`}</Code>

<hr>
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';

import { Combobox, Button } from '../../../../src';
import { Code, JsonBox } from '../../../code-example';


const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.required,
	PROPS.bindinputelement,
	PROPS.onkeydown,

	{ name: 'allowNew', description: 'Whether to allow arbitrary values (that don\'t exist in the list).' },
	{ name: 'clearOnEsc', description: 'If present - the combobox will be cleared when Escape is pressed.' },
	{ name: 'hideOnResize', description: 'If present - resizing the window will close the popup.' },
	{ name: 'items', type: 'array', required: true, description: 'An array of strings or objects in the following format: <code>&lbrace; name: string, id?: string | number, group?: string &rbrace;</code>(<i>name</i> should be unique, or - if <i>id</i> is present - <i>id</i> should be unique).' },
	{ name: 'showOnFocus', description: 'If present - the popup will be automatically open when the combobox gets focus (as opposed to, when the user starts typing).' },
	{ name: 'value', type: ['string', 'number', 'object'], description: 'Value of the combobox.' },
];


const items = [
	{ id: 1, name: 'Alpha', group: 'Group 1' },
	{ id: 2, name: 'Beta', group: 'Group 1' },
	{ id: 3, name: 'Gamma', group: 'Group 1' },
	{ id: 4, name: 'Delta', group: 'Group 1' },
	{ id: 5, name: 'Epsilon', group: 'Group 1' },

	{ id: 6, name: 'Zeta', group: '😀 Group 2 has a very long name' },
	{ id: 7, name: 'Eta', group: '😀 Group 2 has a very long name' },
	{ id: 8, name: 'Theta', group: '😀 Group 2 has a very long name' },
	{ id: 9, name: 'Iota', group: '😀 Group 2 has a very long name' },
	{ id: 10, name: 'Kappa', group: '😀 Group 2 has a very long name' },
	{ id: 11, name: 'Lambda is the last item in Group 2', group: '😀 Group 2 has a very long name' },

	{ id: 12, name: 'Zeta', group: 'Group 3' },
	{ id: 13, name: 'Eta', group: 'Group 3' },
	{ id: 14, name: 'Theta', group: 'Group 3' },
	{ id: 15, name: 'Iota', group: 'Group 3' },
	{ id: 16, name: 'Kappa', group: 'Group 3' },
	{ id: 17, name: 'Lambda', group: 'Group 3' },
];
let itemValue = $state(items[1]);

const dataSimpler = [
	{ name: 'Alpha', group: 'Group 1' },
	{ name: 'Beta', group: 'Group 1' },
	{ name: 'Gamma', group: 'Group 1' },
	{ name: 'Delta', group: 'Group 1' },
	{ name: 'Epsilon', group: 'Group 1' },

	{ name: 'Zeta', group: '😀 Group 2 has a very long name' },
	{ name: 'Eta', group: '😀 Group 2 has a very long name' },
	{ name: 'Theta', group: '😀 Group 2 has a very long name' },
	{ name: 'Iota', group: '😀 Group 2 has a very long name' },
	{ name: 'Kappa', group: '😀 Group 2 has a very long name' },
	{ name: 'Lambda is the last item in Group 2', group: '😀 Group 2 has a very long name' },

	{ name: 'Alpha' },
	{ name: 'Beta' },
	{ name: 'Gamma' },
	{ name: 'Delta' },
	{ name: 'Epsilon' },
];
let valueSimpler = $state(dataSimpler[3]);

const dataSimple = [
	'Alpha',
	'Beta',
	'Gamma',
	'Delta',
	'Epsilon',
	'Zeta',
	'Eta',
	'Theta',
	'Iota',
	'Kappa',
	'Lambda is the last item in this list',
];
let valueSimple = $state('Gamma');


function onchange (e, { value, oldValue }) {
	console.log({ value, oldValue });
}

function resetSingle () {
	itemValue = items[1];
}

</script>
