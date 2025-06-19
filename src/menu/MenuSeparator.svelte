<li role="separator" class="menu-item menu-separator" bind:this={element}></li>

<script lang="ts">

interface Props {
	element?: HTMLElement;
}

let {
	element = $bindable(undefined)
}: Props = $props();
</script>
