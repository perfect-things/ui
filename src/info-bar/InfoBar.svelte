{#if msg}
	<div
		bind:this={element}
		class={[
			'info-bar',
			'info-bar-' + type,
			className
		]}>
			<Icon name={type}/>
			<p {id}>{@html msg}</p>
	</div>
{/if}

<script lang="ts">
import './InfoBar.css';
import type { ClassValue } from 'svelte/elements';
import { Icon } from '../icon';


interface Props {
	class?: ClassValue;
	element?: HTMLElement;
	id?: string;
	msg?: string;
	type?: 'info' | 'warning' | 'error' | 'success';
}

let {
	class: className = '',
	element = $bindable(undefined),
	id = undefined,
	msg = '',
	type = 'info'
}: Props = $props();


</script>
