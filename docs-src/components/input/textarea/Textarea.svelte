<h2>Textarea</h2>

<h3>Default</h3>
<Textarea label="Write some text"></Textarea>

<h3>Disabled</h3>
<Textarea label="Write some text" disabled></Textarea>

<h3>Placeholder</h3>
<Textarea label="Write some text" placeholder="Add some text"></Textarea>


<h3>Autogrow</h3>
<Textarea label="Write some text" autogrow></Textarea>


<h3>With info text</h3>
<Textarea label="Write some text" info="This is some extra info for you"></Textarea>

<h3>With error and live validation</h3>
<Textarea label="Write some text" {error} {oninput}></Textarea>

<h3>With info, error and autogrow</h3>
<Textarea label="Write some text" info="Don't make any mistakes!" error="You have a typo somewhere in here" autogrow></Textarea>

<h3>Label on the left</h3>
<Textarea label="Label is on the left" labelOnTheLeft/>



<CodeExample html={exampleHtml} />

<API props={apiProps}/>


<script>
import { Textarea } from '../../../../src';
import { API } from '../../../api-table';
import { CodeExample } from '../../../code-example';

const apiProps = [
	{ name: 'autogrow', description: 'If present - the textarea will grow in height to match the text and avoid scrollbar.' },
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Make the textarea disabled.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying textarea.' },
	{ name: 'info', type: 'string', description: 'Show info message above the textarea.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the textarea.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying textarea.' },
	{ name: 'label', type: 'string', description: 'Label for the textarea.' },
	{ name: 'labelOnTheLeft', type: ['true', 'false'], default: 'false', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' },
	{ name: 'placeholder', type: 'string', description: 'Assign placeholder to the underlying textarea.' },
	{ name: 'required', description: 'Mark the textarea as <i>aria-required</i>.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying textarea.' },
	{ name: 'value', type: 'string', description: 'Initial value of the textarea.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'onchange', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'oninput', type: 'function', description: 'Triggered when textarea value is edited.' },
];

const exampleHtml = `
<Textarea autogrow onchange={onChange} error="Invalid text" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;


let error = $state('Enter "hello" to pass.');
function oninput (e) {
	error = e.target.value === 'hello' ? '' : 'Enter "hello" to pass.';
}

</script>
