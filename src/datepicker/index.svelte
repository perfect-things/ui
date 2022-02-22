<input name="foo"
	{placeholder}
	on:changeDate="{onchange}"
	on:input="{oninput}"
	bind:value="{value}">

<script>
import './index.css';
import { onMount } from 'svelte';
import { Datepicker } from 'vanillajs-datepicker';
import { icons } from '../icon';
let picker;
export let value = '';
export let placeholder = undefined;


onMount(() => {
	const elem = document.querySelector('input[name="foo"]');
	picker = new Datepicker(elem, {
		autohide: true,
		format: 'yyyy-mm-dd',
		buttonClass: 'button button-text',
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
