<h2>Tag</h2>

<h3>Normal</h3>
<Tag>Tag 123</Tag>


<h3>With icon</h3>
<Tag icon="close">Closable tag</Tag>
<Tag icon="plus">Add tag</Tag>


<h3>Colourful</h3>
<Tag color="info">Info</Tag>
<Tag color="warning">Warning</Tag>
<Tag color="danger">Danger</Tag>
<Tag color="success">Success</Tag>
<Tag color="#ac6453">Custom color</Tag>


<h3>Round</h3>
<Tag round>Round tag</Tag>


<h3>With click action</h3>
<Tag clickable on:click="{onclick}">Click me</Tag>


<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>


<script>
import { Tag } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'clickable', description: 'When passed, the tag will be interactive.' },
	{ name: 'color', type: 'string', description: 'Tag color. Standard variations are included (info, warning, danger, success). A color hash or name can also be provided.' },
	{ name: 'disabled', description: 'Makes the tag <i>disabled</i>' },
	{ name: 'icon', type: 'string', description: 'Icon name to display in the tag.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'on:click', type: 'function', description: 'Triggered when the tag is clicked.' },
];

const exampleHtml = `
<Tag icon="close">Closable tag</Tag>
<Tag color="success">Success</Tag>
<Tag color="#132231">Custom color</Tag>
<Tag on:click="{onclick}">Click me</Tag>

<script>
	function onclick () {
		alert('Clicked!');
	}
&lt;/script>
`;


function onclick () {
	alert('Clicked!');
}

</script>
