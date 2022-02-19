<button class="button {cssClass}"
	class:link
	class:icon
	class:text
	class:success
	class:warning
	class:danger
	class:primary
	{disabled}
	{title}
	type="{submit ? 'submit' : 'button'}"
	on:click="{e => dispatch('click', e)}"
	>
	<slot></slot>
</button>

<script>
import './button.css';
import './button-link.css';
import './button-icon.css';
import './button-icon-text.css';
import { createEventDispatcher } from 'svelte';
export let disabled = false;
export let success = false;
export let warning = false;
export let danger = false;
export let link = false;
export let icon = false;
export let text = false;
export let primary = false;
export let title = undefined;
export let submit = false;
export let cssClass = '';

const dispatch = createEventDispatcher();

</script>
