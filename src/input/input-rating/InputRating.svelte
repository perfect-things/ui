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
					<!-- onmousedown={() => set(star)}
					onmouseup={() => set(star)}/> -->
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
import type { ClassValue } from 'svelte/elements';
import { Button } from '../../button';
import { guid, getMouseY, getMouseX } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


interface Props {
	class?: ClassValue;
	id?: string;
	name?: string;
	disabled?: boolean;
	required?: boolean;
	value?: number;
	title?: string;
	label?: string;
	error?: string;
	info?: string;
	labelOnTheLeft?: boolean | string;
	max?: number;
	icon?: string;
	light?: any;
	element?: HTMLElement;
	inputElement?: HTMLInputElement;
	onchange?: (value: number) => void;
	onkeydown?: (data: { event: Event; value: string }) => void;
	[key: string]: any;
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
	if (key === 'ArrowRight') set(Math.min(v + 1, max));
	else if (key === 'ArrowLeft') set(Math.max(v - 1, 0));
	else if (key === 'Escape') set();

	if (key) return onkeydown({ event: e, value: String(value) });
	e.preventDefault();
}


function reset (e) {
	e.preventDefault();
	e.stopPropagation();
	set();
}


function set (v?) {
	if (typeof v !== 'undefined' && v !== '') {
		const num = parseFloat('' + v);
		value = isNaN(num) ? undefined : num;
	}
	else value = undefined;
	element.querySelector('.input-inner').focus();
	onchange(value);
}


function setStarFromCursor (e) {
	const mouseX = getMouseX(e);
	const target = document.elementFromPoint(mouseX, mouseY);
	if (target && target.dataset) set(target.dataset.star);
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
