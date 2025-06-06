<li role="separator" class="menu-item menu-separator" bind:this={element}></li>

<script>
	let { element = $bindable(undefined) } = $props();
</script>
