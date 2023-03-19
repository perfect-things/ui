<h2>Tree</h2>

<div style="display: inline-block; width: 200px;">
	<Tree {items} on:select="{onSelect}"/>
</div>


<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>

<script>
import { Tree } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'title', type: 'string', description: 'Title of the component.' },
	{ name: 'on:select', type: 'function', description: 'Triggered after an item was selected.' },
];

const exampleHtml = `
<Tree {items} on:select="{onSelect}"/>

<script>
const items = [
	{ id: 1, name: 'One' },
	{ id: 2, name: 'Two', items: [
		{ id: 21, name: 'One' },
		{ id: 22, name: 'Two' },
		{ id: 23, name: 'Three', items: [
			{ id: 231, name: 'One' },
			{ id: 232, name: 'Two' },
		] },
		{ id: 24, name: 'Four' },
	] },
	{ id: 3, name: 'Three' },
];

function onSelect (e) {
	console.log(e.detail);
}
&lt;/script>
`;

function onSelect (e) {
	console.log(e.detail);
}


const items = [
	{ id: 1, name: 'One' },
	{ id: 2, name: 'Two' },
	{ id: 3, name: 'Three' },
	{ id: 4, name: 'Four', items: [
		{ id: 41, name: 'One' },
		{ id: 42, name: 'Two' },
		{ id: 43, name: 'Three' },
		{ id: 44, name: 'Four', items: [
			{ id: 441, name: 'One' },
			{ id: 442, name: 'Two' },
			{ id: 443, name: 'Three' },
			{ id: 444, name: 'Four' },
			{ id: 445, name: 'Five' },
			{ id: 446, name: 'Six' },
			{ id: 447, name: 'Seven', items: [
				{ id: 4471, name: 'One' },
				{ id: 4472, name: 'Two' },
				{ id: 4473, name: 'Three' },
				{ id: 4474, name: 'Four' },
				{ id: 4475, name: 'Five' },
				{ id: 4476, name: 'Six' },
				{ id: 4477, name: 'Seven' },
				{ id: 4478, name: 'Eight' },
				{ id: 4479, name: 'Nine' },
				{ id: 44710, name: 'Ten' },
			] },
			{ id: 448, name: 'Eight' },
			{ id: 449, name: 'Nine' },
			{ id: 4410, name: 'Ten' },
		] },
		{ id: 45, name: 'Five' },
		{ id: 46, name: 'Six' },
		{ id: 47, name: 'Seven' },
		{ id: 48, name: 'Eight' },
		{ id: 49, name: 'Nine' },
		{ id: 410, name: 'Ten' },
	] },
	{ id: 5, name: 'Five' },
	{ id: 6, name: 'Six' },
	{ id: 7, name: 'Seven', items: [
		{ id: 71, name: 'One' },
		{ id: 72, name: 'Two' },
		{ id: 73, name: 'Three' },
		{ id: 74, name: 'Four' },
		{ id: 75, name: 'Five' },
		{ id: 76, name: 'Six' },
		{ id: 77, name: 'Seven' },
		{ id: 78, name: 'Eight' },
		{ id: 79, name: 'Nine' },
		{ id: 710, name: 'Ten' },
	] },
	{ id: 8, name: 'Eight' },
	{ id: 9, name: 'Nine' },
	{ id: 10, name: 'Ten' },
];

</script>
