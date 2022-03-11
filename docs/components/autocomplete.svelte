<h2>Autocomplete</h2>
<div class="docs-autocomplete-layout">
	<div class="docs-autocomplete-column">
		<h3>Normal</h3>
		<Autocomplete data="{autocompleteData}" bind:value="{autocompleteValue}" />

		<h3>Disabled</h3>
		<Autocomplete disabled data="{autocompleteData}" bind:value="{autocompleteValue}" />

		<h3>Allow arbitrary values</h3>
		<Autocomplete data="{autocompleteData}" placeholder="Type to filter" allowNew="true" bind:value="{autocompleteValue}" />

		<h3>In a container with <em>overflow: hidden</em></h3>
		<p>Where parent container has <em>overflow: hidden</em>, <em>elevate="true"</em> property must be set on the component.</p>
		<div class="docs-autocomplete-overflow">
			<small>overflow: hidden</small>
			<Autocomplete data="{autocompleteData}" elevate="true" bind:value="{autocompleteValue}" />
		</div>
		<p>* It is a little bit more costly and should be used only when necessary (e.g. when component is used inside dialogs/popups).<br>
			The performance cost comes from the position recalculation function, which is running in document's <em>scroll</em> event handler.
		</p>

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

</script>
