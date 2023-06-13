<h2>Push Button</h2>

<h3>Normal</h3>

<h4>Default</h4>
<PushButton>Hello</PushButton>
<PushButton info>Info</PushButton>
<PushButton success>Warning</PushButton>
<PushButton warning>Warning</PushButton>
<PushButton danger>Danger</PushButton>

<h4>Pressed</h4>
<PushButton pressed>Hello</PushButton>
<PushButton pressed info>Info</PushButton>
<PushButton pressed success>Warning</PushButton>
<PushButton pressed warning>Warning</PushButton>
<PushButton pressed danger>Danger</PushButton>

<h4>Disabled</h4>
<PushButton disabled>Hello</PushButton>
<PushButton disabled info>Info</PushButton>
<PushButton disabled success>Success</PushButton>
<PushButton disabled warning>Warning</PushButton>
<PushButton disabled danger>Danger</PushButton>

<h4>With icon</h4>
<PushButton icon="info" info>Info</PushButton>
<PushButton icon="check" success>Success</PushButton>
<PushButton icon="alert" warning>Warning</PushButton>
<PushButton icon="trash" danger>Delete</PushButton>


<h4>Outline</h4>
<PushButton outline>Hello</PushButton>
<PushButton outline info>Info</PushButton>
<PushButton outline success>Warning</PushButton>
<PushButton outline warning>Warning</PushButton>
<PushButton outline danger>Danger</PushButton>


<hr>
<h3>Icon only buttons</h3>

<h4>Default</h4>
<PushButton icon="info" info></PushButton>
<PushButton icon="check" success></PushButton>
<PushButton icon="alert" warning></PushButton>
<PushButton icon="trash" danger></PushButton>


<hr>
<h3>Icon only, and round</h3>

<h4>Default</h4>
<PushButton round icon="info" info></PushButton>
<PushButton round icon="check" success></PushButton>
<PushButton round icon="alert" warning></PushButton>
<PushButton round icon="trash" danger></PushButton>


<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>


<script>
import { PushButton } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'danger', description: 'Button type: danger' },
	{ name: 'disabled', description: 'Makes the button <i>disabled</i>' },
	{ name: 'icon', type: 'string', description: 'Adds an icon, with this name, to the button (see <a href="#Icon">icons</a> section for icon names)' },
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying button' },
	{ name: 'outline', description: 'Button style: outline' },
	{ name: 'pressed', type: ['true', 'false'], default: 'false', description: 'Initial <i>pressed</i> state of the button.' },
	{ name: 'round', description: 'Makes the button round' },
	{ name: 'submit', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> button type is set to <i>submit</i>, otherwise it\'s <i>button</i>' },
	{ name: 'success', description: 'Button type: success' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying button' },
	{ name: 'warning', description: 'Button type: warning' },
	{ name: 'on:click', type: 'function', description: 'Triggered when the button is clicked.' }
];

const exampleHtml = `
<PushButton round icon="info" on:change="{onChange}"></PushButton>

<script>
function onChange (e) {
    const { pressed } = e.detail;
    console.log('is pressed:', pressed);
}
&lt;/script>
`;
</script>
