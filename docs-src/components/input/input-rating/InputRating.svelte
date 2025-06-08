<h2>Input Rating</h2>

<br>

<h3>Normal</h3>
<InputRating onkeydown={onkey} bind:value={item.value}/>
{item.value || ''}


<h3>Different symbol</h3>
<InputRating icon="circle" />


<h3>More stars</h3>
<InputRating max="8" />


<h3>Light (no background)</h3>
<InputRating light />


<h3>Label</h3>
<InputRating label="Pick one" />


<h3>Info</h3>
<InputRating label="Pick one" info="Pick your pick" />


<h3>Error</h3>
<InputRating
	label="Pick one"
	error={error}
	onchange={onchange}/>


<h3>Label on the left</h3>
<InputRating label="Label is on the left" labelOnTheLeft="true"/>



<CodeExample html={exampleHtml} />

<API props={apiProps}/>


<script>
import { InputRating } from '../../../../src';
import { API } from '../../../api-table';
import { CodeExample } from '../../../code-example';

const item = $state({ value: 2 });

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component container.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'icon', type: 'string', default: 'star', description: 'Icon name for the symbol.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'info', type: 'string', description: 'Show info message above the input.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the input.' },
	{ name: 'label', type: 'string', description: 'Label for the input.' },
	{ name: 'labelOnTheLeft', type: ['true', 'false'], default: 'false', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' },
	{ name: 'light', description: 'Disable background and border - for use cases other than in form context.<br>Light does not work when the input has error.' },
	{ name: 'max', type: 'number', description: 'How many stars to show.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until checked.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'value', type: 'string', description: 'Initial value of the input.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'onchange', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'onkeydown', type: 'function', description: 'Triggered when a key is down.' },
];

const exampleHtml = `
<InputRating onchange={ onChange } bind:value={value} />

<script>
let value = 4;
function onChange (e) {
	const val = e.detail;
    console.log(val);
}
&lt;/script>

`;



let error = $state('You picked wrong!');

function onchange (e) {
	const val = e.detail;
	error = val === '1' ? '' : 'You picked wrong!';
}


function onkey (e) {
	console.log(e.detail.event.key);
}
</script>
