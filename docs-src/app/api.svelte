<h3>API</h3>
<Table className="api-table">
	<thead>
		<tr><th>Attribute</th><th>Value</th><th>Description</th></tr>
	</thead>
	<tbody>
		{#each props as prop}
			<tr>
				<td>{prop.name}</td>
				<td>{@html buildType(prop)}</td>
				<td>{@html prop.description}</td>
			</tr>
		{/each}
	</tbody>
</Table>

<script>
import { Table } from '../../src';

export let props = [
	{
		name: 'id',
		type: 'string',
		defalut: '',
		required: true,
		options: ['"true"', '"false"'],
		description: 'assign ID to the underlying component'
	}
];

function buildType (prop) {
	const type = [];
	type.push(`<i>${prop.type || '-'}</i>`);
	if (prop.required) type.push('<em>required</em>');
	if (prop.options) type.push('<br>' + prop.options.join(' | '));
	if (prop.default) type.push(`<br>(defaults to ${prop.type})`);
	return type.join(' ');
}
</script>
