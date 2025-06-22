<InfoBar {id} {msg} type="info" bind:element class={className} />

<script lang="ts">
import type { ClassValue } from 'svelte/elements';
import InfoBar from './InfoBar.svelte';


interface Props {
	class?: ClassValue;
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
