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
import './ApiTable.css';

const _props = [
	{
		name: 'id',
		type: 'string',
		defalut: '',
		required: true,
		description: 'assign ID to the underlying component'
	}
];


/**
 * @typedef {Object} Props
 * @property {string} [title]
 * @property {string} [description]
 * @property {any} [props]
 */

/** @type {Props} */
const { title = 'API', description = '', props = _props } = $props();



function buildType (prop) {
	const res = [];
	if (!prop.type) prop.type = '-';
	const types = (Array.isArray(prop.type) ? prop.type : [prop.type]).map(t => `<i>${t}</i>`);
	res.push(types.join(' | '));
	if (typeof prop.required !== 'undefined') res.push('<em>required</em>');
	if (typeof prop.default !== 'undefined') res.push(`<br>(defaults to ${prop.default})`);
	return res.join(' ');
}
</script>
