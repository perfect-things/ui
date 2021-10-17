<h2>Autocomplete</h2>
<Autocomplete data="{autocompleteData}" bind:value="{autocompleteValue}" />
Selected value: {autocompleteValue.name || ''}

<script>
import Autocomplete from '../autocomplete';

let autocompleteValue = [];
const autocompleteData = [
	{id: 'Alpha', name: 'Alpha'},
	{id: 'Beta', name: 'Beta'},
	{id: 'Gamma', name: 'Gamma'},
	{id: 'Delta', name: 'Delta'},
	{id: 'Epsilon', name: 'Epsilon'},
	{id: 'Zeta', name: 'Zeta'},
	{id: 'Eta', name: 'Eta'},
	{id: 'Theta', name: 'Theta'},
	{id: 'Iota', name: 'Iota'},
	{id: 'Kappa', name: 'Kappa'},
	{id: 'Lambda', name: 'Lambda'},
];

</script>
