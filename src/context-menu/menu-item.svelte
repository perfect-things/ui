<li class="context-menu-item">
	<button class="context-menu-button" on:click="{e => dispatch('click', e)}">
		<slot />
	</button>
</li>

<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

</script>
