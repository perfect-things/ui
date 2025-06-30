<h2>Menu</h2>

<h3>Normal menu</h3>
<div class="docs-buttons-row">
	<Button data-name="show-menu-button" onclick={e => thingsMenu.open(e)}>Show menu</Button>
	<Button data-name="show-menu-button" onclick={e => thingsMenu1.open(e)}>Show menu aligned to the center of the button</Button>
	<Button data-name="show-menu-button" onclick={e => thingsMenu2.open(e)}>Show menu aligned to the right side of the button</Button>
</div>

<Menu bind:this={thingsMenu}>
	<MenuItem success icon="plus" data-value="add-something" onclick={onMenuClick}>Add a thing (success)</MenuItem>
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
	<MenuItem disabled>A disabled option too</MenuItem>
	<MenuSeparator />
	<MenuItem danger icon="close" onclick={menuCloseThings}>{closeThingsText} (danger)</MenuItem>
</Menu>


<Menu align="center" bind:this={thingsMenu1}>
	<MenuItem success icon="plus" data-value="add-something" onclick={onMenuClick}>Add a thing (success)</MenuItem>
	<MenuItem>Add another one</MenuItem>
	<MenuSeparator />
	<MenuItem danger icon="close" onclick={menuCloseThings}>{closeThingsText} (danger)</MenuItem>
</Menu>


<Menu align="right" bind:this={thingsMenu2}>
	<MenuItem success icon="plus" data-value="add-something" onclick={onMenuClick}>Add a thing (success)</MenuItem>
	<MenuItem>Add another one</MenuItem>
	<MenuSeparator />
	<MenuItem danger icon="close" onclick={menuCloseThings}>{closeThingsText} (danger)</MenuItem>
</Menu>




<h3>Close to the edge of the screen</h3>
<div class="docs-menu-align-right">
	<Button onclick={e => someMenu3.open(e)}>Right edge</Button>
</div>

<Menu bind:this={someMenu3}>
	<MenuItem icon="plus">A very long text</MenuItem>
	<MenuItem>Another very long text</MenuItem>
	<MenuSeparator />
	<MenuItem icon="close">Probably the longest text in the world!</MenuItem>
</Menu>




<h3>Context menu</h3>
<p>To open the context menu:</p>
<ul>
	<li>Desktop: right-click on the boxes below</li>
	<li>Mobile: long-press on them</li>
</ul>

<div class="div div1">Tab</div>
<div class="div div2">Window</div>

<Menu type="context" targetSelector=".div1" bind:this={tabsMenu} onclose={onTabsMenuClose}>
	<MenuItem shortcut="cmd+t" onclick={newTab} icon="plus">New Tab</MenuItem>
	<MenuItem shortcut="cmd+shift+t" onclick={newPrivateTab}>New Private Tab</MenuItem>
	<MenuSeparator />
	<MenuItem shortcut="cmd+shift+w" icon="close" onclick={closeTabs}>{closeTabsText}</MenuItem>
</Menu>

<Menu type="context" targetSelector=".div2" bind:this={windowsMenu}>
	<MenuItem shortcut="cmd+n" onclick={newWindow}>New window</MenuItem>
	<MenuItem shortcut="cmd+shift+n" onclick={newPrivateWindow}>New private window</MenuItem>
	<MenuSeparator />
	<MenuItem shortcut="cmd+shift+q" onclick={closeWindows}>Close All Windows</MenuItem>
</Menu>


<CodeExample html={exampleHtml} />

<API props={apiProps}/>
<API props={instanceApiProps} title="Menu Instance API" description="The component exposes <em>this</em> property, to which a variable can be bound, creating an instance of the component, with the following API"/>
<API props={itemApiProps} title="Item API"/>


<script lang="ts">
import type { ApiProp } from '../../api-table/types';
import { API, PROPS } from '../../api-table';

import { Button, Menu, MenuItem, MenuSeparator } from '../../../src';
import { CodeExample } from '../../code-example';
import './Menu.css';

