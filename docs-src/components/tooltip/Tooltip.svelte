<h2>Tooltip</h2>

<h3>Normal</h3>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box1">box with a tooltip</div>
<Tooltip target="box1">Some tooltip text</Tooltip>

<br>

<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box2">box with a tooltip</div>
<Tooltip target="box2">
	<h1>Some Title</h1>
	<p>Some <b>html</b> tooltip content</p>
</Tooltip>

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
<Button id="box5">button</Button>
<Tooltip target="box5" delay="700">Showing with a delay</Tooltip>

<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>


<script>
import { Tooltip, Button } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'delay', type: 'number', default: '0', description: 'Delay after which the tooltip should appear (in milliseconds).' },
	{ name: 'offset', type: 'number', default: '2', description: 'Customize tooltip offset. Use negative number for smaller offset or positive for bigger' },
	{ name: 'position', type: ['top', 'bottom'], default: 'auto', description: 'Enforce the position of the tooltip to be above (top) or below (bottom) the target element.<br>Auto - will auto-position the tooltip so it stays on screen.' },
	{ name: 'target', required: true, type: 'string', description: 'ID of the target element.' },
];

const exampleHtml = `
<div id="box1"></div>
<Tooltip position="bottom" target="box1" offset="5">Some tooltip text</Tooltip>
`;

</script>
