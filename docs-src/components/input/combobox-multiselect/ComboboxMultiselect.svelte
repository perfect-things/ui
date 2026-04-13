<h2>Combobox (multiselect)</h2>
<p>This is still the Combobox component, just with additional property <code>multiselect</code> that
	enables the multiselection by adding checkboxes to the list items.</p>

<h3>Simple data</h3>
<Combobox items={dataSimple} multiselect bind:value={multiselectSimpleValue} />
<h4>Selected value: </h4>
<JsonBox value={multiselectSimpleValue} />
<Button onclick={resetSimple}>Reset</Button>


<h3>Complex data</h3>
<Combobox {items} multiselect bind:value={multiselectValue} />
<h4>Selected value: </h4>
<JsonBox value={multiselectValue} />


<Code>{`
<Combobox
    {items}
    multiselect
    bind:value={ value } />

<script&gt;
const items = [
    { id: 1, name: 'Alpha', group: 'Group 1' },
    { id: 2, name: 'Beta', group: 'Group 1' },
    { id: 3, name: 'Gamma', group: 'Group 2' },
    { id: 4, name: 'Delta', group: 'Group 2' },
];
let value = $state([items[0], items[1]]);
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

	{ name: 'hideOnResize', description: 'If present - resizing the window will close the popup.' },
	{ name: 'items', type: 'array', required: true, description: 'An array of strings or objects in the following format: <code>&lbrace; name: string, id?: string | number, group?: string &rbrace;</code>(<i>name</i> should be unique, or - if <i>id</i> is present - <i>id</i> should be unique).' },
	{ name: 'multiselect', description: 'Enables multiselect mode. Dropdown items receive checkboxes; value changes only via click or Space key; <code>allowNew</code> has no effect.' },
	{ name: 'value', type: 'array', description: 'An array of selected strings or objects.' },
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
let multiselectValue = $state([items[0], items[1]]);

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
let multiselectSimpleValue = $state([dataSimple[0], dataSimple[1]]);


function resetSimple () {
	multiselectSimpleValue = [];
}

</script>
