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


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';

import { InputTag } from '../../../../src';
import { CodeExample } from '../../../code-example';

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.bindinputelement,
	{ name: 'tags', type: 'array', required: true, description: 'An array of strings (the list should contain unique values).' },
	{ name: 'value', type: 'string', description: 'Initial value of the input - a comma-separated string.' },
	{ name: 'bind:listElement', type: 'HTMLElement', description: 'Exposes the HTML element of the list.' },
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
