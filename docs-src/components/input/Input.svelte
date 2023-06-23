<h2>Input</h2>

<p>The basic inputs are not componentised, only styled with css.</p>
<p>Only <em>InputNumber</em> (Better Number Input) is a special component here.</p>
<br>

<h3>Text</h3>
<input type="text" on:input="{oninput}" />

<h3>Disabled</h3>
<input type="text" disabled value="disabled value"/>

<h3>Invalid</h3>
<label for="invalid-input">Invalid input</label>
<p class="input-error"><Icon name="error"/> This field is required. </p>
<input id="invalid-input" type="text" class="error has-error-message" />

<h3>Password</h3>
<input type="password" />

<h3>Number</h3>
<input type="number" />

<h3>Better Number Input</h3>
<p>Only allows numbers, a single dot (for decimals) and the minus sign (which is only allowed as a first character)</p>
<InputNumber />

<h3>Search</h3>
<input type="search" />

<h3>Radio button</h3>
<input name="radio-group" type="radio" disabled />
<input name="radio-group" type="radio" />
<input name="radio-group" type="radio" />


<CodeExample html="{exampleHtml}" />


<script>
import { InputNumber, Icon } from '../../../src';
import { CodeExample } from '../../code-example';

const exampleHtml = `
<input type="text" on:change="{onChange}" />
<InputNumber />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;

function oninput (e) {
	console.log(e);
}
</script>
