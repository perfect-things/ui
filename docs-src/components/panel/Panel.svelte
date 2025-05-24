<h2>Panel</h2>

<h3>Normal</h3>

<Panel title="Collapsed">
	<p>This is panel contents</p>
</Panel>

<Panel title="Expanded" open>
	<p>This is panel contents</p>
</Panel>

<Panel title="Round" round>
	<p>This is panel contents</p>
</Panel>

<h3>No title</h3>

<Panel>
	<p>This is panel contents</p>
</Panel>

<Panel round>
	<p>This is panel contents</p>
</Panel>


<h3>Types & variations</h3>
<Panel title="info" info>
	<p>This is panel contents</p>
</Panel>

<Panel title="success round" success round>
	<p>This is panel contents</p>
</Panel>

<Panel title="warning round collapsible" warning round collapsible>
	<p>This is panel contents</p>
</Panel>

<Panel title="danger round collapsible open" danger round collapsible open>
	<p>This is panel contents</p>
</Panel>


<h3>Round & disabled</h3>

<Panel title="Collapsed" round disabled>
	<p>This is panel contents</p>
</Panel>

<Panel title="Expanded" open round disabled>
	<p>This is panel contents</p>
</Panel>

<h3>Collapsible</h3>

<Panel title="Collapsed" round collapsible>
	<p>This is panel contents</p>
</Panel>

<Panel title="Panel 2" open round collapsible>
	<p>This is panel contents</p>
	<p>Hello world!</p>
	<p>This is panel contents</p>
	<Button>Action</Button>
</Panel>


<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>


<script>
import { Panel, Button } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';
import './Panel.css';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'danger', description: 'Panel type: danger' },
	{ name: 'disabled', description: 'Make the panel disabled.' },
	{ name: 'collapsible', description: 'If present, the panel will expand/collapse on title click or Enter key or Space.' },
	{ name: 'info', description: 'Panel type: info' },
	{ name: 'open', description: 'Panel initial open state.' },
	{ name: 'round', description: 'Adds rounded corners to the panel.' },
	{ name: 'success', description: 'Panel type: success' },
	{ name: 'title', type: 'string', description: 'Panel title.' },
	{ name: 'warning', description: 'Panel type: warning' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'on:close', type: 'function', description: 'Triggered after the panel is closed.' },
	{ name: 'on:open', type: 'function', description: 'Triggered after the panel is opened.' },
];

const exampleHtml = `
<Panel title="Hello" round collapsible>
	<p>This is panel contents</p>
	<p>Hello world!</p>
	<p>This is panel contents</p>
	<Button>Action</Button>
</Panel>
`;


</script>
