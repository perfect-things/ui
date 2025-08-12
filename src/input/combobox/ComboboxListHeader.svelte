
{#if name}
	<div
		class="combobox-list-header"
		{ontouchend}
		>{name}</div>
{/if}


<script lang="ts">

interface Props {
	name?: string;
}

const {
	name = ''
}: Props = $props();


// prevent double-tap zoom on mobile
function ontouchend (e: TouchEvent) {
	e.preventDefault();
}
</script>
