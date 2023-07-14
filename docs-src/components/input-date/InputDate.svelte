<h2>Input Date</h2>
<p>This is a wrapper for the vanilla javascript component <a href="https://mymth.github.io/vanillajs-datepicker/#/">vanillajs-datepicker</a>.</p>
<br>

<h3>Normal</h3>
<InputDate on:keydown="{onkey}"/>

<h3>Show on focus</h3>
<InputDate showOnFocus="true" placeholder="Custom placeholder" />

<h3>Change date format</h3>
<InputDate format="dd-mm-yy" />


<h3>In a container with <em>overflow: hidden</em></h3>
<p>Where parent container has <em>overflow: hidden</em>, <em>elevate="true"</em>
	property must be set on the component.</p>
<div class="docs-overflow-box">
	<small>overflow: hidden</small>
	<InputDate elevate="true" />
</div>
<p>This option should only be used when absolutely necessary (e.g. when InputDate
	is used inside dialogs/popups), because it makes the component less accessible
	(the list container is rendered directly in the <em>&lt;body&gt;</em>, and not next to the input).</p>


<h3>Label</h3>
<InputDate label="Pick one" />

<h3>Info</h3>
<InputDate label="Pick one" info="Pick your pick" />

<h3>Error</h3>
<InputDate
	label="Pick one"
	error="{error}"
	on:change="{onchange}"/>




<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { InputDate } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component container.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'elevate', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the popup will be rendered into the <i>body</i>, to ensure it\'s not hidden under some elements (see example above).' },
	{ name: 'format', type: 'string', default: 'yyyy-mm-dd', description: 'Date format (<a href="https://mymth.github.io/vanillajs-datepicker/#/date-string+format" target="_blank">docs</a>).' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'info', type: 'string', description: 'Show info message above the input.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the input.' },
	{ name: 'label', type: 'string', description: 'Label for the input.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'placeholder', type: 'string', default: 'yyyy-mm-dd', description: 'Add a custom placeholder for the input.' },
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until checked.' },
	{ name: 'showOnFocus', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the datepicker will be automatically open when the input gets focus (normally opens on click).' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'value', type: 'string', description: 'Initial value of the input.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'on:keydown', type: 'function', description: 'Triggered when a key is down.' },
];

const exampleHtml = `
<InputDate on:change="{ onChange }" />

<script>
function onChange (e) {
    console.log(e.detail.value);
}
&lt;/script>

`;



let error = 'You picked wrong!';

function onchange (e) {
	const val = e.detail;
	error = val === '1' ? '' : 'You picked wrong!';
}


function onkey (e) {
	console.log(1111, e.detail.event.key);
}
</script>
