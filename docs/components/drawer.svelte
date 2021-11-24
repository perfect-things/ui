<h2>Drawer</h2>

<Button on:click="{() => drawer.toggle()}">Toggle drawer</Button>

<Drawer bind:this="{drawer}" title="Drawer">

	drawer contents<br>
	Hello world!<br>
	<br>
	<Button on:click="{() => drawer.close()}">Close Drawer</Button>
</Drawer>


<script>
import Button from '../../src/button';
import Drawer from '../../src/drawer';
let drawer;

</script>
