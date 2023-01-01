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


<hr>
<h3>Example instantiation</h3>
<code>
&lt;ButtonGroup&gt;
    &lt;Button&gt;One&lt;/Button&gt;
    &lt;Button&gt;Two&lt;/Button&gt;
    &lt;Button&gt;Three&lt;/Button&gt;
&lt;/ButtonGroup&gt;

&lt;script&gt;
function onChange (e) &lbrace;
    const &lbrace; value, oldValue &rbrace; = e.detail;
    console.log(&lbrace; value, oldValue &rbrace;);
&rbrace;
&lt;/script&gt;
</code>


<API props="{apiProps}"/>

<script>
import { ButtonGroup, Button, PushButton } from '../../src';
import API from '../app/api';


const apiProps = [
	{ name: 'className', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'round', description: 'Makes the buttons, on both sides of the group, round.' },
];

</script>
