<Button class="open-menu-button" on:click="{menu.open}">Open Menu</Button>
<Menu class="test-menu" bind:this="{menu}">
	<MenuItem><Icon name="plus"/> Add</MenuItem>
	<MenuSeparator />
	<MenuItem shortcut="cmd+q">Close</MenuItem>
</Menu>

<script>
import { Button } from '../../src/button';
import { Icon } from '../../src/icon';
import { MenuItem, Menu, MenuSeparator } from '../../src/menu';

let menu = $state();
</script>
