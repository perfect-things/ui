<div class="split-wrap">
	<div class="split-box min-w">Left</div>
	<Splitter {onchanged} bind:this="{splitter1}"/>
	<div class="split-box">Right</div>
</div>

<script>
import { Splitter } from '../../src/splitter';

let splitter1 = $state();
const { onchanged } = $props();

</script>
