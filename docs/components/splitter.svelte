<h2>Splitter</h2>
<p>Resizable splitter component</p>

<div class="split-wrap">
	<div class="split-box min-w">Left</div>
	<Splitter on:change={onchange} />
	<div class="split-box">Right</div>
</div>

<div class="split-wrap split-wrap-v">
	<div class="split-box min-h">Top</div>
	<Splitter on:change={onchange} />
	<div class="split-box">Bottom</div>
</div>


<script>
import { Splitter } from '../../src';

function onchange (e) {
	console.log(e.detail);
}


</script>
