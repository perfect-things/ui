<div class="table-wrapper {cssClass}">
	<table class="table" bind:this="{node}"><slot /></table>
</div>

<script>
export let cssClass = '';
export let node;
</script>
