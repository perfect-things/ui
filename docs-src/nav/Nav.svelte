<UIButton text
	icon="meatballs"
	class="nav-toggler {navMobileShow ? 'visible' : ''}"
	on:click="{toggleNav}"/>

<aside class:mobile-show="{navMobileShow}">
	<div class="nav-toolbar">
		<div class="nav-toolbar-row">
			<label for="dark-mode-switch">Dark mode:</label>
			<ActualToggle id="dark-mode-switch"
				value="{$PREFERS_DARK}"
				on:change="{switchColorMode}"/>
		</div>
	</div>

	<menu>
		<h3>Intro</h3>
		<NavItem name="Get Started" {active} />
		<NavItem name="Changelog" {active} />

		<h3>Form Controls</h3>

		<h4>Basic inputs</h4>
		<NavItem name="Checkbox" {active} />
		<NavItem name="Input Text" {active} />
		<NavItem name="Input Number" {active} />
		<NavItem name="Input Math" {active} />
		<NavItem name="Input Password" {active} />
		<NavItem name="Radio" {active} />
		<NavItem name="Textarea" {active} />

		<h4>Complex controls</h4>
		<NavItem name="Autocomplete" {active} />
		<NavItem name="Button" {active} />
		<NavItem name="Push Button" {active} />
		<NavItem name="Button Group" {active} />
		<NavItem name="Button Toggle" {active} />

		<NavItem name="Datepicker" {active} />
		<NavItem name="Select" {active} />
		<NavItem name="Toggle" {active} />



		<h3>Containers</h3>
		<NavItem name="Dialog" {active} />
		<NavItem name="Drawer" {active} />
		<NavItem name="InfoBar" {active} />
		<NavItem name="Menu" {active} />
		<NavItem name="MessageBox" {active} />
		<NavItem name="Panel" {active} />
		<NavItem name="Splitter" {active} />
		<NavItem name="Table" {active} />
		<NavItem name="Tree" {active} />

		<h3>Generic</h3>
		<NavItem name="Icon" {active} />
		<NavItem name="Notification Center" {active} />
		<NavItem name="TextFit" {active} />
		<NavItem name="Toaster" {active} />
		<NavItem name="Tooltip" {active} />
		<NavItem name="Color Palette" {active} />
	</menu>

</aside>

<svelte:window on:hashchange="{onhashchange}" />
<script>
import { Button as UIButton, Toggle as ActualToggle } from '../../src';
import NavItem from './NavItem.svelte';
import GetStarted from '../pages/start.svelte';
import Changelog from '../pages/changelog.svelte';
import { PREFERS_DARK } from '../../src/utils';
import * as TestComponents from '../components';


const components = { GetStarted, Changelog, ...TestComponents, };

let active = location.hash.substr(1) || 'GetStarted';
export let component = components[active];
let navMobileShow = false;


function onhashchange () {
	active = location.hash.substr(1);
	component = components[active];
	if (window.Prism) requestAnimationFrame(() => window.Prism.highlightAll());
	document.querySelector('main').scrollTop = 0;
}

function switchColorMode (e) {
	document.documentElement.className = e.detail ? 'theme-dark' : 'theme-light';
}


function toggleNav () {
	navMobileShow = !navMobileShow;
}


window.addEventListener('popstate', () => navMobileShow = false);

</script>
