<div
	bind:this={element}
	class={[
		'input',
		'input-search',
		className,
		{
			'has-error': !!error,
			'has-value': value !== '',
			'label-on-the-left': labelOnTheLeft
		}
	]}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			<Icon name="search"/>

			<input
				id={_id}
				autocomplete="off"
				type="search"
				{disabled}
				aria-invalid={!!error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:this={inputElement}
				bind:value
				{onkeydown}
				{...restProps}>

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
import type { ClassValue } from 'svelte/elements';
import { guid } from '../../utils';
import { Button } from '../../button';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';

interface Props {
	class?: ClassValue;
	id?: string;
	required?: boolean;
	disabled?: boolean;
	value?: string;
	label?: string;
	error?: string;
	info?: string;
	labelOnTheLeft?: boolean;
	element?: HTMLDivElement;
	inputElement?: HTMLInputElement;
	[key: string]: any;
}

let {
	class: className = '',
	id = '',
	required = undefined,
	disabled = false,
	value = $bindable(''),
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	...restProps
}: Props = $props();

const _id: string = $derived(id || name || guid());
const errorMessageId: string = guid();

function clear (): void {
	value = '';
}

function onkeydown (event: KeyboardEvent): void {
	if (event.key === 'Escape') clear();
}
</script>
