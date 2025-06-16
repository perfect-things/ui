{#if msg}
	<div class="info-bar info-bar-{type} {className}" bind:this={element}>
		<Icon name={type}/>
		<p {id}>{@html msg}</p>
	</div>
{/if}

<script lang="ts">
import './InfoBar.css';
import { Icon } from '../icon';


interface Props {
	class?: string;
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
