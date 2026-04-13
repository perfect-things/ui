<h2>Range</h2>
	<p>A wrapper around the native range input.</p>

	<h3>Default</h3>
		<Range />

	<h3>Disabled</h3>
		<Range disabled />

	<h3>With ticks hidden</h3>
		<Range hideTicks />

	<h3>With different constraints</h3>
		<Range min={10} max={100} step={5} />

	<h3>With label</h3>
		<Range label="Slide to the right" />

	<h3>With label and info text</h3>
		<Range label="Write some text" info="This is some info for you" />

	<h3>With label and error and live validation</h3>
		<Range label="Move the slider" {error} {onchange} value={5} />

	<h3>With label, info, and error</h3>
		<Range label="Move the slider" info="Don't make any mistakes!" error="You did not slide!" />

	<h3>Label on the left</h3>
		<Range label="Label is on the left" labelOnTheLeft/>

<Code>{`
<Range {onchange} error="Invalid text" />

<script&gt;
function onchange (e) {
    console.log('value', e.target.value);
}
</script>
`}</Code>


<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../../api-table/types';
import { API, PROPS } from '../../../api-table';
import { Range } from '../../../../src';
import { Code } from '../../../code-example';

const apiProps = <ApiProp[]>[
	...PROPS.input,
	PROPS.oninput,
	{ name: 'hideTicks', description: 'If present, the ticks will not be shown.' },
	{ name: 'max', type: 'number', default: '10', description: 'Max value of the input.' },
	{ name: 'min', type: 'number', default: '0', description: 'Min value of the input.' },
	{ name: 'step', type: 'number', default: '1', description: 'Step value of the input.' },
	{ name: 'value', type: 'string', description: 'Initial value of the input.' },
];


let error = $state('Move to 6.');
function onchange (e, { value }) {
	error = value == '6' ? '' : 'Move to 6.';
}

</script>
