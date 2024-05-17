<h2>Grid</h2>
<p>Grid component is basically a table on steroids. </p>
<div class="table-viewport">
	<Grid round title="Grid with data" {columns} {data} multiselect />
</div>

<!--<div class="table-viewport">-->
<!--	<Grid round title="Grid with data" {columns} data={data2} multiselect />-->
<!--</div>-->

<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { Grid } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'data', type: 'object', description: 'Props to attach to the element\'s <em>dataset</em> attribute.' },
	{ name: 'round', description: 'Adds rounded corners to the table.' },
	{ name: 'rowSelector', type: 'string', default: 'tbody tr', description: 'A selector for a table row.<br>This is useful if a table needs row groups, in which case it would have a mix of TRs and TBODYs for rows. Both can have the same class, e.g. <em>.row</em> and this selector should then be provided here.' },
	{ name: 'scrollContainer', type: ['string','Element'], default: 'table wrapper', description: 'Selector or HTML Element to the scroll container. If table wrapper\'s height is not set to 100% of the container, and is taller than the container - the container will have to be scrollable, and in this case it must be provided here.' },
	{ name: 'scrollCorrectionOffset', type: 'number', default: '0', description: 'If an external <em>scrollContainer</em> is used - it is possible that it will have non-zero padding set, thus the table wrapper will be offset from the beginning of the container. This offset should be set here, so that the sticky headers work correctly.' },
	{ name: 'interactive', type: ['true', 'false'], description: 'Makes table rows selectable with mouse and adds keyboard navigation.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'on:click', type: 'function', description: 'Triggered after a row has been clicked.' },
	{ name: 'on:dblclick', type: 'function', description: 'Triggered after a row has been double-clicked.' },
	{ name: 'on:keydown', type: 'function', description: 'Triggered after key has been pressed.' },
	{ name: 'on:select', type: 'function', description: 'Triggered after a row selection has changed.' },
];



const columns = [
	{ field: 'name', label: 'Name', sortable: true },
	{ field: 'date', label: 'Date', width: 200, sortable: true },
	{ field: 'price', label: 'Price', width: 200, sortable: true, total: true },
];

const data = [
	{ id: 1, name: 'John Doe', date: '2020-01-01', price: 100 },
	{ id: 2, name: 'Jane Doe', date: '2020-01-02', price: 200 },
	{ id: 3, name: 'Jim Doe', date: '2020-01-03', price: 300 },
	{ id: 4, name: 'Jill Doe', date: '2020-01-04', price: 400 },
	{ id: 5, name: 'Jack Doe', date: '2020-01-05', price: 500 }
];

// const data2 = [
// 	{ id: 1, name: 'John Smith', date: '2023-01-01', price: 100 },
// 	{ id: 2, name: 'Jane Smith', date: '2023-01-02', price: 200 },
// 	{ id: 3, name: 'Jim Smith', date: '2023-01-03', price: 300 },
// 	{ id: 4, name: 'Jill Smith', date: '2023-01-04', price: 400 },
// 	{ id: 5, name: 'Jack Smith', date: '2023-01-05', price: 500 }
// ];


const exampleHtml = `
<Grid />
`;



</script>
