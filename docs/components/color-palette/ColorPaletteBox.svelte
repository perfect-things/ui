<div class="palette-box" style="background: var(--ui-{bg}); color: var(--ui-{text});">
	background: --ui-{bg}<br>
	text: --ui-{text}
</div>

<script lang="ts">
interface Props {
	bg?: string;
	text?: string;
}

const {
	bg = 'color-background',
	text = 'color-text'
}: Props = $props();
</script>
