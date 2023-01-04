<h2>Button Toggle</h2>

<p>This adds a nice visual styling of the buttons on top of a radio-button group.</p>

<h3>Normal</h3>
<ButtonToggle items="{buttons}" value="1" />

<h3>Fit width</h3>
<div class="button-toggle-wrapper-wide">
	<ButtonToggle items="{buttons}" value="1" />
</div>

<h3>With label</h3>
<label class="label" for="bt1">Label for the button toggle</label>
<ButtonToggle id="bt1" items="{buttons}" value="1" />

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


<hr>
<h3>Example instantiation</h3>
<code>
&lt;ButtonToggle items="&lbrace;buttons&rbrace;" value="2" /&gt;

&lt;script&gt;
const buttons = &lsqb;
    &lbrace; name: 'One', value: '1' &rbrace;,
    &lbrace; name: 'Two', value: '2' &rbrace;,
    &lbrace; name: 'Three', value: '3' &rbrace;,
&rsqb;;
&lt;/script&gt;
</code>

<em>Note:</em> the component <i>value</i> type and the item's <i>value</i> type must match,
so you can either use <i>string</i> for both - like in the example, or <i>number</i>, like so:
<code>
&lt;ButtonToggle items="&lbrace;buttons&rbrace;" value="&lbrace;2&rbrace;" /&gt;

&lt;script&gt;
const buttons = &lsqb;
    &lbrace; name: 'One', value: 1 &rbrace;,
    &lbrace; name: 'Two', value: 2 &rbrace;,
    &lbrace; name: 'Three', value: 3 &rbrace;,
&rsqb;;
&lt;/script&gt;
</code>


<API props="{apiProps}"/>


<script>
import { ButtonToggle } from '../../src';
import API from '../api-table';


const apiProps = [
	{ name: 'className', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'disabled', description: 'Makes the component disabled.' },
	{ name: 'round', description: 'Makes the buttons, on both sides of the group, round.' },

	{ name: 'id', type: 'string', description: 'Assign id to the first radio button in the group (useful for the associate label\'s <i>for</i> attribute)' },
	{ name: 'name', type: 'string', description: 'Assign name to the underlying radio group' },
	{ name: 'value', type: ['string', 'number'], description: 'Assign initial value to the underlying radio group' },
	{
		name: 'items',
		type: 'array',
		required: true,
		description: 'An array of objects in the following format: ' +
			'<code>&lbrace; name: string, value: string | number, icon?: string &rbrace;</code>'
	},
];


const buttons = [
	{ name: 'One', value: '1' },
	{ name: 'Two', value: '2' },
	{ name: 'Three', value: '3' },
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
</script>
