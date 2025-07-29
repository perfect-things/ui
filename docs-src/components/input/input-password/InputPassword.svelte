<h2>Input Password</h2>
	<p>Enhanced input password field with password strength indicator.</p>
	<p>To be able to use the password strength indicator, <a href="https://github.com/dropbox/zxcvbn">zxcvbn</a> lib is used.<br>
		If it's not already loaded, it will be loaded from the CDN (<a href="https://cdn.jsdelivr.net/npm/zxcvbn/+esm">jsdelivr.net</a>).
	</p>


	<hr>
	<h3>Default</h3>
		<InputPassword label="Current password" name="password" placeholder="Not 123456" bind:value={val}/><br>
	<p>Your secret password is: {val}</p>

	<h3>Disabled</h3>
		<InputPassword label="Current password" name="password" disabled /><br>

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



<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table';
import { API, PROPS } from '../../../api-table';
import { InputPassword } from '../../../../src';
import { CodeExample } from '../../../code-example';
let val = $state();

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.required,
	PROPS.onkeydown,
	PROPS.bindinputelement,
	{ name: 'strength', description: 'Provide the password strength UI.' },
	{ name: 'value', type: ['string', 'number'], description: 'Initial value of the input.' },
];

const exampleHtml = `
<InputPassword strength label="Current password" {onchange} />

<script>
function onchange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;
</script>
