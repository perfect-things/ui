<div class="button-group {className}" class:round bind:this="{element}">
	<div class="button-group-scroller">
		<div class="button-group-inner" role="group">
			<slot/>
		</div>
	</div>
</div>

<script>
import './ButtonGroup.css';
let className = '';
export { className as class };
export let round = undefined;	// round button
export let element = undefined;
</script>
