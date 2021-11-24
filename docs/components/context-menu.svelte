<style>
	.div {
		border: 1px dashed red;
		height: 100px;
		width: 200px;
		display: inline-grid;
		place-items: center;
		margin: 0 10px 10px 0;
	}
	small {display: block; margin: 5px 0 15px; }
</style>
<h2>Context menu</h2>
<small>(Right-click on the boxes below)</small>

<div class="div div1">Tab</div>
<div class="div div2">Window</div>

<Menu targetSelector=".div1" bind:this="{menu1}" on:close="{onMenu1close}">
	<Item on:click="{newTab}"><Icon name="plus"/> New Tab</Item>
	<Item on:click="{newPrivateTab}"><Icon name=""/> New Private Tab</Item>
	<Separator />
	<Item on:click="{closeTabs}"><Icon name="close"/> {closeTabsText}</Item>
</Menu>

<Menu targetSelector=".div2" bind:this="{menu2}">
	<Item on:click="{newWindow}">New window</Item>
	<Item on:click="{newPrivateWindow}">New private window</Item>
	<Separator />
	<Item on:click="{closeWindows}">Close All Windows</Item>
</Menu>

<script>
import Icon from '../../src/icon';
import { Menu, Item, Separator } from '../../src/context-menu';
let menu1, menu2;
let closeTabsText = 'Close all tabs';
let menu1timer;
function newTab () {
	menu1.close().then(() => alert('New Tab clicked'));
}
function newPrivateTab () {
	menu1.close().then(() => alert('New Private Tab clicked'));
}
function closeTabs () {
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
	menu2.close().then(() => alert('New Window clicked'));
}
function newPrivateWindow () {
	menu2.close().then(() => alert('New Private Window clicked'));
}
function closeWindows () {
	menu2.close().then(() => alert('Windows closed!'));
}


</script>
