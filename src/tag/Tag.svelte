<div
	class="ui-tag {className} {colorClass}"
	class:round
	class:dark="{color && isColorDark(color)}"
	class:light="{color && !isColorDark(color)}"
	class:disabled
	style="{color ? `background-color: ${color};` : ''}"
	role="button"
	tabindex="{disabled ? undefined : 0}"
	inert="{disabled}"
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
export let disabled = false;

$: colorClass = (['info', 'warning', 'danger', 'success'].includes(color) ? color : '');

function onclick (e) {
	dispatch('click', { target: element, originalEvent: e });
}

function onkeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') onclick(e);
}
</script>
