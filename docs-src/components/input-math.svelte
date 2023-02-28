<h2>InputMath (allow + - * /)</h2>

<InputMath />



<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { InputMath } from '../../src';
import API from '../api-table/index.svelte';
import CodeExample from '../code-example/index.svelte';

const apiProps = [
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'placeholder', type: 'string', description: 'Assign placeholder to the underlying input.' },
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until filled.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'on:keydown', type: 'function', description: 'Triggered when a key is down.' },
];


const exampleHtml = `
<InputMath on:change="{onChange}" />

<script>
function onChange (e) {
    const { value, oldValue } = e.detail;
    console.log({ value, oldValue });
}
&lt;/script>
`;

</script>
