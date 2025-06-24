<div
	{title}
	bind:this={element}
	aria-expanded={open}
	class={[
		'input',
		'input-date',
		className,
		{
			open,
			native: useNative,
			'has-error': !!error,
			'label-on-the-left': labelOnTheLeft,
		},
	]}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class={['input-inner', { disabled }]}>
		<InputError id={errorMessageId} msg={error} />

		<div class="input-row">
			<Button
				link
				icon="calendar"
				class="input-date-button"
				tabindex="-1"
				onmousedown={onIconMouseDown}
				onclick={onIconClick}/>

			{#if useNative}
				<input
					type="date"
					class="prevent-scrolling-on-focus"
					aria-invalid={!!error}
					aria-errormessage={error ? errorMessageId : undefined}
					aria-required={required}
					{name}
					{disabled}
					id={_id}
					onchange={_onchange}
					bind:this={inputElement}
					bind:value>
			{:else}
				<input
					type="text"
					autocomplete="off"
					class="prevent-scrolling-on-focus"
					aria-invalid={!!error}
					aria-errormessage={error ? errorMessageId : undefined}
					aria-required={required}
					id={_id}
					{placeholder}
					{name}
					{disabled}
					{oninput}
					{onblur}
					{...({ onshow, onhide } as any)}
					onchangeDate={_onchange}
					onkeydowncapture={_onkeydown}
					bind:this={inputElement}
					bind:value>
			{/if}
		</div>
	</div>
</div>

<script lang="ts">
import './InputDate.css';
import type { InputProps } from '../types';
import { onMount } from 'svelte';
import { Datepicker } from 'vanillajs-datepicker';
import { getIcon } from '../../icon';
import { Button } from '../../button';
import { guid, isMobile } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


interface Props extends InputProps {
	format?: string;				// 'yyyy-mm-dd'
	elevate?: boolean;				// if true, the datepicker will be elevated to the body
	showOnFocus?: boolean;			// if true, the datepicker will be shown on focus
	orientation?: string;			// '[left|right|auto] [top|bottom|auto]'
	useNativeOnMobile?: boolean;	// if true, the native date input will be used on mobile devices
	onkeydown?: (e: KeyboardEvent, component: Datepicker) => void;
}


let {
	class: className = '',
	id = '',
	name = guid(),
	disabled = undefined,
	required = undefined,
	value = $bindable(),
	label = '',
	error = undefined,
	info = undefined,
	labelOnTheLeft = false,
	element = $bindable(undefined),
	inputElement = $bindable(undefined),
	format = 'yyyy-mm-dd',
	placeholder = format,
	elevate = false,
	showOnFocus = false,
	orientation = 'auto',	// '[left|right|auto] [top|bottom|auto]'
	title = undefined,
	useNativeOnMobile = false,
	onchange = () => {},
	onkeydown = () => {},
}: Props = $props();


let picker;
let isHiding = false;
const errorMessageId = guid();
const useNative = isMobile() && useNativeOnMobile;

let open = $state(!!useNative);

const _id = $derived(id || name || guid());
const elevated = $derived(elevate);


onMount(initDatePicker);

$effect(() => {
	if (value !== picker.getDate(format)) oninput();
});


function initDatePicker () {
	if (useNative) return;
	picker = new Datepicker(inputElement, {
		autohide: true,
		buttonClass: 'button button-text',
		container: elevated ? document.body : undefined,
		format,
		todayBtn: true,
		todayBtnMode: 1,
		orientation,
		todayHighlight: true,
		showOnFocus: showOnFocus,
		prevArrow: getIcon('chevronLeft'),
		nextArrow: getIcon('chevronRight'),
		updateOnBlur: true,
		weekStart: 1,
	});
}

function _onkeydown (e) {
	const isActive = picker.active;
	if (e.key === 'Escape') {
		if (isActive) e.stopPropagation();
		else onkeydown(e, picker);
		requestAnimationFrame(() => picker.hide());
	}
	else if (e.key === 'Enter') {
		if (isActive) e.preventDefault();
		else onkeydown(e, picker);
		requestAnimationFrame(() => {
			picker.hide();
			if (!inputElement) return;
			if (value !== inputElement.value) value = inputElement.value;	// set value first
			onkeydown(e, picker);									// trigger with new value
		});
	}
	else onkeydown(e, picker);

	// prevents picker's events in Safari
	// if (e.key.includes('Arrow') && picker.active) {
	// 	e.stopPropagation();
	// }

}

function oninput () {
	const wasOpen = open;
	requestAnimationFrame(() => {
		const d = Datepicker.parseDate(value, format);
		const df = Datepicker.formatDate(d, format);
		if (df === value) {
			if (picker) picker.setDate(value);
			if (wasOpen) picker.show();
		}
	});
}

function _onchange (e) {
	if (picker) value = picker.getDate(format);
	else value = inputElement.value;
	onchange(e, value);
}

// Datepicker publishes these 2 events (onshow, onhide) on the input element
// the weird syntax on <input> tag is used to ignore the lint errors on non-standard attributes
function onshow () {
	open = true;
}

function onhide () {
	open = false;
}

function onblur () {
	picker.hide();
}


function onIconMouseDown () {
	isHiding = open;
}

function onIconClick () {
	if (isHiding) picker.hide();
	else picker.show();

	isHiding = false;
	if (inputElement) inputElement.focus();
}

</script>
