<h2>Combobox</h2>

<h3>Normal</h3>
<Combobox
	{items}
	onchange={onChange}
	bind:value={itemValue} />

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
<Combobox showOnFocus="true" {items} bind:value={itemValue} />

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

<h3>Info</h3>
<Combobox {items} label="Combobox label" info="Select something here" />

<h3>Error</h3>
<Combobox {items} label="Combobox label" error="You picked the wrong side!" />

<h3>Label on the left</h3>
<Combobox {items} label="Label is on the left" labelOnTheLeft/>



<!-- ------------------------------------------------------------------------------------- -->



<h2 id="Multiselect"><a href="#Combobox/Multiselect">Multiselect</a></h2>

<p>This adds checkboxes to the list items, but it disables the auto-lookup functionality,<br>as the input value string becomes a comma-separated list of selected items' names.</p>
<h3>Simple data</h3>
<Combobox
	items={dataSimple}
	multiselect
	clearOnEsc
	bind:value={multiselectSimpleValue} />
<h4>Selected value: </h4>
<JsonBox value={multiselectSimpleValue} />
<Button onclick={resetMulti}>Reset</Button>

<h3>Complex data</h3>
<Combobox
	{items}
	multiselect
	bind:value={multiselectValue} />
<h4>Selected value: </h4>
<JsonBox value={multiselectValue} />



<CodeExample html={exampleHtml} />

<hr>
<API props={apiProps}/>


<script>
import { Combobox, Button } from '../../../../src';
import { API } from '../../../api-table';
import { CodeExample, JsonBox } from '../../../code-example';


const apiProps = [
	{ name: 'allowNew', description: 'Whether to allow arbitrary values (that don\'t exist in the list).' },
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'clearOnEsc', description: 'If present - the combobox will be cleared when Escape is pressed.' },
	{ name: 'disabled', description: 'Make the combobox disabled.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the combobox.' },
	{ name: 'hideOnResize', description: 'If present - resizing the window will close the popup.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'info', type: 'string', description: 'Show info message above the combobox.' },
	{ name: 'items', type: 'array', required: true, description: 'An array of strings or objects in the following format: <code>&lbrace; name: string, id?: string | number, group?: string &rbrace;</code>(<i>name</i> should be unique, or - if <i>id</i> is present - <i>id</i> should be unique).' },
	{ name: 'label', type: 'string', description: 'Label for the combobox.' },
	{ name: 'labelOnTheLeft', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'multiselect', description: 'This changes the control to a multiselect. The following changes will apply:<ul>' +
		'<li>dropdown items will receive checkboxes,' +
		'<li>and the control will only allow to change the value by clicking on items (or check them using the `Space` key),' +
		'<li>the value will become an array,' +
		'<li>argument `allowNew` will have no effect.' +
		'</ul>'
	},
	{ name: 'placeholder', type: 'string', description: 'Shows placeholder text.' },
	{ name: 'required', description: 'Mark the combobox as <i>aria-required</i>.' },
	{ name: 'showOnFocus', description: 'If present - the popup will be automatically open when the combobox gets focus (as opposed to, when the user starts typing).' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'value', type: ['string', 'number', 'object', 'array'], description: 'Value of the combobox.<br>If combobox is <em>multiselect</em>, the value will be an array of strings or objects. ' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'onchange', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'onkeydown', type: 'function', description: 'Triggered when a key is down.' },
];

const exampleHtml = `
<Combobox
    {items}
    onchange={ onChange }
    bind:value={ value } />

<script>
const items = [
    { id: 1, name: 'Alpha', group: 'Group 1' },
    { id: 2, name: 'Beta', group: 'Group 1' },
    { id: 3, name: 'Gamma', group: 'Group 2' },
    { id: 4, name: 'Delta', group: 'Group 2' },
];
let value = data[1];

function onChange (e) {
    const { value, oldValue } = e;
    console.log({ value, oldValue });
}
&lt;/script>
`;



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
let multiselectValue = $state([items[0], items[1]]);

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
let multiselectSimpleValue = $state([dataSimple[0], dataSimple[1]]);


function onChange (e) {
	const { value, oldValue } = e;
	console.log({ value, oldValue });
}

function resetSingle () {
	itemValue = items[1];
}

function resetMulti () {
	multiselectSimpleValue = [];
}

</script>
