{#snippet nameCell(item)}
	<a href="#Grid/{item.id}"><strong>{item.name}</strong></a>
{/snippet}

<h2>Grid [alpha version]</h2>
<p>Grid component is basically a table on steroids. </p>
<div class="grid-viewport">
	<Grid
		round
		multiselect
		title="Grid with data"
		sortby="name"
		sortdir="ASC"
		{columns}
		{data}
		onkeydown={onclick}
		ondblclick={onclick}/>
</div>


<Code>{`
<Grid {data} {columns} sortby="name" sortdir="ASC" onclick={onclick}/>

<script&gt;
const columns = [
    { field: 'name', label: 'Name', sortable: true },
    { field: 'date', label: 'Date', width: 200, sortable: true },
    { field: 'price', label: 'Price', width: 200, sortable: true, total: true,
        renderer: (item) => \`€$\{item.price}\`
    }
];
const data = [
    { id: 1, name: 'John Doe', date: '2020-01-01', price: 100 },
    { id: 2, name: 'Jane Doe', date: '2020-01-02', price: 200 },
    { id: 3, name: 'Jim Doe', date: '2020-01-03', price: 300 },
    { id: 4, name: 'Jill Doe', date: '2020-01-04', price: 400 },
    { id: 5, name: 'Jack Doe', date: '2020-01-05', price: 500 }
];

function onclick (e) {
    console.log(e.type);
}

</script>
`}</Code>
<API props={apiProps}/>
<API title="GridColumn Props" props={columnProps}/>


<script lang="ts">
import './Grid.css';
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';
import { Grid, type GridColumn } from '../../../src/grid';
import { Code } from '../../code-example';

const apiProps = <ApiProp[]>[
	...PROPS.component,
	{ name: 'columns', type: 'GridColumn[]', description: 'Array of columns definition. Each objects defines and describes a column in the grid.' },
	{ name: 'data', type: 'any[]', description: 'Array of items (each would constitute 1 row of the grid).' },
	{ name: 'round', description: 'Adds rounded corners to the table.' },
	{ name: 'rowSelector', type: 'string', default: '<em>tbody tr</em>', description: 'A selector for a table row.<br>This is useful if a table needs row groups, in which case it would have a mix of TRs and TBODYs for rows. Both can have the same class, e.g. <em>.row</em> and this selector should then be provided here.' },
	{ name: 'scrollContainer', type: ['string','Element'], default: 'table wrapper', description: 'Selector or HTML Element to the scroll container. If table wrapper\'s height is not set to 100% of the container, and is taller than the container - the container will have to be scrollable, and in this case it must be provided here.' },
	{ name: 'scrollCorrectionOffset', type: 'number', default: '0', description: 'If an external <em>scrollContainer</em> is used - it is possible that it will have non-zero padding set, thus the table wrapper will be offset from the beginning of the container. This offset should be set here, so that the sticky headers work correctly.' },
	{ name: 'interactive', type: 'boolean', description: 'Makes table rows selectable with mouse and adds keyboard navigation.' },
	{ name: 'multiselect', type: 'boolean', description: 'If true - a column with checkboxes will be added to the grid.' },
	{ name: 'sortby', type: 'string', description: 'Field name to sort by on initial render.' },
	{ name: 'sortdir', type: ['ASC', 'DESC'], default: '<em>ASC</em>', description: 'Initial sort direction.' },

	{ name: 'onclick', type: 'function', description: 'Triggered after a row has been clicked.' },
	{ name: 'ondblclick', type: 'function', description: 'Triggered after a row has been double-clicked.' },
	{ name: 'onkeydown', type: 'function', description: 'Triggered after key has been pressed.' },
	{ name: 'onselect', type: 'function', description: 'Triggered after a row selection has changed.' },
];

const columnProps = <ApiProp[]>[
	{ name: 'field', type: 'string', required: true, description: 'The field name of the column (must correspond to a key in the data objects).' },
	{ name: 'label', type: 'string', description: 'The label of the column.' },
	{ name: 'width', type: 'number', description: 'The width of the column.' },
	{ name: 'align', type: ['left', 'center', 'right'], description: 'The alignment of the column.' },
	{ name: 'sortable', type: 'boolean', description: 'Whether the column is sortable.' },
	{ name: 'total', type: 'boolean', description: 'Whether the column should display a total.' },
	{ name: 'renderer', type: 'function', description: 'A function <em>(item) =&gt; string</em> to format the cell content. Output is injected via <em>{@html}</em>.' },
	{ name: 'snippet', type: 'Snippet', description: 'A Svelte 5 snippet <em>(item) =&gt; ...</em> that renders the cell. Takes precedence over <em>renderer</em> when both are set.' },
];



const columns: GridColumn[] = [
	{ field: 'name', label: 'Name', sortable: true, snippet: nameCell },
	{ field: 'date', label: 'Date', width: 110, sortable: true },
	{ field: 'price', label: 'Price', width: 110, align: 'right', sortable: true, total: true,
		renderer: (item) => `€${item.price}`
	}
];

const data = [
	{ id: 1, name: 'John Doe', date: '2020-01-01', price: 100 },
	{ id: 2, name: 'Jane Doe', date: '2020-01-02', price: 200 },
	{ id: 3, name: 'Jim Doe', date: '2020-01-03', price: 300 },
	{ id: 4, name: 'Jill Doe', date: '2020-01-04', price: 400 },
	{ id: 5, name: 'Jack Doe', date: '2020-01-05', price: 500 },
	{ id: 6, name: 'John Smith', date: '2023-01-01', price: 100 },
	{ id: 7, name: 'Jane Smith', date: '2023-01-02', price: 200 },
	{ id: 8, name: 'Jim Smith', date: '2023-01-03', price: 300 },
	{ id: 9, name: 'Jill Smith', date: '2023-01-04', price: 400 },
	{ id: 10, name: 'Jack Smith', date: '2023-01-05', price: 500 },
	{ id: 11, name: 'John Doe', date: '2020-01-01', price: 100 },
	{ id: 12, name: 'Jane Doe', date: '2020-01-02', price: 200 },
	{ id: 13, name: 'Jim Doe', date: '2020-01-03', price: 300 },
	{ id: 14, name: 'Jill Doe', date: '2020-01-04', price: 400 },
	{ id: 15, name: 'Jack Doe', date: '2020-01-05', price: 500 },
	{ id: 16, name: 'John Smith', date: '2023-01-01', price: 100 },
	{ id: 17, name: 'Jane Smith', date: '2023-01-02', price: 200 },
	{ id: 18, name: 'Jim Smith', date: '2023-01-03', price: 300 },
	{ id: 19, name: 'Jill Smith', date: '2023-01-04', price: 400 },
	{ id: 20, name: 'Jack Smith', date: '2023-01-05', price: 500 }
];

// const data2 = [
// 	{ id: 1, name: 'John Smith', date: '2023-01-01', price: 100 },
// 	{ id: 2, name: 'Jane Smith', date: '2023-01-02', price: 200 },
// 	{ id: 3, name: 'Jim Smith', date: '2023-01-03', price: 300 },
// 	{ id: 4, name: 'Jill Smith', date: '2023-01-04', price: 400 },
// 	{ id: 5, name: 'Jack Smith', date: '2023-01-05', price: 500 }
// ];


function onclick (e, args) {
	console.log('grid event:', e.type, args);
}


</script>
