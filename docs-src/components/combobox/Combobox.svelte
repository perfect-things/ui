<h2>Combobox</h2>

<h3>Normal</h3>
<Combobox
	data="{data}"
	on:change="{onChange}"
	bind:value="{itemValue}" />

<h4>Selected value: </h4>
<code>{JSON.stringify(itemValue || {})}</code>


<h3>Disabled</h3>
<Combobox disabled data="{data}" bind:value="{itemValue}" />

<h3>Allow arbitrary values</h3>
<Combobox
	data="{data}"
	placeholder="Type to filter"
	allowNew="true"
	bind:value="{itemValue}" />

<h3>Show on focus</h3>
<Combobox showOnFocus="true" data="{data}" bind:value="{itemValue}" />

<h3>Simpler data (no ID, just 'name')</h3>
<Combobox data="{dataSimple}" placeholder="Type to filter"
	bind:value="{valueSimple}" />

<h3>Simplest data (just an array of strings)</h3>
<Combobox data="{dataSimplest}" placeholder="Type to filter" allowNew="true"
	bind:value="{valueSimplest}" />

<h3>In a container with <em>overflow: hidden</em></h3>
<p>Where parent container has <em>overflow: hidden</em>, <em>elevate="true"</em>
	property must be set on the component.</p>
<div class="docs-overflow-box">
	<small>overflow: hidden</small>
	<Combobox data="{data}" elevate="true" bind:value="{itemValue}" />
</div>
<p>This option should only be used when absolutely necessary (e.g. when Combobox
	is used inside dialogs/popups), because it makes the component less accessible
	(the list container is rendered directly in the <em>&lt;body&gt;</em>, and not next to the input).</p>

<h3>Label</h3>
<Combobox data="{data}" label="Combobox label" />

<h3>Info</h3>
<Combobox data="{data}" label="Combobox label" info="Select something here" />

<h3>Error</h3>
<Combobox data="{data}" label="Combobox label" error="You picked the wrong side!" />



<CodeExample html="{exampleHtml}" />

<hr>
<API props="{apiProps}"/>


<script>
import { Combobox } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';


const apiProps = [
	{ name: 'allowNew', type: ['true', 'false'], default: 'false', description: 'Whether to allow arbitrary values (that don\'t exist in the list).' },
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'clearOnEsc', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the combobox will be cleared when Escape is pressed.' },
	{ name: 'data', type: 'array', required: true, description: 'An array of strings or objects in the following format: <code>&lbrace; name: string, id?: string | number, group?: string &rbrace;</code>(<i>name</i> should be unique, or - if <i>id</i> is present - <i>id</i> should be unique).' },
	{ name: 'disabled', description: 'Make the combobox disabled.' },
	{ name: 'elevate', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the popup will be rendered into the <i>body</i>, to ensure it\'s not hidden under some elements (see example above).' },
	{ name: 'hideOnResize', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - resizing the window will close the popup.' },
	{ name: 'hideOnScroll', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - scrolling the window will close the popup.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'info', type: 'string', description: 'Show info message above the combobox.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the combobox.' },
	{ name: 'label', type: 'string', description: 'Label for the combobox.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'placeholder', type: 'string', description: 'Shows placeholder text.' },
	{ name: 'required', description: 'Mark the combobox as <i>aria-required</i>.' },
	{ name: 'showAllInitially', type: ['true', 'false'], default: 'true', description: 'When the combobox has a value - the list in the poput is filtered by the combobox value.<br>If this option is set to true (default) - when user navigates to the combobox (with a value)<br> or clicks such an combobox - the poput initially will show all items unfiltered, and only once<br> user starts typing - the list will be filtered again.<br> If this value is set to <i>"false"</i> (or boolean <i>false</i>) - the list will always be filtered. ' },
	{ name: 'showOnFocus', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the popup will be automatically open when the combobox gets focus (as opposed to, when the user starts typing).' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the combobox.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'on:keydown', type: 'function', description: 'Triggered when a key is down.' },
];

const exampleHtml = `
<Combobox
    data="{ data }"
    on:change="{ onChange }"
    bind:value="{ value }" />

<script>
const data = [
    { id: 1, name: 'Alpha', group: 'Group 1' },
    { id: 2, name: 'Beta', group: 'Group 1' },
    { id: 3, name: 'Gamma', group: 'Group 2' },
    { id: 4, name: 'Delta', group: 'Group 2' },
];
let value = data[1];

function onChange (e) {
    const { value, oldValue } = e.detail;
    console.log({ value, oldValue });
}
&lt;/script>
`;



const data = [
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
let itemValue = data[1];


const dataSimple = [
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
let valueSimple = dataSimple[3];

const dataSimplest = [
	'Alpha',
	'Beta',
	'Gamma',
	'Delta',
	'Epsilon',
	'Zeta',
	'Eta',
	'Theta',
	'Iota',
	'Iota',
	'Kappa',
	'Lambda is the last item in this list',
];
let valueSimplest = 'Gamma';


function onChange (e) {
	const { value, oldValue } = e.detail;
	console.log({ value, oldValue });
}
</script>
