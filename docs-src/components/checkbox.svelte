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


<hr>
<h3>Example instantiation</h3>
<code>
&lt;Checkbox on:change="&lbrace; onChange &rbrace;" /&gt;

&lt;script&gt;
function onChange (e) &lbrace;
    const &lbrace; value, oldValue &rbrace; = e.detail;
    console.log(&lbrace; value, oldValue &rbrace;);
&rbrace;
&lt;/script&gt;
</code>

<hr>
<API props="{apiProps}"/>


<script>
import { Checkbox } from '../../src';
import API from '../api-table';

const apiProps = [
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until checked.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'className', type: 'string', description: 'Additional css class name to be added to the input.' },
	{ name: 'checked', type: ['true', 'false'], description: 'Make the checkbox checked or unchecked.' },
	{ name: 'indeterminate', type: ['true', 'false'], description: 'If set to <i>true</i> it makes the checkbox show its 3rd state - indeterminate.' },
];


function onchange (e) {
	console.log(e.target.checked);
}
</script>
