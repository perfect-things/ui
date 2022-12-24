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


<script>
import { Tooltip } from '../../src';


</script>
