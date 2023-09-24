<div
	class="ui-tag {className} {colorClass}"
	class:round
	class:dark="{color && isColorDark(color)}"
	style="{color ? `background-color: ${color};` : ''}"
	role="button"
	tabindex="{noTabIndex ? undefined : 0}"
	bind:this="{element}"
	on:keydown="{onkeydown}"
	on:click="{onclick}">
	{#if icon}
		<Icon name="{icon}"/>
	{/if}
	<div class="ui-tag-label"><slot/></div>
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
export let noTabIndex = false;

$: colorClass = (['info', 'warning', 'danger', 'success'].includes(color) ? color : '');

function onclick () {
	dispatch('click', { target: element });
}

function onkeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') onclick();
}
</script>
