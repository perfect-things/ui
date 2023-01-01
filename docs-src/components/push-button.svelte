<h2>Push Button</h2>

<h3>Normal</h3>

<h4>Default</h4>
<PushButton>Hello</PushButton>
<PushButton success>Warning</PushButton>
<PushButton warning>Warning</PushButton>
<PushButton danger>Danger</PushButton>

<h4>Pressed</h4>
<PushButton pressed>Hello</PushButton>
<PushButton pressed success>Warning</PushButton>
<PushButton pressed warning>Warning</PushButton>
<PushButton pressed danger>Danger</PushButton>

<h4>Disabled</h4>
<PushButton disabled>Hello</PushButton>
<PushButton disabled success>Success</PushButton>
<PushButton disabled warning>Warning</PushButton>
<PushButton disabled danger>Danger</PushButton>

<h4>With icon</h4>
<PushButton icon="info">Info</PushButton>
<PushButton icon="check" success>Success</PushButton>
<PushButton icon="alert" warning>Warning</PushButton>
<PushButton icon="trash" danger>Delete</PushButton>


<hr>
<h3>Icon only buttons</h3>

<h4>Default</h4>
<PushButton icon="info"></PushButton>
<PushButton icon="check" success></PushButton>
<PushButton icon="alert" warning></PushButton>
<PushButton icon="trash" danger></PushButton>


<hr>
<h3>Icon only, and round</h3>

<h4>Default</h4>
<PushButton round icon="info"></PushButton>
<PushButton round icon="check" success></PushButton>
<PushButton round icon="alert" warning></PushButton>
<PushButton round icon="trash" danger></PushButton>


<hr>
<h3>Example instantiation</h3>
<code>
&lt;PushButton round icon="info" on:change="&lbrace; onChange &rbrace;"&gt;&lt;/PushButton&gt;

&lt;script&gt;
function onChange (e) &lbrace;
    const &lbrace; value, oldValue &rbrace; = e.detail;
    console.log(&lbrace; value, oldValue &rbrace;);
&rbrace;
&lt;/script&gt;
</code>


<API props="{apiProps}"/>


<script>
import { PushButton } from '../../src';
import API from '../app/api';


const apiProps = [
	{ name: 'id', type: 'string', description: 'Assign ID to the underlying button' },
	{ name: 'title', type: 'string', description: 'Assign title to the underlying button' },
	{ name: 'pressed', type: ['true', 'false'], default: 'false', description: 'Initial <i>pressed</i> state of the button.' },
	{ name: 'submit', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> button type is set to <i>submit</i>, otherwise it\'s <i>button</i>' },
	{ name: 'disabled', description: 'Makes the button <i>disabled</i>' },
	{ name: 'round', description: 'Makes the button round' },
	{ name: 'outline', description: 'Button style: outline' },
	{ name: 'text', description: 'Button style: text' },
	{ name: 'link', description: 'Button style: link' },
	{ name: 'success', description: 'Button type: success' },
	{ name: 'warning', description: 'Button type: warning' },
	{ name: 'danger', description: 'Button type: danger' },
	{ name: 'className', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'icon', type: 'string', description: 'Adds an icon, with this name, to the button (see <a href="#Icon">icons</a> section for icon names)' },
	{ name: 'on:click', type: 'function', description: 'Triggered when the button is clicked.' }
];

</script>
