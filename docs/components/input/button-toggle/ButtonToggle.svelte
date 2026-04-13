<h2>Button Toggle</h2>

<p>This adds a nice visual styling of the buttons on top of a radio-button group.</p>

<h3>Normal</h3>
<ButtonToggle items={buttons} value="1" />

<h3>Fit width</h3>
<div class="button-toggle-wrapper-wide">
	<ButtonToggle items={buttons} value="1" />
</div>

<h3>With scroller</h3>
<div class="button-toggle-wrapper-wide">
	<ButtonToggle items={buttonsGalore} value="1" />
</div>

<br><br>

<h4>Disabled</h4>
<ButtonToggle disabled items={buttons}/><br><br>

<h4>Round</h4>
<ButtonToggle round items={buttons} value="2" /><br><br>

<h4>With icon</h4>
<ButtonToggle items={items} value="3" /><br><br>

<h3>Icon only buttons</h3>
<ButtonToggle items={icons} value="1" /><br><br>


<h3>Icon only, and round</h3>
<ButtonToggle round items={icons} value="2" /><br><br>

<h3>Array of strings for <em>items</em></h3>
<ButtonToggle items={strings} value="One" /><br><br>


<h3>Label</h3>
<ButtonToggle items={items} label="Pick one" />

<h3>Info</h3>
<ButtonToggle items={items} label="Pick one" info="Pick your pick" />

<h3>Error</h3>
<ButtonToggle items={items}
	label="Pick one"
	error={error}
	onchange={onchange}/>


<h3>Label on the left</h3>
<ButtonToggle items={items} label="Label is on the left" labelOnTheLeft/>



<Code>{`
<ButtonToggle items={buttons} value="2" />

<script&gt;
const buttons = [
    { name: 'One', value: '1' },
    { name: 'Two', value: '2' },
    { name: 'Three', value: '3' },
];
</script>
`}</Code>

<em>Note:</em> the component <i>value</i> type and the item's <i>value</i> type must match,
so you can either use <i>string</i> for both - like in the example, or <i>number</i>, like so:

<Code notitle>{`
<ButtonToggle items={buttons} value={2} />

<script&gt;
const buttons = [
    { name: 'One', value: 1 },
    { name: 'Two', value: 2 },
    { name: 'Three', value: 3 },
];
</script>
`}</Code>

<API props={apiProps}/>
<API title="ButtonToggleItem" props={itemProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';
import { ButtonToggle } from '../../../../src';
import { Code } from '../../../code-example';


const apiProps = <ApiProp[]>[
	...PROPS.input,

	PROPS.round,
	{ name: 'items', type: 'ButtonToggleItem[]', required: true, description: 'An array of strings or objects' },
	{ name: 'value', type: ['string', 'number'], description: 'Assign initial value to the component' },
];

const itemProps = <ApiProp[]>[
	PROPS.name,
	PROPS.title,
	PROPS.icon,
	{ name: 'value', type: ['string', 'number'], description: 'The value of the item' },
];



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
	{ name: 'info', icon: 'info', value: '1' },
	{ name: 'check', icon: 'check', value: '2' },
	{ name: 'alert', icon: 'alert', value: '3' },
];

const strings = ['One', 'Two', 'Three'];

let error = $state('You picked wrong!');

function onchange (e, val) {
	console.log(val);
	error = val === '1' ? '' : 'You picked wrong!';
}

</script>
