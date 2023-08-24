<h2>Tooltip</h2>

<h3>Normal</h3>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box1">box with a tooltip</div>
<Tooltip target="box1">Some tooltip text</Tooltip>

<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box2">box with a tooltip</div>
<Tooltip target="box2" class="tooltip-html">
	<h1>Some Title</h1>
	<p>Some <b>html</b> tooltip content with a <a href="#Tooltip">link</a></p>
</Tooltip>


<h3>Colour variants (tooltip type)</h3>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-info">info</div>
<Tooltip info target="box-info">Some tooltip text</Tooltip>

<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-success">success</div>
<Tooltip success target="box-success">Some tooltip text</Tooltip>

<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-warning">warning</div>
<Tooltip warning target="box-warning">Some tooltip text</Tooltip>

<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-error">danger</div>
<Tooltip danger target="box-error">Some tooltip text</Tooltip>



<h3>Show below target</h3>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-below">box with a tooltip</div>
<Tooltip position="bottom" target="box-below">Some tooltip text</Tooltip>

<h3>Custom offset</h3>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-offset">box with a tooltip</div>
<Tooltip target="box-offset" offset="-20">Smaller offset</Tooltip>

<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-offset2">box with a tooltip</div>
<Tooltip target="box-offset2" offset="20">Bigger offset</Tooltip>


<h3>Show delay</h3>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box5">box with a tooltip</div>
<Tooltip target="box5" delay="700">Showing with a delay</Tooltip>


<h3>On Click</h3>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box3">box with a tooltip</div>
<Tooltip target="box3" events="click">Showing on click</Tooltip>


<h3>On Click and on Focus</h3>
<Button id="box4">button with a tooltip on-focus & on-click</Button>
<Tooltip target="box4" events="click,focus">Showing on click</Tooltip>



<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>


<script>
import { Tooltip, Button } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'danger', description: 'Tooltip type: danger' },
	{ name: 'delay', type: 'number', default: '0', description: 'Delay after which the tooltip should appear (in milliseconds).' },
	{ name: 'error', description: 'Tooltip type: error' },
	{ name: 'events', type: ['hover', 'click', 'focus'], default: 'hover,focus', description: 'Type of mouse event that should trigger the tooltip. Multiple events can be entered in a comma-separated string.<br>Note, that these events will dictate how the tooltip shows up as well as disappears, e.g.:<br><em>hover</em> - tooltip will show up on mouse over and disappear on mouse out<br><em>click</em> - tooltip will show up on click and will disappear when anything else (but the target or tooltip) is clicked.<br><em>focus</em> - tooltip will show up on focus and disappear on blur.' },
	{ name: 'info', description: 'Tooltip type: info' },
	{ name: 'offset', type: 'number', default: '2', description: 'Customize tooltip offset. Use negative number for smaller offset or positive for bigger' },
	{ name: 'position', type: ['top', 'bottom'], default: 'top', description: 'Enforce the position of the tooltip to be above (top) or below (bottom) the target element.' },
	{ name: 'success', description: 'Tooltip type: success' },
	{ name: 'target', required: true, type: 'string', description: 'ID of the target element.' },
	{ name: 'warning', description: 'Tooltip type: warning' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
];



const exampleHtml = `
<div id="box1"></div>
<Tooltip position="bottom" target="box1" offset="5">Some tooltip text</Tooltip>

<button id="box4">button with a tooltip on-focus & on-click</button>
 <Tooltip target="box4" events="click,focus">Showing on click</Tooltip>
`;

</script>
