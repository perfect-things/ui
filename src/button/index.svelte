<button class="button {cssClass}"
	class:link="{link}"
	class:icon="{icon}"
	class:text="{text}"
	class:success="{success}"
	class:warning="{warning}"
	class:danger="{danger}"
	disabled="{disabled}"
	title="{title}"
	type="{submit ? 'submit' : 'button'}"
	on:click="{e => dispatch('click', e)}"
	>
	<slot></slot>
</button>

<script>
import { createEventDispatcher } from 'svelte';
import './button.css';
import './button-link.css';
import './button-icon.css';
import './button-icon-text.css';
export let disabled = false;
export let success = false;
export let warning = false;
export let danger = false;
export let link = false;
export let icon = false;
export let text = false;
export let title = undefined;
export let submit = false;
export let cssClass = '';

const dispatch = createEventDispatcher();

</script>
