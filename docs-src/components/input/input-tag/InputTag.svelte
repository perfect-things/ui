<h2>Input Tag</h2>


<h3>Normal</h3>
<InputTag bind:value />
<p>Input value: {value}</p>

<h3>With onchange callback</h3>
<InputTag value="tag1, anotherOne, long-tag-name" {tags} {onchange} />

<h3>Long list of tags</h3>
<InputTag value="tag1, anotherOne, long-tag-name" tags={tags2}/>


<h3>Disabled</h3>
<InputTag disabled value="disabled" />


<h3>Label on the left</h3>
<InputTag label="Label is on the left" labelOnTheLeft/>



<CodeExample html={exampleHtml} />

<API props={apiProps}/>


<script>
import { InputTag } from '../../../../src';
import { CodeExample } from '../../../code-example';
import { API } from '../../../api-table';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'info', type: 'string', description: 'Show info message above the input.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the input.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'label', type: 'string', description: 'Label for the input.' },
	{ name: 'labelOnTheLeft', type: ['true', 'false'], default: 'false', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' },
	{ name: 'tags', type: 'array', required: true, description: 'An array of strings (the list should contain unique values).' },
	{ name: 'title', type: 'string', description: 'Assign title to the component' },
	{ name: 'value', type: ['string'], description: 'Initial value of the input - a comma-separated string.' },

	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'bind:listElement', type: 'element', description: 'Exposes the HTML element of the list.' },
	{ name: 'onchange', type: 'function', description: 'Triggered when tag is added/removed from the input value.' },
];


const exampleHtml = `
<InputTag label="Tags" value="tag1, tag2" {onchange} />

<script>
function onchange (e, value) {
    console.log('tags', value);
}
&lt;/script>
`;



let value = $state('tag1, tag2');
const tags = [
	'Tag1',
	'AnotherOne',
	'Long-name-tag-3',
	...Array.from({ length: 40 }, (v, i) => `Long-name-tag-${i+4}`)
];

const tags2 = Array.from({ length: 40 }, (v, i) => 'Tag-' + i);

function onchange (e, val) {
	console.log('value:', val);
}
</script>
