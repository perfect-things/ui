<h2>Push Button</h2>

<h3>Normal</h3>

<h4>Default</h4>
<div class="docs-buttons-row">
	<PushButton {onchange}>Hello</PushButton>
	<PushButton {onchange} info>Info</PushButton>
	<PushButton {onchange} success>Warning</PushButton>
	<PushButton {onchange} warning>Warning</PushButton>
	<PushButton {onchange} danger>Danger</PushButton>
</div>


<h4>Pressed</h4>
<div class="docs-buttons-row">
	<PushButton {onchange} pressed>Hello</PushButton>
	<PushButton {onchange} pressed info>Info</PushButton>
	<PushButton {onchange} pressed success>Warning</PushButton>
	<PushButton {onchange} pressed warning>Warning</PushButton>
	<PushButton {onchange} pressed danger>Danger</PushButton>
</div>


<h4>Disabled</h4>
<div class="docs-buttons-row">
	<PushButton {onchange} pressed disabled>Hello</PushButton>
	<PushButton {onchange} pressed disabled info>Info</PushButton>
	<PushButton {onchange} pressed disabled success>Success</PushButton>
	<PushButton {onchange} pressed disabled warning>Warning</PushButton>
	<PushButton {onchange} pressed disabled danger>Danger</PushButton>
</div>


<h4>With icon</h4>
<div class="docs-buttons-row">
	<PushButton {onchange} icon="help">Help</PushButton>
	<PushButton {onchange} icon="info" info>Info</PushButton>
	<PushButton {onchange} icon="check" success>Success</PushButton>
	<PushButton {onchange} icon="alert" warning>Warning</PushButton>
	<PushButton {onchange} icon="trash" danger>Delete</PushButton>
</div>


<h4>Outline</h4>
<div class="docs-buttons-row">
	<PushButton {onchange} outline>Hello</PushButton>
	<PushButton {onchange} outline info>Info</PushButton>
	<PushButton {onchange} outline success>Warning</PushButton>
	<PushButton {onchange} outline warning>Warning</PushButton>
	<PushButton {onchange} outline danger>Danger</PushButton>
</div>


<hr>
<h3>Icon only buttons</h3>

<h4>Default</h4>
<div class="docs-buttons-row">
	<PushButton {onchange} icon="help"></PushButton>
	<PushButton {onchange} icon="info" info></PushButton>
	<PushButton {onchange} icon="check" success></PushButton>
	<PushButton {onchange} icon="alert" warning></PushButton>
	<PushButton {onchange} icon="trash" danger></PushButton>
</div>


<hr>
<h3>Icon only, and round</h3>

<h4>Default</h4>
<div class="docs-buttons-row">
	<PushButton {onchange} round icon="help"></PushButton>
	<PushButton {onchange} round icon="info" info></PushButton>
	<PushButton {onchange} round icon="check" success></PushButton>
	<PushButton {onchange} round icon="alert" warning></PushButton>
	<PushButton {onchange} round icon="trash" danger></PushButton>
</div>


<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { PushButton } from '../../../src';
import { API, PROPS } from '../../api-table';
import { CodeExample } from '../../code-example';

function onchange (e: Event, { pressed }: { pressed: boolean }) {
	console.log(`original event: ${e.type}, is pressed:`, pressed);
}


const apiProps = <ApiProp[]>[
	...PROPS.component,

	PROPS.info,
	PROPS.success,
	PROPS.warning,
	PROPS.danger,
	PROPS.round,

	PROPS.icon,
	PROPS.onchange,

	{ name: 'submit', type: 'boolean', default: 'false', description: 'If <i>true</i> button type is set to <i>submit</i>, otherwise it\'s <i>button</i>' },
	{ name: 'outline', description: 'Button style: outline' },
	{ name: 'pressed', type: 'boolean', default: 'false', description: 'Initial <i>pressed</i> state of the button.' },
];

const exampleHtml = `
<PushButton round icon="info" {onchange}></PushButton>

<script>
function onchange (e, { pressed }) {
	console.log(\`original event: $\{e.type}, is pressed:\`, pressed);
}
&lt;/script>
`;
</script>
