<h2>Input</h2>

<h3>Text</h3>
<input type="text" on:input="{oninput}" />

<h3>Password</h3>
<input type="password" />

<h3>Number</h3>
<input type="number" />

<h3>Better Number</h3>
<Number />

<h3>Maths (allow +-*/)</h3>


<h3>Search</h3>
<input type="search" />

<h3>Checkbox</h3>
<input type="checkbox" />
<input type="checkbox" disabled />

<h3>Radio button</h3>
<input name="radio-group" type="radio" disabled />
<input name="radio-group" type="radio" />
<input name="radio-group" type="radio" />

<h3>Textarea</h3>
<textarea>Hello!</textarea>

<script>
import '../../src/input';
import Number from '../../src/input-number';

function oninput (e) {
	console.log(e);
}
</script>