const apiProps = <ApiProp[]>[
	PROPS.class,
	PROPS.bindelement,
	{ name: 'type', type: 'context', description: 'If type is set to <em>context</em> the menu will behave as context-menu.' },
	{ name: 'targetSelector', type: 'string', required: true, description: 'This is only required when menu type is <em>context</em>.<br>It provides a selector to an element, in which the menu will appear (on mouse right-click).' },
	{ name: 'closeOnClick', type: 'boolean', default: 'true', description: 'By default - menu will close when an item is clicked. Setting this property false will disable auto-closing.' },

	{ name: 'align', type: ['left', 'right', 'center'], default: 'left', description: 'Align horizontally with the target.<br>' +
		'Context menus will default to "center" on mobile.' },
	{ name: 'valign', type: ['top', 'bottom'], default: 'bottom', description: 'Show the menu above or below the target.<br>' +
		'Context menus will default to "top" on mobile.<br>' +
		'This may be overridden to ensure that the menu remains within the visible screen area.' },
	{ name: 'onclose', type: 'function', description: 'Triggered after the menu is closed.' },
	{ name: 'onopen', type: 'function', description: 'Triggered after the menu is opened.' },
];

const instanceApiProps = <ApiProp[]>[
	{ name: 'close', type: 'function', description: 'Closes the menu.' },
	{ name: 'open', type: 'function', description: 'Opens the menu.' },
];

const itemApiProps = <ApiProp[]>[
	...PROPS.component,
	PROPS.icon,
	PROPS.dataset,

	PROPS.danger,
	PROPS.success,
	PROPS.warning,
	PROPS.onclick,

	{ name: 'shortcut', type: 'string', description: 'A string representation of a keyboard shortcut. e.g. <em>cmd+alt+c</em>.<br>Keys should be separated by a <em>+</em> sign (which will be hidden in the rendered item).<br>Special keys (like cmd, alt, ctrl, shift, escape, enter, etc.) will be replaced by a corresponding symbol.<br>Keyboard handling must be done elsewhere.' },
];

const exampleHtml = `
<!-- Regular menu -->
<Menu bind:this={menu1}>
    <MenuItem data-value="add-something"><Icon name="plus"/> Add some</MenuItem>
    <MenuItem>Add some more</MenuItem>
    <MenuSeparator />
    <MenuItem onclick={closeSomething}><Icon name="close"/> Close something</MenuItem>
</Menu>

<Button data-name="button-with-menu" onclick={menu1.open}>Show menu</Button>

<!-- Context menu -->
<div class="div1">Tab</div>
<Menu type="context" targetSelector=".div1" bind:this={menu2}>
    <MenuItem shortcut="cmd+n" onclick={action1}>New window</MenuItem>
    <MenuItem shortcut="cmd+shift+n" onclick={action2}>New private window</MenuItem>
    <MenuSeparator />
    <MenuItem shortcut="cmd+shift+q" onclick={action3}>Close All Windows</MenuItem>
</Menu>

<script>
    let menu1, menu2;
    function closeSomething (e) {
        e.preventDefault();   // prevents menu auto-closing
        menu1.close();       // manually close the menu
    }
    function onMenuClick (e) {
        const { target, button } = e.detail;
        console.log(target.dataset, button.dataset);
    }
&lt;/script>
`;


let someMenu3: Menu = $state();
let thingsMenu: Menu = $state();
let thingsMenu1: Menu = $state();
let thingsMenu2: Menu = $state();
let tabsMenu: Menu = $state();
let windowsMenu: Menu = $state();
let closeThingsText = $state('Close all things');
let closeTabsText = $state('Close all tabs');
let thingsMenuTimer, tabsMenutimer;


function onMenuClick (e) {
	const { target, button } = e.detail;
	console.log(target.dataset, button.dataset);
}


function menuCloseThings (e) {
	if (e) e.preventDefault();
	const initial = 'Close all things';
	const confrm = 'Confirm Closing';

	if (closeThingsText === initial) {
		closeThingsText = confrm;
		thingsMenuTimer = setTimeout(() => closeThingsText = initial, 2000);
	}
	else {
		Promise
			.all([thingsMenu.close(), thingsMenu1.close(), thingsMenu2.close()])
			.then(() => {
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
