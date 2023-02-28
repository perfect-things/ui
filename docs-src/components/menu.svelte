<h2>Menu</h2>

<h3>Normal menu</h3>
<Button on:click="{thingsMenu.open}">Show menu</Button>
<Menu bind:this="{thingsMenu}">
	<MenuItem><Icon name="plus"/> Add a thing</MenuItem>
	<MenuItem>Add another one</MenuItem>
	<MenuSeparator />
	<MenuItem shortcut="cmd+shift+c">Third option</MenuItem>
	<MenuItem shortcut="cmd+alt+d">Fourth menu item</MenuItem>
	<MenuItem shortcut="cmd+c">Fifth element</MenuItem>
	<MenuItem shortcut="cmd+enter">Sixth one, to make it longer</MenuItem>
	<MenuItem shortcut="backspace">Seventh. Menu supports type-ahead</MenuItem>
	<MenuItem shortcut="escape">Eight, so go ahead and try typing</MenuItem>
	<MenuItem shortcut="cmd+option+s">Ninth, the beginning of the menu item text</MenuItem>
	<MenuItem>Tenth, and it should be focused</MenuItem>
	<MenuSeparator />
	<MenuItem on:click="{menuCloseThings}"><Icon name="close"/> {closeThingsText}</MenuItem>
</Menu>


<h3>In a container with <em>overflow: hidden</em></h3>
<p>Where parent container has <em>overflow: hidden</em>, and/or another container is covering the menu,
	<em>elevate="true"</em> property must be set on the component.</p>
<div class="docs-overflow-box">
	<small>parent: <em>overflow: hidden</em></small>
	<Button on:click="{someMenu1.open}">Regular Menu</Button>
	<Menu bind:this="{someMenu1}">
		<MenuItem><Icon name="plus"/> Add some</MenuItem>
		<MenuItem>Add some more</MenuItem>
		<MenuSeparator />
		<MenuItem><Icon name="close"/> Close something</MenuItem>
	</Menu>

	<Button on:click="{someMenu2.open}">Elevated Menu</Button>
	<Menu bind:this="{someMenu2}" elevate="true">
		<MenuItem><Icon name="plus"/> Add some</MenuItem>
		<MenuItem>Add some more</MenuItem>
		<MenuSeparator />
		<MenuItem><Icon name="close"/> Close something</MenuItem>
	</Menu>

	<Button className="docs-menu-align-right" on:click="{someMenu3.open}">Right edge</Button>
	<Menu bind:this="{someMenu3}" elevate="true">
		<MenuItem><Icon name="plus"/> A very long text</MenuItem>
		<MenuItem>Another very long text</MenuItem>
		<MenuSeparator />
		<MenuItem><Icon name="close"/> Probably the longest text in the world!</MenuItem>
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
	<MenuItem shortcut="cmd+t" on:click="{newTab}"><Icon name="plus"/> New Tab</MenuItem>
	<MenuItem shortcut="cmd+shift+t" on:click="{newPrivateTab}">New Private Tab</MenuItem>
	<MenuSeparator />
	<MenuItem shortcut="cmd+shift+w" on:click="{closeTabs}"><Icon name="close"/> {closeTabsText}</MenuItem>
</Menu>

<Menu type="context" targetSelector=".div2" bind:this="{windowsMenu}">
	<MenuItem shortcut="cmd+n" on:click="{newWindow}">New window</MenuItem>
	<MenuItem shortcut="cmd+shift+n" on:click="{newPrivateWindow}">New private window</MenuItem>
	<MenuSeparator />
	<MenuItem shortcut="cmd+shift+q" on:click="{closeWindows}">Close All Windows</MenuItem>
</Menu>


<CodeExample html="{exampleHtml}" />

<API props="{apiProps}"/>
<API props="{instanceApiProps}" title="Menu Instance API" description="A component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"/>
<API props="{itemApiProps}" title="Item API"/>


<script>
import { Button, Menu, MenuItem, MenuSeparator, Icon } from '../../src';
import API from '../api-table/index.svelte';
import CodeExample from '../code-example/index.svelte';

const apiProps = [
	{ name: 'type', type: 'context', description: 'If type is set to <em>context</em> the menu will behave as context-menu.' },
	{ name: 'targetSelector', type: 'string', required: true, description: 'This is only required when menu type is <em>context</em>.<br>It provides a selector to an element, in which the menu will appear (on mouse right-click).' },
	{ name: 'closeOnClick', type: ['true', 'false'], default: 'true', description: 'By default - menu will close when an item is clicked. Setting this property false will disable auto-closing.' },
	{ name: 'elevate', type: ['true', 'false'], default: 'false', description: 'If <i>true</i> - the menu will be rendered into the <i>body</i>, to ensure it\'s not hidden under some elements (see example above).' },
	{ name: 'on:open', type: 'function', description: 'Triggered after the menu is opened.' },
	{ name: 'on:close', type: 'function', description: 'Triggered after the menu is closed.' },
];

const instanceApiProps = [
	{ name: 'open', type: 'function', description: 'Opens the menu.' },
	{ name: 'close', type: 'function', description: 'Closes the menu.' },
];

const itemApiProps = [
	{ name: 'shortcut', type: 'string', description: 'A string representation of a keyboard shortcut. e.g. <em>cmd+alt+c</em>.<br>Keys should be separated by a <em>+</em> sign (which will be hidden in the rendered item).<br>Special keys (like cmd, alt, ctrl, shift, escape, enter, etc.) will be replaced by a corresponding symbol.<br>Keyboard handling must be done elsewhere.' },
	{ name: 'on:click', type: 'function', description: 'Triggered when the menu item was clicked.<br>The event handler function receives 1 argument - the click event.<br>By calling <em>event.preventDefault();</em> it is possible to prevent menu from auto closing when the item was clicked.' },
];

const exampleHtml = `
<!-- Regular menu -->
<Menu bind:this="{menu1}">
    <MenuItem><Icon name="plus"/> Add some</MenuItem>
    <MenuItem>Add some more</MenuItem>
    <MenuSeparator />
    <MenuItem on:click="{closeSomething}"><Icon name="close"/> Close something</MenuItem>
</Menu>

<Button on:click="{() => menu1.open()}">Show menu</Button>

<!-- Context menu -->
<div class="div1">Tab</div>
<Menu type="context" targetSelector=".div1" bind:this="{menu2}">
    <MenuItem shortcut="cmd+n" on:click="{action1}">New window</MenuItem>
    <MenuItem shortcut="cmd+shift+n" on:click="{action2}">New private window</MenuItem>
    <MenuSeparator />
    <MenuItem shortcut="cmd+shift+q" on:click="{action3}">Close All Windows</MenuItem>
</Menu>

<script>
    let menu1, menu2;
    function closeSomething (e) {
        e.preventDefault();   // prevents menu auto-closing
        menu1.close();       // manually close the menu
    }
&lt;/script>
`;


let someMenu1, someMenu2, someMenu3, thingsMenu, tabsMenu, windowsMenu;
let closeThingsText = 'Close all things';
let closeTabsText = 'Close all tabs';
let thingsMenuTimer, tabsMenutimer;


function menuCloseThings (e) {
	if (e) e.preventDefault();
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
	if (e) e.preventDefault();

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
