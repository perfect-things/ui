<div class="input-password-wrapper" class:visible>
	<input type="password" class="input-password" autocomplete="off"
		{id}
		{name}
		{title}
		{placeholder}
		bind:this="{inputEl}"
		bind:value="{value}"
		on:keydown
		on:change
		on:blur>
	<Button link icon="{visible ? 'eyeOff' : 'eye'}" on:click="{toggle}"/>
</div>
<script>
import Button from '../button';

export let value = '';
export let id = undefined;
export let name = undefined;
export let title = undefined;
export let placeholder = undefined;

let visible = false, inputEl;

function toggle () {
	visible = !visible;
	inputEl.type = visible ? 'text' : 'password';
}
</script>
