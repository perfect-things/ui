<InfoBar class={className} {id} {msg} type="error" bind:element />

<script lang="ts">
import InfoBar from './InfoBar.svelte';

interface Props {
	class?: string;
	element?: HTMLElement;
	id?: string;
	msg?: string;
}

let {
	class: className = '',
	element = $bindable(undefined),
	id = undefined,
	msg = ''
}: Props = $props();

</script>
