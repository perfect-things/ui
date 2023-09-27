<h2>Input</h2>

<p>
	The basic inputs are styled with css.<br>
	Enhanced components provide additional functionality and better DX.
</p>

<br>

<h3>Normal</h3>
<InputText on:input="{oninput}" bind:value="{val}" />
<p>Input value: {val}</p>

<h3>Disabled</h3>
<InputText disabled value="disabled value" on:input="{oninput}" />


<h3>With validation</h3>
<InputText
	label="Validate on change"
	error="{error1}"
	value="{val}"
	on:change="{onchange}" />

<br>

<InputText
	label="Validate on input"
	info="This should be avoided in most cases. Validating input as user is typing is a bad UX."
	required
	error="{error2}"
	value="{val}"
	on:input="{oninput}" />


<h3>Label on the left</h3>
<InputText label="Label is on the left" labelOnTheLeft="true"/>



<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { InputText } from '../../../../src';
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
	{ name: 'placeholder', type: 'string', description: 'Assign placeholder to the underlying input.' },
	{ name: 'required', description: 'Mark the input as <i>aria-required</i>. The actual validation must be done in the consumer.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'on:change', type: 'function', description: 'Triggered after the value changes and the focus leaves the input.' },
	{ name: 'on:input', type: 'function', description: 'Triggered as soon as the input value changes.' },
];


const exampleHtml = `
<InputText label="Email" error="Invalid email" value="admin" on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;

let val = 'Hi!';
let error1 = '', error2 = '';

const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function validate (v) {
	if (!v) return 'This field is required';
	if (!email.test(v)) return 'Invalid email';
	return;
}

function onchange (e) {
	error1 = validate(e.target.value);
	console.log(e.target.value);
}

function oninput (e) {
	error2 = validate(e.target.value);
	console.log(e.target.value);
}


oninput({ target: { value: '-' } });

</script>
