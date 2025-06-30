<h2>Push Button</h2>

<h3>Normal</h3>

<h4>Default</h4>
<div class="docs-buttons-row">
	<PushButton>Hello</PushButton>
	<PushButton info>Info</PushButton>
	<PushButton success>Warning</PushButton>
	<PushButton warning>Warning</PushButton>
	<PushButton danger>Danger</PushButton>
</div>


<h4>Pressed</h4>
<div class="docs-buttons-row">
	<PushButton pressed>Hello</PushButton>
	<PushButton pressed info>Info</PushButton>
	<PushButton pressed success>Warning</PushButton>
	<PushButton pressed warning>Warning</PushButton>
	<PushButton pressed danger>Danger</PushButton>
</div>


<h4>Disabled</h4>
<div class="docs-buttons-row">
	<PushButton pressed disabled>Hello</PushButton>
	<PushButton pressed disabled info>Info</PushButton>
	<PushButton pressed disabled success>Success</PushButton>
	<PushButton pressed disabled warning>Warning</PushButton>
	<PushButton pressed disabled danger>Danger</PushButton>
</div>


<h4>With icon</h4>
<div class="docs-buttons-row">
	<PushButton icon="help">Help</PushButton>
	<PushButton icon="info" info>Info</PushButton>
	<PushButton icon="check" success>Success</PushButton>
	<PushButton icon="alert" warning>Warning</PushButton>
	<PushButton icon="trash" danger>Delete</PushButton>
</div>


<h4>Outline</h4>
<div class="docs-buttons-row">
	<PushButton outline>Hello</PushButton>
	<PushButton outline info>Info</PushButton>
	<PushButton outline success>Warning</PushButton>
	<PushButton outline warning>Warning</PushButton>
	<PushButton outline danger>Danger</PushButton>
</div>


<hr>
<h3>Icon only buttons</h3>

<h4>Default</h4>
<div class="docs-buttons-row">
	<PushButton icon="help"></PushButton>
	<PushButton icon="info" info></PushButton>
	<PushButton icon="check" success></PushButton>
	<PushButton icon="alert" warning></PushButton>
	<PushButton icon="trash" danger></PushButton>
</div>


<hr>
<h3>Icon only, and round</h3>

<h4>Default</h4>
<div class="docs-buttons-row">
	<PushButton round icon="help"></PushButton>
	<PushButton round icon="info" info></PushButton>
	<PushButton round icon="check" success></PushButton>
	<PushButton round icon="alert" warning></PushButton>
	<PushButton round icon="trash" danger></PushButton>
</div>


<CodeExample html={exampleHtml} />
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { PushButton } from '../../../src';
import { API, PROPS } from '../../api-table';
import { CodeExample } from '../../code-example';

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
function onchange (e, newValue) {
    console.log('is pressed:', newValue);
}
&lt;/script>
`;
</script>
