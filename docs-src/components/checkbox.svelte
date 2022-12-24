<h2>Checkbox</h2>

<h3>Normal</h3>
<Checkbox on:change="{onchange}" />

<h3>Disabled</h3>
<Checkbox disabled />

<h3>Checked</h3>
<Checkbox checked="true" />

<h3>Checked disabled</h3>
<Checkbox checked="true" disabled />

<h3>Indeterminate</h3>
<Checkbox indeterminate="true" />


<h3>Invalid</h3>
<Checkbox required />



<script>
import { Checkbox } from '../../src';

function onchange (e) {
	console.log(e.target.checked);
}
</script>
