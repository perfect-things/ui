<h2>Autocomplete</h2>
<Autocomplete data="{autocompleteData}" bind:value="{autocompleteValue}" /> Selected value: {autocompleteValue.name || ''}

<script>
import { Autocomplete } from '../../src';

let autocompleteValue = [];
const autocompleteData = [
	'Group 1',
	{id: 1, name: 'Alpha'},
	{id: 2, name: 'Beta'},
	{id: 3, name: 'Gamma'},
	{id: 4, name: 'Delta'},
	{id: 4, name: 'Epsilon'},
	'Group 2',
	{id: 5, name: 'Zeta'},
	{id: 6, name: 'Eta'},
	{id: 7, name: 'Theta'},
	{id: 8, name: 'Iota'},
	{id: 9, name: 'Kappa'},
	{id: 10, name: 'Lambda'},
	'Group 3',
	{id: 11, name: 'Zeta'},
	{id: 12, name: 'Eta'},
	{id: 13, name: 'Theta'},
	{id: 14, name: 'Iota'},
	{id: 15, name: 'Kappa'},
	{id: 16, name: 'Lambda'},
];

</script>
