<h2>Splitter</h2>
<p>Resizable splitter component.</p>
<ul>
	<li>It uses <em>flex flow</em> property to determine the direction of resizing (row=horizontal, column=vertical).</li>
	<li>It uses <em>min-width</em> and <em>max-width</em> props to determine how much to resize;</li>
</ul>

<hr>

<Button onclick={toggle}>Toggle</Button>
<div class="split-wrap">
	<div class="split-box min-w">Left</div>
	<Splitter {onchanged} bind:this={splitter1}/>
	<div class="split-box">Right</div>
</div>
<br>
<div class="split-wrap split-wrap-v">
	<div class="split-box min-h">Top</div>
	<Splitter {onchanged} bind:this={splitter2}/>
	<div class="split-box">Bottom</div>
</div>

<Code>{`
<Button onclick={toggle}>Toggle</Button>
<div style="flex-flow:row">
    <div>Left</div>
    <Splitter {onchanged} bind:this={splitter1} />
    <div>Right</div>
</div>

<script&gt;
let splitter1;

function toggle () {
    splitter1.toggle();
}

function onchanged (e, { width, height, collapsed }) {
    // logs current height/width in px and collapsed state
    console.log(e, { width, height, collapsed });
}
</script>
`}</Code>

<API props={apiProps}/>
<API props={instanceApiProps} title="Instance API" description="The component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"/>

<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';

import { Splitter, Button } from '../../../src';
import { Code } from '../../code-example';
import './Splitter.css';

const apiProps = <ApiProp[]>[
	PROPS.class,
	PROPS.bindelement,
	{ name: 'onchange', type: 'function', description: 'Triggered during the resizing (mousemove).' },
	{ name: 'onchanged', type: 'function', description: 'Triggered when resizing finished (mouseup).' },
];

const instanceApiProps = <ApiProp[]>[
	{ name: 'collapse', type: 'function', description: 'Set the size to the <em>min-width</em> of the previous div.' },
	{ name: 'expand', type: 'function', description: 'Set the size to the <em>max-width</em> of the previous div.' },
	{ name: 'setSize', type: 'function', description: 'Set the split size.<br>Function accepts 2 arguments:<br><em>to</em> [string|number] - use number for pixel size, or predefined strings like "min", "max" or "default"<br><em>withAnimation</em> [boolean] - set to true to enable animation. Defaults to false.' },
	{ name: 'toggle', type: 'function', description: 'Toggle between collapsed and expanded state.' },
];



let splitter1: Splitter = $state();
let splitter2: Splitter = $state();

function onchanged (e, { width, height, collapsed }) {
	console.log('is collapsed:', collapsed, 'width:', width, 'height:', height);
}

function toggle () {
	splitter1.toggle();
	splitter2.toggle();
}

</script>
