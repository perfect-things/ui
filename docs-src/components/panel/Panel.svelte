<h2>Panel</h2>

<h3>Normal</h3>

<Panel title="Hello">
	<p>This is panel contents</p>
	<p>Hello world!</p>
	<p>This is panel contents</p>
	<a href="#Panel">a link</a>
</Panel>


<h3>Round, opened</h3>

<Panel title="Panel 2" open round>
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

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'open', description: 'Panel initial open state.' },
	{ name: 'round', description: 'Adds rounded corners to the panel.' },
	{ name: 'title', type: 'string', description: 'Panel title.' },
	{ name: 'on:close', type: 'function', description: 'Triggered after the panel is closed.' },
	{ name: 'on:open', type: 'function', description: 'Triggered after the panel is opened.' },
];

const exampleHtml = `
<Panel title="Hello" round>
	<p>This is panel contents</p>
	<p>Hello world!</p>
	<p>This is panel contents</p>
	<Button>Action</Button>
</Panel>
`;


</script>
