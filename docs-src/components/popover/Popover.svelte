<h2>Popover</h2>

<p>If a <em>Dialog</em> and <em>Tooltip</em> had a child - this would be it.</p>
<ul>
	<li>It's a container that can be opened like a dialog, but will be attached to the target element, like a tooltip.
	<li>It's a great way to display additional information or actions for a specific element on the page.
	<li>It can contain other components (e.g. buttons) and can serve as a free-form menu.
	<li>It has focus-trap (like dialog), so once it's opened - focus goes in and user can not tab-out of it.
	<li>It can be closed using Escape key or by clicking outside of it.
</ul>

<hr>

<h3>Normal</h3>
<Button on:click="{popover1.open}">Open popover</Button>
<Popover bind:this="{popover1}">
	<h2>Context information</h2>
	<p>Some text</p>
	<Button on:click="{popover1.close}">Click me</Button>
</Popover>


<h3>Custom offset</h3>
<Button on:click="{popover2.open}">Open popover</Button>
<Popover bind:this="{popover2}" offset="-20">Smaller offset</Popover>

<Button on:click="{popover3.open}">Open popover</Button>
<Popover bind:this="{popover3}" offset="20">Bigger offset</Popover>



<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>


<script>
import { Popover, Button } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

let popover1, popover2, popover3;


const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'offset', type: 'number', default: '2', description: 'Customize popover offset. Use negative number for smaller offset or positive for bigger' },
	{ name: 'position', type: ['top', 'bottom'], default: 'bottom', description: 'Prefer the position of the popover to be above (top) or below (bottom) the target element.' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
	{ name: 'bind:contentElement', type: 'element', description: 'Exposes the HTML element of the content div.' },
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
