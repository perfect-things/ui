<h2>Textarea</h2>

<h3>Default</h3>
<Textarea></Textarea>

<h3>Disabled</h3>
<Textarea disabled></Textarea>

<h3>Placeholder</h3>
<Textarea placeholder="Add some text"></Textarea>


<h3>Autogrow</h3>
<Textarea autogrow></Textarea>



<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { Textarea } from '../../src';
import { API } from '../api-table';
import { CodeExample } from '../code-example';

const apiProps = [
	{ name: 'autogrow', description: 'If present - the textarea will grow in height to match the text and avoid scrollbar.' },
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying textarea.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying textarea.' },
	{ name: 'placeholder', type: 'string', description: 'Assign placeholder to the underlying textarea.' },
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until filled.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying textarea.' },
	{ name: 'value', type: 'string', description: 'Initial value of the textarea.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'on:input', type: 'function', description: 'Triggered when input value is edited.' },
];

const exampleHtml = `
<Textarea autogrow on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;

</script>
