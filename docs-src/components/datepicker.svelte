<h2>Datepicker</h2>
<p>This is a wrapper for the vanilla javascript component <a href="https://mymth.github.io/vanillajs-datepicker/#/">vanillajs-datepicker</a>.</p>
<br>

<h3>Normal</h3>
<Datepicker />

<h3>Show on focus</h3>
<Datepicker showOnFocus="true" placeholder="Custom placeholder" />

<h3>Change date format</h3>
<Datepicker format="dd-mm-yy" />


<h3>In a container with <em>overflow: hidden</em></h3>
<p>Where parent container has <em>overflow: hidden</em>, <em>elevate="true"</em>
	property must be set on the component.</p>
<div class="docs-overflow-box">
	<small>overflow: hidden</small>
	<Datepicker elevate="true" />
</div>
<p>This option should only be used when absolutely necessary (e.g. when Datepicker
	is used inside dialogs/popups), because it makes the component less accessible
	(the list container is rendered directly in the <em>&lt;body&gt;</em>, and not next to the input).</p>



<hr>
<h3>Example instantiation</h3>
<code>
&lt;Datepicker on:change="&lbrace; onChange &rbrace;" /&gt;

&lt;script&gt;
function onChange (e) &lbrace;
    const &lbrace; value, oldValue &rbrace; = e.detail;
    console.log(&lbrace; value, oldValue &rbrace;);
&rbrace;
&lt;/script&gt;
</code>

<API props="{apiProps}"/>


<script>
import { Datepicker } from '../../src';
import API from '../api-table';

const apiProps = [
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until checked.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'placeholder', type: 'string', default: 'yyyy-mm-dd', description: 'Add a custom placeholder for the input.' },
	{ name: 'className', type: 'string', description: 'Additional css class name to be added to the component container.' },
	{ name: 'format', type: 'string', default: 'yyyy-mm-dd', description: 'Date format (<a href="https://mymth.github.io/vanillajs-datepicker/#/date-string+format" target="_blank">docs</a>).' },

	{ name: 'showOnFocus', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the datepicker will be automatically open when the input gets focus (normally opens on click).' },
	{ name: 'elevate', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the popup will be rendered into the <i>body</i>, to ensure it\'s not hidden under some elements (see example above).' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'on:keydown', type: 'function', description: 'Triggered when a key is down.' },
	{ name: 'value', type: 'string', description: 'Initial value of the input.' },
];

</script>
