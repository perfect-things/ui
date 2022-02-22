<style>
	.palette-box {
		padding: 10px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background-color: var(--ui-color-background-dark-2);
	}
</style>

<div class="palette-box" style="background-color: var(--ui-{bg});color: var(--ui-{text});">
	background: --ui-{bg}<br>
	text: --ui-{text}
</div>

<script>
export let bg = 'color-background';
export let text = 'color-text';
</script>
