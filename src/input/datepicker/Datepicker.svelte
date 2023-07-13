<div
	class="input input-date {className}"
	class:open
	aria-expanded="{open}"
	class:has-error="{error}">

	<Label {label} {disabled} for="{_id}"/>
	<Info msg="{info}" />

	<div class="input-inner" class:disabled>
		<InputError id="{errorMessageId}" msg="{error}" />

		<div class="input-row">
			<Button link icon="calendar" class="input-date-button" on:click="{onIconClick}"/>
			<input
				type="text"
				autocomplete="off"

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
				bind:this="{inputEl}"
				bind:value="{value}">
		</div>
	</div>
</div>

<script>
import { onMount, createEventDispatcher } from 'svelte';
import { Datepicker } from 'vanillajs-datepicker';
import { icons } from '../../icon';
import { Button } from '../../button';
import { guid } from '../../utils';
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


$:_id = id || name || guid();
$:elevated = elevate === true || elevate === 'true';

const errorMessageId = guid();
const dispatch = createEventDispatcher();
let picker, inputEl;
let open = false;


onMount(() => {
	picker = new Datepicker(inputEl, {
		autohide: true,
		buttonClass: 'button button-text info',
		container: elevated ? document.body : undefined,
		format,
		todayBtn: true,
		todayBtnMode: 1,
		orientation,
		todayHighlight: true,
		showOnFocus: (showOnFocus === 'true' || showOnFocus === true),
		prevArrow: icons.chevronLeft,
		nextArrow: icons.chevronRight,
		updateOnBlur: true,
		weekStart: 1,
	});
});


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
		requestAnimationFrame(() => picker.hide());
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
			picker.setDate(value);
			if (wasOpen) picker.show();
		}
	});
}

function onchange () {
	value = picker.getDate(format);
	dispatch('change', value);
}

function onshow () {
	open = true;
}

function onhide () {
	open = false;
}


function onIconClick () {
	inputEl.focus();
	picker.show();
}

</script>
