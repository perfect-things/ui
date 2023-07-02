<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	{id}
	{title}
	class="input-radio {className}"
	class:has-error="{error}">

	{#if label}
		<label class="label" for="{id}">{label}</label>
	{/if}

	<Info msg="{info}" />

	<div class="input-radio-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

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
import { guid } from '../../utils';
import { Info, InputError } from '../../info-bar';


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
