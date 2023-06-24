<!-- svelte-ignore a11y-autocomplete-valid -->
<div
	class="input-text {className}"
	class:has-error="{error}">

	{#if label}
		<label class="label" for="{_id}">{label}</label>
	{/if}
	{#if info}
		<div class="input-info">
			<Icon name="info"/>
			<p>{info}</p>
		</div>
	{/if}

	<div class="input-text-inner" class:initial>
		{#if error}
			<div class="input-error" transition:slide="{{ axis: 'y', duration }}">
				<Icon name="error"/>
				<p id="{errorMessageId}">{error}</p>
			</div>
		{/if}

		<input
			autocomplete="off"
			type="text"
			{...props}
			id="{_id}"
			aria-invalid="{error}"
			aria-errormessage="{error ? errorMessageId : undefined}"
			aria-required="{required}"
			bind:value="{value}"
			on:input
			on:keydown
			on:change
			on:focus
			on:blur>
	</div>
</div>

<script>
import { onMount } from 'svelte';
import { slide } from 'svelte/transition';
import { Icon } from '../icon';
import { pluck, guid, ANIMATION_SPEED } from '../utils';

$:props = pluck($$props, ['title', 'name', 'disabled', 'placeholder']);

let initial = true;
let className = '';
export { className as class };
export let id = '';
export let required = false;
export let value = '';
export let label = '';
export let error = '';
export let info = '';

$:_id = id || name || guid();
$:duration = initial ? 0 : $ANIMATION_SPEED;

const errorMessageId = guid();


onMount(() => {
	initial = false;
});


</script>
