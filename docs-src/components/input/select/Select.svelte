<h2>Select</h2>
	<p>Select component is based on the native HTML select control.<br>
		It provides some visual styling and also better data management,<br>
		i.e. it accepts an array of strings or objects.
	</p>

	<h3>Normal</h3>
		<Select placeholder="None" items={selectItems}/>

	<h3>Disabled</h3>
		<Select items={[{ name: 'Disabled' }]} disabled/>

	<h3>With placeholder</h3>
		<Select placeholder="Select something" items={[]} />

	<h3>With initial value</h3>
		<Select placeholder="Empty" items={selectItems} bind:value/> Selected value: {value}

	<h3>With array of strings for <em>items</em></h3>
		<Select placeholder="Please select..." items={stringItems} bind:value/> Selected value: {value}


	<h3>Label</h3>
		<Select items={selectItems} label="Select label" />

	<h3>Info</h3>
		<Select items={selectItems} label="Select label" info="Select something here" />

	<h3>Error</h3>
		<Select items={selectItems} label="Select label" error="You picked the wrong side!" />

	<h3>Label on the left</h3>
		<Select items={selectItems} label="Label is on the left" labelOnTheLeft/>


<Code>{`
<Select items={items} {onchange} />

<script&gt;
const items = [
	{ id: '1', name: 'Alpha', group: 'Group 1' },
	{ id: '2', name: 'Beta', group: 'Group 1' },
	{ id: '3', name: 'Gamma', group: 'Group 1' },
];
function onchange (e) {
	console.log(e.target.value);
}
</script>
`}</Code>


<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';
import { Select } from '../../../../src';
import { Code } from '../../../code-example';
let value = $state('Beta');

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.required,
	{ name: 'items', type: 'array', required: true, description: 'An array of strings or objects in the following format: <code>&lbrace; name: string, id?: string | number, group?: string &rbrace;</code>(<i>name</i> should be unique, or - if <i>id</i> is present - <i>id</i> should be unique).' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the select.<br>If the list is an array of strings - it would match the item,<br>if the list is an array of objects - it should match the id of the item. ' },
];


const selectItems = [
	{ id: 'Alpha', name: 'Alpha', group: 'Group 1' },
	{ id: 'Beta', name: 'Beta', group: 'Group 1' },
	{ id: 'Gamma', name: 'Gamma', group: 'Group 1' },
	{ id: 'Delta', name: 'Delta', group: 'Group 1' },

	{ id: 'Epsilon', name: 'Epsilon' },
	{ id: 'Zeta', name: 'Zeta' },

	{ id: 'Eta', name: 'Eta', group: 'Group 2' },
	{ id: 'Theta', name: 'Theta', group: 'Group 2' },
	{ id: 'Iota', name: 'Iota', group: 'Group 2' },
	{ id: 'Kappa', name: 'Kappa', group: 'Group 2' },
	{ id: 'Lambda', name: 'Lambda', group: 'Group 2' },
	{ id: 'long-one', name: 'A very long text', group: 'Group 2' },

	{ id: 'Eta', name: 'Eta', group: 'Group 3' },
	{ id: 'Theta', name: 'Theta', group: 'Group 3' },
	{ id: 'Iota', name: 'Iota', group: 'Group 3' },
	{ id: 'Kappa', name: 'Kappa', group: 'Group 3' },
	{ id: 'Lambda', name: 'Lambda', group: 'Group 3' },
	{ id: 'long-one', name: 'A very long text', group: 'Group 3' },

	{ id: 'Eta', name: 'Eta', group: 'Group 4' },
	{ id: 'Theta', name: 'Theta', group: 'Group 4' },
	{ id: 'Iota', name: 'Iota', group: 'Group 4' },
	{ id: 'Kappa', name: 'Kappa', group: 'Group 4' },
	{ id: 'Lambda', name: 'Lambda', group: 'Group 4' },
	{ id: 'long-one', name: 'A very long text', group: 'Group 4' },
];

const stringItems = [
	'Alpha',
	'Beta',
	'Gamma',
	'Delta',
];

</script>
