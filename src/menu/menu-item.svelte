<li class="menu-item">
	<button class="menu-button" on:click|capture="{e => dispatch('click', e)}">
		<slot />
	</button>
</li>

<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

</script>
