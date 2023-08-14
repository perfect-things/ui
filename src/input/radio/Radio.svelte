<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	{id}
	{title}
	class="check-and-radio radio {className}"
	class:has-error="{error}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>

	<Info msg="{info}" />

	<div class="radio-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="radio-items">
			{#each _items as item (item.id)}
				<div
					class="radio-item"
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
					<Label disabled="{disabled || item.disabled}" for="{item.id}" label="{item.name}"/>
				</div>
			{/each}
		</div>
	</div>
</div>
<script>
import { createEventDispatcher } from 'svelte';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };
export let id = '';
export let name = guid();
export let title = undefined;
export let label = '';
export let disabled = false;
export let items = [];
export let value = '';
export let error = '';
export let info = '';
export let labelOnTheLeft = false;

export let element = undefined;

const dispatch = createEventDispatcher();
const errorMessageId = guid();

$:_id = id || name || guid();

$: _items = items.map(item => {
	if (typeof item === 'string') item = { name: item, value: item };
	item.id = item.id || guid();
	return item;
});


function onmousedown (e) {
	const inp = e.target.closest('.radio-item').querySelector('input');
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
