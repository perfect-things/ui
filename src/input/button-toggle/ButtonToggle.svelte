<div
	{title}
	role="radiogroup"
	aria-invalid={!!error}
	aria-errormessage={error ? errorMessageId : undefined}
	bind:this={element}
	class={[
		'input',
		'button-toggle',
		className,
		{
			round,
			disabled,
			'label-on-the-left': labelOnTheLeft,
			'has-error': error
		},
	]}>
	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-scroller">
			<div class="input-row">
				{#each _items as item, idx (item.value)}
					<label
						class={[
							'button',
							'button-normal',
							{ 'button-has-text': item.name },
						]}
						{...({ disabled } as any)}
						{onclick}>
							{#if item.icon}
								<Icon name={item.icon}/>
							{/if}
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
import type { InputProps } from '../types';
import { guid } from '../../utils';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';

type Item = { name?: string, value: string | boolean, icon?: string } | string;
type Value = Item | string | boolean;

interface Props extends InputProps {
	round?: boolean;
	items?: Item[];
	value?: Value;
	onchange?: (e: Event, value: Value) => void;
}

let {
	class: className = '',
	disabled = undefined,
	round = undefined,
	items = [],
	id = '',
	name = guid(),
	value = $bindable(''),
	title = undefined,
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	onchange = () => {},
}: Props = $props();


const errorMessageId = guid();


const _id = $derived(id || name || guid());

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
	onchange(e, value);
}

</script>
