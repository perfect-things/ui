<h2>Tooltip</h2>

<h3>Normal</h3>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box1">tooltip above the target</div>
<Tooltip target="box1">Some tooltip text</Tooltip>

<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-below">tooltip below the target</div>
<Tooltip position="bottom" target="box-below">Some tooltip text</Tooltip>

<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-right">tooltip right of the target</div>
<Tooltip position="right" target="box-right">Some tooltip text</Tooltip>

<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-left">tooltip left of the target</div>
<Tooltip position="left" target="box-left">Some tooltip text</Tooltip>



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


<h3>Show HTML content</h3>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box2">box with a tooltip</div>
<Tooltip target="box2" class="tooltip-html">
	<h1>Some Title</h1>
	<p>Some <b>html</b> tooltip content with a <a href="#Tooltip">link</a></p>
	<p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit.</p>
</Tooltip>

<h3>Show keyboard shortcuts</h3>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-shortcut1">control + c</div>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-shortcut2">cmd + c</div>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-shortcut3">option + command + x</div>
<!-- svelte-ignore a11y-no-noninteractive-tabindex  -->
<div class="tooltip-box" tabindex="0" id="box-shortcut4">shift + enter</div>

<Tooltip target="box-shortcut1" shortcut="Ctrl + C">Open something</Tooltip>
<Tooltip target="box-shortcut2" shortcut="⌘ + C">Another one</Tooltip>
<Tooltip target="box-shortcut3" shortcut="option command x">Another one</Tooltip>
<Tooltip target="box-shortcut4" shortcut="shift enter">Another one</Tooltip>


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


<CodeExample html="{exampleHtml}" />
<API props="{apiProps}"/>


<script>
import { Tooltip } from '../../../src';
import { API } from '../../api-table';
import { CodeExample } from '../../code-example';

const apiProps = [
	{ name: 'class', type: 'string', description: 'Additional css class name to be added to the component.' },
	{ name: 'danger', description: 'Tooltip type: danger' },
	{ name: 'delay', type: 'number', default: '0', description: 'Delay after which the tooltip should appear (in milliseconds).' },
	{ name: 'error', description: 'Tooltip type: error' },
	{ name: 'info', description: 'Tooltip type: info' },
	{ name: 'offset', type: 'number', default: '2', description: 'Customize tooltip offset. Use negative number for smaller offset or positive for bigger' },
	{ name: 'position', type: ['top', 'bottom', 'left', 'right'], default: 'top', description: 'Prefer the position of the tooltip to be above (top), below (bottom), left or right of the target element.' },
	{ name: 'shortcut', type: 'string', description: 'Display a nicely formatted keyboard shortcut in the tooltip.' },
	{ name: 'success', description: 'Tooltip type: success' },
	{ name: 'target', required: true, type: 'string', description: 'ID of the target element.' },
	{ name: 'warning', description: 'Tooltip type: warning' },
	{ name: 'bind:element', type: 'element', description: 'Exposes the HTML element of the component.' },
];



const exampleHtml = `
<div id="box1"></div>
<Tooltip position="bottom" target="box1" offset="5" shortcut="cmd c">Some tooltip text</Tooltip>
`;

</script>
