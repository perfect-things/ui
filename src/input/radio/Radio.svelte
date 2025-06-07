<div
	{id}
	{title}
	class="check-and-radio radio {className}"
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft === true || labelOnTheLeft === 'true'}
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
<script>
import './Radio.css';
import { guid } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';




/**
 * @typedef {Object} Props
 * @property {string} [class]
 * @property {string} [id]
 * @property {any} [name]
 * @property {any} [title]
 * @property {string} [label]
 * @property {boolean} [disabled]
 * @property {any} [items]
 * @property {string} [value]
 * @property {string} [error]
 * @property {string} [info]
 * @property {boolean} [labelOnTheLeft]
 * @property {any} [element]
 * @property {function} [onchange] - Callback function when the value changes
 */

/** @type {Props} */
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
} = $props();


const errorMessageId = guid();

const _id = $derived(id || name || guid());

const _items = $derived(items.map(item => {
	if (typeof item === 'string') item = { name: item, value: item };
	return { ...item, id: item.id || guid() };
}));


function onmousedown (e) {
	const inp = e.target.closest('.radio-item').querySelector('input');
	if (inp && !inp.disabled) {
		e.preventDefault();
		inp.click();
		inp.focus();
	}
}

function _onchange (event, item) {
	value = item.value;
	onchange({ event, value, item });
}

</script>
