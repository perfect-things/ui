<div class="table-wrapper {cssClass}" bind:this="{node}">
	<table class="table"><slot /></table>
</div>

<script>
export let cssClass = '';
export let node = undefined;
</script>
