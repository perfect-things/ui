<h2>Toaster</h2>
<Toaster position="bottom" />
<Button on:click="{() => showToast('Hello')}">Show info</Button>
<Button success on:click="{() => showToast('Hello', 'success')}">Show warning</Button>
<Button warning on:click="{() => showToast('Hello', 'warning')}">Show warning</Button>
<Button danger on:click="{() => showToast('Hello', 'error', 10000, 'Undo', cb)}">Show error</Button>
<Button danger on:click="{() => showToast('Hello', 'error', 100000, 'Undo', cb)}">Show long-lasting error</Button>


<script>
import { Button, Toaster, showToast, hideToast } from '../../src';

function cb (id) {
	console.log(id);
	hideToast(id);
}

</script>
