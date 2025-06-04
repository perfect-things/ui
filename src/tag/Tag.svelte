<div
	class="ui-tag {className} {colorClass}"
	class:round
	class:dark="{color && isColorDark(color)}"
	class:light="{color && !isColorDark(color)}"
	class:disabled
	class:clickable
	style="{color ? `background-color: ${color};` : ''}"
	role="button"
	tabindex="{disabled || !clickable ? undefined : 0}"
	inert="{disabled || !clickable}"
	bind:this="{element}"
	on:keydown="{onkeydown}"
	on:click="{onclick}">
	{#if icon}
		<Icon name="{icon}"/>
	{/if}
	<div class="ui-tag-label"><slot/></div>
</div>

<script>
import './Tag.css';
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
export let clickable = false;

$: colorClass = (['info', 'warning', 'danger', 'success'].includes(color) ? color : '');

function onclick (e) {
	dispatch('click', { target: element, originalEvent: e });
}

function onkeydown (e) {
	if (e.key === 'Enter' || e.key === ' ') onclick(e);
}
</script>
