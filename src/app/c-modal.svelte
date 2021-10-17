<h2>Modal</h2>

<button class="button" on:click="{() => modal.open()}">Show modal</button>

<Modal bind:this="{modal}" title="Hello">
	Modal contents<br>
	Hello world!

	<div class="buttons">
		<button class="button" on:click="{() => modal.close()}">Close</button><br>
	</div>
</Modal>


<script>
import Modal from '../modal';
let modal;

</script>
