<div class="datepicker-wrapper" class:open>
	<input
		type="text"
		autocomplete="off"
		{placeholder}
		{...$$props}
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
import Icon, { icons } from '../icon';

const FORMAT = 'yyyy-mm-dd';
export let value = '';
export let placeholder = FORMAT;
export let elevate = false;
export let showOnFocus = false;
export let orientation = 'auto';	// '[left|right|auto] [top|bottom|auto]'
$:elevated = elevate === true || elevate === 'true';

const dispatch = createEventDispatcher();
let picker, inputEl;
let open = false;

onMount(() => {
	picker = new Datepicker(inputEl, {
		autohide: true,
		buttonClass: 'button button-normal button-text',
		container: elevated ? document.body : undefined,
		format: FORMAT,
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
	requestAnimationFrame(() => {
		if (/^\d{4}-\d{2}-\d{2}$/g.test(value))	{
			picker.setDate(value);
			picker.show();
		}
	});
}

function onchange () {
	value = picker.getDate('yyyy-mm-dd');
	dispatch('change', value);
}

function onshow () {
	open = true;
}

function onhide () {
	open = false;
}

</script>
