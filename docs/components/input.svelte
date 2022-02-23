<h2>Input</h2>

<h3>Text</h3>
<input type="text" on:input="{oninput}" />

<h3>Password</h3>
<input type="password" />

<h3>Number</h3>
<input type="number" />

<h3>Better Number</h3>
<InputNumber />

<h3>Maths (allow +-*/)</h3>
<InputNumberPlus />


<h3>Search</h3>
<input type="search" />

<h3>Checkbox</h3>
<input type="checkbox" />
<input type="checkbox" disabled />

<h3>Radio button</h3>
<input name="radio-group" type="radio" disabled />
<input name="radio-group" type="radio" />
<input name="radio-group" type="radio" />


<script>
import '../../src/input';
import { InputNumber, InputNumberPlus } from '../../src';

function oninput (e) {
	console.log(e);
}
</script>
