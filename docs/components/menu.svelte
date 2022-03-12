<h2>Menu</h2>

<h3>Normal menu</h3>
<Button on:click="{menu0.open}">Show menu</Button>


<h3>Context menu</h3>
<small>(Right-click on the boxes below)</small>

<div class="div div1">Tab</div>
<div class="div div2">Window</div>

<Menu bind:this="{menu0}">
	<Item on:click="{newTab}"><Icon name="plus"/> New Tab</Item>
	<Item on:click="{newPrivateTab}"><Icon name=""/> New Private Tab</Item>
	<Separator />
	<Item on:click="{Menu0closeTabs}"><Icon name="close"/> {closeTabsText}</Item>
</Menu>

<Menu type="context" targetSelector=".div1" bind:this="{menu1}" on:close="{onMenu1close}">
	<Item on:click="{newTab}"><Icon name="plus"/> New Tab</Item>
	<Item on:click="{newPrivateTab}"><Icon name=""/> New Private Tab</Item>
	<Separator />
	<Item on:click="{closeTabs}"><Icon name="close"/> {closeTabsText}</Item>
</Menu>

<Menu type="context" targetSelector=".div2" bind:this="{menu2}">
	<Item on:click="{newWindow}">New window</Item>
	<Item on:click="{newPrivateWindow}">New private window</Item>
	<Separator />
	<Item on:click="{closeWindows}">Close All Windows</Item>
</Menu>

<script>
import { Button, Menu, Item, Separator, Icon } from '../../src';
let menu0, menu1, menu2;
let closeTabsText = 'Close all tabs';
let menu1timer;


function newTab () {
	menu1.close().then(() => alert('New Tab clicked'));
}
function newPrivateTab () {
	menu1.close().then(() => alert('New Private Tab clicked'));
}

function Menu0closeTabs (e) {
	if (e && e.detail) e.detail.stopPropagation();
	const initial = 'Close all tabs';
	const confrm = 'Confirm Closing';

	if (closeTabsText === initial) {
		closeTabsText = confrm;
		menu1timer = setTimeout(() => closeTabsText = initial, 2000);
	}
	else {
		menu0.close().then(() => alert('Closed all tabs!'));
	}
}

function closeTabs (e) {
	if (e && e.detail) e.detail.stopPropagation();
	const initial = 'Close all tabs';
	const confrm = 'Confirm Closing';

	if (closeTabsText === initial) {
		closeTabsText = confrm;
		menu1timer = setTimeout(() => closeTabsText = initial, 2000);
	}
	else {
		menu1.close().then(() => alert('Closed all tabs!'));
	}
}

function onMenu1close () {
	closeTabsText = 'Close all tabs';
	if (menu1timer) clearTimeout(menu1timer);
}

function newWindow () {
	menu1.close().then(() => alert('New Window clicked'));
}
function newPrivateWindow () {
	// menu1.close().then(() => alert('New Private Window clicked'));
}
function closeWindows () {
	menu1.close().then(() => alert('Windows closed!'));
}


</script>
