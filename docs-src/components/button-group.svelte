<h2>Button Group</h2>

<h3>Normal</h3>
<ButtonGroup>
	<Button>One</Button>
	<Button>Two</Button>
	<Button>Three</Button>
</ButtonGroup>


<h3>Push Buttons</h3>
<ButtonGroup>
	<PushButton>One</PushButton>
	<PushButton>Two</PushButton>
	<PushButton>Three</PushButton>
</ButtonGroup>


<h3>Disabled button</h3>
<ButtonGroup>
	<Button>One</Button>
	<Button disabled>Two</Button>
	<Button>Three</Button>
</ButtonGroup>


<h3>Round</h3>
<ButtonGroup round>
	<Button>One</Button>
	<Button>Two</Button>
	<Button>Three</Button>
</ButtonGroup>


<h3>With icons</h3>
<ButtonGroup>
	<Button icon="info">One</Button>
	<Button icon="check">Two</Button>
	<Button icon="alert">Three</Button>
</ButtonGroup>


<h3>Icons only</h3>
<ButtonGroup>
	<Button icon="info"></Button>
	<Button icon="check"></Button>
	<Button icon="alert"></Button>
</ButtonGroup>


<h3>Icons only, and round</h3>
<ButtonGroup round>
	<Button icon="info"></Button>
	<Button icon="check"></Button>
	<Button icon="alert"></Button>
</ButtonGroup>



<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>

<script>
import { ButtonGroup, Button, PushButton } from '../../src';
import API from '../api-table/index.svelte';
import CodeExample from '../code-example/index.svelte';


const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'round', description: 'Makes the buttons, on both sides of the group, round.' },
];


const exampleHtml = `
<ButtonGroup>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>

<script>
function onChange (e) {
    const { value, oldValue } = e.detail;
    console.log({ value, oldValue });
}
&lt;/script>
`;

</script>
