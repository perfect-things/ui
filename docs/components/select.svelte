<h2>Select</h2>
<Select placeholder="None" items="{selectItems}"/>

<Select items="{[{name:'Disabled'}]}" disabled/>

<Select placeholder="Select something" items="{[]}" />

<script>
import { Select } from '../../src';


const selectItems = [
	{id: 'Alpha', name: 'Alpha', group: 'Group 1' },
	{id: 'Beta', name: 'Beta', group: 'Group 1'},
	{id: 'Gamma', name: 'Gamma', group: 'Group 1'},
	{id: 'Delta', name: 'Delta', group: 'Group 1'},

	{id: 'Epsilon', name: 'Epsilon' },
	{id: 'Zeta', name: 'Zeta' },

	{id: 'Eta', name: 'Eta', group: 'Group 2'},
	{id: 'Theta', name: 'Theta', group: 'Group 2'},
	{id: 'Iota', name: 'Iota', group: 'Group 2'},
	{id: 'Kappa', name: 'Kappa', group: 'Group 2'},
	{id: 'Lambda', name: 'Lambda', group: 'Group 2'},
	{id: 'long-one', name: 'A very long text', group: 'Group 2'},

	{id: 'Eta', name: 'Eta', group: 'Group 3'},
	{id: 'Theta', name: 'Theta', group: 'Group 3'},
	{id: 'Iota', name: 'Iota', group: 'Group 3'},
	{id: 'Kappa', name: 'Kappa', group: 'Group 3'},
	{id: 'Lambda', name: 'Lambda', group: 'Group 3'},
	{id: 'long-one', name: 'A very long text', group: 'Group 3'},

	{id: 'Eta', name: 'Eta', group: 'Group 4'},
	{id: 'Theta', name: 'Theta', group: 'Group 4'},
	{id: 'Iota', name: 'Iota', group: 'Group 4'},
	{id: 'Kappa', name: 'Kappa', group: 'Group 4'},
	{id: 'Lambda', name: 'Lambda', group: 'Group 4'},
	{id: 'long-one', name: 'A very long text', group: 'Group 4'},
];

</script>
