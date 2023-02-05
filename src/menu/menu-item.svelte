<li class="menu-item">
	<button class="menu-button" on:click|capture="{onclick}">
		<slot />
	</button>
</li>

<script>
import { createEventDispatcher } from 'svelte';
import { blink } from '../util.js';
const dispatch = createEventDispatcher();

function onclick (e) {
	e.target.focus();
	blink(e.target, 120).then(() => {
		const res = dispatch('click', e, { cancelable: true });
		if (res === false) {
			e.stopPropagation();
			e.preventDefault();
		}
	});
}

</script>
