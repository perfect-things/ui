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



<hr>
<h3>Example instantiation</h3>
<code>
&lt;input type="text" on:change="&lbrace;onChange&rbrace;" /&gt;
&lt;InputNumber /&gt;

&lt;script&gt;
function onChange (e) &lbrace;
    console.log('value', e.target.value);
&rbrace;
&lt;/script&gt;
</code>


<script>
import { InputNumber } from '../../src';

function oninput (e) {
	console.log(e);
}
</script>
