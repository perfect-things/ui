<h3>{title}</h3>
{#if description}
	<p>{@html description}</p>
{/if}
<Table class="api-table" selectable="false" round>
	<thead>
		<tr><th>Attribute</th><th>Type/Value</th><th>Description</th></tr>
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
export let title = 'API';
export let description = '';
export let props = [
	{
		name: 'id',
		type: 'string',
		defalut: '',
		required: true,
		description: 'assign ID to the underlying component'
	}
];

function buildType (prop) {
	const res = [];
	if (!prop.type) prop.type = '-';
	const types = (Array.isArray(prop.type) ? prop.type : [prop.type]).map(t => `<i>${t}</i>`);
	res.push(types.join(' | '));
	if (prop.required) res.push('<em>required</em>');
	if (prop.default) res.push(`<br>(defaults to ${prop.default})`);
	return res.join(' ');
}
</script>
