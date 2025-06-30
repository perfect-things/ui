<h3>{title}</h3>
{#if description}
	<p>{@html description}</p>
{/if}
<Table class="api-table" selectable round>
	<thead>
		<tr><th>Attribute</th><th>Type/Value</th><th>Description</th></tr>
	</thead>
	<tbody>
		{#each items as prop (prop.name)}
			<tr>
				<td>{prop.name}</td>
				<td>{@html buildType(prop)}</td>
				<td>{@html prop.description}</td>
			</tr>
		{/each}
	</tbody>
</Table>

<script lang="ts">
import './ApiTable.css';
import type { ApiTableProps } from './types';
import { Table } from '../../src';


const {
	title = 'API',
	description = '',
	props = []
}: ApiTableProps = $props();

const items = $derived(props.sort(sortByName));


function sortByName (a, b) {
	return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
}

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
