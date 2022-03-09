<div class="datepicker-wrapper">
	<input
		{name}
		{title}
		{placeholder}
		on:changeDate="{onchange}"
		on:input="{oninput}"
		bind:this="{inputEl}"
		bind:value="{value}">
	<Icon name="calendar"/>
</div>

<script>
import { onMount } from 'svelte';
import { Datepicker } from 'vanillajs-datepicker';
import Icon, { icons } from '../icon';
let picker, inputEl;
export let value = '';
export let name = undefined;
export let title = undefined;
export let placeholder = undefined;


onMount(() => {
	picker = new Datepicker(inputEl, {
		autohide: true,
		format: 'yyyy-mm-dd',
		buttonClass: 'button button-normal button-text',
		todayBtn: true,
		todayBtnMode: 1,
		todayHighlight: true,
		updateOnBlur: false,
		weekStart: 1,
		prevArrow: icons.chevronLeft,
		nextArrow: icons.chevronRight,
	});

});

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
}

</script>
