<div class="palette-box" style="background-color: var(--ui-{bg});color: var(--ui-{text});">
	background: --ui-{bg}<br>
	text: --ui-{text}
</div>

<script>
/**
 * @typedef {Object} Props
 * @property {string} [bg]
 * @property {string} [text]
 */

/** @type {Props} */
const { bg = 'color-background', text = 'color-text' } = $props();
</script>
