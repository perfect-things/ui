<h2>Autocomplete</h2>
<div class="docs-autocomplete-layout">
	<div class="docs-autocomplete-column">
		<h3>Normal</h3>
		<Autocomplete data="{autocompleteData}" bind:value="{autocompleteValue}" />

		<h3>Disabled</h3>
		<Autocomplete disabled data="{autocompleteData}" bind:value="{autocompleteValue}" />

		<h3>Allow arbitrary values</h3>
		<Autocomplete data="{autocompleteData}" placeholder="Type to filter" allowNew="true" bind:value="{autocompleteValue}" />

		<h3>Simpler data (no ID, just 'name')</h3>
		<Autocomplete data="{autocompleteDataSimple}" placeholder="Type to filter"
			bind:value="{autocompleteValueSimple}" />

		<h3>Simplest data (just an array of strings)</h3>
		<Autocomplete data="{autocompleteDataSimplest}" placeholder="Type to filter"
			bind:value="{autocompleteValueSimplest}" />

		<h3>In a container with <em>overflow: hidden</em></h3>
		<p>Where parent container has <em>overflow: hidden</em>, <em>elevate="true"</em>
			property must be set on the component.</p>
		<div class="docs-autocomplete-overflow">
			<small>overflow: hidden</small>
			<Autocomplete data="{autocompleteData}" elevate="true" bind:value="{autocompleteValue}" />
		</div>
		<p>This option should only be used when absolutely necessary (e.g. when Autocomplete
			is used inside dialogs/popups), because it makes the component less accessible
			(the list container is rendered directly in the <em>&lt;body&gt;</em>, and not next to the input).</p>

	</div>
	<div class="docs-autocomplete-column">
		<h2>Selected value: </h2>
		<pre>{JSON.stringify(autocompleteValue || {}, null, 2)}</pre>
	</div>
</div>

<script>
import { Autocomplete } from '../../src';

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
let autocompleteValueSimple = 'Gamma';

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
	'Kappa',
	'Lambda is the last item in Group 2',
];
let autocompleteValueSimplest = 'Gamma';

</script>
