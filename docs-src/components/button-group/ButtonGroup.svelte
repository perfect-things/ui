<h2>Button Group</h2>


<h3>Normal</h3>
<ButtonGroup>
	<Button>One</Button>
	<Button disabled>Disabled</Button>
	<Button>Three</Button>
	<Button>Four</Button>
</ButtonGroup>

<h3>Long</h3>
<div style="width: 400px; max-width: 100%">
	<ButtonGroup>
		<Button>One</Button>
		<Button disabled>Disabled</Button>
		<Button>Three</Button>
		<Button>Four</Button>
		<Button>Five</Button>
		<Button>Six</Button>
		<Button>Seven</Button>
		<Button>Eight</Button>
		<Button>Nine</Button>
		<Button>Ten</Button>
	</ButtonGroup>
</div>

<h3>Normal, info, success, warning, danger</h3>
<ButtonGroup>
	<Button info>One</Button>
	<Button success disabled>Disabled</Button>
	<Button warning>Three</Button>
	<Button danger>Four</Button>
</ButtonGroup>

<h3>Outline Buttons</h3>
<ButtonGroup>
	<Button outline>One</Button>
	<Button outline>Two</Button>
	<Button outline disabled>Disabled</Button>
	<Button outline>Four</Button>
</ButtonGroup>


<h3>Text Buttons</h3>
<ButtonGroup>
	<Button text>One</Button>
	<Button text disabled>Disabled</Button>
	<Button text>Three</Button>
	<Button text>Four</Button>
</ButtonGroup>


<h3>Push Buttons</h3>
<ButtonGroup>
	<PushButton>One</PushButton>
	<PushButton>Two</PushButton>
	<PushButton>Three</PushButton>
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

<Code>{`
<ButtonGroup>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
`}</Code>

<API props={apiProps}/>

<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { Button, ButtonGroup, PushButton } from '../../../src';
import { API, PROPS } from '../../api-table';
import { Code } from '../../code-example';


const apiProps = <ApiProp[]>[
	...PROPS.component,
	PROPS.round,
];

</script>
