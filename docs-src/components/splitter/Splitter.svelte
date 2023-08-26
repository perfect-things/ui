<h2>Splitter</h2>
<p>Resizable splitter component.</p>
<ul>
	<li>It uses <em>flex flow</em> property to determine the direction of resizing (row=horizontal, column=vertical).
	<li>It uses <em>min-width</em> and <em>max-width</em> props to determine how much to resize;
</ul>

<hr>

<Button on:click="{toggle}">Toggle</Button>
<div class="split-wrap">
	<div class="split-box min-w">Left</div>
	<Splitter on:changed={onchange} bind:this="{splitter1}"/>
	<div class="split-box">Right</div>
</div>
<br>
<div class="split-wrap split-wrap-v">
	<div class="split-box min-h">Top</div>
	<Splitter on:changed={onchange} bind:this="{splitter2}"/>
	<div class="split-box">Bottom</div>
</div>

<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>
<API props="{instanceApiProps}" title="Instance API" description="The component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"/>


<script>
import { Splitter, Button } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'on:change', type: 'function', description: 'Triggered during the resizing (mousemove).' },
	{ name: 'on:changed', type: 'function', description: 'Triggered when resizing finished (mouseup).' },
];

const instanceApiProps = [
	{ name: 'collapse', type: 'function', description: 'Set the size to the <em>min-width</em> of the previous div.' },
	{ name: 'expand', type: 'function', description: 'Set the size to the <em>max-width</em> of the previous div.' },
	{ name: 'setSize', type: 'function', description: 'Set the split size.<br>Function accepts 2 arguments:<br><em>to</em> [string|number] - use number for pixel size, or predefined strings like "min", "max" or "default"<br><em>withAnimation</em> [boolean] - set to true to enable animation. Defaults to false.' },
	{ name: 'toggle', type: 'function', description: 'Toggle between collapsed and expanded state.' },
];


const exampleHtml = `
<Button on:click="{toggle}">Toggle</Button>
<div style="flex-flow:row">
	<div>Left</div>
	<Splitter on:changed={onchanged} bind:this="{splitter1}" />
	<div>Right</div>
</div>

<script>
let splitter1;

function toggle () {
	splitter1.toggle();
}

function onchanged (e) {
	// logs current height/width in px and collapsed state
	console.log(e.detail);
}
&lt;/script>
`;

let splitter1, splitter2;

function onchange (e) {
	console.log(e.detail);
}

function toggle () {
	splitter1.toggle();
	splitter2.toggle();
}

</script>
