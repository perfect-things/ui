<h2>Autocomplete</h2>

<h3>Normal</h3>
<div class="docs-autocomplete-row">
	<Autocomplete data="{autocompleteData}" bind:value="{autocompleteValue}" />

	<div class="docs-autocomplete-value">Selected value: {autocompleteValue.name || ''}</div>
</div>

<h3>Allow arbitrary values</h3>
<div class="docs-autocomplete-row">
	<Autocomplete
		data="{autocompleteData}"
		placeholder="Type to filter"
		allowNew="true"
		bind:value="{autocompleteValue}" />

	<div class="docs-autocomplete-value">Selected value: {autocompleteValue.name || ''}</div>
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
