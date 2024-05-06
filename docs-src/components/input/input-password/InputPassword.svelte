<h2>Input Password</h2>
<p>Enhanced input password field with password strength indicator.</p>
<p>To be able to use the password strength indicator, <a href="https://github.com/dropbox/zxcvbn">zxcvbn</a> lib must be available on the global scope (<em>window.zxcvbn</em>).<br>
	This script file is available in this npm package <em>node_modules/@perfectthings/ui/docs/zxcvbn.js</em>, from where it can be copied and loaded,<br>
	e.g. in a <em>&lt;script&gt;</em> tag.
</p>


<hr>

<h3>Default</h3>
<InputPassword label="Current password" name="password" placeholder="Not 123456" bind:value="{val}"/><br>
<p>Your secret password is: {val}</p>

<h3>Disabled</h3>
<InputPassword label="Current password" name="password" disabled bind:value="{val}"/><br>

<h3>With password strength indicator</h3>


<InputPassword strength />

<h3>With password strength indicator and label</h3>
<InputPassword strength label="New password"/>

<h3>With password strength indicator, label, and info box</h3>
<InputPassword strength label="New password" info="Password rules"/>

<h3>With password strength indicator, label, info box, and error</h3>
<InputPassword strength label="New password" info="Password rules" error="Your password is weak!"/>

<h3>Label on the left</h3>
<InputPassword label="Label is on the left" labelOnTheLeft/>

<h3>With password strength and label on the left</h3>
<InputPassword strength labelOnTheLeft label="New password"/>



<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { InputPassword } from '../../../../src';
import { API } from '../../../api-table';
import { CodeExample } from '../../../code-example';
let val;

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
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until filled.' },
	{ name: 'strength', description: 'Provide the password strength UI (zxcvbn lib must be loaded).' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'on:keydown', type: 'function', description: 'Triggered when a key is down.' },
];

const exampleHtml = `
<InputPassword strength label="Current password" on:change="{onChange}" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;
</script>
