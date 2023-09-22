<h2>Input Rating</h2>

<br>

<h3>Normal</h3>
<InputRating on:keydown="{onkey}" bind:value="{item.datevalue}"/>
{item.datevalue || ''}


<h3>Different symbol</h3>
<InputRating icon="circle" />

<h3>More stars</h3>
<InputRating max="10" />


<h3>Label</h3>
<InputRating label="Pick one" />

<h3>Info</h3>
<InputRating label="Pick one" info="Pick your pick" />

<h3>Error</h3>
<InputRating
	label="Pick one"
	error="{error}"
	on:change="{onchange}"/>


<h3>Label on the left</h3>
<InputRating label="Label is on the left" labelOnTheLeft="true"/>



<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { InputRating } from '../../../../src';
import { API } from '../../../api-table';
import { CodeExample } from '../../../code-example';

const item = {};

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component container.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'icon', type: 'string', default: 'star', description: 'Icon name for the symbol.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'info', type: 'string', description: 'Show info message above the input.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the input.' },
	{ name: 'label', type: 'string', description: 'Label for the input.' },
	{ name: 'labelOnTheLeft', type: ['true', 'false'], default: 'false', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' },
	{ name: 'max', type: 'number', description: 'How many stars to show.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until checked.' },
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
	console.log(e.detail.event.key);
}
</script>
