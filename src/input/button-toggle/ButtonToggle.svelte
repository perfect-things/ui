<div
	class="input button-toggle {className}"
	class:round
	class:has-error="{error}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	role="radiogroup"
	aria-invalid="{error}"
	aria-errormessage="{error ? errorMessageId : undefined}"
	{title}
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-scroller">
			<div class="input-row" id="{_id}">
				{#each _items as item}
					<!-- svelte-ignore
						a11y-no-noninteractive-element-interactions
						a11y-click-events-have-key-events -->
					<label
						{disabled}
						class="button button-normal"
						class:button-has-text="{item.name}"
						on:click="{onclick}">
							{#if item.icon}
								<Icon name="{item.icon}"/>
							{/if}
							{item.name || ''}
							<input
								{disabled}
								{name}
								type="radio"
								checked="{item.value === value}"
								value="{item.value}"
								on:change="{e => onchange(e, item)}">
					</label>
				{/each}
			</div>
		</div>
	</div>
</div>

<script>
import { createEventDispatcher } from 'svelte';
import { guid } from '../../utils';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };
export let disabled = undefined;
export let round = undefined;	// round button
export let items = '';
export let id = '';
export let name = guid();
export let value = '';
export let title = undefined;
export let label = '';
export let error = undefined;
export let info = undefined;
export let labelOnTheLeft = false;

export let element = undefined;


const errorMessageId = guid();
const dispatch = createEventDispatcher();


$:_id = id || name || guid();

$:_items = items.map(item => {
	if (typeof item === 'string') {
		return { name: item, value: item };
	}
	return item;
});


function onclick (e) {
	const inputElement = e.target && e.target.querySelector('input');
	if (!inputElement) return;
	inputElement.click();
	inputElement.focus();
}


function onchange (e, button) {
	if (button.value === value) return;

	const btnEl = e.target && e.target.closest('label');
	if (btnEl) btnEl.scrollIntoView({ block: 'nearest', inline: 'nearest' });

	value = button.value;
	dispatch('change', value);
}

</script>
