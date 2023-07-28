<h2>Input Math</h2>
<p>Enhanced input number field, which allows user to enter the basic math symbols: <em>+ - * / ( )</em><br>
	and - on blur - replaces the equasion with the resolved number.</p>

<hr>

<h3>Normal</h3>
<InputMath label="Enter amount" />

<h3>With info box</h3>
<InputMath label="Enter amount" info="You can add 2 numbers here"/>

<h3>With info box and error.</h3>
<InputMath label="Enter amount" info="You can add 2 numbers here" error="Number must be big!"/>

<h3>Label on the left</h3>
<InputMath label="Label is on the left" labelOnTheLeft="true"/>


<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { InputMath } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'info', type: 'string', description: 'Show info message above the input.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the input.' },
	{ name: 'label', type: 'string', description: 'Label for the input.' },
	{ name: 'labelOnTheLeft', type: ['true', 'false'], default: 'false', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'placeholder', type: 'string', description: 'Assign placeholder to the underlying input.' },
	{ name: 'required', description: 'Mark the input as <i>aria-required</i>.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'on:keydown', type: 'function', description: 'Triggered when a key is down.' },
];


const exampleHtml = `
<InputMath label="Enter amount" on:change="{onChange}" />

<script>
function onChange (e) {
    const { value, oldValue } = e.detail;
    console.log({ value, oldValue });
}
&lt;/script>
`;

</script>
