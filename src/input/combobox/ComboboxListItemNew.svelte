<!-- svelte-ignore a11y_interactive_supports_focus -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
{#if show}
	<div class="combobox-list-header">Create new item</div>
	<div
		role="option"
		class={['combobox-list-item', { selected }]}
		aria-selected={selected}
		{onclick}>
			{name}
	</div>
{/if}

<script lang="ts">

interface Props {
	name?: string;
	show?: boolean;
	selected?: boolean;
	onclick?: (e: Event) => void;
}

const {
	selected = false,
	show = false,
	name = '',
	onclick = () => {}
}: Props = $props();


</script>
