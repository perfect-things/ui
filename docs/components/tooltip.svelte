<h2>Tooltip</h2>

<h3>Normal</h3>
<span id="box1">box with a tooltip</span>
<Tooltip target="box1">Some tooltip text</Tooltip>

<br>

<span id="box2">box with a tooltip</span>
<Tooltip target="box2">
	<h1>Some Title</h1>
	<p>Some <b>html</b> tooltip content</p>
</Tooltip>


<h3>On Click</h3>
<span id="box3">box with a tooltip</span>
<Tooltip target="box3" events="click">Showing on click</Tooltip>

<h3>On Click and on Focus</h3>
<button id="box4">button with a tooltip</button>
<Tooltip target="box4" events="click,focus">Showing on click</Tooltip>


<script>
import { Tooltip } from '../../src';


</script>
