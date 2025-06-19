
{#if name}
	<div class="combobox-list-header">{name}</div>
{/if}


<script lang="ts">

interface Props {
	name?: string;
}

const {
	name = ''
}: Props = $props();

</script>
