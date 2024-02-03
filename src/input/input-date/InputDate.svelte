<div
	class="input input-date {className}"
	class:open
	class:native="{useNative}"
	aria-expanded="{open}"
	class:has-error="{error}"
	class:label-on-the-left="{labelOnTheLeft === true || labelOnTheLeft === 'true'}"
	bind:this="{element}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row">
			<Button
				link
				icon="calendar"
				class="input-date-button"
				tabindex="-1"
				on:mousedown="{onIconMouseDown}"
				on:click="{onIconClick}"/>

			{#if useNative}
				<input
					type="date"
					class="prevent-scrolling-on-focus"
					aria-invalid="{error}"
					aria-errormessage="{error ? errorMessageId : undefined}"
					aria-required="{required}"
					{title}
					{name}
					{disabled}
					id="{_id}"
					on:change="{onchange}"
					bind:this="{inputElement}"
					bind:value="{value}">
			{:else}
				<input
					type="text"
					autocomplete="off"
					class="prevent-scrolling-on-focus"
					aria-invalid="{error}"
					aria-errormessage="{error ? errorMessageId : undefined}"
					aria-required="{required}"
					{placeholder}
					{title}
					{name}
					{disabled}
					id="{_id}"
					on:changeDate="{onchange}"
					on:input="{oninput}"
					on:keydown|capture="{onkeydown}"
					on:show="{onshow}"
					on:hide="{onhide}"
					on:blur={onblur}
					bind:this="{inputElement}"
					bind:value="{value}">
			{/if}
		</div>
	</div>
</div>

<script>
import { onMount, afterUpdate, createEventDispatcher } from 'svelte';
import { Datepicker } from 'vanillajs-datepicker';
import { getIcon } from '../../icon';
import { Button } from '../../button';
import { guid, isMobile } from '../../utils';
import { Info } from '../../info-bar';
import { InputError } from '../input-error';
import { Label } from '../label';


let className = '';
export { className as class };
export let format = 'yyyy-mm-dd';
export let value = '';
export let placeholder = format;
export let elevate = false;
export let showOnFocus = false;
export let orientation = 'auto';	// '[left|right|auto] [top|bottom|auto]'
export let disabled = false;
export let required = undefined;
export let id = '';
export let label = '';
export let title = undefined;
export let name = undefined;
export let error = undefined;
export let info = undefined;
export let labelOnTheLeft = false;
export let useNativeOnMobile = false;

export let element = undefined;
export let inputElement = undefined;

$:_id = id || name || guid();
$:elevated = elevate === true || elevate === 'true';

const errorMessageId = guid();
const dispatch = createEventDispatcher();
const useNative = isMobile() && (useNativeOnMobile === true || useNativeOnMobile === 'true');

let picker;
let open = useNative ? true : false;
let isHiding = false;


onMount(initDatePicker);
afterUpdate(() => {
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

function onkeydown (e) {
	const isActive = picker.active;
	const params = { event: e, component: picker };
	if (e.key === 'Escape') {
		if (isActive) e.stopPropagation();
		else dispatch('keydown', params);
		requestAnimationFrame(() => picker.hide());
	}
	else if (e.key === 'Enter') {
		if (isActive) e.preventDefault();
		else dispatch('keydown', params);
		requestAnimationFrame(() => {
			picker.hide();					// set value first
			dispatch('keydown', params);	// trigger event with new value
		});
	}

	else dispatch('keydown', params);

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

function onchange () {
	if (picker) value = picker.getDate(format);
	else value = inputElement.value;
	dispatch('change', value);
}

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
