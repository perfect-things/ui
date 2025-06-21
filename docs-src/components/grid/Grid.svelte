<h2>Grid [alpha version]</h2>
<p>Grid component is basically a table on steroids. </p>
<div class="grid-viewport">
	<Grid
		round
		title="Grid with data"
		{columns}
		{data}
		multiselect
		onselect={onclick}
		onclick={onclick}
		ondblclick={onclick}/>
</div>

<!--<div class="table-viewport">-->
<!--	<Grid round title="Grid with data" {columns} data={data2} multiselect />-->
<!--</div>-->

<CodeExample html={exampleHtml} />

<API props={apiProps}/>


<script>
import { Grid } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';
import './Grid.css';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'columns', type: 'array', description: 'Array of columns definition. Each objects defines and describes a column in the grid.' },
	{ name: 'data', type: 'array', description: 'Array of items (each would constitute 1 row of the grid).' },
	{ name: 'round', description: 'Adds rounded corners to the table.' },
	{ name: 'rowSelector', type: 'string', default: 'tbody tr', description: 'A selector for a table row.<br>This is useful if a table needs row groups, in which case it would have a mix of TRs and TBODYs for rows. Both can have the same class, e.g. <em>.row</em> and this selector should then be provided here.' },
	{ name: 'scrollContainer', type: ['string','Element'], default: 'table wrapper', description: 'Selector or HTML Element to the scroll container. If table wrapper\'s height is not set to 100% of the container, and is taller than the container - the container will have to be scrollable, and in this case it must be provided here.' },
	{ name: 'scrollCorrectionOffset', type: 'number', default: '0', description: 'If an external <em>scrollContainer</em> is used - it is possible that it will have non-zero padding set, thus the table wrapper will be offset from the beginning of the container. This offset should be set here, so that the sticky headers work correctly.' },
	{ name: 'interactive', type: ['true', 'false'], description: 'Makes table rows selectable with mouse and adds keyboard navigation.' },
	{ name: 'multiselect', type: ['true', 'false'], description: 'If true - a column with checkboxes will be added to the grid.' },
	{ name: 'title', type: 'string', description: 'Ads header with title on top of the grid.' },

	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'onclick', type: 'function', description: 'Triggered after a row has been clicked.' },
	{ name: 'ondblclick', type: 'function', description: 'Triggered after a row has been double-clicked.' },
	{ name: 'onkeydown', type: 'function', description: 'Triggered after key has been pressed.' },
	{ name: 'onselect', type: 'function', description: 'Triggered after a row selection has changed.' },
];



const columns = [
	{ field: 'name', label: 'Name', sortable: true,
		renderer: (item) => `<a href="#Grid/${item.id}">${item.name}</a>`
	},
	{ field: 'date', label: 'Date', width: 200, sortable: true },
	{ field: 'price', label: 'Price', width: 200, sortable: true, total: true,
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


function onclick (e) {
	console.log(e.type);
}


const exampleHtml = `
<Grid {data} {columns} onclick={onclick}/>

<script>
import { Grid } from '@perfect-things/ui';

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

&lt;/script>
`;



</script>
