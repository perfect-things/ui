<h2>Popover</h2>

<p>If a <em>Dialog</em> and <em>Tooltip</em> had a child - this would be it.</p>
<ul>
	<li>It's a container that can be opened like a dialog, but will be attached to the target element, like a tooltip.</li>
	<li>It's a great way to display additional information or actions for a specific element on the page.</li>
	<li>It can contain other components (e.g. buttons) and can serve as a free-form menu.</li>
	<li>It has focus-trap (like dialog), so once it's opened - focus goes in and user can not tab-out of it.</li>
	<li>It can be closed using Escape key or by clicking outside of it.</li>
</ul>

<hr>

<h3>Normal</h3>
<Button on:click="{popover1.open}">Open popover</Button>

<Button on:click="{popover1top.open}">Open to top</Button>
<Button on:click="{popover1right.open}">Open to right</Button>
<Button on:click="{popover1left.open}">Open to left</Button>

<Popover bind:this="{popover1}">
	<h2>Context information</h2>
	<p>Some text</p>
	<Button on:click="{popover1.close}">Click me</Button>
</Popover>

<Popover bind:this="{popover1top}" position="top">
	<h2>Context information</h2>
	<p>Some text</p>
	<Button on:click="{popover1top.close}">Click me</Button>
</Popover>
<Popover bind:this="{popover1left}" position="left">
	<h2>Context information</h2>
	<p>Some text</p>
	<Button on:click="{popover1left.close}">Click me</Button>
</Popover>
<Popover bind:this="{popover1right}" position="right">
	<h2>Context information</h2>
	<p>Some text</p>
	<Button on:click="{popover1right.close}">Click me</Button>
</Popover>


<h3>Target at the edge - tip should remain aligned</h3>
<div style="display: flex; justify-content: flex-end; padding: 1rem; background-color: #0003;">
	<Button round icon="cog" on:click="{popover1.open}" />
</div>

<h3>No tip</h3>
<p>Styling is different than the normal popover, because the use-case for no-tip popover
	is more similar to a dropdown rather than a tooltip or a popover,
	so it makes sense that it also looks for the role.</p>

<Button on:click="{popover5.open}">Open popover</Button>
<Popover hideTip bind:this="{popover5}">
	<h2>Context information</h2>
	<p>Some text</p>
	<Button on:click="{popover5.close}">Click me</Button>
</Popover>


<h3>Custom offset</h3>
<Button on:click="{popover2.open}">Open popover</Button>
<Popover bind:this="{popover2}" offset="-20">Smaller offset</Popover>

<Button on:click="{popover3.open}">Open popover</Button>
<Popover bind:this="{popover3}" offset="20">Bigger offset</Popover>


<h3>Update contents</h3>
<Button round icon="help" on:click="{popover4.open}" />
<Popover bind:this="{popover4}" position="top">
	{@html content}
	<Button success on:click="{updateContent}">Update content</Button>
	<Button on:click="{popover4.close}">Close</Button>
</Popover>



<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>
<API props="{instanceApiProps}" title="Instance API" description="The component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"/>


<script>
import { Popover, Button } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';
import './Popover.css';

let popover1, popover1top, popover1left, popover1right, popover2, popover3, popover4, popover5;
let content = '<h2>Context information</h2><p>Some text</p>';

function updateContent () {
	content = '<h2>Updated content</h2><p>Some text</p><p>Some more text</p>';
}

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'dontHideOnTargetClick', description: 'When present, it will keep the popover open when the target is clicked again.' },
	{ name: 'hideTip', description: 'Display just the container, without the tip (small triangle pointing at the target).' },
	{ name: 'offset', type: 'number', default: '2', description: 'Customize popover offset. Use negative number for smaller offset or positive for bigger' },
	{ name: 'position', type: ['top', 'bottom', 'left', 'right'], default: 'bottom', description: 'Prefer the position of the popover to be above (top), below (bottom), left or right of the target element.' },
	{ name: 'setMinWidthToTarget', description: 'When present, it will make the popover min-width the same as the target.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:contentElement', type: 'element', description: 'Exposes the HTML element of the content div.' },
];

const instanceApiProps = [
	{ name: 'close', type: 'function', description: 'Closes the popover.' },
	{ name: 'open', type: 'function', description: 'Opens the popover.' },
	{ name: 'isOpened', type: 'function', description: 'Returns the opened state.' },
	{ name: 'updatePosition', type: 'function', description: 'Recalculates the position of the popover.' },
];


const exampleHtml = `
<Button on:click="{popover1.open}">Open popover</Button>
<Popover bind:this="{popover1}">
	<h2>Context information</h2>
	<p>Some text</p>
	<Button on:click="{popover1.close}">Click me</Button>
</Popover>

<script>
	let popover1;
&lt;/script>
`;

</script>
