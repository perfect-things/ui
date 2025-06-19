<div
	{id}
	{title}
	class="check-and-radio radio {className}"
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>

	<Info msg={info} />

	<div class="radio-inner" class:disabled>
		<InputError id={errorMessageId} msg={error} />

		<div class="radio-items">
			{#each _items as item (item.id)}
				<div
					class="radio-item"
					class:disabled={disabled || item.disabled}
					ontouchstartcapture={onmousedown}
					onmousedowncapture={onmousedown}>
					<input
						type="radio"
						id={item.id}
						name={name}
						value={item.value}
						checked={item.value === value}
						disabled={disabled || item.disabled}
						onchange={e => _onchange(e, item)}>
					<Label disabled={disabled || item.disabled} for={item.id} label={item.name}/>
				</div>
			{/each}
		</div>
	</div>
</div>
<script lang="ts">
import './Radio.css';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';




interface Props {
	class?: string;
	id?: string;
	name?: string;
	title?: string;
	label?: string;
	disabled?: boolean;
	items?: any;
	value?: string;
	error?: string;
	info?: string;
	labelOnTheLeft?: boolean;
	element?: HTMLElement;
	onchange?: (args: { event: Event; value: string; item: any }) => void;
}

let {
	class: className = '',
	id = '',
	name = guid(),
	title = undefined,
	label = '',
	disabled = false,
	items = [],
	value = $bindable(''),
	error = '',
	info = '',
	labelOnTheLeft = false,
	element = $bindable(undefined),
	onchange = () => {},
}: Props = $props();


const errorMessageId = guid();

const _id = $derived(id || name || guid());

const _items = $derived(items.map((item: any) => {
	if (typeof item === 'string') item = { name: item, value: item };
	return { ...item, id: item.id || guid() };
}));


function onmousedown (e) {
	const inp = e.target?.closest('.radio-item')?.querySelector('input');
	if (inp && !inp.disabled) {
		e.preventDefault();
		inp.click();
		inp.focus();
	}
}

function _onchange (event: Event, item: any) {
	value = item.value;
	onchange({ event, value, item });
}

</script>
