{#if msg}
	<div class="info-bar info-bar-{type} {className}" bind:this="{element}">
		<Icon name="{type}"/>
		<p {id}>{@html msg}</p>
	</div>
{/if}
<script>
import './InfoBar.css';
import { Icon } from '../icon';

let className = '';
export { className as class };

export let element = undefined;
export let id = undefined;
export let msg = '';
export let type = 'info';


</script>
