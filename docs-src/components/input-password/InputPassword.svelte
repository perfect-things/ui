<h2>Input Password</h2>

<h3>Default</h3>
<InputPassword name="password" placeholder="Not 123456"/>

<h3>With password strength indicator</h3>
<p>* <a href="https://github.com/dropbox/zxcvbn">zxcvbn</a> lib must be available and loaded via a <em>&lt;script&gt;</em> tag.</p>

<InputPassword strength/>


<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { InputPassword } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'placeholder', type: 'string', description: 'Assign placeholder to the underlying input.' },
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until filled.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
	{ name: 'strength', description: 'Provide the password strength UI (zxcvbn lib must be loaded).' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'on:keydown', type: 'function', description: 'Triggered when a key is down.' },
];

const exampleHtml = `
<InputPassword strength on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;
</script>
