<!-- svelte-ignore a11y_no_static_element_interactions, a11y_no_noninteractive_tabindex -->
<div
	{title}
	bind:this={element}
	class={[
		'input',
		'input-rating',
		className,
		{
			'has-error': !!error,
			'label-on-the-left': labelOnTheLeft,
			light,
		}
	]}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div
		class="input-inner"
		tabindex="0"
		{onmousedown}
		ontouchstart={onmousedown}
		onkeydown={_onkeydown}>

		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			{#each stars as star (star)}
				<Button
					link
					icon={icon}
					tabindex="-1"
					data-star={star}
					class={value >= star ? 'active' : ''}/>
			{/each}

			<Button link
				icon="close"
				class="btn-reset"
				disabled={!value}
				onclick={reset}/>

			<input
				type="hidden"
				{name}
				{disabled}
				id={_id}
				aria-invalid={!!error}
				aria-errormessage={error ? errorMessageId : undefined}
				aria-required={required}
				bind:this={inputElement}
				bind:value
				{...restProps}>
		</div>
	</div>
</div>



<script lang="ts">
import './InputRating.css';
import type { InputProps } from '../types';
import { Button } from '../../button';
import { guid, getMouseY, getMouseX } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


interface Props extends InputProps {
	max?: number;
	icon?: string;
	light?: any;
}

let {
	class: className = '',
	id = '',
	name = guid(),
	disabled = undefined,
	required = undefined,
	value = $bindable(),
	title = '',
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	max = 5,
	icon = 'star',
	light = undefined,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	onchange = () => {},
	onkeydown = () => {},
	...restProps
}: Props = $props();

let mouseY = 0;
const errorMessageId = guid();

const _id = $derived(id || name || guid());
const stars: number[] = $derived(new Array(+max).fill(0).map((_, i) => i + 1));


function _onkeydown (e) {
	if (e.target.closest('.btn-reset')) return;
	const key = e.key, v = parseInt(String(value), 10) || 0;
	if (key === 'ArrowRight') setValue(e, Math.min(v + 1, max));
	else if (key === 'ArrowLeft') setValue(e, Math.max(v - 1, 0));
	else if (key === 'Escape') setValue(e);

	if (key) return onkeydown(e, String(value));
	e.preventDefault();
}


function reset (e) {
	e.preventDefault();
	e.stopPropagation();
	setValue(e);
}


function setValue (e: Event, v?) {
	if (typeof v !== 'undefined' && v !== '') {
		const num = parseFloat('' + v);
		value = isNaN(num) ? undefined : num;
	}
	else value = undefined;
	element.querySelector('.input-inner').focus();
	onchange(e, value);
}


function setStarFromCursor (e) {
	const mouseX = getMouseX(e);
	const target = document.elementFromPoint(mouseX, mouseY);
	if (target && target.dataset) setValue(e, target.dataset.star);
}


function onmousedown (e) {
	e.preventDefault();
	mouseY = getMouseY(e);
	addEventListeners();
}

function onMouseMove (e) {
	setStarFromCursor(e);
}

function onMouseUp (e) {
	setStarFromCursor(e);
	removeEventListeners();
}

function addEventListeners () {
	document.addEventListener('mouseup', onMouseUp);
	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('touchend', onMouseUp);
	document.addEventListener('touchmove', onMouseMove);
}

function removeEventListeners () {
	document.removeEventListener('mouseup', onMouseUp);
	document.removeEventListener('mousemove', onMouseMove);
	document.removeEventListener('touchend', onMouseUp);
	document.removeEventListener('touchmove', onMouseMove);
}
</script>
