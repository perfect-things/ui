<h2>Textarea</h2>

	<h3>Default</h3>
		<Textarea {onchange} label="Write some text"></Textarea>

	<h3>Disabled</h3>
		<Textarea {onchange} label="Write some text" disabled></Textarea>

	<h3>Placeholder</h3>
		<Textarea {onchange} label="Write some text" placeholder="Add some text"></Textarea>

	<h3>Autogrow</h3>
		<Textarea {onchange} label="Write some text" autogrow></Textarea>

	<h3>With info text</h3>
		<Textarea {onchange} label="Write some text" info="This is some extra info for you"></Textarea>

	<h3>With error and live validation</h3>
		<Textarea {onchange} label="Write some text" {error} {oninput}></Textarea>

	<h3>With info, error and autogrow</h3>
		<Textarea {onchange} label="Write some text" info="Don't make any mistakes!" error="You have a typo somewhere in here" autogrow></Textarea>

	<h3>Label on the left</h3>
		<Textarea {onchange} label="Label is on the left" labelOnTheLeft/>


<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';
import { Textarea } from '../../../../src';
import { CodeExample } from '../../../code-example';

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.required,
	PROPS.oninput,
	{ name: 'autogrow', description: 'If present - the textarea will grow in height to match the text and avoid scrollbar.' },
	{ name: 'value', type: 'string', description: 'Initial value of the textarea.' },
];

const exampleHtml = `
<Textarea autogrow {onchange} error="Invalid text" />

<script>
function onchange (e, { value}) {
    console.log('value', value);
}
&lt;/script>
`;


function onchange (e) {
	console.log('value', e.target.value);
}


let error = $state('Enter "hello" to pass.');
function oninput (e) {
	error = e.target.value === 'hello' ? '' : 'Enter "hello" to pass.';
}

</script>
