<h2>Select</h2>
<p>Select component is based on the native HTML select control.
	It provides some visual styling and also better data management,
	i.e. it accepts an array of strings or objects.
</p>

<h3>Normal</h3>
<Select placeholder="None" items="{selectItems}"/>

<h3>Disabled</h3>
<Select items="{[{ name: 'Disabled' }]}" disabled/>

<h3>With placeholder</h3>
<Select placeholder="Select something" items="{[]}" />

<h3>With initial value</h3>
<Select placeholder="Empty" items="{selectItems}" bind:value="{val}"/> Selected value: {val}

<h3>With array of strings for <em>items</em></h3>
<Select placeholder="Please select..." items="{stringItems}" bind:value="{val}"/> Selected value: {val}


<h3>Label</h3>
<Select items="{selectItems}" label="Select label" />

<h3>Info</h3>
<Select items="{selectItems}" label="Select label" info="Select something here" />

<h3>Error</h3>
<Select items="{selectItems}" label="Select label" error="You picked the wrong side!" />


<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { Select } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';
let val = 'Beta';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Make the select disabled.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying select.' },
	{ name: 'info', type: 'string', description: 'Show info message above the select.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the select.' },
	{ name: 'label', type: 'string', description: 'Label for the select.' },
	{ name: 'items', type: 'array', required: true, description: 'An array of strings or objects in the following format: <code>&lbrace; name: string, id?: string | number, group?: string &rbrace;</code>(<i>name</i> should be unique, or - if <i>id</i> is present - <i>id</i> should be unique).' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying select.' },
	{ name: 'placeholder', type: 'string', description: 'Adds an item to the beginning of the options list.' },
	{ name: 'required', description: 'Mark the select as <i>aria-required</i>.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying select.' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the select.<br>If the list is an array of strings - it would match the item,<br>if the list is an array of objects - it should match the id of the item. ' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying select.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
];

const exampleHtml = `
<Select items="{items}" on:change="{onChange}" />

<script>
const items = [
	{ id: '1', name: 'Alpha', group: 'Group 1' },
	{ id: '2', name: 'Beta', group: 'Group 1' },
	{ id: '3', name: 'Gamma', group: 'Group 1' },
];
function onChange (e) {
	const { value, oldValue } = e.detail;
	console.log({ value, oldValue });
}
&lt;/script>
`;

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
