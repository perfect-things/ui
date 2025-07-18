<Button class="open-popover-button" onclick={(e) => popover.open(e)}>Open</Button>
<Popover class="test-popover" bind:this="{popover}">
	<h1>Popover</h1>
</Popover>
<script>
import { Button } from '../../src/button';
import { Popover } from '../../src/popover';

let popover = $state();
</script>
