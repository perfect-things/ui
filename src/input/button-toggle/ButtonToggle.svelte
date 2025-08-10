<!--
@component ## ButtonToggle

A radio button group component styled as connected toggle buttons.
- Visual button styling on top of radio button functionality
- Supports icons, text, or icon-only buttons
- Horizontal scrolling for many options

@example
```svelte
<ButtonToggle
  label="View mode"
  items={[
    { name: 'List', value: 'list', icon: 'list' },
    { name: 'Grid', value: 'grid', icon: 'grid' },
    { name: 'Card', value: 'card', icon: 'card' }
  ]}
  bind:value={viewMode}
/>
```
@see {@link https://ui.perfectthings.dev/#ButtonToggle Button Toggle Docs} for more info.
-->

<div
	class={cls}
	role="radiogroup"
	aria-invalid={!!error}
	aria-errormessage={error ? errorMessageId : undefined}
	bind:this={element}
	{...restProps}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-scroller">
			<div class="input-row">
				{#each _items as item, idx (item.value)}
					<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
					<label
						class={[
							'button',
							'button-normal',
							{ 'button-has-text': item.name, disabled },
						]}
						title={item.title || item.name || ''}
						ontouchstart={onclick}
						onmousedown={onclick}>
							<Icon name={item.icon}/>
							{item.name || ''}
							<input
								{name}
								{disabled}
								id={idx === 0 ? _id : undefined}
								type="radio"
								checked={item.value === value}
								value={item.value}
								onchange={e => _onchange(e, item)}>
					</label>
				{/each}
			</div>
		</div>
	</div>
</div>

<script lang="ts">
import './ButtonToggle.css';
import type { ButtonToggleProps } from './types';
import { guid } from '../../utils';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';



let {
	id = undefined,
	name = guid(),
	class: className = '',
	disabled = undefined,
	round = undefined,
	items = [],
	value = $bindable(''),
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	onchange = () => {},
	...restProps
}: ButtonToggleProps = $props();


const errorMessageId = guid();


const _id = $derived(id || guid());
const cls = $derived([
	'input',
	'button-toggle',
	className,
	{
		round,
		disabled,
		'label-on-the-left': labelOnTheLeft,
		'has-error': error
	},
]);

const _items = $derived(items.map(item => {
	if (typeof item === 'string') {
		return { name: item, value: item };
	}
	return item;
}));


function onclick (e) {
	const inputElement = e.target && e.target.querySelector('input');
	if (!inputElement) return;
	inputElement.click();
	inputElement.focus();
}


function _onchange (e, button) {
	if (button.value === value) return;

	const btnEl = e.target && e.target.closest('label');
	if (btnEl) btnEl.scrollIntoView({ block: 'nearest', inline: 'nearest' });

	value = button.value;
	onchange(e, { value });
}

</script>
