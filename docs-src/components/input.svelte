<h2>Input</h2>

<p>The basic inputs are not componentised, only styled with css.</p>
<p>Only <i>NumberInput</i> is a special component here.</p>
<br>

<h3>Text</h3>
<input type="text" on:input="{oninput}" />

<h3>Password</h3>
<input type="password" />

<h3>Number</h3>
<input type="number" />

<h3>Better Number</h3>
<InputNumber />

<h3>Search</h3>
<input type="search" />

<h3>Radio button</h3>
<input name="radio-group" type="radio" disabled />
<input name="radio-group" type="radio" />
<input name="radio-group" type="radio" />


<CodeExample html="{exampleHtml}" />


<script>
import { InputNumber } from '../../src';
import CodeExample from '../code-example/index.svelte';

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
