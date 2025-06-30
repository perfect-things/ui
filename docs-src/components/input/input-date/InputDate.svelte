<h2>Input Date</h2>
<p>This is a wrapper for the vanilla javascript component <a href="https://mymth.github.io/vanillajs-datepicker/#/">vanillajs-datepicker</a>.</p>
<br>

<h3>Normal</h3>
<InputDate onkeydown={onkey} bind:value={item.datevalue}/>
{item.datevalue || ''}

<h3>Show on focus (when using keyboard)</h3>
<InputDate showOnFocus placeholder="Custom placeholder" />


<h3>Initial value</h3>
<InputDate value="2061-01-01"/>

<h3>Use native on mobile</h3>
<InputDate useNativeOnMobile value="2061-01-01" />


<h3>Change date format</h3>
<InputDate format="dd-mm-yy" />


<h3>In a container with <em>overflow: hidden</em></h3>
<p>Where parent container has <em>overflow: hidden</em>, <em>elevate="true"</em>
	property must be set on the component.</p>
<div class="docs-overflow-box">
	<small>overflow: hidden</small>
	<InputDate elevate />
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
	error={error}
	onchange={onchange}/>


<h3>Label on the left</h3>
<InputDate label="Label is on the left" labelOnTheLeft/>



<CodeExample html={exampleHtml} />

<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';
import { InputDate } from '../../../../src';
import { CodeExample } from '../../../code-example';

const item = $state({ datevalue: '' });

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.placeholder,
	PROPS.required,
	PROPS.bindinputelement,
	PROPS.onchange,

	{ name: 'elevate', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the popup will be rendered into the <i>body</i>, to ensure it\'s not hidden under some elements (see example above).' },
	{ name: 'format', type: 'string', default: 'yyyy-mm-dd', description: 'Date format (<a href="https://mymth.github.io/vanillajs-datepicker/#/date-string+format" target="_blank">docs</a>).' },
	{ name: 'required', description: 'Mark the input as <i>required</i> for form submission and effectively shows it as invalid, until checked.' },
	{ name: 'showOnFocus', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the datepicker will be automatically open when the input gets focus (normally opens on click).' },
	{ name: 'useNativeOnMobile', type: ['true', 'false'], default: 'false', description: 'Use native date picker on mobile devices.<br>In some cases this may provide prefered UX, but it has also some restrictions depending on the device/browser, like date format is enforced by device locale and placeholder text may not be available.' },
	{ name: 'value', type: 'string', description: 'Initial value of the input.' },

	{ name: 'onkeydown', type: 'function', description: 'Triggered when a key is down.' },
];

const exampleHtml = `
<InputDate onchange={ onChange } />

<script>
function onChange (e) {
    console.log(e.detail.value);
}
&lt;/script>

`;



let error = $state('You picked wrong!');

function onchange (e) {
	const val = e.detail;
	error = val === '1' ? '' : 'You picked wrong!';
}


function onkey (e) {
	console.log(1111, e.detail.event.key);
}
</script>
