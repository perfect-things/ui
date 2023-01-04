<h2>Autocomplete</h2>
<div class="docs-layout">
	<div class="docs-column">
		<h3>Normal</h3>
		<Autocomplete
			data="{autocompleteData}"
			on:change="{onChange}"
			bind:value="{autocompleteValue}" />

		<h3>Disabled</h3>
		<Autocomplete disabled data="{autocompleteData}" bind:value="{autocompleteValue}" />

		<h3>Allow arbitrary values</h3>
		<Autocomplete
			data="{autocompleteData}"
			placeholder="Type to filter"
			allowNew="true"
			bind:value="{autocompleteValue}" />

		<h3>Show on focus</h3>
		<Autocomplete showOnFocus="true" data="{autocompleteData}" bind:value="{autocompleteValue}" />

		<h3>Simpler data (no ID, just 'name')</h3>
		<Autocomplete data="{autocompleteDataSimple}" placeholder="Type to filter"
			bind:value="{autocompleteValueSimple}" />

		<h3>Simplest data (just an array of strings)</h3>
		<Autocomplete data="{autocompleteDataSimplest}" placeholder="Type to filter" allowNew="true"
			bind:value="{autocompleteValueSimplest}" />

		<h3>In a container with <em>overflow: hidden</em></h3>
		<p>Where parent container has <em>overflow: hidden</em>, <em>elevate="true"</em>
			property must be set on the component.</p>
		<div class="docs-overflow-box">
			<small>overflow: hidden</small>
			<Autocomplete data="{autocompleteData}" elevate="true" bind:value="{autocompleteValue}" />
		</div>
		<p>This option should only be used when absolutely necessary (e.g. when Autocomplete
			is used inside dialogs/popups), because it makes the component less accessible
			(the list container is rendered directly in the <em>&lt;body&gt;</em>, and not next to the input).</p>

	</div>
	<div class="docs-column">
		<h2>Selected value: </h2>
		<pre>{JSON.stringify(autocompleteValue || {}, null, 2)}</pre>
	</div>
</div>

<hr>
<h3>Example instantiation</h3>
<code>
&lt;Autocomplete
    data="&lbrace; autocompleteData &rbrace;"
    on:change="&lbrace; onChange &rbrace;"
    bind:value="&lbrace; autocompleteValue &rbrace;" /&gt;

&lt;script&gt;
const autocompleteData = &lbrace;
    &lbrace; id: 1, name: 'Alpha', group: 'Group 1' &rbrace;,
    &lbrace; id: 2, name: 'Beta', group: 'Group 1' &rbrace;,
    &lbrace; id: 3, name: 'Gamma', group: 'Group 2' &rbrace;,
    &lbrace; id: 4, name: 'Delta', group: 'Group 2' &rbrace;,
&rbrace;;
let autocompleteValue = autocompleteData[1];

function onChange (e) &lbrace;
    const &lbrace; value, oldValue &rbrace; = e.detail;
    console.log(&lbrace; value, oldValue &rbrace;);
&rbrace;
&lt;/script&gt;
</code>

<hr>
<API props="{apiProps}"/>


<script>
import { Autocomplete } from '../../src';
import API from '../api-table';

const apiProps = [
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'placeholder', type: 'string', description: 'Shows placeholder text.' },
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{
		name: 'data',
		type: 'array',
		required: true,
		description: 'An array of strings or objects in the following format: ' +
			'<code>&lbrace; name:string, id?: string | number, group?: string &rbrace;</code>' +
			'(<i>name</i> should be unique, or - if <i>id</i> is present - <i>id</i> should be unique).'
	},
	{ name: 'allowNew', type: ['true', 'false'], default: 'false', description: 'Whether to allow arbitrary values (that don\'t exist in the list).' },
	{ name: 'className', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'clearOnEsc', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the input will be cleared when Escape is pressed.' },
	{ name: 'elevate', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the popup will be rendered into the <i>body</i>, to ensure it\'s not hidden under some elements (see example above).' },
	{ name: 'hideOnScroll', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - scrolling the window will close the popup.' },
	{ name: 'hideOnResize', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - resizing the window will close the popup.' },
	{ name: 'showOnFocus', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the popup will be automatically open when the input gets focus (as opposed to, when the user starts typing).' },
	{
		name: 'showAllInitially',
		type: ['true', 'false'],
		default: 'true',
		description: 'When the input has a value - the list in the poput is filtered by the input value.<br> ' +
			'If this option is set to true (default) - when user navigates to the input (with a value)<br> ' +
			'or clicks such an input - the poput initially will show all items unfiltered, and only once<br> ' +
			'user starts typing - the list will be filtered again.<br> ' +
			'If this value is set to <i>"false"</i> (or boolean <i>false</i>) - the list will always be filtered. '
	},
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when value changes.' },
	{ name: 'on:keydown', type: 'function', description: 'Triggered when a key is down.' },
];



const autocompleteData = [
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
let autocompleteValue = autocompleteData[1];


const autocompleteDataSimple = [
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
];
let autocompleteValueSimple = autocompleteDataSimple[3];

const autocompleteDataSimplest = [
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
let autocompleteValueSimplest = 'Gamma';


function onChange (e) {
	const { value, oldValue } = e.detail;
	console.log({ value, oldValue });
}
</script>
