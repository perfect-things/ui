{#if hasText}
	<div class="input-info">
		<Icon name="info"/>
		<p><slot/></p>
	</div>
{/if}
<div style="display:none" bind:this="{slot}"><slot/></div>
<script>
import { afterUpdate } from 'svelte';
import { Icon } from '../../icon';

let slot;
let hasText = false;

afterUpdate(() => {
	hasText = slot.innerText.trim().length > 0;
});

</script>
