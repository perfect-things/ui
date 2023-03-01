<div {disabled} class="button-group button-toggle {className}" class:round bind:this="{el}">
	{#each items as item, idx}
		<label
			{disabled}
			class="button button-normal"
			class:selected="{value === item.value}"
			class:button-has-text="{item.name}"
			on:mousedown="{onmousedown}">
				{#if item.icon}
					<Icon name="{item.icon}"/>
				{/if}
				{item.name || ''}
				<input
					{disabled}
					id="{idx === 0 && id ? id : undefined}"
					type="radio"
					name="{name}"
					checked="{item.value === value}"
					value="{item.value}"
					on:change="{e => onchange(e, item)}">
		</label>
	{/each}
</div>

<script>
import { createEventDispatcher } from 'svelte';
import { uuid } from '../util';
import { Icon } from '../icon';

export let disabled = undefined;
export let round = undefined;	// round button
export let items = '';
export let id = '';
export let name = uuid();
export let value = '';
let className = '';
export { className as class };

const dispatch = createEventDispatcher();
let el;

function onmousedown (e) {
	const btn = e.target.querySelector('input');
	if (btn) {
		e.preventDefault();
		btn.focus();
		btn.click();
	}
}

function onchange (e, button) {
	value = button.value;
	dispatch('change', value);
}

</script>
