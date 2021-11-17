<li class="context-menu-item" on:click="{e => dispatch('click', e)}">
	<slot />
</li>

<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

</script>
