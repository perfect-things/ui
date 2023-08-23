<Button class="open-popover-button" on:click="{popover.open}">Open</Button>
<Popover class="test-popover" bind:this="{popover}">
	<h1>Popover</h1>
</Popover>

<script>
import { Button } from '../../src/button';
import { Popover } from '../../src/popover';

let popover;
</script>
