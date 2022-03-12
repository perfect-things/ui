<div class="datepicker-wrapper">
	<input type="text" autocomplete="off"
		{id}
		{name}
		{title}
		{placeholder}
		on:changeDate="{onchange}"
		on:input="{oninput}"
		on:keydown="{onkeydown}"
		bind:this="{inputEl}"
		bind:value="{value}">
	<Icon name="calendar"/>
</div>

<script>
import { onMount, createEventDispatcher } from 'svelte';
import { Datepicker } from 'vanillajs-datepicker';
import Icon, { icons } from '../icon';

export let value = '';
export let id = undefined;
export let name = undefined;
export let title = undefined;
export let placeholder = undefined;
export let elevate = false;

$:elevated = elevate === true || elevate === 'true';

const dispatch = createEventDispatcher();
let picker, inputEl;


onMount(() => {
	picker = new Datepicker(inputEl, {
		autohide: true,
		format: 'yyyy-mm-dd',
		buttonClass: 'button button-normal button-text',
		todayBtn: true,
		todayBtnMode: 1,
		todayHighlight: true,
		updateOnBlur: false,
		container: elevated ? document.body : undefined,
		weekStart: 1,
		prevArrow: icons.chevronLeft,
		nextArrow: icons.chevronRight,
	});

});

function onkeydown (e) {
	dispatch('keydown', e);
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

</script>
