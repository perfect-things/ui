<div class="datepicker-wrapper {className}" class:open >
	<input
		type="text"
		autocomplete="off"
		{...props}
		{placeholder}
		on:changeDate="{onchange}"
		on:input="{oninput}"
		on:keydown|capture="{onkeydown}"
		on:show="{onshow}"
		on:hide="{onhide}"
		bind:this="{inputEl}"
		bind:value="{value}">
	<Icon name="calendar"/>
</div>

<script>
import { onMount, createEventDispatcher } from 'svelte';
import { Datepicker } from 'vanillajs-datepicker';
import { Icon, icons } from '../icon';
import { pluck } from '../utils';

export let format = 'yyyy-mm-dd';
export let value = '';
export let placeholder = format;
export let elevate = false;
export let showOnFocus = false;
export let orientation = 'auto';	// '[left|right|auto] [top|bottom|auto]'
let className = '';
export { className as class };

$:elevated = elevate === true || elevate === 'true';
$:props = pluck($$props, ['id', 'title', 'name', 'disabled', 'required']);

const dispatch = createEventDispatcher();
let picker, inputEl;
let open = false;

onMount(() => {
	picker = new Datepicker(inputEl, {
		autohide: true,
		buttonClass: 'button button-normal button-text',
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
	if (e.key === 'Escape') {
		if (picker.active) e.stopPropagation();
		requestAnimationFrame(() => picker.hide());
	}
	else if (e.key === 'Enter') {
		if (picker.active) e.preventDefault();
		requestAnimationFrame(() => picker.hide());
	}

	// prevents picker's events in Safari
	// if (e.key.includes('Arrow') && picker.active) {
	// 	e.stopPropagation();
	// }

	dispatch('keydown', { event: e, component: picker });
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

</script>
