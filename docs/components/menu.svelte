<h2>Menu</h2>

<h3>Normal menu</h3>
<Button on:click="{thingsMenu.open}">Show menu</Button>
<Menu bind:this="{thingsMenu}">
	<Item><Icon name="plus"/> Add a thing</Item>
	<Item><Icon name=""/> Add another one</Item>
	<Separator />
	<Item on:click="{menuCloseThings}"><Icon name="close"/> {closeThingsText}</Item>
</Menu>


<h3>In a container with <em>overflow: hidden</em></h3>
<p>Where parent container has <em>overflow: hidden</em>, and/or another container is covering the menu,
	<em>elevate="true"</em> property must be set on the component.</p>
<div class="docs-menu-overflow">
	<small>parent: <em>overflow: hidden</em></small>
	<Button on:click="{someMenu1.open}">Regular Menu</Button>
	<Menu bind:this="{someMenu1}">
		<Item><Icon name="plus"/> Add some</Item>
		<Item><Icon name=""/> Add some more</Item>
		<Separator />
		<Item><Icon name="close"/> Close something</Item>
	</Menu>

	<Button on:click="{someMenu2.open}">Elevated Menu</Button>
	<Menu bind:this="{someMenu2}" elevate="true">
		<Item><Icon name="plus"/> Add some</Item>
		<Item><Icon name=""/> Add some more</Item>
		<Separator />
		<Item><Icon name="close"/> Close something</Item>
	</Menu>

</div>
<div class="another-element-with-z-index">
	<small>parent's sibling with <em>z-index</em> higher than parent</small>
</div>
<p>This option should only be used when absolutely necessary, because it makes the component less accessible
	(the list container is rendered directly in the <em>&lt;body&gt;</em>, and not next to the input).</p>


<h3>Context menu</h3>
<small>(Right-click on the boxes below)</small>

<div class="div div1">Tab</div>
<div class="div div2">Window</div>

<Menu type="context" targetSelector=".div1" bind:this="{tabsMenu}" on:close="{onTabsMenuClose}">
	<Item on:click="{newTab}"><Icon name="plus"/> New Tab</Item>
	<Item on:click="{newPrivateTab}"><Icon name=""/> New Private Tab</Item>
	<Separator />
	<Item on:click="{closeTabs}"><Icon name="close"/> {closeTabsText}</Item>
</Menu>

<Menu type="context" targetSelector=".div2" bind:this="{windowsMenu}">
	<Item on:click="{newWindow}">New window</Item>
	<Item on:click="{newPrivateWindow}">New private window</Item>
	<Separator />
	<Item on:click="{closeWindows}">Close All Windows</Item>
</Menu>

<script>
import { Button, Menu, Item, Separator, Icon } from '../../src';
let someMenu1, someMenu2, thingsMenu, tabsMenu, windowsMenu;
let closeThingsText = 'Close all things';
let closeTabsText = 'Close all tabs';
let thingsMenuTimer, tabsMenutimer;


function menuCloseThings (e) {
	if (e && e.detail) e.detail.stopPropagation();
	const initial = 'Close all things';
	const confrm = 'Confirm Closing';

	if (closeThingsText === initial) {
		closeThingsText = confrm;
		thingsMenuTimer = setTimeout(() => closeThingsText = initial, 2000);
	}
	else {
		thingsMenu.close().then(() => {
			closeThingsText = initial;
			if (thingsMenuTimer) clearTimeout(thingsMenuTimer);
			alert('Closed all things!');
		});
	}
}


// TABS - menu2
function newTab () {
	tabsMenu.close().then(() => alert('New Tab clicked'));
}
function newPrivateTab () {
	tabsMenu.close().then(() => alert('New Private Tab clicked'));
}
function closeTabs (e) {
	if (e && e.detail) e.detail.stopPropagation();
	const initial = 'Close all tabs';
	const confrm = 'Confirm Closing';

	if (closeTabsText === initial) {
		closeTabsText = confrm;
		tabsMenutimer = setTimeout(() => closeTabsText = initial, 2000);
	}
	else tabsMenu.close().then(() => alert('Closed all tabs!'));
}
function onTabsMenuClose () {
	closeTabsText = 'Close all tabs';
	if (tabsMenutimer) clearTimeout(tabsMenutimer);
}


// WINDOWS - menu3
function newWindow () {
	windowsMenu.close().then(() => alert('New Window clicked'));
}
function newPrivateWindow () {
	windowsMenu.close().then(() => alert('New Private Window clicked'));
}
function closeWindows () {
	windowsMenu.close().then(() => alert('Windows closed!'));
}


</script>
