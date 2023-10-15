<h2>Range</h2>
<p>A wrapper around the native range input.</p>

<h3>Default</h3>
<Range />

<h3>Disabled</h3>
<Range disabled />

<h3>With ticks hidden</h3>
<Range hideTicks />

<h3>With different constraints</h3>
<Range min="10" max="100" step="5" />

<h3>With label</h3>
<Range label="Slide to the right" />

<h3>With label and info text</h3>
<Range label="Write some text" info="This is some info for you" />

<h3>With label and error and live validation</h3>
<Range label="Move the slider" {error} on:change="{onChange}" value="5" />

<h3>With label, info, and error</h3>
<Range label="Move the slider" info="Don't make any mistakes!" error="You did not slide!" />

<h3>Label on the left</h3>
<Range label="Label is on the left" labelOnTheLeft="true"/>



<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>


<script>
import { Range } from '../../../../src';
import { API } from '../../../api-table';
import { CodeExample } from '../../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Make the input disabled.' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying input.' },
	{ name: 'info', type: 'string', description: 'Show info message above the input.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the input.' },
	{ name: 'hideTicks', description: 'If present, the ticks will not be shown.' },
	{ name: 'name', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'label', type: 'string', description: 'Label for the input.' },
	{ name: 'labelOnTheLeft', type: ['true', 'false'], default: 'false', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' },
	{ name: 'max', type: ['number'], default: '10', description: 'Max value of the input.' },
	{ name: 'min', type: ['number'], default: '0', description: 'Min value of the input.' },
	{ name: 'step', type: ['number'], default: '1', description: 'Step value of the input.' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying input.' },
	{ name: 'value', type: 'string', description: 'Initial value of the input.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:inputElement', type: 'element', description: 'Exposes the HTML element of the underlying input.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
	{ name: 'on:input', type: 'function', description: 'Triggered when input value is edited.' },
];

const exampleHtml = `
<Range on:change="{onChange}" error="Invalid text" />

<script>
function onChange (e) {
    console.log('value', e.target.value);
}
&lt;/script>
`;


let error = 'Move to 6.';
function onChange (e) {
	error = e.target.value === '6' ? '' : 'Move to 6.';
}

</script>
