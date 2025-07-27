<!--
@component ## InputSearch

A search input component with search icon and clear functionality.
- Search icon for visual indication
- Clear button that appears when text is entered
- Built on native search input type
- Auto-complete disabled for privacy
- Keyboard event handling for search operations

@example
```svelte
<InputSearch label="Search products" placeholder="Type to search..." bind:value={searchQuery} />
```
@see {@link https://ui.perfectthings.dev/#InputSearch Input Search Docs} for more info.
-->

<div class={cls} bind:this={element} {...restProps}>
	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			<Icon name={ICON.SEARCH}/>

			<input
				id={_id}
				autocomplete="off"
				type="search"
				{disabled}
				{name}
				{placeholder}
				aria-invalid={!!error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:this={inputElement}
				bind:value
				{onkeydown}>

			<Button link
				icon="close"
				class={[
					'input-search-button',
					{ visible: value !== '' && !disabled }
				]}
				onclick={clear}/>
		</div>
	</div>
</div>

<script lang="ts">
import './InputSearch.css';
import type { InputProps } from '../types';
import { guid } from '../../utils';
import { Button } from '../../button';
import { ICON, Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let {
	class: className = '',
	id = undefined,
	name = undefined,
	required = undefined,
	placeholder = undefined,
	disabled = false,
	value = $bindable(''),
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	...restProps
}: InputProps = $props();

const _id: string = $derived(id || name || guid());
const errorMessageId: string = guid();

const cls = $derived([
	'input',
	'input-search',
	className,
	{
		'has-error': !!error,
		'has-value': value !== '',
		'label-on-the-left': labelOnTheLeft
	}
]);



function clear (): void {
	value = '';
}

function onkeydown (event: KeyboardEvent): void {
	if (event.key === 'Escape') clear();
}
</script>
