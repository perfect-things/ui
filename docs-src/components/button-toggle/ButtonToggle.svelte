<h2>Button Toggle</h2>

<p>This adds a nice visual styling of the buttons on top of a radio-button group.</p>

<h3>Normal</h3>
<ButtonToggle items="{buttons}" value="1" />

<h3>Fit width</h3>
<div class="button-toggle-wrapper-wide">
	<ButtonToggle items="{buttons}" value="1" />
</div>

<h3>With scroller</h3>
<div class="button-toggle-wrapper-wide">
	<ButtonToggle items="{buttonsGalore}" value="1" />
</div>

<br><br>

<h4>Disabled</h4>
<ButtonToggle disabled items="{buttons}"/><br><br>

<h4>Round</h4>
<ButtonToggle round items="{buttons}" value="2" /><br><br>

<h4>With icon</h4>
<ButtonToggle items="{items}" value="3" /><br><br>

<h3>Icon only buttons</h3>
<ButtonToggle items="{icons}" value="1" /><br><br>


<h3>Icon only, and round</h3>
<ButtonToggle round items="{icons}" value="2" /><br><br>

<h3>Array of strings for <em>items</em></h3>
<ButtonToggle items="{strings}" value="One" /><br><br>


<h3>Label</h3>
<ButtonToggle items="{items}" label="Pick one" />

<h3>Info</h3>
<ButtonToggle items="{items}" label="Pick one" info="Pick your pick" />

<h3>Error</h3>
<ButtonToggle items="{items}"
	label="Pick one"
	error="{error}"
	on:change="{onchange}"/>


<h3>Label on the left</h3>
<ButtonToggle items="{items}" label="Label is on the left" labelOnTheLeft="true"/>



<CodeExample html="{exampleHtml}" />
<em>Note:</em> the component <i>value</i> type and the item's <i>value</i> type must match,
so you can either use <i>string</i> for both - like in the example, or <i>number</i>, like so:
<CodeExample notitle html="{exampleHtml2}"></CodeExample>

<API props="{apiProps}"/>


<script>
import { ButtonToggle } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';


const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Makes the component disabled.' },
	{ name: 'id', type: 'string', description: 'Assign id to the first radio button in the group (useful for the associate label\'s <i>for</i> attribute)' },
	{ name: 'info', type: 'string', description: 'Show info message above the toggle.' },
	{ name: 'error', type: 'string', description: 'Error message to show above the toggle.' },
	{ name: 'label', type: 'string', description: 'Label for the toggle.' },
	{ name: 'labelOnTheLeft', type: ['true', 'false'], default: 'false', description: 'Put label to the left of the input (instead of at the top). Usually in longer forms, to align labels and inputs, hence input also gets <em>width: 100%</em>, as it will be constraint by the form container.' },
	{ name: 'items', type: 'array', required: true, description: 'An array of strings or objects in the following format: <code>&lbrace; name: string, value: string | number, icon?: string &rbrace;</code>' },
	{ name: 'name', type: 'string', description: 'Assign name to the underlying radio group' },
	{ name: 'round', description: 'Makes the buttons, on both sides of the group, round.' },
	{ name: 'title', type: 'string', description: 'Assign title to the component' },
	{ name: 'value', type: ['string', 'number'], description: 'Assign initial value to the underlying radio group' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'on:change', type: 'function', description: 'Triggered when the value changes.' },
];

const exampleHtml = `
<ButtonToggle items="{buttons}" value="2" />

<script>
const buttons = [
    { name: 'One', value: '1' },
    { name: 'Two', value: '2' },
    { name: 'Three', value: '3' },
];
&lt;/script>
`;

const exampleHtml2 = `
<ButtonToggle items="{buttons}" value="{2}" />

<script>
const buttons = [
    { name: 'One', value: 1 },
    { name: 'Two', value: 2 },
    { name: 'Three', value: 3 },
];
&lt;/script>
`;



const buttons = [
	{ name: 'One', value: '1' },
	{ name: 'Two', value: '2' },
	{ name: 'Three', value: '3' },
];

const buttonsGalore = [
	'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
	'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
];

const items = [
	{ name: 'One', icon: 'info', value: '1' },
	{ name: 'Two and some long text', icon: 'check', value: '2' },
	{ name: 'Three', icon: 'alert', value: '3' },
];

const icons = [
	{ icon: 'info', value: '1' },
	{ icon: 'check', value: '2' },
	{ icon: 'alert', value: '3' },
];

const strings = ['One', 'Two', 'Three'];

let error = 'You picked wrong!';

function onchange (e) {
	const val = e.detail;
	console.log(val);
	error = val === '1' ? '' : 'You picked wrong!';
}

</script>
