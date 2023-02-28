<h2>Tooltip</h2>

<h3>Normal</h3>
<span class="tooltip-box" id="box1">box with a tooltip</span>
<Tooltip target="box1">Some tooltip text</Tooltip>

<br>

<span class="tooltip-box" id="box2">box with a tooltip</span>
<Tooltip target="box2">
	<h1>Some Title</h1>
	<p>Some <b>html</b> tooltip content</p>
</Tooltip>

<h3>Show below target</h3>
<span class="tooltip-box" id="box1a">box with a tooltip</span>
<Tooltip position="bottom" target="box1a">Some tooltip text</Tooltip>


<h3>On Click</h3>
<span class="tooltip-box" id="box3">box with a tooltip</span>
<Tooltip target="box3" events="click">Showing on click</Tooltip>

<h3>On Click and on Focus</h3>
<button id="box4">button with a tooltip on-focus & on-click</button>
<Tooltip target="box4" events="click,focus">Showing on click</Tooltip>

<h3>On-hover & on-focus, with show-delay</h3>
<button id="box5">button</button>
<Tooltip target="box5" events="hover,focus" delay="700">Showing with a delay</Tooltip>

<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>


<script>
import { Tooltip } from '../../src';
import API from '../api-table/index.svelte';
import CodeExample from '../code-example/index.svelte';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'delay', type: 'number', default: '0', description: 'Delay after which the tooltip should appear (in milliseconds).' },
	{ name: 'events', type: ['hover', 'click', 'focus'], default: 'hover', description: 'Type of mouse event that should trigger the tooltip. Multiple events can be entered in a comma-separated string.<br>Note, that these events will dictate how the tooltip shows up as well as disappears, e.g.:<br><em>hover</em> - tooltip will show up on mouse over and disappear on mouse out<br><em>click</em> - tooltip will show up on click and will disappear when anything else (but the target or tooltip) is clicked.<br><em>focus</em> - tooltip will show up on focus and disappear on blur.' },
	{ name: 'position', type: ['top', 'bottom'], default: 'auto', description: 'Enforce the position of the tooltip to be above (top) or below (bottom) the target element.<br>Auto - will auto-position the tooltip so it stays on screen.' },
	{ name: 'target', required: true, type: 'string', description: 'ID of the target element.' },
];

const exampleHtml = `
<div id="box1"></div>
<Tooltip position="bottom" target="box1">Some tooltip text</Tooltip>

<button id="box4">button with a tooltip on-focus & on-click</button>
<Tooltip target="box4" events="click,focus">Showing on click</Tooltip>
`;

</script>
