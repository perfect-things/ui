<div
	class="input button-toggle {className}"
	class:round
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft}
	role="radiogroup"
	aria-invalid={!!error}
	aria-errormessage={error ? errorMessageId : undefined}
	{title}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class="input-inner" class:disabled>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-scroller">
			<div class="input-row">
				{#each _items as item, idx (item.value)}
					<label
						class="button button-normal"
						class:button-has-text={item.name}
						{...({ disabled } as any)}
						{onclick}>
							{#if item.icon}
								<Icon name={item.icon}/>
							{/if}
							{item.name || ''}
							<input
								{disabled}
								{name}
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
import { guid } from '../../utils';
import { Icon } from '../../icon';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';

type Item = { name: string, value: string, icon?: string } | string;
type Value = Item | string;

interface Props {
	class?: string;
	disabled?: boolean;
	round?: boolean;
	items?: Item[];
	id?: string;
	name?: string;
	value?: Value;
	title?: string;
	label?: string;
	error?: string;
	info?: string;
	labelOnTheLeft?: boolean;
	element?: HTMLDivElement;
	onchange?: (value: Value) => void;
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
	onchange(value);
}

</script>
