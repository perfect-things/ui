<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	{id}
	{title}
	class="input-text input-radio {className}"
	class:has-error="{error}">

	{#if label}
		<label class="label" for="{id}">{label}</label>
	{/if}
	{#if info}
		<div class="input-info">
			<Icon name="info"/>
			<p>{info}</p>
		</div>
	{/if}
	<div class="input-text-inner input-radio-inner" class:disabled="{disabled}">
		{#if error}
			<div class="input-error">
				<Icon name="error"/>
				<p id="{errorMessageId}">{error}</p>
			</div>
		{/if}
		{#each _items as item (item.id)}
			<div
				class="input-radio-item"
				class:disabled="{disabled || item.disabled}"
				on:touchstart|capture="{onmousedown}"
				on:mousedown|capture="{onmousedown}">
				<input
					type="radio"
					id="{item.id}"
					name="{name}"
					value="{item.value}"
					checked="{item.value === value}"
					disabled="{disabled || item.disabled}"
					on:change="{e => onchange(e, item)}">
				<label class="label" for="{item.id}">{item.name}</label>
			</div>
		{/each}
	</div>
</div>
<script>
import { createEventDispatcher } from 'svelte';
import { Icon } from '../icon';
import { guid } from '../utils';

let className = '';
export { className as class };
export let id = guid();
export let name = id || guid();
export let title = undefined;
export let label = '';
export let disabled = false;
export let items = [];
export let value = '';
export let error = '';
export let info = '';

const dispatch = createEventDispatcher();
const errorMessageId = guid();


$: _items = items.map(item => {
	if (typeof item === 'string') item = { name: item, value: item };
	item.id = item.id || guid();
	return item;
});


function onmousedown (e) {
	const inp = e.target.closest('.input-radio-item').querySelector('input');
	if (inp && !inp.disabled) {
		e.preventDefault();
		inp.click();
		inp.focus();
	}
}

function onchange (event, item) {
	value = item.value;
	dispatch('change', { event, value, item });
}

</script>
