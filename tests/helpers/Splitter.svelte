<div class="split-wrap">
	<div class="split-box min-w">Left</div>
	<Splitter on:changed={onchange} bind:this="{splitter1}"/>
	<div class="split-box">Right</div>
</div>

<script>
import { Splitter } from '../../src/splitter';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
let splitter1 = $state();

function onchange (e) {
	dispatch('changed', e.detail);
}
</script>
