<div class="input-password-wrapper" class:visible>
	<input type="password" class="input-password" autocomplete="off"
		{id}
		{name}
		{title}
		{placeholder}
		bind:this="{inputEl}"
		bind:value="{value}"
		on:keydown="{onkeydown}"
		on:change="{onchange}"
		on:blur="{onblur}">
	<Button link icon="{visible ? 'eyeOff' : 'eye'}" on:click="{toggle}"/>
</div>
<script>
import { createEventDispatcher } from 'svelte';
import Button from '../button';

export let value = '';
export let id = undefined;
export let name = undefined;
export let title = undefined;
export let placeholder = undefined;

let visible = false, inputEl;
const dispatch = createEventDispatcher();

function toggle () {
	visible = !visible;
	inputEl.type = visible ? 'text' : 'password';
}

const onkeydown = (e) => dispatch('keydown', e);
const onchange = (e) => dispatch('change', e);
const onblur = (e) => dispatch('blur', e);
</script>
