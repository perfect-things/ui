<h2>Toaster</h2>
<Toaster position="bottom" />
<button class="button" on:click="{() => showToast('Hello')}">Show info</button>
<button class="button" on:click="{() => showToast('Hello', 'warning')}">Show warning</button>
<button class="button" on:click="{() => showToast('Hello', 'error', 100000, 'Undo', cb)}">Show error</button>
<button class="button" on:click="{() => showToast('Hello', 'error', 10000, 'Undo', cb)}">Show error</button>


<script>
import { Toaster, showToast, hideToast } from '../../src';

function cb (id) {
	console.log(id);
	hideToast(id);
}

</script>
