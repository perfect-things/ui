<h2>Dialog</h2>

<button class="button" on:click="{() => dialog.open()}">Show dialog</button>

<Dialog bind:this="{dialog}" title="Hello">
	dialog contents<br>
	Hello world!

	<div class="buttons">
		<button class="button" on:click="{() => dialog.close()}">Close</button><br>
	</div>
</Dialog>


<script>
import Dialog from '../../src/dialog';
let dialog;

</script>
