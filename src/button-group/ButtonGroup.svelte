<div class="button-group {className}" class:round role="group" bind:this="{element}">
	<slot/>
</div>

<script>
let className = '';
export { className as class };
export let round = undefined;	// round button
export let element = undefined;

</script>
