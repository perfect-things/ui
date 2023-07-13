<div
	class="input button-group button-toggle {className}"
	class:round
	class:has-error="{error}"
	role="radiogroup"
	aria-invalid="{error}"
	aria-errormessage="{error ? errorMessageId : undefined}"
	bind:this="{el}">

	{#if label}
		<label {disabled} class="label" for="{_id}">{label}</label>
	{/if}

	<Info msg="{info}" />

	<div class="input-inner">
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row" id="{_id}">
			{#each _items as item}
				<label
					{disabled}
					class="button button-normal"
					class:button-has-text="{item.name}"
					on:touchstart="{onmousedown}"
					on:mousedown="{onmousedown}">
						{#if item.icon}
							<Icon name="{item.icon}"/>
						{/if}
						{item.name || ''}
						<input
							{disabled}
							type="radio"
							name="{name}"
							checked="{item.value === value}"
							value="{item.value}"
							on:change="{e => onchange(e, item)}">
				</label>
			{/each}
		</div>
	</div>
</div>

<script>
import { createEventDispatcher } from 'svelte';
import { Info, InputError } from '../info-bar';
import { guid } from '../utils';
import { Icon } from '../icon';


let className = '';
export { className as class };
export let disabled = undefined;
export let round = undefined;	// round button
export let items = '';
export let id = '';
export let name = guid();
export let value = '';
export let label = '';
export let error = undefined;
export let info = undefined;

const errorMessageId = guid();
const dispatch = createEventDispatcher();
let el;

$:_id = id || name || guid();

$:_items = items.map(item => {
	if (typeof item === 'string') {
		return { name: item, value: item };
	}
	return item;
});


function onmousedown (e) {
	const btn = e.target.querySelector('input');
	if (!btn) return;

	e.preventDefault();
	btn.click();
	btn.focus();
	if (btn.value === value) return;
	onchange(e, btn);
}


function onchange (e, button) {
	value = button.value;
	dispatch('change', value);
}

</script>
