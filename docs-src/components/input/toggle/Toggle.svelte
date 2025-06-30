<h2>Toggle</h2>

	The perfect toggle component in Svelte:
	<ul>
		<li>allows <em>click</em> as well as <em>drag</em> to toggle</li>
		<li>keyboard support: press <em>Enter</em> or <em>Space</em> to toggle</li>
		<li>accessible (based on a checkbox input)</li>
		<li>no bloat, no dependencies</li>
	</ul>

	<hr>
	<h3>Normal</h3>
		<Toggle bind:value={toggleValue} /> {toggleValue}
		<div class="toggle-box" class:visible={toggleValue}>
			<Toggle /> hidden initially<br>
			<Toggle value={true}/> hidden initially
		</div>
		<br><br><br>

	<h3>Disabled</h3>
		<Toggle value={true} disabled /> (disabled)

	<h3>Label</h3>
		<Toggle label="Toggle the lights" />

	<h3>Info</h3>
		<Toggle label="Toggle the lights" info="This toggle switches the bathroom lights on/off" />

	<h3>Error</h3>
		<Toggle label="Toggle the lights" {error} {onchange}/>

	<h3>Label on the left</h3>
		<Toggle label="Label is on the left" labelOnTheLeft/>


<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';
import { Toggle } from '../../../../src';
import { CodeExample } from '../../../code-example';

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.required,
	{ name: 'value', type: ['true', 'false'], description: 'Initial value of the toggle.' },
];

const exampleHtml = `
<Toggle value="true" label="Field label" onchange={onChange} />

<script>
function onChange (e) {
    console.log('onchange', e.detail);
}
&lt;/script>
`;


let error = $state('I can\'t see anything now!');
let toggleValue = $state(false);

function onchange (e, val) {
	error = val ? '' : 'I can\'t see anything now!';
	console.log('onchange', e);
}
</script>
