<div class="button-group {className}" class:round>
	<slot/>
</div>

<script>
export let round = undefined;	// round button
let className = '';
export { className as class };

</script>
