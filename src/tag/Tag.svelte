<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="ui-tag {className} {colorClass}"
	class:round
	class:dark="{color && isColorDark(color)}"
	style="{color ? `background-color: ${color};` : ''}"
	role="button"
	tabindex="0"
	bind:this="{element}"
	on:click="{onclick}">
	{#if icon}
		<Icon name="{icon}"/>
	{/if}
	<slot/>
</div>

<script>
import { createEventDispatcher } from 'svelte';
import { Icon } from '../icon';
import { isColorDark } from '../utils';

const dispatch = createEventDispatcher();

let className = '';
export { className as class };
export let round = false;
export let icon = undefined;
export let color = undefined;
export let element = undefined;

$: colorClass = (['info', 'warning', 'danger', 'success'].includes(color) ? color : '');

function onclick () {
	dispatch('click', { target: element });
}
</script>
