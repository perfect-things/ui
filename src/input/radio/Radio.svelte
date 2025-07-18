<div bind:this={element} class={cls} {...restProps}>
	<Label {label} {disabled} for={_items[0].id}/>

	<Info msg={info} />

	<div class={['radio-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<div class="radio-items">
			{#each _items as item (item.id)}
				<div
					ontouchstartcapture={onmousedown}
					onmousedowncapture={onmousedown}
					class={[
						'radio-item',
						{ disabled: disabled || item.disabled }
					]}>
					<input
						type="radio"
						id={item.id}
						{name}
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
import type { RadioProps } from './types';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';



let {
	class: className = '',
	name = guid(),
	label = '',
	disabled = false,
	items = [],
	value = $bindable(''),
	error = '',
	info = '',
	labelOnTheLeft = false,
	element = $bindable(undefined),
	onchange = () => {},
	...restProps
}: RadioProps = $props();


const errorMessageId = guid();

const cls = $derived([
	'check-and-radio',
	'radio',
	className,
	{
		'has-error': !!error,
		'label-on-the-left': labelOnTheLeft,
	}
]);


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

function _onchange (e: Event, item: any) {
	value = item.value;
	onchange(e, { value, item });
}

</script>
