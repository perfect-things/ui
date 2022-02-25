<h2>Autocomplete</h2>

<h3>Normal</h3>
<div class="docs-autocomplete-row">
	<Autocomplete data="{autocompleteData}" bind:text="{text}" bind:value="{autocompleteValue}" />

	<div class="docs-autocomplete-value">Selected value: {autocompleteValue.name || ''}</div>
</div>

<h3>Allow arbitrary values</h3>
<div class="docs-autocomplete-row">
	<Autocomplete
		data="{autocompleteData}"
		placeholder="Type to filter"
		allowNew="true"
		bind:text="{text}"
		bind:value="{autocompleteValue}" />

	<div class="docs-autocomplete-value">Selected value: {autocompleteValue.name || ''}</div>
</div>

<script>
import { Autocomplete } from '../../src';

let autocompleteValue = [], text = '';
const autocompleteData = [
	{ id: 1, name: 'Alpha', group: 'Group 1' },
	{ id: 2, name: 'Beta', group: 'Group 1' },
	{ id: 3, name: 'Gamma', group: 'Group 1' },
	{ id: 4, name: 'Delta', group: 'Group 1' },
	{ id: 4, name: 'Epsilon', group: 'Group 1' },

	{ id: 5, name: 'Zeta', group: 'Group 2' },
	{ id: 6, name: 'Eta', group: 'Group 2' },
	{ id: 7, name: 'Theta', group: 'Group 2' },
	{ id: 8, name: 'Iota', group: 'Group 2' },
	{ id: 9, name: 'Kappa', group: 'Group 2' },
	{ id: 10, name: 'Lambda', group: 'Group 2' },

	{ id: 11, name: 'Zeta', group: 'Group 3' },
	{ id: 12, name: 'Eta', group: 'Group 3' },
	{ id: 13, name: 'Theta', group: 'Group 3' },
	{ id: 14, name: 'Iota', group: 'Group 3' },
	{ id: 15, name: 'Kappa', group: 'Group 3' },
	{ id: 16, name: 'Lambda', group: 'Group 3' },
];

</script>
