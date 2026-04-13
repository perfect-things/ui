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
<Tag clickable onclick={onclick}>Click me</Tag>


<Code>{`
<Tag icon="close">Closable tag</Tag>
<Tag color="success">Success</Tag>
<Tag color="#132231">Custom color</Tag>
<Tag {onclick}>Click me</Tag>

<script&gt;
function onclick () {
    alert('Clicked!');
}
</script>
`}</Code>
<API props={apiProps}/>


<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';

import { Tag } from '../../../src';
import { Code } from '../../code-example';

const apiProps = <ApiProp[]>[
	PROPS.class,
	PROPS.bindelement,
	PROPS.onclick,
	PROPS.icon,
	PROPS.disabled,

	{ name: 'color', type: 'string', description: 'Tag color. Standard variations are included (info, warning, danger, success). A color hash or name can also be provided.' },
	{ name: 'clickable', description: 'When passed, the tag will be interactive.' },
];


function onclick () {
	alert('Clicked!');
}

</script>
