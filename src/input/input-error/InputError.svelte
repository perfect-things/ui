{#if hasText}
	<div class="input-error">
		<Icon name="error"/>
		<p {id}><slot /></p>
	</div>
{/if}
<div style="display:none" bind:this="{slot}"><slot/></div>
<script>
import { afterUpdate } from 'svelte';
import { Icon } from '../../icon';

export let id = undefined;

let slot;
let hasText = false;

afterUpdate(() => {
	hasText = slot.innerText;
});

</script>
