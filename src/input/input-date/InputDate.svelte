<div
	{title}
	class="input input-date {className}"
	class:open
	class:native={useNative}
	aria-expanded={open}
	class:has-error={error}
	class:label-on-the-left={labelOnTheLeft}
	bind:this={element}>

	<Label {label} {disabled} for={_id}/>
	<Info msg={info} />

	<div class="input-inner" class:disabled>
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
					bind:value={value}>
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
					bind:value={value}>
			{/if}
		</div>
	</div>
</div>

<script lang="ts">
import './InputDate.css';
import { onMount } from 'svelte';
import { Datepicker } from 'vanillajs-datepicker';
import { getIcon } from '../../icon';
import { Button } from '../../button';
import { guid, isMobile } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


interface Props {
	class?: string;
	id?: string;
	name?: any;
	disabled?: any;
	required?: any;
	value?: string;
	label?: string;
	error?: any;
	info?: any;
	labelOnTheLeft?: boolean | string;
	element?: any;
	inputElement?: any;
	format?: string;						// 'yyyy-mm-dd'
	placeholder?: string;					// default is the same as format
	elevate?: boolean | string;				// if true, the datepicker will be elevated to the body
	showOnFocus?: boolean | string;			// if true, the datepicker will be shown on focus
	orientation?: string;					// '[left|right|auto] [top|bottom|auto]'
	title?: string;
	useNativeOnMobile?: boolean | string;	// if true, the native date input will be used on mobile devices
	onchange?: (value: string) => void;
	onkeydown?: (params: { event: KeyboardEvent, component: Datepicker }) => void;
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
const useNative = isMobile() && (useNativeOnMobile === true || useNativeOnMobile === 'true');

let open = $state(!!useNative);

const _id = $derived(id || name || guid());
const elevated = $derived(elevate === true || elevate === 'true');


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
		showOnFocus: (showOnFocus === 'true' || showOnFocus === true),
		prevArrow: getIcon('chevronLeft'),
		nextArrow: getIcon('chevronRight'),
		updateOnBlur: true,
		weekStart: 1,
	});
}

function _onkeydown (e) {
	const isActive = picker.active;
	const params = { event: e, component: picker };
	if (e.key === 'Escape') {
		if (isActive) e.stopPropagation();
		else onkeydown(params);
		requestAnimationFrame(() => picker.hide());
	}
	else if (e.key === 'Enter') {
		if (isActive) e.preventDefault();
		else onkeydown(params);
		requestAnimationFrame(() => {
			picker.hide();
			if (!inputElement) return;
			if (value !== inputElement.value) value = inputElement.value;	// set value first
			onkeydown(params);									// trigger with new value
		});
	}

	else onkeydown(params);

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

function _onchange () {
	if (picker) value = picker.getDate(format);
	else value = inputElement.value;
	onchange(value);
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
